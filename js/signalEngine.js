class SignalEngine {
    constructor() {
        this.commonWordSymbols = new Set([
            "IDEA", "BEST", "POWER", "GOLD", "NEW", "VALUE", "STAR", "GOOD", "SUN", 
            "KEY", "BEL", "SAIL", "GAIL", "BPCL", "IOC", "HAL", "LT", "MRF"
        ]);

        this.marketIndicators = [
            "shares", "stock", "nse", "bse", "equity", "dividend", "q1", "q2", "q3", "q4", 
            "results", "profit", "brokerage", "target price", "ipo", "trading", "nifty", "sensex"
        ];

        this.sentimentRules = [
            // Strong Positive Indicators
            { pattern: "buy rating", weight: 2.5, isNegative: false },
            { pattern: "recommend buy", weight: 2.5, isNegative: false },
            { pattern: "raise target", weight: 2.5, isNegative: false },
            { pattern: "target raised", weight: 2.5, isNegative: false },
            { pattern: "hikes target", weight: 2.5, isNegative: false },
            { pattern: "target hiked", weight: 2.5, isNegative: false },
            { pattern: "profit surges", weight: 2.5, isNegative: false },
            { pattern: "profit jumps", weight: 2.5, isNegative: false },
            { pattern: "net profit up", weight: 2.0, isNegative: false },
            { pattern: "beat expectations", weight: 2.0, isNegative: false },
            { pattern: "bullish", weight: 2.0, isNegative: false },
            { pattern: "outperform", weight: 2.0, isNegative: false },
            { pattern: "overweight", weight: 2.0, isNegative: false },
            { pattern: "upgrade", weight: 2.0, isNegative: false },
            { pattern: "strong buy", weight: 2.5, isNegative: false },
            
            // Moderate Positive Indicators
            { pattern: "profit rises", weight: 1.5, isNegative: false },
            { pattern: "profit up", weight: 1.5, isNegative: false },
            { pattern: "strong growth", weight: 1.5, isNegative: false },
            { pattern: "record high", weight: 1.5, isNegative: false },
            { pattern: "soars", weight: 1.5, isNegative: false },
            { pattern: "rally", weight: 1.5, isNegative: false },
            { pattern: "breakout", weight: 1.5, isNegative: false },
            { pattern: "upside", weight: 1.5, isNegative: false },
            { pattern: "accumulate", weight: 1.5, isNegative: false },
            { pattern: "growth path", weight: 1.2, isNegative: false },
            { pattern: "buy", weight: 1.0, isNegative: false },
            { pattern: "gain", weight: 1.0, isNegative: false },
            { pattern: "positive", weight: 1.0, isNegative: false },
            { pattern: "add", weight: 0.8, isNegative: false },

            // Strong Negative Indicators
            { pattern: "sell rating", weight: 2.5, isNegative: true },
            { pattern: "downgrade", weight: 2.5, isNegative: true },
            { pattern: "cut target", weight: 2.5, isNegative: true },
            { pattern: "target cut", weight: 2.5, isNegative: true },
            { pattern: "slashes target", weight: 2.5, isNegative: true },
            { pattern: "target slashed", weight: 2.5, isNegative: true },
            { pattern: "profit falls", weight: 2.5, isNegative: true },
            { pattern: "profit drops", weight: 2.5, isNegative: true },
            { pattern: "net profit down", weight: 2.0, isNegative: true },
            { pattern: "loss widens", weight: 2.5, isNegative: true },
            { pattern: "misses expectations", weight: 2.0, isNegative: true },
            { pattern: "bearish", weight: 2.0, isNegative: true },
            { pattern: "underperform", weight: 2.0, isNegative: true },
            { pattern: "underweight", weight: 2.0, isNegative: true },
            { pattern: "avoid", weight: 2.0, isNegative: true },
            { pattern: "strong sell", weight: 2.5, isNegative: true },

            // Moderate Negative Indicators
            { pattern: "profit down", weight: 1.5, isNegative: true },
            { pattern: "slump", weight: 1.5, isNegative: true },
            { pattern: "plunge", weight: 1.5, isNegative: true },
            { pattern: "weakness", weight: 1.5, isNegative: true },
            { pattern: "downside", weight: 1.5, isNegative: true },
            { pattern: "sell", weight: 1.0, isNegative: true },
            { pattern: "decline", weight: 1.0, isNegative: true },
            { pattern: "drop", weight: 1.0, isNegative: true },
            { pattern: "fall", weight: 1.0, isNegative: true },
            { pattern: "negative", weight: 1.0, isNegative: true },
            { pattern: "reduce", weight: 0.8, isNegative: true }
        ];
    }

    analyzeArticles(articles, stocks) {
        const rawSignals = [];

        articles.forEach(article => {
            const combinedText = `${article.title} ${article.description}`;
            const textLower = combinedText.toLowerCase();

            stocks.forEach(stock => {
                let isMatched = false;
                let matchReason = "";
                const searchTokens = this.generateSearchTokens(stock);

                for (let token of searchTokens) {
                    if (token.length < 2) continue;

                    const isCommonSymbol = this.commonWordSymbols.has(stock.symbol) || token.length <= 3;

                    if (isCommonSymbol) {
                        // Strict capitalization match via word boundaries in raw combinedText
                        const pattern = new RegExp(`\\b${this.escapeRegExp(token)}\\b`);
                        if (pattern.test(combinedText)) {
                            if (this.containsMarketIndicator(textLower)) {
                                isMatched = true;
                                matchReason = `Matched symbol '${token}' under strict capitalization & financial context rules.`;
                                break;
                            }
                        }

                        // Company name check
                        const cleanName = this.cleanCompanyName(stock.name).toLowerCase();
                        if (cleanName.length > 4 && textLower.includes(cleanName)) {
                            isMatched = true;
                            matchReason = `Matched company name '${stock.name}' in text.`;
                            break;
                        }
                    } else {
                        // Case-insensitive match on token
                        const pattern = new RegExp(`\\b${this.escapeRegExp(token.toLowerCase())}\\b`, "i");
                        if (pattern.test(textLower)) {
                            isMatched = true;
                            matchReason = `Matched token '${token}' in text.`;
                            break;
                        }
                    }
                }

                if (isMatched) {
                    const companyMatchRating = matchReason.includes("name") ? 0.8 : 1.0;
                    const importanceRating = this.getImportanceRating(combinedText);
                    const sourceTrustRating = this.getSourceTrustRating(article.source);
                    const freshnessRating = this.getFreshnessRating(article.publishDate);

                    const { rawSentiment, context, matchedPhrases } = this.analyzeRawSentiment(combinedText);

                    // News Score = S * I * T * F * C. Max possible = 15.0, Min possible = -15.0
                    const rawNewsScore = rawSentiment * importanceRating * sourceTrustRating * freshnessRating * companyMatchRating;
                    let normalizedNewsScore = (rawNewsScore / 15.0) * 100.0;
                    normalizedNewsScore = Math.max(-100.0, Math.min(100.0, normalizedNewsScore));

                    // Dynamic deterministic sub-scores
                    const techScore = this.generateSimulatedScore(stock.symbol, "TECH", normalizedNewsScore);
                    const volScore = this.generateSimulatedScore(stock.symbol, "VOLUME", normalizedNewsScore);
                    const fundScore = this.generateSimulatedScore(stock.symbol, "FUND", normalizedNewsScore);
                    const fiiDiiScore = this.generateSimulatedScore(stock.symbol, "FII", normalizedNewsScore);

                    // Final Score = 0.40 * News + 0.25 * Tech + 0.15 * Vol + 0.10 * FII + 0.10 * Fund
                    let finalScore = (0.40 * normalizedNewsScore) + 
                                     (0.25 * techScore) + 
                                     (0.15 * volScore) + 
                                     (0.10 * fiiDiiScore) + 
                                     (0.10 * fundScore);
                    finalScore = Math.max(-100.0, Math.min(100.0, finalScore));

                    let signal;
                    if (finalScore >= 70.0) signal = "StrongBuy";
                    else if (finalScore >= 40.0) signal = "Buy";
                    else if (finalScore >= 20.0) signal = "Watch";
                    else if (finalScore >= -20.0) signal = "Neutral";
                    else if (finalScore >= -40.0) signal = "Sell";
                    else signal = "StrongSell";

                    const matchReasonSummary = matchedPhrases.length > 0 
                        ? `${matchReason} (Keywords: ${matchedPhrases.join(", ")})` 
                        : matchReason;

                    rawSignals.push({
                        stock: stock,
                        article: article,
                        signal: signal,
                        sentimentScore: rawSentiment,
                        newsSentimentScore: normalizedNewsScore,
                        technicalScore: techScore,
                        volumeScore: volScore,
                        fundamentalScore: fundScore,
                        fiiDiiScore: fiiDiiScore,
                        finalScore: finalScore,
                        importanceRating: importanceRating,
                        sourceTrustRating: sourceTrustRating,
                        freshnessRating: freshnessRating,
                        companyMatchRating: companyMatchRating,
                        matchReason: matchReasonSummary,
                        contextSnippet: context,
                        analyzedDate: new Date(),
                        mentionCount: 1,
                        currentPrice: 0.0
                    });
                }
            });
        });

        return this.aggregateSignals(rawSignals);
    }

    aggregateSignals(rawSignals) {
        const aggregated = [];
        const groups = {};

        rawSignals.forEach(sig => {
            const sym = sig.stock.symbol.toUpperCase();
            if (!groups[sym]) groups[sym] = [];
            groups[sym].push(sig);
        });

        Object.keys(groups).forEach(sym => {
            const list = groups[sym];
            if (list.length === 1) {
                list[0].mentionCount = 1;
                aggregated.push(list[0]);
                return;
            }

            // Sort by publish date descending
            list.sort((a, b) => new Date(b.article.publishDate) - new Date(a.article.publishDate));
            const newest = list[0];

            let totalFinalScore = 0;
            let totalNewsSentimentScore = 0;
            let totalTechnicalScore = 0;
            let totalVolumeScore = 0;
            let totalFundamentalScore = 0;
            let totalFiiDiiScore = 0;
            let totalSentimentScore = 0;

            let totalImportanceRating = 0;
            let totalSourceTrustRating = 0;
            let totalFreshnessRating = 0;
            let totalCompanyMatchRating = 0;

            const sources = [];
            const headlines = [];
            const matchReasons = [];
            const contextSnippets = [];
            const descriptions = [];

            list.forEach(sig => {
                totalFinalScore += sig.finalScore;
                totalNewsSentimentScore += sig.newsSentimentScore;
                totalTechnicalScore += sig.technicalScore;
                totalVolumeScore += sig.volumeScore;
                totalFundamentalScore += sig.fundamentalScore;
                totalFiiDiiScore += sig.fiiDiiScore;
                totalSentimentScore += sig.sentimentScore;

                totalImportanceRating += sig.importanceRating;
                totalSourceTrustRating += sig.sourceTrustRating;
                totalFreshnessRating += sig.freshnessRating;
                totalCompanyMatchRating += sig.companyMatchRating;

                if (!sources.includes(sig.article.source)) sources.push(sig.article.source);
                if (!headlines.includes(sig.article.title)) headlines.push(sig.article.title);
                if (!matchReasons.includes(sig.matchReason)) matchReasons.push(sig.matchReason);
                if (!contextSnippets.includes(sig.contextSnippet)) contextSnippets.push(sig.contextSnippet);
                if (!descriptions.includes(sig.article.description)) descriptions.push(sig.article.description);
            });

            const count = list.length;

            const combinedArticle = {
                source: sources.join(" / "),
                title: headlines.join(" | "),
                description: descriptions.join("\n\n---\n\n"),
                link: newest.article.link,
                publishDate: newest.article.publishDate
            };

            const finalScore = totalFinalScore / count;

            let signal;
            if (finalScore >= 70.0) signal = "StrongBuy";
            else if (finalScore >= 40.0) signal = "Buy";
            else if (finalScore >= 20.0) signal = "Watch";
            else if (finalScore >= -20.0) signal = "Neutral";
            else if (finalScore >= -40.0) signal = "Sell";
            else signal = "StrongSell";

            aggregated.push({
                stock: newest.stock,
                article: combinedArticle,
                signal: signal,
                finalScore: finalScore,
                newsSentimentScore: totalNewsSentimentScore / count,
                technicalScore: totalTechnicalScore / count,
                volumeScore: totalVolumeScore / count,
                fundamentalScore: totalFundamentalScore / count,
                fiiDiiScore: totalFiiDiiScore / count,
                sentimentScore: totalSentimentScore / count,
                importanceRating: totalImportanceRating / count,
                sourceTrustRating: totalSourceTrustRating / count,
                freshnessRating: totalFreshnessRating / count,
                companyMatchRating: totalCompanyMatchRating / count,
                matchReason: matchReasons.join(" / "),
                contextSnippet: contextSnippets.join("\n"),
                analyzedDate: newest.analyzedDate,
                mentionCount: count,
                currentPrice: 0.0
            });
        });

        return aggregated;
    }

    containsMarketIndicator(text) {
        return this.marketIndicators.some(ind => text.includes(ind));
    }

    analyzeRawSentiment(text) {
        let netScore = 0;
        let totalWeight = 0;
        const textLower = text.toLowerCase();
        const matchedPhrases = [];

        this.sentimentRules.forEach(rule => {
            const escaped = this.escapeRegExp(rule.pattern);
            const pattern = new RegExp(`\\b${escaped}\\b`, "g");
            const matches = textLower.match(pattern);
            if (matches && matches.length > 0) {
                const count = matches.length;
                const weight = rule.weight * count;
                netScore += rule.isNegative ? -weight : weight;
                totalWeight += weight;
                matchedPhrases.push(`${rule.isNegative ? "-" : "+"}${rule.pattern}`);
            }
        });

        let rawSentiment = 0.0;
        if (totalWeight > 0) {
            rawSentiment = netScore / totalWeight;
        }

        const context = this.extractContextSnippet(text, matchedPhrases);
        return { rawSentiment, context, matchedPhrases };
    }

    getImportanceRating(text) {
        const lower = text.toLowerCase();
        if (lower.includes("quarterly results") || lower.includes("net profit") || lower.includes("earnings") || lower.includes("revenue") || lower.includes("q1") || lower.includes("q2") || lower.includes("q3") || lower.includes("q4"))
            return 5.0;
        if (lower.includes("sebi") || lower.includes("investigation") || lower.includes("regulation") || lower.includes("court") || lower.includes("fine") || lower.includes("penalty"))
            return 5.0;
        if (lower.includes("order win") || lower.includes("contract") || lower.includes("deal") || lower.includes("acquisition") || lower.includes("merge") || lower.includes("joint venture"))
            return 4.0;
        if (lower.includes("dividend") || lower.includes("board meet") || lower.includes("bonus"))
            return 3.0;
        if (lower.includes("analyst") || lower.includes("target price") || lower.includes("brokerage") || lower.includes("rating"))
            return 2.0;
        return 1.0;
    }

    getSourceTrustRating(source) {
        switch (source) {
            case "Economic Times":
            case "Livemint":
            case "Business Standard":
            case "Financial Express":
            case "Moneycontrol":
                return 3.0;
            case "CNBC TV18":
            case "Hindu Business Line":
                return 2.0;
            case "Business Today":
            case "NDTV Profit":
            case "Outlook Business":
                return 1.0;
            default:
                return 1.0;
        }
    }

    getFreshnessRating(pubDate) {
        const publishTime = new Date(pubDate).getTime();
        let ageInHours = (Date.now() - publishTime) / (1000 * 60 * 60);
        if (ageInHours < 0) ageInHours = 0;
        // Decay over 24 hours: freshness is 1.0 when brand new, decays to 0.5 at 24 hours
        return 1.0 / (1.0 + (ageInHours / 24.0));
    }

    generateSimulatedScore(symbol, factorType, newsSentiment) {
        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = today - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        const seedStr = `${symbol}-${factorType}-${dayOfYear}`;
        
        // Simple deterministic hash function to get seed
        let hash = 0;
        for (let i = 0; i < seedStr.length; i++) {
            hash = (hash << 5) - hash + seedStr.charCodeAt(i);
            hash |= 0;
        }
        
        // Use Mulberry32 or simple LCG to get 0-1 float
        let x = Math.abs(hash);
        let randVal = (Math.sin(x) * 10000);
        randVal = randVal - Math.floor(randVal);

        const baseVal = randVal * 110.0 - 55.0; // range between -55 and +55
        const score = baseVal + (newsSentiment * 0.35); // news sentiment bias
        return Math.max(-100.0, Math.min(100.0, score));
    }

    extractContextSnippet(text, matchedPhrases) {
        if (matchedPhrases.length === 0) {
            const dotIndex = text.indexOf('.');
            if (dotIndex > 10 && dotIndex < 150) {
                return text.substring(0, dotIndex + 1).trim();
            }
            return text.length > 120 ? text.substring(0, 117).trim() + "..." : text.trim();
        }

        const keywordsSummary = `Keywords: ${matchedPhrases.join(", ")}`;
        const cleanKeywords = matchedPhrases[0].substring(1); // Strip leading + or -
        const sentences = text.split(/[.?!]/g).filter(s => s.trim().length > 0);
        
        for (let sentence of sentences) {
            if (sentence.toLowerCase().includes(cleanKeywords.toLowerCase())) {
                return `${sentence.trim()}. (${keywordsSummary})`;
            }
        }

        return `${sentences[0].trim()}. (${keywordsSummary})`;
    }

    generateSearchTokens(stock) {
        const tokens = [];
        if (stock.symbol) {
            tokens.push(stock.symbol.trim().toUpperCase());
        }
        if (stock.name) {
            const clean = this.cleanCompanyName(stock.name);
            if (clean && clean.length > 3) {
                tokens.push(clean.toUpperCase());
            }
        }
        // Sort by length descending
        tokens.sort((a, b) => b.length - a.length);
        return tokens;
    }

    cleanCompanyName(name) {
        if (!name) return "";
        let result = name;
        const suffixes = [" LIMITED", " LTD", " CORP", " CORPORATION", " CO.", " CO"];
        for (let suffix of suffixes) {
            let index = result.toUpperCase().indexOf(suffix);
            if (index > 0) {
                result = result.substring(0, index);
            }
        }
        return result.trim();
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

// Export for ES6/global usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SignalEngine;
} else {
    window.SignalEngine = SignalEngine;
}
