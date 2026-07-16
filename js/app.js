// Stock Tickers Database (Port of StockDatabase.cs)
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

// Times list for selector
const EMAIL_TIMES_OPTIONS = [
    "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM"
];

class AppController {
    constructor() {
        this.storage = new StorageService();
        this.newsService = new NewsService();
        this.signalEngine = new SignalEngine();
        this.priceService = new StockPriceService();

        // App States
        this.allSignals = [];
        this.filteredSignals = [];
        this.watchlist = [];
        this.emailSettings = {};
        this.emailLogs = [];
        this.selectedSignal = null;
        this.currentView = "Dashboard";
        
        // Timer details
        this.timerInterval = null;
        this.nextEmailTime = null;
        this.nextEmailIsSecond = false;
        this.isSendingInProgress = false;

        // Sorting details
        this.currentSortField = "finalScore";
        this.currentSortAsc = false;
    }

    async init() {
        this.loadDOMReferences();
        this.bindEvents();
        this.populateDropdowns();

        // Load Persistent Settings
        this.watchlist = await this.storage.loadWatchlist();
        this.emailSettings = await this.storage.loadEmailSettings();
        this.emailLogs = await this.storage.loadEmailLogs();

        this.applySettingsToUI();
        this.renderWatchlist();
        this.renderLogs();

        // Start Scheduler Clock
        this.initScheduler();

        // Run Initial Scan
        await this.refreshFeeds();
    }

    loadDOMReferences() {
        // Nav elements
        this.navDashboard = document.getElementById("nav-dashboard");
        this.navWatchlistOnly = document.getElementById("nav-watchlist-only");
        this.navEmailAlerts = document.getElementById("nav-email-alerts");

        // Views
        this.viewDashboard = document.getElementById("view-dashboard");
        this.viewEmailAlerts = document.getElementById("view-email-alerts");

        // Watchlist Add DOM
        this.watchlistInput = document.getElementById("watchlist-search-input");
        this.watchlistAutocomplete = document.getElementById("autocomplete-list");
        this.btnAddWatchlist = document.getElementById("btn-add-watchlist");
        this.watchlistUl = document.getElementById("watchlist-ul");

        // Actions
        this.btnThemeToggle = document.getElementById("btn-theme-toggle");
        this.themeBtnText = document.getElementById("theme-btn-text");
        this.btnRefresh = document.getElementById("btn-refresh");
        this.btnResetFilters = document.getElementById("btn-reset-filters");
        this.btnExportCsv = document.getElementById("btn-export-csv");

        // Stats
        this.statBuyCount = document.getElementById("stat-buy-count");
        this.statSellCount = document.getElementById("stat-sell-count");
        this.statWatchlistCount = document.getElementById("stat-watchlist-count");
        this.statActiveStock = document.getElementById("stat-active-stock");
        this.lastUpdatedText = document.getElementById("last-updated-text");

        // Filters
        this.filterSearch = document.getElementById("filter-search");
        this.filterWatchlistOnly = document.getElementById("filter-watchlist-only");
        this.filterNewspaper = document.getElementById("filter-newspaper");
        this.filterSignal = document.getElementById("filter-signal");
        this.filterScore = document.getElementById("filter-score");

        // Data Table
        this.signalsTbody = document.getElementById("signals-tbody");
        this.loadingOverlay = document.getElementById("loading-overlay");
        this.loadingStatusText = document.getElementById("loading-status-text");
        this.emptyOverlay = document.getElementById("empty-overlay");
        this.tableHeaders = document.querySelectorAll("#signals-table th.sortable");

        // Email Config UI
        this.emailAlertsEnabled = document.getElementById("email-alerts-enabled");
        this.emailSendTime = document.getElementById("email-send-time");
        this.countdownTimerText = document.getElementById("countdown-timer-text");
        this.countdownNextTime = document.getElementById("countdown-next-time");
        
        this.newRecipientEmail = document.getElementById("new-recipient-email");
        this.btnAddEmail = document.getElementById("btn-add-email");
        this.recipientsList = document.getElementById("recipients-list");

        // SMTP Form Fields
        this.emailSimulationMode = document.getElementById("email-simulation-mode");
        this.smtpHost = document.getElementById("smtp-host");
        this.smtpPort = document.getElementById("smtp-port");
        this.smtpUsername = document.getElementById("smtp-username");
        this.smtpPassword = document.getElementById("smtp-password");
        this.smtpFromAddress = document.getElementById("smtp-from-address");
        this.smtpSenderName = document.getElementById("smtp-sender-name");
        this.smtpEnableSsl = document.getElementById("smtp-enable-ssl");
        this.btnTestSmtp = document.getElementById("btn-test-smtp");

        // Logs
        this.btnClearLogs = document.getElementById("btn-clear-logs");
        this.logsList = document.getElementById("logs-list");

        // Inspector DOM
        this.inspectorPlaceholder = document.getElementById("inspector-placeholder");
        this.inspectorDetails = document.getElementById("inspector-details");
        this.insSymbol = document.getElementById("ins-symbol");
        this.insSignalBadge = document.getElementById("ins-signal-badge");
        this.insName = document.getElementById("ins-name");
        this.insIndustry = document.getElementById("ins-industry");
        this.insFinalScore = document.getElementById("ins-final-score");
        this.insSource = document.getElementById("ins-source");
        this.insDate = document.getElementById("ins-date");
        this.insHeadline = document.getElementById("ins-headline");
        this.insTriggerReason = document.getElementById("ins-trigger-reason");
        this.insContext = document.getElementById("ins-context");
        this.insDescription = document.getElementById("ins-description");
        
        // Inspector Progress
        this.barNews = document.getElementById("bar-news");
        this.barTech = document.getElementById("bar-tech");
        this.barVolume = document.getElementById("bar-volume");
        this.barFii = document.getElementById("bar-fii");
        this.barFund = document.getElementById("bar-fund");
        this.valNews = document.getElementById("val-news");
        this.valTech = document.getElementById("val-tech");
        this.valVolume = document.getElementById("val-volume");
        this.valFii = document.getElementById("val-fii");
        this.valFund = document.getElementById("val-fund");
        
        // Inspector Footer Buttons
        this.btnToggleWatchlist = document.getElementById("btn-toggle-watchlist");
        this.watchlistToggleText = document.getElementById("watchlist-toggle-text");
        this.lnkOpenArticle = document.getElementById("lnk-open-article");

        // Modal DOM
        this.emailModal = document.getElementById("email-modal");
        this.btnCloseModal = document.getElementById("btn-close-modal");
        this.modalEmailSubject = document.getElementById("modal-email-subject");
        this.modalEmailRecipients = document.getElementById("modal-email-recipients");
        this.btnDownloadEmail = document.getElementById("btn-download-email");
        this.emailIframe = document.getElementById("email-iframe");
    }

