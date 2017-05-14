!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e[e.DATA=0]="DATA",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e[e.__NOTHING=4]="__NOTHING"}(t.Level||(t.Level={}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),i=function(){function e(){}return e.msg=function(e,t,o,i,l,s){if("undefined"!=typeof window&&window.document){var r="gray";if(l===n.Level.INFO&&(r="deepskyblue"),l===n.Level.ERROR&&(r="red"),l===n.Level.WARN&&(r="orange"),s){var a=s-o.length;if(a>0)for(var d=0;d<a;d++)o+=" "}if("string"==typeof e){var u="%c "+o+"  %c "+e+" ",c="background: "+i+";color:white; border: 1px solid "+i+"; ",h="border: 1px solid "+r+"; ";t.unshift(h),t.unshift(c),t.unshift(u)}else{var u="%c "+o+" ",c="background: "+i+";color:white; border: 1px solid "+r+"; ";t.push(e),t.unshift(c),t.unshift(u)}}else t.unshift("["+o+"] "+e);console.log.apply(console,t)},e}();t.Display=i},function(e,t,o){"use strict";function n(e,t){return e.filter(function(e){return e===t||!(!t.match||"function"!=typeof t.match)&&t.match(e)}).length>0}Object.defineProperty(t,"__esModule",{value:!0}),t.contain=n},function(e,t,o){"use strict";function n(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}Object.defineProperty(t,"__esModule",{value:!0}),n(o(5)),n(o(0))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}(o(3))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(6),i=o(0),l=o(1),s=o(2),r=function(){function e(){}return e.create=function(t){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];var l;return void 0===e.instances[t]?(l=new n.Logger(t,e.getRandomColor(),e.isDevelopmentMode,o,e.isMutedModule(t),e.levels.length>0?e.fixedWidth:void 0,e.levels.length>0?e.display:void 0),e.instances[t]=l):l=e.instances[t],l},e.getRandomColor=function(){var e="012345".split(""),t="#";t+=e[Math.round(5*Math.random())],e="0123456789ABCDEF".split("");for(var o=0;o<5;o++)t+=e[Math.round(15*Math.random())];return void 0===t?this.getRandomColor():t},e.display=function(t,o,n,r){s.contain(e.levels,n)&&(n===i.Level.DATA&&l.Display.msg(t,o,t,e.instances[r].color,i.Level.DATA,e.instances[r].fixedWidth),n===i.Level.ERROR&&l.Display.msg(t,o,t,e.instances[r].color,i.Level.ERROR,e.instances[r].fixedWidth),n===i.Level.INFO&&l.Display.msg(t,o,t,e.instances[r].color,i.Level.INFO,e.instances[r].fixedWidth),n===i.Level.WARN&&l.Display.msg(t,o,t,e.instances[r].color,i.Level.WARN,e.instances[r].fixedWidth))},e.onlyLevel=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];if(e._logOnly)return void console.error("You should use funcion onlyLevel only once");e._logOnly&&(e._logOnly=!0),0!==t.length&&(e.levels=t)},e.onlyModules=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];if(e._logModules)return void console.error("You should use funcion onlyModules only once");0!==t.length&&(e.modules=t,e.muteAllOtherModules())},e.isMutedModule=function(t){return 0!=e.modules.length&&!s.contain(e.modules,t)},e.muteAllOtherModules=function(){for(var t in e.instances)s.contain(e.modules,t)||e.instances[t].mute()},e.setProductionMode=function(){if(e.modeIsSet)return void console.error("Mode is already set");void 0!==console&&void 0!==console.clear&&setTimeout(function(){console.clear(),console.log=function(){},console.error=function(){},console.warn=function(){},console.info=function(){}}),n.Logger.isProductionMode=!0,e.isDevelopmentMode=!1},e}();r.instances={},r.fixedWidth=0,r._logOnly=!1,r.levels=[],r._logModules=!1,r.modules=[],r.isDevelopmentMode=!0,r.modeIsSet=!1,t.Log=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),i=o(1),l=o(2),s=function(){function e(e,t,o,n,i,l,s){var r=this;this.name=e,this.color=t,this.developmentMode=o,this.allowed=n,this.isMuted=i,this.fixedWidth=l,this.display=s,this.d=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return r._data(e,t)},this.er=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return r._error(e,t)},this.i=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return r._info(e,t)},this.w=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return r._warn(e,t)},this.data=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return r._data(e,t)},this.error=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return r._error(e,t)},this.info=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return r._info(e,t)},this.warn=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return r._warn(e,t)}}return e.prototype._data=function(t){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return this.allowed.length>=1&&l.contain(this.allowed,n.Level.__NOTHING)&&!l.contain(this.allowed,n.Level.DATA)?this:e.isProductionMode?this:(void 0!==this.display?this.display(t,o,n.Level.DATA,this.name):(0===this.allowed.length||l.contain(this.allowed,n.Level.DATA))&&i.Display.msg.apply(void 0,[t].concat(o,[this.name,this.color,n.Level.DATA,this.fixedWidth])),this)},e.prototype._error=function(t){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return this.allowed.length>=1&&l.contain(this.allowed,n.Level.__NOTHING)&&!l.contain(this.allowed,n.Level.ERROR)?this:e.isProductionMode?this:(void 0!==this.display?this.display(t,o,n.Level.ERROR,this.name):(0===this.allowed.length||l.contain(this.allowed,n.Level.ERROR))&&i.Display.msg.apply(void 0,[t].concat(o,[this.name,this.color,n.Level.ERROR,this.fixedWidth])),this)},e.prototype._info=function(t){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return this.allowed.length>=1&&l.contain(this.allowed,n.Level.__NOTHING)&&!l.contain(this.allowed,n.Level.INFO)?this:e.isProductionMode?this:(void 0!==this.display?this.display(t,o,n.Level.INFO,this.name):(0===this.allowed.length||l.contain(this.allowed,n.Level.INFO))&&i.Display.msg.apply(void 0,[t].concat(o,[this.name,this.color,n.Level.INFO,this.fixedWidth])),this)},e.prototype._warn=function(t){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return this.allowed.length>=1&&l.contain(this.allowed,n.Level.__NOTHING)&&!l.contain(this.allowed,n.Level.WARN)?this:e.isProductionMode?this:(void 0!==this.display?this.display(t,o,n.Level.WARN,this.name):(0===this.allowed.length||l.contain(this.allowed,n.Level.WARN))&&i.Display.msg.apply(void 0,[t].concat(o,[this.name,this.color,n.Level.WARN,this.fixedWidth])),this)},e.prototype._logMessage=function(t,o){for(var n=[],s=2;s<arguments.length;s++)n[s-2]=arguments[s];return this.isMuted?this:this.allowed.length>=1&&l.contain(this.allowed,o)&&!l.contain(this.allowed,o)?this:e.isProductionMode?this:(void 0!==this.display?this.display(t,n,o,this.name):(0===this.allowed.length||l.contain(this.allowed,o))&&i.Display.msg(t,n,this.name,this.color,o,this.fixedWidth),this)},e.prototype.level=function(e){return this._level=e,this},e.prototype.mute=function(){this.isMuted=!0},e}();s.isProductionMode=!1,t.Logger=s}])});