var textural = require('../textural');

exports.format = {
    default: function (test) {

        test.strictEqual(textural('testText').format('snake'), 'test_text');

        test.done();
    }
};