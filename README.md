#textural.js#
##A javascript library for formatting and manipulating text.##

[![Build Status](https://travis-ci.org/ivanblazevic/textural-js.svg?branch=master)](https://travis-ci.org/ivanblazevic/textural-js)

<h2>How to use it</h2>
<h5>In browser</h5>

`<script src="textural.min.js"> </script>`
<h5>In Node.js</h5>

`npm install textural`<br/>
`var textural = require('textural');`


<h3>Example</h3>

`var sample = textural('sampleText').format('snake');`<br/>
`// 'sample_text'`


<h5>Format</h5>
Text can be formatted to any known format such as camelCase, snake_case, slug-case, human case.

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

<h4>Examples with prefix</h4>

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

<h4>Null handler (value to return if no text present)</h4>
<p><b>Note: </b><i>null handler</i> should be set always at the end of format string, you can put any text you like inside parentheses and also it can be added to any type of format
</p>
<table class="table table-bordered">
    <thead>
        <tr>
            <th>Format</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>(-)</td>
            <td>-</td>
        </tr>
        <tr>
            <td>lowersnake(No value)</td>
            <td>No value</td>
        </tr>
    </tbody>
</table>

<h2>Use it with angular</h2>

<h3>1) Create custom angular filter</h3>
<p>After library is included to your project we can create custom angular filter that we are planing to use later in html or in controlers</p>
<pre><code>angular.module('myAngularApp')
.filter('text', function() {
    return function(input, format) {
        return textural(input).format(format);
    }
 });</code></pre>

<h3>2) Use it</h3>
<pre><code>$scope.myModel = 'exampleText'</code></pre>

<h5>in html</h5>
<pre><code>{{ myModel | text:'snake' }}</code></pre>

<h5>or in controler</h5>
<pre><code>$scope.test = $filter('text')($scope.myModel, 'snake');</code></pre>

<h5>will output</h5>
<pre><code>// example_text</code></pre>


<h2>http://www.texturaljs.com</h2>






The MIT License

Copyright (c) 2015 Ivan Blazevic

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