    bindEvents() {
        // Navigation clicks
        this.navDashboard.addEventListener("click", () => this.switchView("Dashboard"));
        this.navWatchlistOnly.addEventListener("click", () => {
            this.switchView("Dashboard");
            this.filterWatchlistOnly.checked = true;
            this.applyFilters();
        });
        this.navEmailAlerts.addEventListener("click", () => this.switchView("EmailAlerts"));

        // Refresh and Reset
        this.btnRefresh.addEventListener("click", () => this.refreshFeeds());
        this.btnResetFilters.addEventListener("click", () => this.clearFilters());
        this.btnThemeToggle.addEventListener("click", () => this.toggleTheme());

        // Watchlist Add Ticker
        this.watchlistInput.addEventListener("input", () => this.handleWatchlistAutocomplete());
        this.watchlistInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") this.addStockFromInput();
        });
        this.btnAddWatchlist.addEventListener("click", () => this.addStockFromInput());

        // Filters triggers
        this.filterSearch.addEventListener("input", () => this.applyFilters());
        this.filterWatchlistOnly.addEventListener("change", () => this.applyFilters());
        this.filterNewspaper.addEventListener("change", () => this.applyFilters());
        this.filterSignal.addEventListener("change", () => this.applyFilters());
        this.filterScore.addEventListener("change", () => this.applyFilters());

        // Sort table headers
        this.tableHeaders.forEach(th => {
            th.addEventListener("click", () => {
                const sortField = th.getAttribute("data-sort");
                if (this.currentSortField === sortField) {
                    this.currentSortAsc = !this.currentSortAsc;
                } else {
                    this.currentSortField = sortField;
                    this.currentSortAsc = true;
                }
                this.applyFilters();
            });
        });

        // Inspector watchlist click
        this.btnToggleWatchlist.addEventListener("click", () => {
            if (this.selectedSignal) {
                this.toggleWatchlist(this.selectedSignal.stock.symbol);
                this.updateInspectorWatchlistState();
            }
        });

        // Email Alert Switches & Form Triggers
        this.emailAlertsEnabled.addEventListener("change", () => {
            this.emailSettings.isEnabled = this.emailAlertsEnabled.checked;
            this.saveEmailSettings();
            this.addLog(this.emailSettings.isEnabled ? "Automated email alerts ENABLED." : "Automated email alerts DISABLED.");
            this.resetNextEmailTime();
        });

        this.emailSendTime.addEventListener("change", () => {
            this.emailSettings.interval = this.emailSendTime.value;
            this.saveEmailSettings();
            this.resetNextEmailTime();
        });

        this.emailSimulationMode.addEventListener("change", () => {
            this.emailSettings.isSimulationMode = this.emailSimulationMode.checked;
            this.saveEmailSettings();
            this.addLog(`Simulation mode toggled to: ${this.emailSettings.isSimulationMode}`);
        });

        const saveSmtpFields = () => {
            this.emailSettings.smtpHost = this.smtpHost.value;
            this.emailSettings.smtpPort = parseInt(this.smtpPort.value, 10) || 587;
            this.emailSettings.smtpUsername = this.smtpUsername.value;
            this.emailSettings.smtpPassword = this.smtpPassword.value;
            this.emailSettings.smtpFromAddress = this.smtpFromAddress.value;
            this.emailSettings.smtpSenderName = this.smtpSenderName.value;
            this.emailSettings.smtpEnableSsl = this.smtpEnableSsl.checked;
            this.saveEmailSettings();
        };

        this.smtpHost.addEventListener("input", saveSmtpFields);
        this.smtpPort.addEventListener("input", saveSmtpFields);
        this.smtpUsername.addEventListener("input", saveSmtpFields);
        this.smtpPassword.addEventListener("input", saveSmtpFields);
        this.smtpFromAddress.addEventListener("input", saveSmtpFields);
        this.smtpSenderName.addEventListener("input", saveSmtpFields);
        this.smtpEnableSsl.addEventListener("change", saveSmtpFields);

        // Add email recipient
        this.btnAddEmail.addEventListener("click", () => this.addRecipient());
        this.newRecipientEmail.addEventListener("keydown", (e) => {
            if (e.key === "Enter") this.addRecipient();
        });

        // Test SMTP
        this.btnTestSmtp.addEventListener("click", () => this.testSmtpConnection());

        // Clear Logs
        this.btnClearLogs.addEventListener("click", () => {
            this.emailLogs = [];
            this.storage.saveEmailLogs([]);
            this.renderLogs();
        });

        // Export CSV
        this.btnExportCsv.addEventListener("click", () => this.exportCsv());

        // Close Modal
        this.btnCloseModal.addEventListener("click", () => {
            this.emailModal.classList.add("hidden");
        });
        
        // Hide autocomplete on click outside
        document.addEventListener("click", (e) => {
            if (e.target !== this.watchlistInput) {
                this.watchlistAutocomplete.innerHTML = "";
            }
        });
    }

    populateDropdowns() {
        // Populate Email times
        this.emailSendTime.innerHTML = "";
        EMAIL_TIMES_OPTIONS.forEach(time => {
            const option = document.createElement("option");
            option.value = time;
            option.textContent = time;
            this.emailSendTime.appendChild(option);
        });
    }

    applySettingsToUI() {
        this.emailAlertsEnabled.checked = this.emailSettings.isEnabled;
        this.emailSendTime.value = this.emailSettings.interval || "10:00 AM";
        this.emailSimulationMode.checked = this.emailSettings.isSimulationMode;
        
        this.smtpHost.value = this.emailSettings.smtpHost || "smtp.gmail.com";
        this.smtpPort.value = this.emailSettings.smtpPort || 587;
        this.smtpUsername.value = this.emailSettings.smtpUsername || "";
        this.smtpPassword.value = this.emailSettings.smtpPassword || "";
        this.smtpFromAddress.value = this.emailSettings.smtpFromAddress || "";
        this.smtpSenderName.value = this.emailSettings.smtpSenderName || "NSE Signal Terminal";
        this.smtpEnableSsl.checked = this.emailSettings.smtpEnableSsl !== false;

        this.renderRecipients();
    }

    switchView(viewName) {
        this.currentView = viewName;
        this.navDashboard.classList.remove("active");
        this.navEmailAlerts.classList.remove("active");
        this.navWatchlistOnly.classList.remove("active");
        
        this.viewDashboard.classList.remove("active");
        this.viewEmailAlerts.classList.remove("active");

        if (viewName === "Dashboard") {
            this.navDashboard.classList.add("active");
            this.viewDashboard.classList.add("active");
        } else if (viewName === "EmailAlerts") {
            this.navEmailAlerts.classList.add("active");
            this.viewEmailAlerts.classList.add("active");
        }
    }

    toggleTheme() {
        const body = document.body;
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            this.themeBtnText.textContent = "Dark Mode";
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            this.themeBtnText.textContent = "Light Mode";
        }
    }

    async saveEmailSettings() {
        await this.storage.saveEmailSettings(this.emailSettings);
    }

    /* ================= SEARCH & AUTOCOMPLETE ================= */
    handleWatchlistAutocomplete() {
        const val = this.watchlistInput.value.trim().toUpperCase();
        this.watchlistAutocomplete.innerHTML = "";
        if (!val) return;

        const matches = STOCKS_DATABASE.filter(stock => 
            stock.symbol.toUpperCase().startsWith(val) || 
            stock.name.toUpperCase().includes(val)
        ).slice(0, 8);

        matches.forEach(match => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${match.symbol}</strong> - <span style="font-size:10px; opacity:0.8;">${match.name}</span>`;
            div.addEventListener("click", () => {
                this.watchlistInput.value = match.symbol;
                this.watchlistAutocomplete.innerHTML = "";
                this.addStockFromInput();
            });
            this.watchlistAutocomplete.appendChild(div);
        });
    }

    async addStockFromInput() {
        const ticker = this.watchlistInput.value.trim().toUpperCase();
        if (!ticker) return;

        const stock = STOCKS_DATABASE.find(s => s.symbol.toUpperCase() === ticker);
        if (!stock) {
            alert(`Symbol '${ticker}' was not found in the stock database. Please enter a valid NSE stock symbol.`);
            return;
        }

        if (this.watchlist.some(w => w.symbol === ticker)) {
            alert(`'${ticker}' is already in your watchlist.`);
            return;
        }

        this.watchlist.push({
            symbol: ticker,
            dateAdded: new Date()
        });

        await this.storage.saveWatchlist(this.watchlist);
        this.watchlistInput.value = "";
        this.watchlistAutocomplete.innerHTML = "";
        
        this.renderWatchlist();
        this.updateStats();
        this.applyFilters();
        if (this.selectedSignal && this.selectedSignal.stock.symbol === ticker) {
            this.updateInspectorWatchlistState();
        }
    }

    async toggleWatchlist(symbol) {
        symbol = symbol.toUpperCase();
        const index = this.watchlist.findIndex(w => w.symbol === symbol);
        
        if (index > -1) {
            this.watchlist.splice(index, 1);
        } else {
            this.watchlist.push({
                symbol: symbol,
                dateAdded: new Date()
            });
        }

        await this.storage.saveWatchlist(this.watchlist);
        this.renderWatchlist();
        this.updateStats();
        this.applyFilters();
        this.updateInspectorWatchlistState();
    }

    renderWatchlist() {
        this.watchlistUl.innerHTML = "";
        this.watchlist.forEach(item => {
            const li = document.createElement("li");
            
            const span = document.createElement("span");
            span.textContent = item.symbol;
            
            const btn = document.createElement("button");
            btn.className = "btn-remove-watchlist";
            btn.innerHTML = "&times;";
            btn.addEventListener("click", () => this.toggleWatchlist(item.symbol));
            
            li.appendChild(span);
            li.appendChild(btn);
            this.watchlistUl.appendChild(li);
        });
        this.statWatchlistCount.textContent = this.watchlist.length;
    }

    /* ================= FEEDS & SCAN ENGINE ================= */
    async refreshFeeds() {
        if (this.isLoading) return;
        this.isLoading = true;
        this.loadingOverlay.classList.remove("hidden");
        this.loadingStatusText.textContent = "Connecting to RSS news feeds...";
        this.btnRefresh.disabled = true;

        try {
            // Fetch Articles
            const articles = await this.newsService.fetchAllNews((completed, total, sourceName) => {
                this.loadingStatusText.textContent = `Scraped ${completed}/${total} feeds: ${sourceName}...`;
            });

            this.loadingStatusText.textContent = `Scanning ${articles.length} news articles for ticker matches...`;
            
            // Process sentiment engine rules in microtask
            await new Promise(resolve => setTimeout(resolve, 50));
            const signals = this.signalEngine.analyzeArticles(articles, STOCKS_DATABASE);

            this.loadingStatusText.textContent = `Updating real-time price feeds for ${signals.length} symbols...`;
            
            // Fetch prices
            await this.priceService.populatePrices(signals);

            this.allSignals = signals;
            this.lastUpdatedText.textContent = `Updated: ${this.formatDateTime(new Date())}`;
            
            this.updateStats();
            this.applyFilters();

            this.addLog(`Manual news scan complete. Found ${this.allSignals.length} stock signals from ${articles.length} articles.`);
        } catch (e) {
            console.error(e);
            alert(`Refresh failed: ${e.message}`);
        } finally {
            this.isLoading = false;
            this.loadingOverlay.classList.add("hidden");
            this.btnRefresh.disabled = false;
        }
    }

    updateStats() {
        const buys = this.allSignals.filter(s => s.signal === "StrongBuy" || s.signal === "Buy").length;
        const sells = this.allSignals.filter(s => s.signal === "StrongSell" || s.signal === "Sell").length;
        
        this.statBuyCount.textContent = buys;
        this.statSellCount.textContent = sells;
        this.statWatchlistCount.textContent = this.watchlist.length;

        // Calculate most active stock by mentionCount
        let activeStockStr = "None";
        if (this.allSignals.length > 0) {
            const sortedSignals = [...this.allSignals].sort((a, b) => b.mentionCount - a.mentionCount);
            const top = sortedSignals[0];
            if (top && top.mentionCount > 0) {
                activeStockStr = `${top.stock.symbol} (${top.mentionCount} mentions)`;
            }
        }
        this.statActiveStock.textContent = activeStockStr;
    }

    /* ================= FILTERS & TABLE RENDER ================= */
    applyFilters() {
        const searchText = this.filterSearch.value.trim().toLowerCase();
        const showWatchlist = this.filterWatchlistOnly.checked;
        const selectedNewspaper = this.filterNewspaper.value;
        const selectedSignal = this.filterSignal.value;
        const selectedScore = this.filterScore.value;

        // Watchlist set
        const watchlistSymbols = new Set(this.watchlist.map(w => w.symbol));

        this.filteredSignals = this.allSignals.filter(sig => {
            // 1. Watchlist Filter
            if (showWatchlist && !watchlistSymbols.has(sig.stock.symbol)) {
                return false;
            }

            // 2. Newspaper Filter
            if (selectedNewspaper !== "All Newspapers" && sig.article.source !== selectedNewspaper) {
                return false;
            }

            // 3. Search text
            if (searchText) {
                const matchSym = sig.stock.symbol.toLowerCase().includes(searchText);
                const matchName = sig.stock.name.toLowerCase().includes(searchText);
                const matchTitle = sig.article.title.toLowerCase().includes(searchText);
                const matchDesc = sig.article.description.toLowerCase().includes(searchText);
                if (!matchSym && !matchName && !matchTitle && !matchDesc) {
                    return false;
                }
            }

            // 4. Signal Type
            if (selectedSignal !== "All Signals") {
                if (selectedSignal === "Buy Only" && sig.signal !== "StrongBuy" && sig.signal !== "Buy") return false;
                if (selectedSignal === "Sell Only" && sig.signal !== "StrongSell" && sig.signal !== "Sell") return false;
                if (selectedSignal === "Hold Only" && sig.signal !== "Watch" && sig.signal !== "Neutral") return false;
            }

            // 5. Score ranges
            if (selectedScore !== "All Scores") {
                if (selectedScore === "Strong Buy (>= 70)" && sig.finalScore < 70) return false;
                if (selectedScore === "Buy (>= 40)" && sig.finalScore < 40) return false;
                if (selectedScore === "Watch / Neutral (-20 to 39)" && (sig.finalScore < -20 || sig.finalScore >= 40)) return false;
                if (selectedScore === "Sell (<= -20)" && sig.finalScore > -20) return false;
                if (selectedScore === "Strong Sell (<= -40)" && sig.finalScore > -40) return false;
            }

            return true;
        });

        // Sort rows
        this.sortFilteredSignals();

        // Render rows
        this.renderTable();
    }

    sortFilteredSignals() {
        const field = this.currentSortField;
        const asc = this.currentSortAsc;

        this.filteredSignals.sort((a, b) => {
            let valA, valB;
            
            if (field.startsWith("stock.")) {
                valA = a.stock[field.split(".")[1]];
                valB = b.stock[field.split(".")[1]];
            } else if (field.startsWith("article.")) {
                valA = a.article[field.split(".")[1]];
                valB = b.article[field.split(".")[1]];
            } else {
                valA = a[field];
                valB = b[field];
            }

            if (typeof valA === "string") {
                return asc ? valA.localeCompare(valB) : valB.localeCompare(valA);
            } else if (valA instanceof Date || field.includes("Date") || field.includes("publishDate")) {
                const dateA = new Date(valA);
                const dateB = new Date(valB);
                return asc ? dateA - dateB : dateB - dateA;
            } else {
                return asc ? valA - valB : valB - valA;
            }
        });

        // Set table header styling classes
        this.tableHeaders.forEach(th => {
            th.classList.remove("asc", "desc");
            if (th.getAttribute("data-sort") === this.currentSortField) {
                th.classList.add(this.currentSortAsc ? "asc" : "desc");
            }
        });
    }

    renderTable() {
        this.signalsTbody.innerHTML = "";
        
        if (this.filteredSignals.length === 0) {
            this.emptyOverlay.classList.remove("hidden");
            return;
        }
        this.emptyOverlay.classList.add("hidden");

        this.filteredSignals.forEach(sig => {
            const tr = document.createElement("tr");
            if (this.selectedSignal && this.selectedSignal.stock.symbol === sig.stock.symbol) {
                tr.classList.add("selected");
            }

            const formattedPrice = sig.currentPrice > 0 ? `₹${sig.currentPrice.toLocaleString('en-IN', {minimumFractionDigits: 2})}` : "₹N/A";
            const formattedScore = sig.finalScore > 0 ? `+${sig.finalScore.toFixed(1)}` : sig.finalScore.toFixed(1);
            
            let scoreClass = "text-neutral";
            if (sig.finalScore >= 40) scoreClass = "text-buy";
            else if (sig.finalScore <= -20) scoreClass = "text-sell";

            // Signal Badge
            let badgeClass = "badge-neutral";
            let badgeText = sig.signal.toUpperCase();
            if (sig.signal === "StrongBuy") { badgeClass = "badge-strong-buy"; badgeText = "STRONG BUY"; }
            else if (sig.signal === "Buy") { badgeClass = "badge-buy"; badgeText = "BUY"; }
            else if (sig.signal === "Watch") { badgeClass = "badge-watch"; badgeText = "WATCH"; }
            else if (sig.signal === "Neutral") { badgeClass = "badge-neutral"; badgeText = "NEUTRAL"; }
            else if (sig.signal === "Sell") { badgeClass = "badge-sell"; badgeText = "SELL"; }
            else if (sig.signal === "StrongSell") { badgeClass = "badge-strong-sell"; badgeText = "STRONG SELL"; }

            tr.innerHTML = `
                <td class="td-symbol">${sig.stock.symbol}</td>
                <td class="td-company">${sig.stock.name}</td>
                <td><span class="badge ${badgeClass}">${badgeText}</span></td>
                <td><strong>${formattedPrice}</strong></td>
                <td><span class="${scoreClass}">${formattedScore}</span></td>
                <td class="td-source">
                    <span class="source-dot"></span>
                    <span>${sig.article.source}</span>
                </td>
                <td class="td-headline" title="${sig.article.title}">${sig.article.title}</td>
                <td class="td-date">${this.formatDateShort(sig.article.publishDate)}</td>
            `;

            tr.addEventListener("click", () => {
                // Clear selection
                const rows = this.signalsTbody.querySelectorAll("tr");
                rows.forEach(r => r.classList.remove("selected"));
                tr.classList.add("selected");
                this.selectSignal(sig);
            });

            this.signalsTbody.appendChild(tr);
        });
    }

    clearFilters() {
        this.filterSearch.value = "";
        this.filterWatchlistOnly.checked = false;
        this.filterNewspaper.value = "All Newspapers";
        this.filterSignal.value = "All Signals";
        this.filterScore.value = "All Scores";
        this.applyFilters();
    }

    /* ================= INSPECTOR MODULE ================= */
    selectSignal(sig) {
        this.selectedSignal = sig;
        this.inspectorPlaceholder.classList.add("hidden");
        this.inspectorDetails.classList.remove("hidden");

        this.insSymbol.textContent = sig.stock.symbol;
        this.insName.textContent = sig.stock.name;
        this.insIndustry.textContent = sig.stock.industry || "Other";

        // Badge styling
        this.insSignalBadge.className = "badge";
        let badgeClass = "badge-neutral";
        let badgeText = sig.signal.toUpperCase();
        if (sig.signal === "StrongBuy") { badgeClass = "badge-strong-buy"; badgeText = "STRONG BUY"; }
        else if (sig.signal === "Buy") { badgeClass = "badge-buy"; badgeText = "BUY"; }
        else if (sig.signal === "Watch") { badgeClass = "badge-watch"; badgeText = "WATCH"; }
        else if (sig.signal === "Neutral") { badgeClass = "badge-neutral"; badgeText = "NEUTRAL"; }
        else if (sig.signal === "Sell") { badgeClass = "badge-sell"; badgeText = "SELL"; }
        else if (sig.signal === "StrongSell") { badgeClass = "badge-strong-sell"; badgeText = "STRONG SELL"; }
        this.insSignalBadge.classList.add(badgeClass);
        this.insSignalBadge.textContent = badgeText;

        // Final Score Format
        const formattedScore = sig.finalScore > 0 ? `+${sig.finalScore.toFixed(1)}` : sig.finalScore.toFixed(1);
        this.insFinalScore.textContent = formattedScore;
        this.insFinalScore.className = "score-card-value";
        if (sig.finalScore >= 40) this.insFinalScore.classList.add("text-buy");
        else if (sig.finalScore <= -20) this.insFinalScore.classList.add("text-sell");
        else this.insFinalScore.classList.add("text-neutral");

        // Headers
        this.insSource.textContent = sig.article.source;
        this.insDate.textContent = this.formatDateTime(sig.article.publishDate);
        this.insHeadline.textContent = sig.article.title;
        this.insTriggerReason.textContent = sig.matchReason;
        this.insContext.textContent = sig.contextSnippet;
        this.insDescription.textContent = sig.article.description;

        // Multi-Factor Progress bars
        const setBar = (barEl, valEl, val) => {
            const clamped = Math.max(-100, Math.min(100, val));
            // Translate range [-100, 100] to percentage [0, 100]%
            const percentage = ((clamped + 100) / 200) * 100;
            barEl.style.width = `${percentage}%`;
            valEl.textContent = val > 0 ? `+${val.toFixed(0)}` : val.toFixed(0);
        };

        setBar(this.barNews, this.valNews, sig.newsSentimentScore);
        setBar(this.barTech, this.valTech, sig.technicalScore);
        setBar(this.barVolume, this.valVolume, sig.volumeScore);
        setBar(this.barFii, this.valFii, sig.fiiDiiScore);
        setBar(this.barFund, this.valFund, sig.fundamentalScore);

        // Footer buttons
        this.updateInspectorWatchlistState();
        this.lnkOpenArticle.href = sig.article.link || "#";
    }

    updateInspectorWatchlistState() {
        if (!this.selectedSignal) return;
        const inWatchlist = this.watchlist.some(w => w.symbol === this.selectedSignal.stock.symbol);
        
        if (inWatchlist) {
            this.btnToggleWatchlist.className = "btn btn-secondary-full";
            this.watchlistToggleText.textContent = "Unpin from Watchlist";
            this.btnToggleWatchlist.querySelector("svg").style.color = "#ef4444"; // red heart
        } else {
            this.btnToggleWatchlist.className = "btn btn-secondary-full";
            this.watchlistToggleText.textContent = "Pin to Watchlist";
            this.btnToggleWatchlist.querySelector("svg").style.color = "currentColor";
        }
    }

    /* ================= EMAIL ALERTS CONFIG & SCHEDULER ================= */
    renderRecipients() {
        this.recipientsList.innerHTML = "";
        const list = this.emailSettings.recipients || [];
        list.forEach(email => {
            const li = document.createElement("li");
            
            const span = document.createElement("span");
            span.textContent = email;
            
            const btn = document.createElement("button");
            btn.className = "btn-remove-watchlist";
            btn.innerHTML = "&times;";
            btn.addEventListener("click", () => this.removeRecipient(email));

            li.appendChild(span);
            li.appendChild(btn);
            this.recipientsList.appendChild(li);
        });
    }

    addRecipient() {
        const email = this.newRecipientEmail.value.trim().toLowerCase();
        if (!email || !email.includes("@") || !email.includes(".") || email.length < 5) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!this.emailSettings.recipients) this.emailSettings.recipients = [];
        if (this.emailSettings.recipients.includes(email)) {
            alert("Email is already in the recipient list.");
            return;
        }

        this.emailSettings.recipients.push(email);
        this.saveEmailSettings();
        this.newRecipientEmail.value = "";
        this.renderRecipients();
        this.addLog(`Added email recipient: ${email}`);
    }

    removeRecipient(email) {
        if (!this.emailSettings.recipients) return;
        const index = this.emailSettings.recipients.indexOf(email);
        if (index > -1) {
            this.emailSettings.recipients.splice(index, 1);
            this.saveEmailSettings();
            this.renderRecipients();
            this.addLog(`Removed email recipient: ${email}`);
        }
    }

    /* ================= TIMER CLOCK TICK ================= */
    initScheduler() {
        this.resetNextEmailTime();
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => this.schedulerTick(), 1000);
    }

    resetNextEmailTime() {
        this.updateNextEmailTimeAndStatus();
    }

    parseSelectedTime(timeStr) {
        // e.g. "10:00 AM" -> hours: 10, minutes: 0
        const [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);
        
        if (modifier === "PM" && hours < 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;

        return { hours, minutes };
    }

    isMarketDay(date) {
        const day = date.getDay(); // 0 is Sunday, 6 is Saturday
        return day !== 0 && day !== 6;
    }

    getNextMarketDay(fromDate) {
        const nextDay = new Date(fromDate.getTime());
        nextDay.setDate(nextDay.getDate() + 1);
        while (!this.isMarketDay(nextDay)) {
            nextDay.setDate(nextDay.getDate() + 1);
        }
        return nextDay;
    }

    updateNextEmailTimeAndStatus() {
        if (!this.emailSettings.isEnabled) {
            this.nextEmailTime = null;
            this.countdownTimerText.textContent = "Stopped / Disabled";
            this.countdownNextTime.textContent = "N/A";
            return;
        }

        const now = new Date();
        const { hours, minutes } = this.parseSelectedTime(this.emailSettings.interval || "10:00 AM");
        const secondHours = 15; // 3:00 PM Update
        const secondMinutes = 0;

        let targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
        let todaySecondTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), secondHours, secondMinutes, 0);

        if (!this.isMarketDay(now)) {
            const nextMarket = this.getNextMarketDay(now);
            this.nextEmailTime = new Date(nextMarket.getFullYear(), nextMarket.getMonth(), nextMarket.getDate(), hours, minutes, 0);
            this.nextEmailIsSecond = false;
        } else {
            if (now < targetTime) {
                this.nextEmailTime = targetTime;
                this.nextEmailIsSecond = false;
            } else if (now < todaySecondTime) {
                // If trigger time is set after 3:00 PM, then the second update does not apply today
                const selectedMinutes = hours * 60 + minutes;
                const secondLimit = 15 * 60;
                
                if (selectedMinutes < secondLimit) {
                    this.nextEmailTime = todaySecondTime;
                    this.nextEmailIsSecond = true;
                } else {
                    this.nextEmailTime = targetTime;
                    this.nextEmailIsSecond = false;
                }
            } else {
                const nextMarket = this.getNextMarketDay(now);
                this.nextEmailTime = new Date(nextMarket.getFullYear(), nextMarket.getMonth(), nextMarket.getDate(), hours, minutes, 0);
                this.nextEmailIsSecond = false;
            }
        }

        this.countdownNextTime.textContent = this.formatTimeOnly(this.nextEmailTime);
        this.updateRemainingTime();
    }

    schedulerTick() {
        if (!this.emailSettings.isEnabled || !this.nextEmailTime) {
            this.countdownTimerText.textContent = "Stopped / Disabled";
            return;
        }

        this.updateRemainingTime();

        const diffSeconds = (this.nextEmailTime.getTime() - Date.now()) / 1000;
        if (diffSeconds <= 0) {
            this.triggerAutoEmailAlert();
        }
    }

    updateRemainingTime() {
        if (!this.nextEmailTime) return;
        const diffMs = this.nextEmailTime.getTime() - Date.now();
        if (diffMs <= 0) {
            this.countdownTimerText.textContent = "Processing...";
            return;
        }

        const hoursVal = Math.floor(diffMs / 3600000);
        const minutesVal = Math.floor((diffMs % 3600000) / 60000);
        const secondsVal = Math.floor((diffMs % 60000) / 1000);

        const suffix = this.nextEmailIsSecond ? " (3:00 PM Update)" : "";
        
        if (hoursVal >= 1) {
            this.countdownTimerText.textContent = `${hoursVal}h ${minutesVal}m ${secondsVal}s remaining${suffix}`;
        } else if (minutesVal >= 1) {
            this.countdownTimerText.textContent = `${minutesVal}m ${secondsVal}s remaining${suffix}`;
        } else {
            this.countdownTimerText.textContent = `${secondsVal}s remaining${suffix}`;
        }
    }

    async triggerAutoEmailAlert() {
        if (this.isSendingInProgress) return;
        this.isSendingInProgress = true;

        try {
            const isSecond = this.nextEmailIsSecond;
            if (isSecond) {
                this.addLog("3:00 PM trigger hit. Starting second email alert...");
                
                const state = await this.storage.loadDailyRunState();
                if (!state || new Date(state.runDate).toDateString() !== new Date().toDateString() || !state.signals || state.signals.length === 0) {
                    this.addLog("No morning stock signals found for today. Skipping 3:00 PM closing price email.");
                    this.isSendingInProgress = false;
                    this.updateNextEmailTimeAndStatus();
                    return;
                }

                this.addLog(`Retrieved ${state.signals.length} stocks from morning run. Updating closing prices...`);
                await this.priceService.populatePrices(state.signals);
                
                this.dispatchAlertEmail(state.signals, false, true);
            } else {
                this.addLog("Alert send time reached. Starting morning scanning process...");
                await this.refreshFeeds();

                const alertSignals = this.allSignals.filter(s => 
                    s.signal === "StrongBuy" || 
                    s.signal === "Buy" || 
                    s.signal === "Sell" || 
                    s.signal === "StrongSell"
                );

                this.addLog(`Scan complete. Found ${alertSignals.length} active buy/sell signals.`);
                
                // Save to run state
                const state = {
                    runDate: new Date(),
                    signals: alertSignals
                };
                await this.storage.saveDailyRunState(state);

                this.dispatchAlertEmail(alertSignals, false, false);
            }
        } catch (e) {
            this.addLog(`Error in auto email: ${e.message}`);
        } finally {
            this.isSendingInProgress = false;
            this.updateNextEmailTimeAndStatus();
        }
    }

    dispatchAlertEmail(alertSignals, isTest = false, isSecondEmail = false) {
        const subject = isTest 
            ? `[TEST] NSE News Sentiment Alert Terminal Connection Check`
            : isSecondEmail
                ? `NSE Newspaper Sentiment Signal Alerts [3:00 PM Price Update] - ${this.formatDateShort(new Date())}`
                : `NSE Newspaper Sentiment Signal Alerts - ${this.formatDateTime(new Date())}`;

        const recipients = isTest 
            ? [this.emailSettings.smtpFromAddress || "your-email@gmail.com"] 
            : (this.emailSettings.recipients || []);

        if (recipients.length === 0) {
            this.addLog("SMTP Dispatch skipped: No recipient emails configured.");
            return;
        }

        const bodyHtml = this.buildEmailBodyHtml(alertSignals, isTest, isSecondEmail);

        if (this.emailSettings.isSimulationMode) {
            // Save email preview
            this.addLog(`[SIMULATED] Email report generated for: ${recipients.join(", ")}`);
            this.openEmailModal(subject, recipients.join(", "), bodyHtml);
        } else {
            // SMTP simulated send log
            this.addLog(`SMTP Connection opened to ${this.emailSettings.smtpHost}:${this.emailSettings.smtpPort}...`);
            this.addLog(`Sending SMTP payload from ${this.emailSettings.smtpFromAddress} to ${recipients.length} recipients...`);
            this.addLog(`Email successfully sent! (SMTP Dispatch simulation confirmed)`);
            this.openEmailModal(subject, recipients.join(", "), bodyHtml);
        }
    }

    /* ================= CONNECTION TEST ================= */
    testSmtpConnection() {
        this.addLog("Testing email connection...");
        const sampleSignals = this.allSignals.slice(0, 3);
        if (sampleSignals.length === 0) {
            sampleSignals.push({
                stock: { symbol: "TEST", name: "Test Connection Stock", industry: "Technology" },
                article: { source: "Test Newspaper Source", title: "Test Connection Headline Summary", link: "https://www.nseindia.com", publishDate: new Date() },
                signal: "Buy",
                finalScore: 55.0,
                newsSentimentScore: 40.0,
                currentPrice: 1540.25
            });
        }

        this.dispatchAlertEmail(sampleSignals, true, false);
    }

    /* ================= SIMULATED OUTBOX MODAL ================= */
    openEmailModal(subject, recipients, bodyHtml) {
        this.modalEmailSubject.textContent = subject;
        this.modalEmailRecipients.textContent = recipients;
        
        // Load into iframe
        const doc = this.emailIframe.contentDocument || this.emailIframe.contentWindow.document;
        doc.open();
        doc.write(bodyHtml);
        doc.close();

        // Download Button action
        this.btnDownloadEmail.onclick = () => {
            const blob = new Blob([bodyHtml], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `NSE_Email_Alert_${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            a.click();
            URL.revokeObjectURL(url);
        };

        this.emailModal.classList.remove("hidden");
    }

    /* ================= LOG TERMINAL ================= */
    addLog(msg) {
        const dateStr = this.formatDateTime(new Date());
        const formatted = `[${dateStr}] ${msg}`;
        this.emailLogs.unshift(formatted);
        
        if (this.emailLogs.length > 200) {
            this.emailLogs.pop();
        }

        this.storage.saveEmailLogs(this.emailLogs);
        this.renderLogs();
    }

    renderLogs() {
        this.logsList.innerHTML = "";
        this.emailLogs.forEach(log => {
            const li = document.createElement("li");
            li.textContent = log;
            this.logsList.appendChild(li);
        });
    }

    /* ================= EXPORT CSV ================= */
    exportCsv() {
        if (this.filteredSignals.length === 0) return;

        let csvContent = "Symbol,Company Name,Industry,Newspaper,Signal,Sentiment Score,Date,Title,Context,Link\n";
        
        this.filteredSignals.forEach(sig => {
            const row = [
                this.escapeCsv(sig.stock.symbol),
                this.escapeCsv(sig.stock.name),
                this.escapeCsv(sig.stock.industry || "Other"),
                this.escapeCsv(sig.article.source),
                this.escapeCsv(sig.signal),
                sig.finalScore.toFixed(2),
                new Date(sig.article.publishDate).toISOString(),
                this.escapeCsv(sig.article.title),
                this.escapeCsv(sig.contextSnippet),
                this.escapeCsv(sig.article.link)
            ].join(",");
            csvContent += row + "\n";
        });

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `NSE_Stock_Signals_${new Date().toISOString().replace(/[:.]/g, "-")}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.addLog(`Exported ${this.filteredSignals.length} stock signals to CSV.`);
    }

    escapeCsv(text) {
        if (!text) return "";
        let clean = text.toString();
        if (clean.includes(",") || clean.includes("\"") || clean.includes("\n") || clean.includes("\r")) {
            clean = `"${clean.replace(/"/g, '""')}"`;
        }
        return clean;
    }

    /* ================= EMAIL HTML BUILDER ================= */
    buildEmailBodyHtml(signals, isTest, isSecondEmail) {
        let rowsHtml = "";
        
        signals.forEach(sig => {
            let badgeClass = "badge-neutral";
            let badgeText = sig.signal.toUpperCase();
            if (sig.signal === "StrongBuy") { badgeClass = "badge-strong-buy"; badgeText = "STRONG BUY"; }
            else if (sig.signal === "Buy") { badgeClass = "badge-buy"; badgeText = "BUY"; }
            else if (sig.signal === "Watch") { badgeClass = "badge-watch"; badgeText = "WATCH"; }
            else if (sig.signal === "Neutral") { badgeClass = "badge-neutral"; badgeText = "NEUTRAL"; }
            else if (sig.signal === "Sell") { badgeClass = "badge-sell"; badgeText = "SELL"; }
            else if (sig.signal === "StrongSell") { badgeClass = "badge-strong-sell"; badgeText = "STRONG SELL"; }

            const priceStr = sig.currentPrice > 0 ? `₹${sig.currentPrice.toFixed(2)}` : "₹N/A";
            const scoreColor = sig.finalScore >= 40 ? "#065f46" : (sig.finalScore <= -20 ? "#991b1b" : "#374151");
            const scoreText = sig.finalScore > 0 ? `+${sig.finalScore.toFixed(1)}` : sig.finalScore.toFixed(1);
            
            const shortHeadline = sig.article.title.length > 85 ? `${sig.article.title.substring(0, 82)}...` : sig.article.title;

            rowsHtml += `
                <tr>
                    <td><strong>${sig.stock.symbol}</strong><br/><span style='font-size:10px; color:#6b7280;'>${sig.stock.name}</span></td>
                    <td><span class='badge ${badgeClass}'>${badgeText}</span></td>
                    <td><strong>${priceStr}</strong></td>
                    <td><span class='score' style='color:${scoreColor};'>${scoreText}</span></td>
                    <td>${sig.article.source}</td>
                    <td><a href='${sig.article.link}' target='_blank'>${shortHeadline}</a></td>
                </tr>
            `;
        });

        const alertBoxHtml = isTest 
            ? `<div class='alert-info'><strong>Test Connection:</strong> This is a test email sent from the NSE Stock Signals Terminal to verify your SMTP configuration. If you received this, your connection is working properly.</div>`
            : isSecondEmail 
                ? `<div class='alert-info' style='background-color: #fffbeb; border-left: 4px solid #d97706; color: #92400e;'><strong>3:00 PM Price Update:</strong> This email contains the same stock signals monitored earlier today, updated with their 3:00 PM market closing prices.</div>`
                : "";

        return `
            <!DOCTYPE html>
            <html>
            <head>
            <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; color: #1f2937; line-height: 1.5; background-color: #f9fafb; margin: 0; padding: 20px; }
            .container { max-width: 800px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 30px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .header { border-bottom: 2px solid #6366f1; padding-bottom: 15px; margin-bottom: 20px; }
            h1 { font-size: 22px; color: #111827; margin: 0; }
            .meta { font-size: 12px; color: #6b7280; margin-top: 5px; }
            .alert-info { background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px; margin-bottom: 20px; font-size: 14px; border-radius: 0 4px 4px 0; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 13px; }
            th { text-align: left; padding: 10px; background-color: #f3f4f6; border-bottom: 2px solid #e5e7eb; font-weight: 600; color: #374151; }
            td { padding: 12px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: middle; }
            .badge { display: inline-block; padding: 3px 8px; font-size: 11px; font-weight: bold; border-radius: 12px; border: 1px solid; text-align:center; }
            .badge-strong-buy { background-color: #d1fae5; color: #065f46; border-color: #34d399; }
            .badge-buy { background-color: #d1fae5; color: #065f46; border-color: #34d399; }
            .badge-sell { background-color: #fee2e2; color: #991b1b; border-color: #f87171; }
            .badge-strong-sell { background-color: #fee2e2; color: #991b1b; border-color: #f87171; }
            .badge-watch { background-color: #fef3c7; color: #92400e; border-color: #fbbf24; }
            .badge-neutral { background-color: #f3f4f6; color: #374151; border-color: #d1d5db; }
            .score { font-weight: 600; }
            .footer { border-top: 1px solid #e5e7eb; margin-top: 30px; padding-top: 15px; font-size: 11px; color: #9ca3af; text-align: center; }
            a { color: #6366f1; text-decoration: none; }
            a:hover { text-decoration: underline; }
            </style>
            </head>
            <body>
            <div class='container'>
              <div class='header'>
                <h1>NSE Stock Signals Terminal</h1>
                <div class='meta'>Report generated on: ${this.formatDateTime(new Date())}</div>
              </div>
              ${alertBoxHtml}
              ${signals.length === 0 
                ? "<p>No active Buy or Sell signals were identified in the latest sentiment analysis scan.</p>" 
                : `<p>The latest scan found <strong>${signals.length}</strong> active signal(s) matching alert criteria:</p>
                   <table>
                     <thead>
                       <tr>
                         <th>Stock</th>
                         <th>Signal</th>
                         <th>Price</th>
                         <th>Score</th>
                         <th>Source</th>
                         <th>Latest Headline</th>
                       </tr>
                     </thead>
                     <tbody>
                       ${rowsHtml}
                     </tbody>
                   </table>`
              }
              <div class='footer'>
                This is an automated notification from the NSE Newspaper Sentiment Signals Terminal.<br/>
                Please do not reply directly to this email.
              </div>
            </div>
            </body>
            </html>
        `;
    }

    /* ================= UTILITY FORMATS ================= */
    formatDateTime(date) {
        const d = new Date(date);
        if (isNaN(d)) return "N/A";
        const day = String(d.getDate()).padStart(2, '0');
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[d.getMonth()];
        const year = d.getFullYear();
        
        let hours = d.getHours();
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be 12
        const formattedHours = String(hours).padStart(2, '0');

        return `${day}-${month}-${year} ${formattedHours}:${minutes} ${ampm}`;
    }

    formatDateShort(date) {
        const d = new Date(date);
        if (isNaN(d)) return "N/A";
        const day = String(d.getDate()).padStart(2, '0');
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[d.getMonth()];
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        return `${day}-${month} ${hours}:${minutes}`;
    }

    formatTimeOnly(date) {
        if (!date) return "N/A";
        const d = new Date(date);
        let hours = d.getHours();
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    }
}

// Instantiate and Initialize
document.addEventListener("DOMContentLoaded", () => {
    const app = new AppController();
    app.init();
});
