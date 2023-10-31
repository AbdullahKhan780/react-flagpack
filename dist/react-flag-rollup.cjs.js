'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const Flag = ({ code = "NL", size = "l", gradient = "", hasBorder = true, hasDropShadow = false, hasBorderRadius = true, className, }) => {
    const [FlagImg, setFlagImg] = React__namespace.useState(null);
    React__namespace.useEffect(() => {
        (async () => {
            var _a;
            return setFlagImg((_a = (await import(`./flags/${size}/${code}.svg`)).default) !== null && _a !== void 0 ? _a : null);
        })();
    }, [size, code]);
    return (React__namespace.createElement(React__namespace.Fragment, null, FlagImg && (React__namespace.createElement("div", { className: `flag
  ${gradient}
  size-${size}
  ${hasBorder ? "border" : ""}
  ${hasDropShadow ? "drop-shadow" : ""}
  ${hasBorderRadius ? "border-radius" : ""}
  ${className ? className.replace(/\s\s+/g, " ").trim() : ""}` },
        React__namespace.createElement("img", { src: FlagImg })))));
};

module.exports = Flag;
