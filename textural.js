/*!
 * textural.js
 * version : 0.1.5
 * author : Ivan Blazevic
 * license : MIT
 * git: https://github.com/ivanblazevic/textural-js
 * web: http://www.texturaljs.com
 */

(function () {

    /************************************
        Constants
    ************************************/

    var textural,
        VERSION = '0.1.5',
        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports);

    /************************************
        Constructors
    ************************************/

    textural = function (input) {
        return new Textural(input);
    };

    // version number
    textural.version = VERSION;

    function capitalize (string) {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function textParser(input, format) {
        // replace '-' or '_' to ' '
        var parsed = input.replace(/-|_/g, ' ');
        
        // if no snake or slug case found, try to parse camel case
        // second condition means we need to have at least one lower character
        // before upper character in order to properly detect camelCase
        if (parsed.indexOf(' ') < 0 && /[a-z][A-Z]/g.exec(parsed)) {
            parsed = parsed.replace(/[A-Z]/g, ' $&');
        }
        parsed = parsed.toLowerCase();
        
        // handle if format should be uppercased
        var isUpper = format.indexOf('upper') > -1;
        if (isUpper) format = format.replace('upper', '');

        // handle if format should be lowercased
        var isLower = format.indexOf('lower') > -1;
        if (isLower) format = format.replace('lower', '');

        // handle if format should be capitalized
        var isCapitalize = format.indexOf('capitalize') > -1;
        if (isCapitalize) format = format.replace('capitalize', '');

        // handle truncate
        var truncateLength = 0;
        if (/t\d.*/.exec(format)) {
            truncateLength = parseInt(format.replace('t', ''));
            format = 'truncate';
        }

        switch(format) {
            case 'truncate':
                parsed = String(parsed).substring(0, truncateLength);
                break;
            case 'slug':
                parsed = parsed.replace(/ /g, '-');
                break;
            case 'snake':
                parsed = parsed.replace(/ /g, '_');
                break;
            case 'camel':
                parsed = parsed.replace(/ ./g, function (search) { return search.replace(' ', '').toUpperCase();});
                break;
        }

        if (isUpper) {
            return parsed.toUpperCase();
        } else if (isLower) {
            return parsed.toLowerCase();
        } else if (isCapitalize) {
            return capitalize(parsed);
        } else {
            return parsed;
        }

    }

    function transform (input, format) {

        var nullHandler = format.match(/\((.*?)\)$/);
        
        // parse null handler value
        if (nullHandler) {
            format = format.replace(/\(.*?\)$/, '');
            nullHandler = nullHandler[1];
        }
        
        // prevent further execution if no null handler and no text
        if (!nullHandler && !input) {
            return '';
        }

        // match if should handle null
        if (nullHandler && !input) {
            return nullHandler;
        }

        // handle numbers
        if (isNumeric(input)) {
            return input;
        }

        return textParser(input, format);
    }

    /************************************
        textural Prototype
    ************************************/
    var Textural = function(input) {
        this.input = input;
    };

    Textural.prototype.format = function(format) {
        return transform(this.input, format);
    };

    textural.fn = Textural;

    /************************************
        Exposing textural
    ************************************/

    // CommonJS module is defined
    if (hasModule) {
        module.exports = textural;
    }

    /*global ender:false */
    if (typeof ender === 'undefined') {
        // here, `this` means `window` in the browser, or `global` on the server
        // add `textural` as a global object via a string identifier,
        // for Closure Compiler 'advanced' mode
        this.textural = textural;
    }

    /*global define:false */
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return textural;
        });
    }
}).call(this);
