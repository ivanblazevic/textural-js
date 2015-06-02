/*!
 * textural.js
 * version : 0.0.1
 * author : Ivan Blazevic
 * license : MIT
 * http://ivanblazevic.github.com/textural-js/
 */

(function () {

    /************************************
        Constants
    ************************************/

    var textural,
        VERSION = '0.0.1',
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

    function transform (input, format) {
        
        // replace - or _ to space
        var parsed = input.replace(/-|_/g, ' ');
        
        // if no snake or slug case found, try to parse camel case
        if (parsed.indexOf(' ') < 0) {
            parsed = parsed.replace(/[A-Z]/g, ' $&');
        }
        parsed = parsed.toLowerCase();
        
        // handle if format should be uppercased
        var isUpper = format.indexOf('upper') > -1;
        if (isUpper) format = format.replace('upper', '');

        // handle if format should be lowercased
        var isLower = format.indexOf('lower') > -1;
        if (isLower) format = format.replace('lower', '');

        switch(format) {
            case 'slug':
                parsed = parsed.replace(/ /g, '-')
                break;
            case 'snake':
                parsed = parsed.replace(/ /g, '_')
                break;
            case 'camel':
                parsed = parsed.replace(/ ./g, function (search) { return search.replace(' ', '').toUpperCase();})
                break;
            default:
                parsed;
        }
        
        if (isUpper) {
            return parsed.toUpperCase();
        } else if (isLower) {
            return parsed.toLowerCase();
        } else {
            return parsed;
        }

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
        this['textural'] = textural;
    }

    /*global define:false */
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return textural;
        });
    }
}).call(this);
