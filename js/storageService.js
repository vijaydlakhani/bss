class StorageService {

    async loadEmailSettings() {
        try {
            const data = localStorage.getItem('ns_email_settings');
            const defaultSettings = {
                isEnabled: false,
                isSimulationMode: true,
                gatewayMethod: "simulation",
                interval: "10:00 AM",
                smtpHost: "smtp.gmail.com",
                smtpPort: 587,
                smtpUsername: "",
                smtpPassword: "",
                smtpFromAddress: "",
                smtpSenderName: "NSE Signal Terminal",
                smtpEnableSsl: true,
                recipients: []
            };
            if (!data) return defaultSettings;
            return { ...defaultSettings, ...JSON.parse(data) };
        } catch (e) {
            console.error('Error loading email settings:', e);
            return {};
        }
    }

    async saveEmailSettings(settings) {
        try {
            localStorage.setItem('ns_email_settings', JSON.stringify(settings));
            return true;
        } catch (e) {
            console.error('Error saving email settings:', e);
            return false;
        }
    }

    async loadDailyRunState() {
        try {
            const data = localStorage.getItem('ns_daily_run_state');
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error loading daily run state:', e);
            return null;
        }
    }

    async saveDailyRunState(state) {
        try {
            localStorage.setItem('ns_daily_run_state', JSON.stringify(state));
            return true;
        } catch (e) {
            console.error('Error saving daily run state:', e);
            return false;
        }
    }

    async loadEmailLogs() {
        try {
            const data = localStorage.getItem('ns_email_logs');
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error loading email logs:', e);
            return [];
        }
    }

    async saveEmailLogs(logs) {
        try {
            localStorage.setItem('ns_email_logs', JSON.stringify(logs));
            return true;
        } catch (e) {
            console.error('Error saving email logs:', e);
            return false;
        }
    }
}

// Export for ES6/global usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StorageService;
} else {
    window.StorageService = StorageService;
}
