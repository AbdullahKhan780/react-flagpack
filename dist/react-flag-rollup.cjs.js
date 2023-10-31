"use strict";

var React = require("react");

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(
          n,
          k,
          d.get
            ? d
            : {
                enumerable: true,
                get: function () {
                  return e[k];
                },
              }
        );
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/ _interopNamespaceDefault(React);

const Flag = ({
  code = "NL",
  size = "l",
  gradient = "",
  hasBorder = true,
  hasDropShadow = false,
  hasBorderRadius = true,
  className,
}) => {
  return import(`./flags/${size}/${code}.svg`).then((url) =>{
    console.log(url);

    return React__namespace.createElement(
      "div",
      {
        className: `flag
        ${gradient}
        size-${size}
        ${hasBorder ? "border" : ""}
        ${hasDropShadow ? "drop-shadow" : ""}
        ${hasBorderRadius ? "border-radius" : ""}
        ${className ? className.replace(/\s\s+/g, " ").trim() : ""}`,
      },

      React__namespace.createElement("img", { src: url.default })
    )}
  ).catch((error)=> console.log(error));
};

module.exports = Flag;
