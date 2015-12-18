var textural = require('../textural');

exports.format = {
    default: function (test) {

        var tests = [
            ['camel', 'exampleText'],
            ['snake', 'example_text'],
            ['slug', 'example-text'],
            ['human', 'example text'],
            ['t3', 'exa'],
            ['uppersnake', 'EXAMPLE_TEXT'],
            ['lowersnake', 'example_text'],
            ['capitalizesnake', 'Example_text']
        ]

        for (i = 0; i < tests.length; i++) {
            test.strictEqual(textural('exampleText').format(tests[i][0]), tests[i][1]);
        }

        test.strictEqual(textural('').format('(-)'), '-');
        test.strictEqual(textural('').format('lowersnake(No value)'), 'No value');

        test.expect(tests.length + 2);

        test.done();
    }
};