#textural.js#
##A javascript library for formatting and manipulating text.##


###How to use it###
#####In browser#####

`<script src="textural.min.js"> </script>`
#####In Node.js#####

`npm install textural`<br/>
`var textural = require('textural');`


###Example###

`var sample = textural('sampleText').format('snake');`
`// 'sample_text'	


#####Format
Text can be formatted to any know format such as camelCase, snake_case, slug-case, human case.

Note: you can use upper, lower and capitalize prefix for any kind of format, e.g uppersnake will produce: SNAKE_CASE

<table class="table table-bordered">
    <thead>
        <tr>
            <th width="300">Description</th>
            <th>Format</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>convert to camelCase</td>
            <td>camel</td>
            <td>exampleText</td>
        </tr>
        <tr>
            <td>convert to snake_case</td>
            <td>snake</td>
            <td>example_text</td>
        </tr>
        <tr>
            <td>convert to slug-case</td>
            <td>slug</td>
            <td>example-text</td>
        </tr>
        <tr>
            <td>convert to normal text</td>
            <td>human</td>
            <td>example text</td>
        </tr>
        <tr>
            <td>truncate letters (change number after t according to your needs)</td>
            <td>t3</td>
            <td>exa</td>
        </tr>
    </tbody>
</table>


#####Example with upper prefix
<table class="table table-bordered">
    <thead>
        <tr>
            <th>Format</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>uppersnake</td>
            <td>EXAMPLE_TEXT</td>
        </tr>
        <tr>
            <td>lowersnake</td>
            <td>example_text</td>
        </tr>
        <tr>
            <td>capitalizesnake</td>
            <td>Example_Text</td>
        </tr>
    </tbody>
</table>



##http://www.texturaljs.com###




The MIT License

Copyright (c) 2015 Ivan Blazevic

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
