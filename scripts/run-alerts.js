const fs = require('fs');
const path = require('path');
const SignalEngine = require('../js/signalEngine.js');

// 90+ Top Indian Stocks Database
const STOCKS_DATABASE = [
    { symbol: "RELIANCE", name: "Reliance Industries Limited", industry: "Energy" },
    { symbol: "TCS", name: "Tata Consultancy Services Limited", industry: "Information Technology" },
    { symbol: "HDFCBANK", name: "HDFC Bank Limited", industry: "Financial Services" },
    { symbol: "INFY", name: "Infosys Limited", industry: "Information Technology" },
    { symbol: "ICICIBANK", name: "ICICI Bank Limited", industry: "Financial Services" },
    { symbol: "HINDUNILVR", name: "Hindustan Unilever Limited", industry: "Fast Moving Consumer Goods" },
    { symbol: "ITC", name: "ITC Limited", industry: "Fast Moving Consumer Goods" },
    { symbol: "SBIN", name: "State Bank of India", industry: "Financial Services" },
    { symbol: "BHARTIARTL", name: "Bharti Airtel Limited", industry: "Telecommunications" },
    { symbol: "LTIM", name: "LTIMindtree Limited", industry: "Information Technology" },
    { symbol: "LT", name: "Larsen & Toubro Limited", industry: "Construction" },
    { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank Limited", industry: "Financial Services" },
    { symbol: "AXISBANK", name: "Axis Bank Limited", industry: "Financial Services" },
    { symbol: "ASIANPAINT", name: "Asian Paints Limited", industry: "Consumer Durables" },
    { symbol: "BAJFINANCE", name: "Bajaj Finance Limited", industry: "Financial Services" },
    { symbol: "MARUTI", name: "Maruti Suzuki India Limited", industry: "Automobile" },
    { symbol: "SUNPHARMA", name: "Sun Pharmaceutical Industries Limited", industry: "Healthcare" },
    { symbol: "TITAN", name: "Titan Company Limited", industry: "Consumer Durables" },
    { symbol: "ULTRACEMCO", name: "UltraTech Cement Limited", industry: "Construction Materials" },
    { symbol: "WIPRO", name: "Wipro Limited", industry: "Information Technology" },
    { symbol: "JSWSTEEL", name: "JSW Steel Limited", industry: "Metals & Mining" },
    { symbol: "TATASTEEL", name: "Tata Steel Limited", industry: "Metals & Mining" },
    { symbol: "M&M", name: "Mahindra & Mahindra Limited", industry: "Automobile" },
    { symbol: "NTPC", name: "NTPC Limited", industry: "Power" },
    { symbol: "POWERGRID", name: "Power Grid Corporation of India Limited", industry: "Power" },
    { symbol: "HCLTECH", name: "HCL Technologies Limited", industry: "Information Technology" },
    { symbol: "ADANIENT", name: "Adani Enterprises Limited", industry: "Metals & Mining" },
    { symbol: "ADANIPORTS", name: "Adani Ports and Special Economic Zone Limited", industry: "Services" },
    { symbol: "COALINDIA", name: "Coal India Limited", industry: "Metals & Mining" },
    { symbol: "ONGC", name: "Oil & Natural Gas Corporation Limited", industry: "Energy" },
    { symbol: "TATAMOTORS", name: "Tata Motors Limited", industry: "Automobile" },
    { symbol: "ADANIGREEN", name: "Adani Green Energy Limited", industry: "Power" },
    { symbol: "DMART", name: "Avenue Supermarts Limited", industry: "Consumer Services" },
    { symbol: "BAJAJFINSV", name: "Bajaj Finserv Limited", industry: "Financial Services" },
    { symbol: "NESTLEIND", name: "Nestle India Limited", industry: "Fast Moving Consumer Goods" },
    { symbol: "GRASIM", name: "Grasim Industries Limited", industry: "Construction Materials" },
    { symbol: "TECHM", name: "Tech Mahindra Limited", industry: "Information Technology" },
    { symbol: "INDUSINDBK", name: "IndusInd Bank Limited", industry: "Financial Services" },
    { symbol: "BPCL", name: "Bharat Petroleum Corporation Limited", industry: "Energy" },
    { symbol: "HINDALCO", name: "Hindalco Industries Limited", industry: "Metals & Mining" },
    { symbol: "DRREDDY", name: "Dr. Reddy's Laboratories Limited", industry: "Healthcare" },
    { symbol: "CIPLA", name: "Cipla Limited", industry: "Healthcare" },
    { symbol: "JIOFIN", name: "Jio Financial Services Limited", industry: "Financial Services" },
    { symbol: "EICHERMOT", name: "Eicher Motors Limited", industry: "Automobile" },
    { symbol: "TATACONSUM", name: "Tata Consumer Products Limited", industry: "Fast Moving Consumer Goods" },
    { symbol: "BRITANNIA", name: "Britannia Industries Limited", industry: "Fast Moving Consumer Goods" },
    { symbol: "IOC", name: "Indian Oil Corporation Limited", industry: "Energy" },
    { symbol: "BAJAJ-AUTO", name: "Bajaj Auto Limited", industry: "Automobile" },
    { symbol: "HAL", name: "Hindustan Aeronautics Limited", industry: "Capital Goods" },
    { symbol: "DLF", name: "DLF Limited", industry: "Realty" },
    { symbol: "CHOLAFIN", name: "Cholamandalam Investment and Finance Company Limited", industry: "Financial Services" },
    { symbol: "BEL", name: "Bharat Electronics Limited", industry: "Capital Goods" },
    { symbol: "DIVISLAB", name: "Divi's Laboratories Limited", industry: "Healthcare" },
    { symbol: "APOLLOHOSP", name: "Apollo Hospitals Enterprise Limited", industry: "Healthcare" },
    { symbol: "GAIL", name: "GAIL (India) Limited", industry: "Energy" },
    { symbol: "SHRIRAMFIN", name: "Shriram Finance Limited", industry: "Financial Services" },
    { symbol: "TVSMOTOR", name: "TVS Motor Company Limited", industry: "Automobile" },
    { symbol: "HEROMOTOCO", name: "Hero MotoCorp Limited", industry: "Automobile" },
    { symbol: "SIEMENS", name: "Siemens Limited", industry: "Capital Goods" },
    { symbol: "PIDILITIND", name: "Pidilite Industries Limited", industry: "Chemicals" },
    { symbol: "ICICIPRULI", name: "ICICI Prudential Life Insurance Company Limited", industry: "Financial Services" },
    { symbol: "HDFCLIFE", name: "HDFC Life Insurance Company Limited", industry: "Financial Services" },
    { symbol: "TRENT", name: "Trent Limited", industry: "Consumer Services" },
    { symbol: "INDIGO", name: "InterGlobe Aviation Limited", industry: "Consumer Services" },
    { symbol: "ABB", name: "ABB India Limited", industry: "Capital Goods" },
    { symbol: "ZOMATO", name: "Zomato Limited", industry: "Consumer Services" },
    { symbol: "PAYTM", name: "One 97 Communications Limited", industry: "Financial Services" },
    { symbol: "IRCTC", name: "Indian Railway Catering And Tourism Corporation Limited", industry: "Consumer Services" },
    { symbol: "IRFC", name: "Indian Railway Finance Corporation Limited", industry: "Financial Services" },
    { symbol: "PNB", name: "Punjab National Bank", industry: "Financial Services" },
    { symbol: "BANKBARODA", name: "Bank of Baroda", industry: "Financial Services" },
    { symbol: "CANBK", name: "Canara Bank", industry: "Financial Services" },
    { symbol: "UNIONBANK", name: "Union Bank of India", industry: "Financial Services" },
    { symbol: "FEDERALBNK", name: "The Federal Bank Limited", industry: "Financial Services" },
    { symbol: "GODREJCP", name: "Godrej Consumer Products Limited", industry: "Fast Moving Consumer Goods" },
    { symbol: "TATAPOWER", name: "Tata Power Company Limited", industry: "Power" },
    { symbol: "UPL", name: "UPL Limited", industry: "Chemicals" },
    { symbol: "ASHOKLEY", name: "Ashok Leyland Limited", industry: "Automobile" },
    { symbol: "MRF", name: "MRF Limited", industry: "Automobile" },
    { symbol: "APOLLOTYRE", name: "Apollo Tyres Limited", industry: "Automobile" },
    { symbol: "CUMMINSIND", name: "Cummins India Limited", industry: "Capital Goods" },
    { symbol: "SAIL", name: "Steel Authority of India Limited", industry: "Metals & Mining" },
    { symbol: "VEDL", name: "Vedanta Limited", industry: "Metals & Mining" },
    { symbol: "BIOCON", name: "Biocon Limited", industry: "Healthcare" },
    { symbol: "POLYCAB", name: "Polycab India Limited", industry: "Capital Goods" },
    { symbol: "HAVELLS", name: "Havells India Limited", industry: "Consumer Durables" },
    { symbol: "VOLTAS", name: "Voltas Limited", industry: "Consumer Durables" },
    { symbol: "DIXON", name: "Dixon Technologies (India) Limited", industry: "Consumer Durables" },
    { symbol: "IDEA", name: "Vodafone Idea Limited", industry: "Telecommunications" },
    { symbol: "NYKAA", name: "FSN E-Commerce Ventures Limited", industry: "Consumer Services" }
];

const FEEDS = {
    "Economic Times": "https://economictimes.indiatimes.com/markets/stocks/rssfeeds/2146842.cms",
    "Livemint": "https://www.livemint.com/rss/markets",
    "Business Standard": "https://www.business-standard.com/rss/home_page_top_stories.rss",
    "Financial Express": "https://www.financialexpress.com/market/feed/",
    "Hindu Business Line": "https://www.thehindubusinessline.com/markets/stock-markets/feeder/default.rss",
    "Moneycontrol": "https://www.moneycontrol.com/rss/marketreports.xml",
    "Business Today": "https://www.businesstoday.in/rss/market",
    "NDTV Profit": "https://www.ndtvprofit.com/rss/profit-all",
    "CNBC TV18": "https://www.cnbctv18.com/rss/market.xml",
    "Outlook Business": "https://www.outlookbusiness.com/rss/outlook-business"
};

function cleanText(rawText) {
    if (!rawText) return "";
    let clean = rawText.replace(/<\/?[^>]+(>|$)/g, "");
    clean = clean.replace(/&amp;/g, "&")
                 .replace(/&lt;/g, "<")
                 .replace(/&gt;/g, ">")
                 .replace(/&quot;/g, '"')
                 .replace(/&#39;/g, "'")
                 .replace(/&nbsp;/g, " ");
    clean = clean.replace(/\s+/g, " ");
    return clean.trim();
}

function parseRssXml(sourceName, xmlText) {
    const articles = [];
    const itemRegex = /<item[\s\S]*?>([\s\S]*?)<\/item>/gi;
    let match;

    while ((match = itemRegex.exec(xmlText)) !== null) {
        const itemContent = match[1];

        const titleMatch = itemContent.match(/<title>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/title>/i);
        const descMatch = itemContent.match(/<description>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/description>/i);
        const linkMatch = itemContent.match(/<link>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/link>/i);
        const pubDateMatch = itemContent.match(/<pubDate>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/pubDate>/i);

        const titleRaw = titleMatch ? (titleMatch[1] || titleMatch[2] || "") : "";
        const descRaw = descMatch ? (descMatch[1] || descMatch[2] || "") : "";
        const linkRaw = linkMatch ? (linkMatch[1] || linkMatch[2] || "") : "";
        const pubDateRaw = pubDateMatch ? (pubDateMatch[1] || pubDateMatch[2] || "") : "";

        const title = cleanText(titleRaw);
        const description = cleanText(descRaw);
        const link = linkRaw.trim();

        let publishDate = new Date();
        if (pubDateRaw) {
            const parsed = Date.parse(pubDateRaw);
            if (!isNaN(parsed)) publishDate = new Date(parsed);
        }

        if (title) {
            articles.push({
                source: sourceName,
                title,
                description,
                link,
                publishDate
            });
        }
    }
    return articles;
}

async function fetchNewsArticles() {
    const articles = [];
    console.log("Fetching live RSS news feeds from 10 Indian business newspapers...");

    for (const [sourceName, feedUrl] of Object.entries(FEEDS)) {
        try {
            const response = await fetch(feedUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Accept': 'application/rss+xml, application/xml, text/xml'
                }
            });

            if (!response.ok) {
                console.warn(`[SKIP] ${sourceName}: HTTP ${response.status}`);
                continue;
            }

            const xmlText = await response.text();
            const parsedArticles = parseRssXml(sourceName, xmlText);
            console.log(`[SUCCESS] ${sourceName}: Fetched ${parsedArticles.length} articles.`);
            articles.push(...parsedArticles);
        } catch (err) {
            console.warn(`[ERROR] ${sourceName}: ${err.message}`);
        }
    }

    return articles;
}

