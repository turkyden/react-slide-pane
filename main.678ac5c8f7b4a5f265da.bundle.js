(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{360:function(module,exports,__webpack_require__){__webpack_require__(361),__webpack_require__(710),module.exports=__webpack_require__(711)},494:function(module,exports){},711:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(139);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(892)],module)}.call(this,__webpack_require__(294)(module))},892:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":893};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=892},893:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_slide_pane__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(39),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(139),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(359),withSourceLoader=__webpack_require__(356).withSource,__STORY__=(__webpack_require__(356).addSource,"import React from 'react'\nimport SlidePane from 'react-slide-pane'\nimport { storiesOf } from '@storybook/react'\nimport {\n  withKnobs,\n  number,\n  boolean,\n  select,\n  color\n} from '@storybook/addon-knobs'\nimport { useState } from '@storybook/addons'\n\nstoriesOf('SlidePane', module)\n  .addDecorator(withKnobs)\n  .add('default', () => (\n    <SlidePane width={600} height={400}>\n      <img src=\"https://jdc.jd.com/img/600x400?text=1\" />\n      <img src=\"https://jdc.jd.com/img/600x400?text=2\" />\n    </SlidePane>\n  ))\n  .add('diff img', () => (\n    <SlidePane width={600} height={400}>\n      <img src=\"https://picsum.photos/id/237/600/400\" />\n      <img src=\"https://picsum.photos/id/237/600/400?grayscale\" />\n    </SlidePane>\n  ))\n  .add('diff img sm', () => (\n    <SlidePane width={300} height={300}>\n      <img src=\"https://picsum.photos/id/237/300/300\" />\n      <img src=\"https://picsum.photos/id/237/300/300?grayscale\" />\n    </SlidePane>\n  ))\n  .add('initial(100)', () => (\n    <SlidePane width={600} height={400} initial={100}>\n      <img src=\"https://picsum.photos/id/237/600/400\" />\n      <img src=\"https://picsum.photos/id/237/600/400?grayscale\" />\n    </SlidePane>\n  ))\n  .add('initial(200px)', () => (\n    <SlidePane width={600} height={400} initial=\"200px\">\n      <img src=\"https://picsum.photos/id/237/600/400\" />\n      <img src=\"https://picsum.photos/id/237/600/400?grayscale\" />\n    </SlidePane>\n  ))\n  .add('initial(50%)', () => (\n    <SlidePane width={600} height={400} initial=\"50%\">\n      <img src=\"https://picsum.photos/id/237/600/400\" />\n      <img src=\"https://picsum.photos/id/237/600/400?grayscale\" />\n    </SlidePane>\n  ))\n  .add('with wrap outer html', () => (\n    <div\n      style={{\n        width: '100%',\n        height: '100vh',\n        display: 'flex',\n        justifyContent: 'center',\n        flexDirection: 'column',\n        alignItems: 'center'\n      }}\n    >\n      <SlidePane width={600} height={400}>\n        <img src=\"https://picsum.photos/id/237/600/400\" />\n        <img src=\"https://picsum.photos/id/237/600/400?grayscale\" />\n      </SlidePane>\n    </div>\n  ))\n  .add('with inner block', () => (\n    <SlidePane width={600} height={400}>\n      <div\n        style={{ width: '600px', height: '400px', backgroundColor: 'red' }}\n      ></div>\n      <div\n        style={{ width: '600px', height: '400px', backgroundColor: 'blue' }}\n      ></div>\n    </SlidePane>\n  ))\n  .add('split horizontal', () => (\n    <SlidePane width={600} height={400} split=\"horizontal\">\n      <img src=\"https://picsum.photos/id/237/600/400\" />\n      <img src=\"https://picsum.photos/id/237/600/400?grayscale\" />\n    </SlidePane>\n  ))\n"),__ADDS_MAP__={"slidepane--split-horizontal":{startLoc:{col:7,line:78},endLoc:{col:3,line:83},startBody:{col:27,line:78},endBody:{col:3,line:83}},"slidepane--with-inner-block":{startLoc:{col:7,line:68},endLoc:{col:3,line:77},startBody:{col:27,line:68},endBody:{col:3,line:77}},"slidepane--with-wrap-outer-html":{startLoc:{col:7,line:51},endLoc:{col:3,line:67},startBody:{col:31,line:51},endBody:{col:3,line:67}},"slidepane--initial-50":{startLoc:{col:7,line:45},endLoc:{col:3,line:50},startBody:{col:23,line:45},endBody:{col:3,line:50}},"slidepane--initial-200px":{startLoc:{col:7,line:39},endLoc:{col:3,line:44},startBody:{col:25,line:39},endBody:{col:3,line:44}},"slidepane--initial-100":{startLoc:{col:7,line:33},endLoc:{col:3,line:38},startBody:{col:23,line:33},endBody:{col:3,line:38}},"slidepane--diff-img-sm":{startLoc:{col:7,line:27},endLoc:{col:3,line:32},startBody:{col:22,line:27},endBody:{col:3,line:32}},"slidepane--diff-img":{startLoc:{col:7,line:21},endLoc:{col:3,line:26},startBody:{col:19,line:21},endBody:{col:3,line:26}},"slidepane--default":{startLoc:{col:7,line:15},endLoc:{col:3,line:20},startBody:{col:18,line:15},endBody:{col:3,line:20}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("SlidePane",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/index.stories.tsx",[],{},"/github/workspace/packages/react-slide-pane-storybook",{})).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slide_pane__WEBPACK_IMPORTED_MODULE_1__.a,{width:600,height:400},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://jdc.jd.com/img/600x400?text=1"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://jdc.jd.com/img/600x400?text=2"}))})).add("diff img",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slide_pane__WEBPACK_IMPORTED_MODULE_1__.a,{width:600,height:400},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400?grayscale"}))})).add("diff img sm",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slide_pane__WEBPACK_IMPORTED_MODULE_1__.a,{width:300,height:300},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/300/300"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/300/300?grayscale"}))})).add("initial(100)",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slide_pane__WEBPACK_IMPORTED_MODULE_1__.a,{width:600,height:400,initial:100},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400?grayscale"}))})).add("initial(200px)",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slide_pane__WEBPACK_IMPORTED_MODULE_1__.a,{width:600,height:400,initial:"200px"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400?grayscale"}))})).add("initial(50%)",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slide_pane__WEBPACK_IMPORTED_MODULE_1__.a,{width:600,height:400,initial:"50%"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400?grayscale"}))})).add("with wrap outer html",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slide_pane__WEBPACK_IMPORTED_MODULE_1__.a,{width:600,height:400},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400?grayscale"})))})).add("with inner block",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slide_pane__WEBPACK_IMPORTED_MODULE_1__.a,{width:600,height:400},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:"600px",height:"400px",backgroundColor:"red"}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:"600px",height:"400px",backgroundColor:"blue"}}))})).add("split horizontal",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slide_pane__WEBPACK_IMPORTED_MODULE_1__.a,{width:600,height:400,split:"horizontal"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://picsum.photos/id/237/600/400?grayscale"}))}))}.call(this,__webpack_require__(294)(module))}},[[360,1,2]]]);
//# sourceMappingURL=main.678ac5c8f7b4a5f265da.bundle.js.map