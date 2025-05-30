(function() {
    'use strict';
	Lampa.Lang.add({
        pirate_store: {
            ru: "Дополнительные плагины",
            en: "Additional plugins",
            uk: "Додаткові плагіни",
        }
    });
    function addStore() {
        if (Lampa.Settings.main && !Lampa.Settings.main().render().find('[data-component="pirate_store"]').length) {
            var field = "<div class=\"settings-folder selector\" data-component=\"pirate_store\" data-static=\"true\">\n\t\t\t<div class=\"settings-folder__icon\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512\" height=\"512\" x=\"0\" y=\"0\" viewBox=\"0 0 490 490\" xml:space=\"preserve\"><path d=\"M153.125 317.435h183.75v30.625h-183.75z\" fill=\"white\"></path><circle cx=\"339.672\" cy=\"175.293\" r=\"42.642\" fill=\"white\"></circle><path d=\"M420.914 0H69.086C30.999 0 0 30.999 0 69.086v351.829C0 459.001 30.999 490 69.086 490h351.829C459.001 490 490 459.001 490 420.914V69.086C490 30.999 459.001 0 420.914 0zM69.086 30.625h237.883c-17.146 20.912-42.277 47.893-75.177 74.575-9.514-12.906-26.35-19.331-42.586-14.613l-69.644 20.242c-20.778 6.039-32.837 27.98-26.798 48.758l6.475 22.278c-21.375 8-44.353 14.456-68.614 19.267V69.086c0-21.204 17.257-38.461 38.461-38.461zm390.289 390.289c0 21.204-17.257 38.461-38.461 38.461H69.086c-21.204 0-38.461-17.257-38.461-38.461V232.459c27.504-4.993 53.269-12.075 77.268-20.816l3.811 13.111c6.038 20.778 27.98 32.837 48.758 26.799l69.643-20.242c20.778-6.039 32.837-27.98 26.799-48.758l-13.481-46.382c50.532-39.47 84.67-80.759 102.687-105.546h74.805c21.204 0 38.461 17.257 38.461 38.461v351.828z\" fill=\"white\"></path></svg>\n\t\t\t</div>\n\t\t\t<div class=\"settings-folder__name\">"+Lampa.Lang.translate('pirate_store')+"</div>\n\t\t</div>";
            Lampa.Settings.main().render().find('[data-component="more"]').after(field);
            Lampa.Settings.main().update();
        }
    }
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
