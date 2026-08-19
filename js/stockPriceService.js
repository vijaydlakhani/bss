class StockPriceService {
    constructor() {
        this.fallbackBasePrices = {
            "RELIANCE": 2450.00,
            "TCS": 3850.00,
            "HDFCBANK": 1620.00,
            "INFY": 1580.00,
            "ICICIBANK": 1010.00,
            "HINDUNILVR": 2380.00,
            "ITC": 430.00,
            "SBIN": 780.00,
            "BHARTIARTL": 1120.00,
            "LT": 3550.00,
            "AXISBANK": 1060.00,
            "WIPRO": 480.00,
            "TATASTEEL": 150.00,
            "TATAMOTORS": 950.00,
            "ZOMATO": 185.00
        };
        // AllOrigins proxy
        this.proxyUrl = "https://api.allorigins.win/raw?url=";
    }

    async getPrice(symbol) {
        if (!symbol) return 0.0;
        const cleanSym = symbol.trim().toUpperCase().replace("&", "-");
        const nsSymbol = `${cleanSym}.NS`;
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${nsSymbol}`;
        const finalUrl = `${this.proxyUrl}${encodeURIComponent(url)}`;

        try {
            const response = await fetch(finalUrl);
            if (response.ok) {
                const data = await response.json();
                if (data.chart && data.chart.result && data.chart.result.length > 0) {
                    const meta = data.chart.result[0].meta;
                    const price = meta.regularMarketPrice;
                    if (price > 0) return price;
                }
            }
        } catch (e) {
            console.warn(`Yahoo Finance fetch failed for ${symbol}, falling back to simulated price.`);
        }

        return this.generateSimulatedPrice(cleanSym);
    }

    async populatePrices(signals) {
        if (!signals || signals.length === 0) return;
        
        const promises = signals.map(async (sig) => {
            sig.currentPrice = await this.getPrice(sig.stock.symbol);
        });

        await Promise.all(promises);
    }

    generateSimulatedPrice(symbol) {
        let basePrice = 150.0;
        if (this.fallbackBasePrices[symbol] !== undefined) {
            basePrice = this.fallbackBasePrices[symbol];
        } else {
            // Deterministic hash based base price
            let hash = 0;
            for (let i = 0; i < symbol.length; i++) {
                hash = (hash << 5) - hash + symbol.charCodeAt(i);
                hash |= 0;
            }
            hash = Math.abs(hash);
            basePrice = 50.0 + (hash % 4950); // range between 50 and 5000 INR
        }

        // Intraday fluctuation based on day of year + current hour
        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = today - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        
        const seed = symbol.charCodeAt(0) ^ dayOfYear ^ today.getHours();
        
        // Simple deterministic sin-based generator
        let randVal = Math.sin(seed) * 10000;
        randVal = randVal - Math.floor(randVal);

        const fluctuationPercent = (randVal * 3.0) - 1.5; // -1.5% to +1.5%
        const finalPrice = basePrice * (1.0 + (fluctuationPercent / 100.0));
        
        return Math.round(finalPrice * 100) / 100;
    }
}

// Export for ES6/global usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StockPriceService;
} else {
    window.StockPriceService = StockPriceService;
}
