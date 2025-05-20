class Offline {
    template() {
        return `
            <div class="wallpaper-container">
                <div id="map" style="width:100%; height:500px;"></div>
            </div>
        `;
    }

    mounted() {
        import("./map.js");
    }
}

export default new Offline();