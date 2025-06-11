(function() {
    'use strict';
    Lampa.Lang.add({
        pirate_store: {
            ru: "Дополнительные плагины",
            en: "Additional plugins",
            uk: "Додаткові плагіни"
        },
        pirate_store_descr: {
            ru: "Разработчик: @IRONteam",
            en: "Developer: @IRONteam",
            uk: "Розробник: @IRONteam"
        }
    });

    function addStore() {
        if (Lampa.Settings.main && !Lampa.Settings.main().render().find('[data-component="pirate_store"]').length) {

            var svgIcon = `<svg width="512px" height="512px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M2,9 C2,7.34315 3.34315,6 5,6 L7.85,6 C8.15,6 8.33,5.69 8.22,5.42 C8.16,5.28 8.11,5.14 8.08,5 
                C7.75,3.51 8.87,2 10.5,2 C12.13,2 13.25,3.51 12.92,5 C12.88,5.14 12.83,5.28 12.78,5.42 C12.66,5.69 12.85,6 13.15,6 
                L15,6 C16.66,6 18,7.34 18,9 L18,10.85 C18,11.15 18.31,11.33 18.58,11.22 C18.72,11.16 18.86,11.11 19,11.08 
                C20.49,10.75 22,11.87 22,13.5 C22,15.13 20.49,16.25 19,15.92 C18.86,15.89 18.72,15.84 18.58,15.78 
                C18.31,15.67 18,15.85 18,16.15 L18,19 C18,20.66 16.66,22 15,22 L9,22 C7.34,22 6,20.66 6,19 L6,16.15 
                C6,15.85 5.69,15.67 5.42,15.78 C5.28,15.84 5.14,15.89 5,15.92 C3.51,16.25 2,15.13 2,13.5 C2,11.87 3.51,10.75 5,11.08 
                C5.14,11.11 5.28,11.16 5.42,11.22 C5.69,11.33 6,11.15 6,10.85 L6,9 Z"/>
            </svg>`;

            var field = `
                <div class="settings-folder selector" data-component="pirate_store" data-static="true">
                    <div class="settings-folder__icon">${svgIcon}</div>
                    <div class="settings-folder__name">${Lampa.Lang.translate('pirate_store')}</div>
                    <div class="settings-folder__descr">${Lampa.Lang.translate('pirate_store_descr')}</div>
                </div>`;

            Lampa.Settings.main().render().find('[data-component="more"]').after(field);
            Lampa.Settings.main().update();
        }
    }

    // Обробка кліку
    Lampa.Settings.listener.follow('open', function(e) {
        if (e.name == 'main') {
            e.body.find('[data-component="pirate_store"]').on('hover:enter', function() {
                Lampa.Extensions.show({
                    store: 'https://ironteam-ua.github.io/msx/mods/extensions.json',
                    with_installed: true
                });
            });
        }
    });

    if (window.appready) addStore();
    else {
        Lampa.Listener.follow('app', function(e) {
            if (e.type == 'ready') addStore();
        });
    }
})();
