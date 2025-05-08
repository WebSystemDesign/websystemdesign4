document.addEventListener('DOMContentLoaded', () => {
    const head = document.querySelector('head');
    const iconHtml = `
        <link rel="apple-touch-icon" sizes="57x57" href="sources/icon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="sources/icon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="sources/icon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="sources/icon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="sources/icon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="sources/icon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="sources/icon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="sources/icon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="sources/icon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="sources/icon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="sources/icon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="sources/icon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="sources/icon/favicon-16x16.png">
        <link rel="manifest" href="sources/icon/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="sources/icon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
    `;

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = iconHtml.trim();
    Array.from(tempContainer.children).forEach(child => head.appendChild(child));
});
