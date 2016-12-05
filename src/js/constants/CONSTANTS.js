/**
 * Created by mpeters on 28.04.16.
 */

"use strict";

module.exports = {
    IDENTIFIER: {
        BODY: 'body'
    },
    ROUTING: {
        TEMPLATES: {
            HOME:       'static/templates/home.html',
            CONTACT:    'static/templates/contact.html',
            ABOUT:      'static/templates/about.html'
        },
        URLS: {
            HOME:           '/',
            CONTACT:        '/kontakt/',
            ABOUT:          '/about/',
            DETAIL:         '/detail/',
            DETAIL_WITH_ID: '/detail/:detailID'
        }
    },
    CONTROLLER: {
        HOME:       'homeController',
        CONTACT:    'contactController',
        ABOUT:      'aboutController',
        DETAIL:     'detailController'
    },
    TEMPLATES: {
        DIRECTIVES: {
            LANGUAGE_SWITCHER: 'static/templates/language-switcher.html'
        },
        LANGUAGE_FILES: {
            DE: "/dist/locales/de_DE.json"
        }
    },
    SCROLL_DIRECTIONS: {
        NONE: 'none',
        UP: 'up',
        DOWN: 'down'
    },
    
    BREAK_POINTS : {
        SMALL : 760
    }
};
