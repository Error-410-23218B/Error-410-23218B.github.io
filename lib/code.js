"use strict";

var _java = _interopRequireDefault(require("highlight.js/lib/languages/java"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var hljs = require('highlight.js');
hljs.registerLanguage('java', _java["default"]);