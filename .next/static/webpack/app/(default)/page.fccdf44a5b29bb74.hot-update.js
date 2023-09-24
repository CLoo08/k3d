"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(default)/page",{

/***/ "(app-pages-browser)/./components/preguntas.tsx":
/*!**********************************!*\
  !*** ./components/preguntas.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Preguntas; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Preguntas() {\n    _s();\n    const [expandedIndex, setExpandedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleQuestion = (index)=>{\n        if (expandedIndex === index) {\n            setExpandedIndex(null);\n        } else {\n            setExpandedIndex(index);\n        }\n    };\n    const preguntasRespuestas = [\n        {\n            pregunta: \"\\xbfPuede participar cualquier persona?\",\n            respuesta: \"S\\xed, siempre y cuando seas estudiante de alguna universidad o escuela de la Rep\\xfablica de Panam\\xe1 podr\\xe1s participar.\"\n        },\n        {\n            pregunta: \"\\xbfTendr\\xe1n comida?\",\n            respuesta: \"Si, todos los participantes inscritos contaran con una credencial que les permitir\\xe1 tener acceso a nuestro coffee break y almuerzo.\"\n        },\n        {\n            pregunta: \"\\xbfDar\\xe1n alg\\xfan certificado de participaci\\xf3n?\",\n            respuesta: \"As\\xed es, tendremos tambi\\xe9n certificados al primer, segundo y tercer lugar de la competencia. Al igual que premios por parte de nuestro patrocinador Tecology.\"\n        },\n        {\n            pregunta: \"\\xbfNecesito tener alg\\xfan conocimiento previo de modelado 3D?\",\n            respuesta: \"Para esta primera entrega, los participantes deben tener conocimiento sobre modelado 3D y la herramienta Blender ya que no contamos con capacitaci\\xf3n previa al evento.\"\n        },\n        {\n            pregunta: \"\\xbfNecesito llevar mi computadora?\",\n            respuesta: \"La respuesta es no, gracias a nuestro querido patrocinador Tecology contaremos con m\\xe1quinas en el torneo, para as\\xed poder ofrecerle la misma calidad a cada uno de los participantes por igual.\"\n        },\n        {\n            pregunta: \"\\xbfPuedo llevar mi computadora personal?\",\n            respuesta: \"No, para garantizar la igualdad de capacidades de hardware tendremos computadoras a tu disposici\\xf3n. Todas con las mismas configuraciones y el mismo rendimiento.\"\n        },\n        {\n            pregunta: \"\\xbfPuedo usar otra herramienta aparte de Blender?\",\n            respuesta: \"No, en esta competencia se podr\\xe1 utilizar \\xfanicamente la herramienta de Blender. De poder confirmarse que se us\\xf3 otra herramienta el participante ser\\xe1 descalificado autom\\xe1ticamente.\"\n        },\n        {\n            pregunta: \"\\xbfD\\xf3nde puedo contactarlos?\",\n            respuesta: \"Cualquier otra consulta no dudes en contactarnos a nuestro Instagram: @sparkutp\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-6xl mx-auto px-4 sm:px-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12 md:py-20 border-t border-gray-800\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-3xl mx-auto text-center pb-12 md:pb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"h2 mb-4\",\n                            id: \"preguntas\",\n                            children: \"Preguntas Frecuentes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-4xl mx-auto\",\n                        children: preguntasRespuestas.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-slate-300 rounded shadow mb-2 \".concat(expandedIndex === index ? \"open\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>toggleQuestion(index),\n                                        className: \"flex justify-between w-full text-xl font-semibold p-6 focus:outline-none\",\n                                        style: {\n                                            textAlign: \"left\"\n                                        },\n                                        children: [\n                                            item.pregunta,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-gray-600\",\n                                                children: expandedIndex === index ? \"-\" : \"+\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"answer \".concat(expandedIndex === index ? \"open\" : \"\"),\n                                        style: {\n                                            maxHeight: expandedIndex === index ? \"500px\" : \"0\",\n                                            transition: \"max-height 0.2s ease-in-out\",\n                                            overflow: \"hidden\",\n                                            marginLeft: \"30px\",\n                                            marginRight: \"30px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-white-700\",\n                                            style: {\n                                                whiteSpace: \"pre-wrap\"\n                                            },\n                                            children: item.respuesta\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n            lineNumber: 53,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\chris\\\\Documents\\\\k3d\\\\components\\\\preguntas.tsx\",\n        lineNumber: 52,\n        columnNumber: 3\n    }, this);\n}\n_s(Preguntas, \"bzV0X/G6ETLTHnPPQQ2qIqf2BxU=\");\n_c = Preguntas;\nvar _c;\n$RefreshReg$(_c, \"Preguntas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJlZ3VudGFzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFFekIsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdILCtDQUFRQSxDQUFnQjtJQUVsRSxNQUFNSSxpQkFBaUIsQ0FBQ0M7UUFDdEIsSUFBSUgsa0JBQWtCRyxPQUFPO1lBQzNCRixpQkFBaUI7UUFDbkIsT0FBTztZQUNMQSxpQkFBaUJFO1FBQ25CO0lBQ0Y7SUFFQSxNQUFNQyxzQkFBc0I7UUFDMUI7WUFDRUMsVUFBVTtZQUNWQyxXQUFXO1FBQ2I7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLFdBQVc7UUFDYjtRQUNBO1lBQ0VELFVBQVU7WUFDVkMsV0FBVztRQUNiO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxXQUFXO1FBQ2I7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLFdBQVc7UUFDYjtRQUNBO1lBQ0VELFVBQVU7WUFDVkMsV0FBVztRQUNiO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxXQUFXO1FBQ2I7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLFdBQVc7UUFDYjtLQUVEO0lBRUYscUJBQ0MsOERBQUNDO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBR0QsV0FBVTs0QkFBVUUsSUFBRztzQ0FBWTs7Ozs7Ozs7Ozs7a0NBSXpDLDhEQUFDSDt3QkFBSUMsV0FBVTtrQ0FDWkwsb0JBQW9CUSxHQUFHLENBQUMsQ0FBQ0MsTUFBTVYsc0JBQzlCLDhEQUFDSztnQ0FFQ0MsV0FBVyx3Q0FFVixPQURDVCxrQkFBa0JHLFFBQVEsU0FBUzs7a0RBR3JDLDhEQUFDVzt3Q0FDQ0MsU0FBUyxJQUFNYixlQUFlQzt3Q0FDOUJNLFdBQVk7d0NBQ1pPLE9BQU87NENBQUVDLFdBQVc7d0NBQU87OzRDQUUxQkosS0FBS1IsUUFBUTswREFDZCw4REFBQ2E7Z0RBQUtULFdBQVU7MERBQWlCVCxrQkFBa0JHLFFBQVEsTUFBTTs7Ozs7Ozs7Ozs7O2tEQUVuRSw4REFBQ0s7d0NBQ0NDLFdBQVcsVUFBZ0QsT0FBdENULGtCQUFrQkcsUUFBUSxTQUFTO3dDQUN4RGEsT0FBTzs0Q0FDTEcsV0FBV25CLGtCQUFrQkcsUUFBUSxVQUFVOzRDQUMvQ2lCLFlBQVk7NENBQ1pDLFVBQVU7NENBQ1ZDLFlBQVk7NENBQ1pDLGFBQWE7d0NBQ2Y7a0RBRUEsNEVBQUNDOzRDQUFFZixXQUFVOzRDQUFpQk8sT0FBTztnREFBRVMsWUFBWTs0Q0FBVztzREFDM0RaLEtBQUtQLFNBQVM7Ozs7Ozs7Ozs7OzsrQkF4QmRIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDbkI7R0E3RndCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ByZWd1bnRhcy50c3g/ODMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJlZ3VudGFzKCkge1xyXG4gIGNvbnN0IFtleHBhbmRlZEluZGV4LCBzZXRFeHBhbmRlZEluZGV4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCB0b2dnbGVRdWVzdGlvbiA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoZXhwYW5kZWRJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgc2V0RXhwYW5kZWRJbmRleChudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEV4cGFuZGVkSW5kZXgoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZWd1bnRhc1Jlc3B1ZXN0YXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHByZWd1bnRhOiAnwr9QdWVkZSBwYXJ0aWNpcGFyIGN1YWxxdWllciBwZXJzb25hPycsXHJcbiAgICAgIHJlc3B1ZXN0YTogJ1PDrSwgc2llbXByZSB5IGN1YW5kbyBzZWFzIGVzdHVkaWFudGUgZGUgYWxndW5hIHVuaXZlcnNpZGFkIG8gZXNjdWVsYSBkZSBsYSBSZXDDumJsaWNhIGRlIFBhbmFtw6EgcG9kcsOhcyBwYXJ0aWNpcGFyLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcmVndW50YTogJ8K/VGVuZHLDoW4gY29taWRhPycsXHJcbiAgICAgIHJlc3B1ZXN0YTogJ1NpLCB0b2RvcyBsb3MgcGFydGljaXBhbnRlcyBpbnNjcml0b3MgY29udGFyYW4gY29uIHVuYSBjcmVkZW5jaWFsIHF1ZSBsZXMgcGVybWl0aXLDoSB0ZW5lciBhY2Nlc28gYSBudWVzdHJvIGNvZmZlZSBicmVhayB5IGFsbXVlcnpvLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcmVndW50YTogJ8K/RGFyw6FuIGFsZ8O6biBjZXJ0aWZpY2FkbyBkZSBwYXJ0aWNpcGFjacOzbj8nLFxyXG4gICAgICByZXNwdWVzdGE6ICdBc8OtIGVzLCB0ZW5kcmVtb3MgdGFtYmnDqW4gY2VydGlmaWNhZG9zIGFsIHByaW1lciwgc2VndW5kbyB5IHRlcmNlciBsdWdhciBkZSBsYSBjb21wZXRlbmNpYS4gQWwgaWd1YWwgcXVlIHByZW1pb3MgcG9yIHBhcnRlIGRlIG51ZXN0cm8gcGF0cm9jaW5hZG9yIFRlY29sb2d5LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcmVndW50YTogJ8K/TmVjZXNpdG8gdGVuZXIgYWxnw7puIGNvbm9jaW1pZW50byBwcmV2aW8gZGUgbW9kZWxhZG8gM0Q/JyxcclxuICAgICAgcmVzcHVlc3RhOiAnUGFyYSBlc3RhIHByaW1lcmEgZW50cmVnYSwgbG9zIHBhcnRpY2lwYW50ZXMgZGViZW4gdGVuZXIgY29ub2NpbWllbnRvIHNvYnJlIG1vZGVsYWRvIDNEIHkgbGEgaGVycmFtaWVudGEgQmxlbmRlciB5YSBxdWUgbm8gY29udGFtb3MgY29uIGNhcGFjaXRhY2nDs24gcHJldmlhIGFsIGV2ZW50by4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJlZ3VudGE6ICfCv05lY2VzaXRvIGxsZXZhciBtaSBjb21wdXRhZG9yYT8nLFxyXG4gICAgICByZXNwdWVzdGE6ICdMYSByZXNwdWVzdGEgZXMgbm8sIGdyYWNpYXMgYSBudWVzdHJvIHF1ZXJpZG8gcGF0cm9jaW5hZG9yIFRlY29sb2d5IGNvbnRhcmVtb3MgY29uIG3DoXF1aW5hcyBlbiBlbCB0b3JuZW8sIHBhcmEgYXPDrSBwb2RlciBvZnJlY2VybGUgbGEgbWlzbWEgY2FsaWRhZCBhIGNhZGEgdW5vIGRlIGxvcyBwYXJ0aWNpcGFudGVzIHBvciBpZ3VhbC4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJlZ3VudGE6ICfCv1B1ZWRvIGxsZXZhciBtaSBjb21wdXRhZG9yYSBwZXJzb25hbD8nLFxyXG4gICAgICByZXNwdWVzdGE6ICdObywgcGFyYSBnYXJhbnRpemFyIGxhIGlndWFsZGFkIGRlIGNhcGFjaWRhZGVzIGRlIGhhcmR3YXJlIHRlbmRyZW1vcyBjb21wdXRhZG9yYXMgYSB0dSBkaXNwb3NpY2nDs24uIFRvZGFzIGNvbiBsYXMgbWlzbWFzIGNvbmZpZ3VyYWNpb25lcyB5IGVsIG1pc21vIHJlbmRpbWllbnRvLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcmVndW50YTogJ8K/UHVlZG8gdXNhciBvdHJhIGhlcnJhbWllbnRhIGFwYXJ0ZSBkZSBCbGVuZGVyPycsXHJcbiAgICAgIHJlc3B1ZXN0YTogJ05vLCBlbiBlc3RhIGNvbXBldGVuY2lhIHNlIHBvZHLDoSB1dGlsaXphciDDum5pY2FtZW50ZSBsYSBoZXJyYW1pZW50YSBkZSBCbGVuZGVyLiBEZSBwb2RlciBjb25maXJtYXJzZSBxdWUgc2UgdXPDsyBvdHJhIGhlcnJhbWllbnRhIGVsIHBhcnRpY2lwYW50ZSBzZXLDoSBkZXNjYWxpZmljYWRvIGF1dG9tw6F0aWNhbWVudGUuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByZWd1bnRhOiAnwr9Ew7NuZGUgcHVlZG8gY29udGFjdGFybG9zPycsXHJcbiAgICAgIHJlc3B1ZXN0YTogJ0N1YWxxdWllciBvdHJhIGNvbnN1bHRhIG5vIGR1ZGVzIGVuIGNvbnRhY3Rhcm5vcyBhIG51ZXN0cm8gSW5zdGFncmFtOiBAc3Bhcmt1dHAnLFxyXG4gICAgfVxyXG4gICAgLy8gQWdyZWdhIG3DoXMgcHJlZ3VudGFzIHkgcmVzcHVlc3RhcyBzZWfDum4gc2VhIG5lY2VzYXJpb1xyXG4gIF07XHJcblxyXG4gcmV0dXJuIChcclxuICA8c2VjdGlvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBzbTpweC02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTIgbWQ6cHktMjAgYm9yZGVyLXQgYm9yZGVyLWdyYXktODAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byB0ZXh0LWNlbnRlciBwYi0xMiBtZDpwYi0yXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIgbWItNFwiIGlkPSdwcmVndW50YXMnPlByZWd1bnRhcyBGcmVjdWVudGVzPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFByZWd1bnRhcyB5IHJlc3B1ZXN0YXMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAge3ByZWd1bnRhc1Jlc3B1ZXN0YXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXItc2xhdGUtMzAwIHJvdW5kZWQgc2hhZG93IG1iLTIgJHtcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkSW5kZXggPT09IGluZGV4ID8gJ29wZW4nIDogJydcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVF1ZXN0aW9uKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgcC02IGZvY3VzOm91dGxpbmUtbm9uZWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnByZWd1bnRhfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPntleHBhbmRlZEluZGV4ID09PSBpbmRleCA/ICctJyA6ICcrJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYW5zd2VyICR7ZXhwYW5kZWRJbmRleCA9PT0gaW5kZXggPyAnb3BlbicgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBleHBhbmRlZEluZGV4ID09PSBpbmRleCA/ICc1MDBweCcgOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdtYXgtaGVpZ2h0IDAuMnMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICczMHB4JyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczMHB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS03MDBcIiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5yZXNwdWVzdGF9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG4pO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcmVndW50YXMiLCJleHBhbmRlZEluZGV4Iiwic2V0RXhwYW5kZWRJbmRleCIsInRvZ2dsZVF1ZXN0aW9uIiwiaW5kZXgiLCJwcmVndW50YXNSZXNwdWVzdGFzIiwicHJlZ3VudGEiLCJyZXNwdWVzdGEiLCJzZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJpZCIsIm1hcCIsIml0ZW0iLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJzcGFuIiwibWF4SGVpZ2h0IiwidHJhbnNpdGlvbiIsIm92ZXJmbG93IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicCIsIndoaXRlU3BhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/preguntas.tsx\n"));

/***/ })

});