function buildEmailBodyText(signals) {
    const dateStr = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    let text = `NSE Stock Signals Terminal - Automated Daily Report\n`;
    text += `Report generated on: ${dateStr} IST\n\n`;

    if (signals.length === 0) {
        text += `No active Buy or Sell signals were identified in today's sentiment analysis scan.\n`;
    } else {
        text += `Today's scan identified ${signals.length} active stock signal(s):\n\n`;
        signals.forEach(sig => {
            const scoreText = sig.finalScore > 0 ? `+${sig.finalScore.toFixed(1)}` : sig.finalScore.toFixed(1);
            text += `----------------------------------------\n`;
            text += `Stock: ${sig.stock.symbol} (${sig.stock.name})\n`;
            text += `Signal: ${sig.signal.toUpperCase()}\n`;
            text += `Score: ${scoreText}\n`;
            text += `Source: ${sig.article.source}\n`;
            text += `Headline: ${sig.article.title}\n`;
            text += `Link: ${sig.article.link || 'N/A'}\n`;
        });
        text += `----------------------------------------\n`;
    }

    text += `\nAutomated notification from NSE Stock Signals Terminal (https://vijaydlakhani.github.io/bss/).\n`;
    return text;
}

async function sendEmailAlerts(signals, recipientEmail) {
    console.log(`Preparing to dispatch email alert to: ${recipientEmail}...`);
    const subject = `NSE Newspaper Sentiment Signal Alerts - ${new Date().toLocaleDateString('en-IN')}`;
    const plainTextBody = buildEmailBodyText(signals);

    try {
        const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Referer': 'https://vijaydlakhani.github.io/bss/',
                'Origin': 'https://vijaydlakhani.github.io'
            },
            body: JSON.stringify({
                _subject: subject,
                _captcha: "false",
                message: plainTextBody
            })
        });

        const resultJson = await response.json();
        console.log(`FormSubmit API Response:`, JSON.stringify(resultJson));
        if (resultJson.success === "true" || resultJson.success === true) {
            console.log(`Successfully dispatched email alert to ${recipientEmail}!`);
        } else {
            console.warn(`FormSubmit Warning: ${resultJson.message}`);
        }
    } catch (err) {
        console.error(`Failed to send email alert: ${err.message}`);
    }
}

async function main() {
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'vijaydlakhani@gmail.com';
    console.log(`=== STARTING AUTOMATED DAILY NSE STOCK SIGNAL SCAN ===`);
    console.log(`Target Recipient: ${recipientEmail}`);

    const articles = await fetchNewsArticles();
    console.log(`Total live news articles fetched across all sources: ${articles.length}`);

    const signalEngine = new SignalEngine();
    const signals = signalEngine.analyzeArticles(articles, STOCKS_DATABASE);
    console.log(`Analyzed & generated ${signals.length} stock signal matches.`);

    const alertSignals = signals.filter(s => 
        s.signal === "StrongBuy" || 
        s.signal === "Buy" || 
        s.signal === "Sell" || 
        s.signal === "StrongSell"
    );

    console.log(`Filtered ${alertSignals.length} high-conviction BUY/SELL signals for email alert.`);

    await sendEmailAlerts(alertSignals, recipientEmail);
    console.log(`=== AUTOMATED SCAN & DISPATCH COMPLETED ===`);
}

main().catch(err => {
    console.error(`Fatal script error:`, err);
    process.exit(1);
});
