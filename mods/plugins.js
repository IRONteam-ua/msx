(function () {
    'use strict';

    Lampa.Lang.add({
        iron_store: {
            ru: "Дополнительные плагины",
            en: "Additional plugins",
            uk: "Додаткові плагіни",
        },
        iron_author: {
            ru: "Разработчик: @ironteam",
            en: "Developer: @ironteam",
            uk: "Розробник: @ironteam",
        }
    });

    function addStore() {
        if (Lampa.Settings.main && !Lampa.Settings.main().render().find('[data-component="iron_store"]').length) {
            const icon = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M19.428 13.341c-.59 0-1.133.177-1.588.478-.314.207-.69.106-.898-.208-.207-.314-.106-.69.208-.898a3.973 3.973 0 0 1 2.278-.685c2.206 0 4 1.794 4 4s-1.794 4-4 4h-3.571v-1.142c0-.49-.398-.888-.888-.888s-.888.398-.888.888v1.142h-3.572v-1.142c0-.49-.397-.888-.887-.888s-.889.398-.889.888v1.142h-3.57v-1.142c0-.49-.398-.888-.889-.888s-.889.398-.889.888v1.142H2c-1.103 0-2-.897-2-2s.897-2 2-2c.49 0 .888-.398.888-.888s-.398-.889-.888-.889c-1.103 0-2-.897-2-2s.897-2 2-2c.49 0 .888-.398.888-.888s-.398-.889-.888-.889c-1.103 0-2-.897-2-2s.897-2 2-2h3.571v1.143c0 .49.398.887.889.887s.889-.397.889-.887V4.572h3.57v1.143c0 .49.398.887.889.887s.889-.397.889-.887V4.572h3.572v1.143c0 .49.397.887.887.887s.888-.397.888-.887V4.572H20c1.103 0 2 .897 2 2s-.897 2-2 2c-.49 0-.888.398-.888.889s.398.888.888.888c1.103 0 2 .897 2 2s-.897 2-2 2z"/>
                </svg>`;

            const html = `
                <div class="settings-folder selector" data-component="iron_store" data-static="true">
                    <div class="settings-folder__icon">${icon}</div>
                    <div class="settings-folder__name">${Lampa.Lang.translate('iron_store')}</div>
                    <div class="settings-folder__descr">${Lampa.Lang.translate('iron_author')}</div>
                </div>`;

            Lampa.Settings.main().render().find('[data-component="more"]').after(html);
            Lampa.Settings.main().update();
        }
    }

    Lampa.Settings.listener.follow('open', function (e) {
        if (e.name === 'main') {
            e.body.find('[data-component="iron_store"]').on('hover:enter', function () {
                Lampa.Extensions.show({
                    store: 'https://ironteam-ua.github.io/msx/mods/extensions.json',
                    with_installed: true
                });
            });
        }
    });

    if (window.appready) addStore();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') addStore();
        });
    }

})();
