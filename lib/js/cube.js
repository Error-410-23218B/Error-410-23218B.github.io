"use strict";
'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Component;
var _react = _interopRequireWildcard(require("react"));
var _fiber = require("@react-three/fiber");
var _drei = require("@react-three/drei");
var THREE = _interopRequireWildcard(require("three"));
var _client = require("react-dom/client");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var CubeFace = function CubeFace(_ref) {
  var position = _ref.position,
    rotation = _ref.rotation,
    color = _ref.color,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("mesh", {
    position: position,
    rotation: rotation
  }, /*#__PURE__*/_react["default"].createElement("planeGeometry", {
    args: [1.9, 1.9]
  }), /*#__PURE__*/_react["default"].createElement("meshBasicMaterial", {
    color: color
  }), /*#__PURE__*/_react["default"].createElement(_drei.Html, {
    transform: true,
    distanceFactor: 1.5,
    position: [0, 0, 0.01],
    rotation: [0, 0, 0],
    style: {
      width: '300px',
      height: '300px',
      background: 'white',
      overflow: 'auto'
    }
  }, children));
};
var Cube = function Cube() {
  var cubeRef = (0, _react.useRef)();
  (0, _fiber.useFrame)(function (state, delta) {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.1;
    }
  });
  return /*#__PURE__*/_react["default"].createElement("group", {
    ref: cubeRef
  }, /*#__PURE__*/_react["default"].createElement(CubeFace, {
    position: [0, 0, 0.95],
    rotation: [0, 0, 0],
    color: "red"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold mb-4"
  }, "Welcome to CubeTech"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-4"
  }, "Explore our innovative solutions for your business needs."), /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
  }, "Learn More"))), /*#__PURE__*/_react["default"].createElement(CubeFace, {
    position: [0, 0, -0.95],
    rotation: [0, Math.PI, 0],
    color: "blue"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold mb-4"
  }, "Contact Us"), /*#__PURE__*/_react["default"].createElement("form", {
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Your Name",
    className: "w-full px-3 py-2 border rounded"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    placeholder: "Your Email",
    className: "w-full px-3 py-2 border rounded"
  }), /*#__PURE__*/_react["default"].createElement("textarea", {
    placeholder: "Your Message",
    className: "w-full px-3 py-2 border rounded",
    rows: 3
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
  }, "Send Message")))), /*#__PURE__*/_react["default"].createElement(CubeFace, {
    position: [-0.95, 0, 0],
    rotation: [0, -Math.PI / 2, 0],
    color: "green"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold mb-4"
  }, "Our Products"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "space-y-2"
  }, /*#__PURE__*/_react["default"].createElement("li", {
    className: "p-2 bg-green-100 hover:bg-green-200 transition-colors rounded"
  }, "CubeTech Pro"), /*#__PURE__*/_react["default"].createElement("li", {
    className: "p-2 bg-green-100 hover:bg-green-200 transition-colors rounded"
  }, "CubeTech Lite"), /*#__PURE__*/_react["default"].createElement("li", {
    className: "p-2 bg-green-100 hover:bg-green-200 transition-colors rounded"
  }, "CubeTech Enterprise")))), /*#__PURE__*/_react["default"].createElement(CubeFace, {
    position: [0.95, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    color: "yellow"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold mb-4"
  }, "About Us"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-4"
  }, "CubeTech is a leading innovator in 3D web solutions."), /*#__PURE__*/_react["default"].createElement("img", {
    src: "/placeholder.svg?height=150&width=150",
    alt: "Company Logo",
    className: "mx-auto rounded"
  }))), /*#__PURE__*/_react["default"].createElement(CubeFace, {
    position: [0, 0.95, 0],
    rotation: [-Math.PI / 2, 0, 0],
    color: "purple"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4",
    style: {
      transform: 'rotate(180deg)'
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold mb-4"
  }, "Blog"), /*#__PURE__*/_react["default"].createElement("article", {
    className: "mb-4"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-semibold mb-2"
  }, "Latest in 3D Web Tech"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-600 mb-2"
  }, "Posted on May 15, 2024"), /*#__PURE__*/_react["default"].createElement("p", null, "Discover the latest trends in 3D web technology and how they're shaping the future of the internet.")), /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
  }, "Read More"))), /*#__PURE__*/_react["default"].createElement(CubeFace, {
    position: [0, -0.95, 0],
    rotation: [Math.PI / 2, 0, 0],
    color: "orange"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold mb-4"
  }, "Newsletter"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-4"
  }, "Stay updated with our latest news and offers!"), /*#__PURE__*/_react["default"].createElement("form", {
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    placeholder: "Your Email",
    className: "w-full px-3 py-2 border rounded"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
  }, "Subscribe")))));
};
function Component() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full h-screen bg-gray-100"
  }, /*#__PURE__*/_react["default"].createElement(_fiber.Canvas, {
    camera: {
      position: [0, 0, 5]
    }
  }, /*#__PURE__*/_react["default"].createElement("ambientLight", {
    intensity: 0.5
  }), /*#__PURE__*/_react["default"].createElement("pointLight", {
    position: [10, 10, 10]
  }), /*#__PURE__*/_react["default"].createElement(Cube, null), /*#__PURE__*/_react["default"].createElement(_drei.OrbitControls, {
    enableZoom: false
  })));
}
var domNode = document.getElementById("root");
var root = ReactDOM.createRoot(domNode);
root.render(/*#__PURE__*/_react["default"].createElement(Component, null));