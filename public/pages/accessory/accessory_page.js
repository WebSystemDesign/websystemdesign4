class Accessory {
    template() {
        this.injectStyle();
        return `
            <div class = "wallpaper-container">
                <img id = "login-logo" src = "../../sources/logo_large.png" alt="logo-image">
                <div>
                    <h1>dd</h1>
                </div>
            </div>
        `;
    }
    loadCss() {
    if (!document.querySelector('link[href="./pages/console/console_page.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './pages/console/console_page.css';
        document.head.appendChild(link);
    }
}

}

export default new Accessory();