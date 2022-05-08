

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var List = styled__default["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n\n  details {\n    display: flex;\n    flex-direction: column;\n    border-bottom: 2px solid ", ";\n    box-sizing: border-box;\n    overflow: hidden;\n\n    &:first-of-type {\n      border-top: 2px solid ", ";\n    }\n\n    &[open] {\n      summary > span:last-of-type {\n        transform: rotate(90deg);\n        transition: transform 0.3s linear;\n      }\n\n      > div {\n        height: 300px;\n      }\n    }\n\n    > summary {\n      cursor: pointer;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      outline: none;\n      padding: 15px 10px;\n      box-sizing: border-box;\n      font-weight: 700;\n      font-size: 1.1em;\n      color: ", ";\n\n      > span:last-of-type {\n        transform: rotate(0);\n        transition: transform 0.3s ease-in-out;\n      }\n    }\n\n    > div {\n      margin: 0;\n      padding: 0 10px;\n      background-color: #f2f2f2;\n      overflow-y: auto;\n      height: 0;\n      transition: height 1s linear;\n    }\n  }\n"], ["\n  padding: 20px;\n\n  details {\n    display: flex;\n    flex-direction: column;\n    border-bottom: 2px solid ", ";\n    box-sizing: border-box;\n    overflow: hidden;\n\n    &:first-of-type {\n      border-top: 2px solid ", ";\n    }\n\n    &[open] {\n      summary > span:last-of-type {\n        transform: rotate(90deg);\n        transition: transform 0.3s linear;\n      }\n\n      > div {\n        height: 300px;\n      }\n    }\n\n    > summary {\n      cursor: pointer;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      outline: none;\n      padding: 15px 10px;\n      box-sizing: border-box;\n      font-weight: 700;\n      font-size: 1.1em;\n      color: ", ";\n\n      > span:last-of-type {\n        transform: rotate(0);\n        transition: transform 0.3s ease-in-out;\n      }\n    }\n\n    > div {\n      margin: 0;\n      padding: 0 10px;\n      background-color: #f2f2f2;\n      overflow-y: auto;\n      height: 0;\n      transition: height 1s linear;\n    }\n  }\n"])), function (_a) {
    var borderColor = _a.borderColor;
    return borderColor || '#bbb';
}, function (_a) {
    var borderColor = _a.borderColor;
    return borderColor || '#bbb';
}, function (_a) {
    var color = _a.color;
    return color || '#222';
});
var templateObject_1;

function Accordion(_a) {
    var _b = _a.source, source = _b === void 0 ? [] : _b, _c = _a.children, children = _c === void 0 ? [] : _c, className = _a.className, marker = _a.marker, color = _a.color, borderColor = _a.borderColor;
    var list = React.useRef(null);
    function toggle(index) {
        var _a, _b;
        var items = (_a = list.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('details');
        items === null || items === void 0 ? void 0 : items.forEach(function (item, i) { return i != index && item.removeAttribute('open'); });
        items &&
            ((_b = items[index]) === null || _b === void 0 ? void 0 : _b.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'center',
            }));
    }
    return (React__default["default"].createElement(List, { ref: list, className: className, color: color, borderColor: borderColor }, source.concat(children).map(function (item, index) { return (React__default["default"].createElement("details", { key: index.toString() },
        React__default["default"].createElement("summary", { onClick: function () { return toggle(index); } },
            React__default["default"].createElement("span", null, item.title || item.props.title),
            React__default["default"].createElement("span", { "data-color": color || '#000' }, marker || '+')),
        React__default["default"].createElement("div", null, item.text ? React__default["default"].createElement("p", null, item.text) : item))); })));
}
Accordion.propTypes = {
    source: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
        title: PropTypes__default["default"].string.isRequired,
        text: PropTypes__default["default"].string.isRequired,
    })),
};

exports["default"] = Accordion;
//# sourceMappingURL=index.js.map
