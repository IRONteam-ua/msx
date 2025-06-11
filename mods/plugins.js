(function () {
    if (!window.appready) {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') init();
        });
    } else {
        init();
    }

    function init() {
        Lampa.Lang.add({
            pirate_store: {
                ru: "Дополнительные плагины",
                en: "Additional plugins",
                uk: "Додаткові плагіни"
            },
            pirate_author: {
                ru: "Разработчик: @IRONteam",
                en: "Developer: @IRONteam",
                uk: "Розробник: @IRONteam"
            }
        });

        const icon = `
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="white" d="M2,9 C2,7.34315 3.34315,6 5,6 H7.85 C8.15,6 8.33,5.69 8.22,5.42 C8.16,5.28 8.11,5.14 8.08,5 C7.75,3.51 8.87,2 10.5,2 C12.13,2 13.25,3.51 12.92,5 C12.89,5.14 12.84,5.28 12.78,5.42 C12.66,5.69 12.85,6 13.15,6 H15 C16.66,6 18,7.34 18,9 V10.85 C18,11.15 18.31,11.33 18.58,11.22 C18.72,11.16 18.86,11.11 19,11.08 C20.49,10.75 22,11.87 22,13.5 C22,15.13 20.49,16.25 19,15.92 C18.86,15.89 18.72,15.84 18.58,15.78 C18.31,15.66 18,15.85 18,16.15 V19 C18,20.66 16.66,22 15,22 H5 C3.34,22 2,20.66 2,19 V9 Z"/>
            </svg>`;

        const html = `
            <div class="settings-folder selector" data-component="pirate_store" data-static="true">
                <div class="settings-folder__icon">${icon}</div>
                <div class="settings-folder__name">${Lampa.Lang.translate('pirate_store')}</div>
                <div class="settings-folder__descr">${Lampa.Lang.translate('pirate_author')}</div>
            </div>`;

        const mainSettings = Lampa.Settings.main();

        if (!mainSettings.render().find('[data-component="pirate_store"]').length) {
            mainSettings.render().find('[data-component="more"]').after(html);
            mainSettings.update();
        }

        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name === 'main') {
                e.body.find('[data-component="pirate_store"]').on('hover:enter', function () {
                    Lampa.Extensions.show({
                        store: 'https://ironteam-ua.github.io/msx/mods/extensions.json',
                        with_installed: true
                    });
                });
            }
        });
    }
})();
