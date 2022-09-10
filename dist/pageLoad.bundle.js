/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDom);

const createDom = (() => {
    ///Get body 
    const div = document.createElement('div'); 
    const span = document.createElement('span');
    const body = document.querySelector('body');

    ///CREATING DOM HEADER
    const header = document.createElement('header');
    header.textContent = 'Get\'er Done!';
    body.appendChild(header);

    ///CREATE CONTAINER TO HOLD STUFF
    const container = div.cloneNode();
    container.classList.add('container');
    body.appendChild(container)

    //CREATING DOM FORM
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const titleDiv = div.cloneNode();

    /////////////////////////////////////////////////////////
    //////////////////CREATING DOM SIDEBAR///////////////////
    /////////////////////////////////////////////////////////
    const sideBar = div.cloneNode();
    sideBar.classList.add('sideBar');
    container.appendChild(sideBar);

    const inbox = div.cloneNode();
    inbox.classList.add('inbox');
    inbox.textContent = 'Inbox';
    sideBar.appendChild(inbox)

    const projectsBar = div.cloneNode();
    projectsBar.classList.add('projectsBar');
    projectsBar.textContent = 'Projects';
    sideBar.appendChild(projectsBar);

    const addProjectBtn = (() => {
        const addProject = div.cloneNode();
        addProject.classList.add('addProject');
        addProject.textContent = '+ Add Project';
        projectsBar.appendChild(addProject)
      })();

      ///////////////////////////////////////////////////
      //////////CREATING DEFAULT ADDTASK CARD////////////
      ///////////////////////////////////////////////////
const tasksContainer = div.cloneNode();
tasksContainer.classList.add('tasksContainer');
container.appendChild(tasksContainer);


const createBtn = (() => {
  const taskBtn = div.cloneNode();
  taskBtn.classList.add('taskBtn');
  taskBtn.textContent = '+ Add Task';
  tasksContainer.appendChild(taskBtn);
})();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWUsU0FBUyxFQUFDO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlTG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNyZWF0ZURvbTtcclxuXHJcbmNvbnN0IGNyZWF0ZURvbSA9ICgoKSA9PiB7XHJcbiAgICAvLy9HZXQgYm9keSBcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuICAgIC8vL0NSRUFUSU5HIERPTSBIRUFERVJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0dldFxcJ2VyIERvbmUhJztcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICAvLy9DUkVBVEUgQ09OVEFJTkVSIFRPIEhPTEQgU1RVRkZcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRpdi5jbG9uZU5vZGUoKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5cclxuICAgIC8vQ1JFQVRJTkcgRE9NIEZPUk1cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRpdi5jbG9uZU5vZGUoKTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vL0NSRUFUSU5HIERPTSBTSURFQkFSLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBjb25zdCBzaWRlQmFyID0gZGl2LmNsb25lTm9kZSgpO1xyXG4gICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlQmFyJyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XHJcblxyXG4gICAgY29uc3QgaW5ib3ggPSBkaXYuY2xvbmVOb2RlKCk7XHJcbiAgICBpbmJveC5jbGFzc0xpc3QuYWRkKCdpbmJveCcpO1xyXG4gICAgaW5ib3gudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xyXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChpbmJveClcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0c0JhciA9IGRpdi5jbG9uZU5vZGUoKTtcclxuICAgIHByb2plY3RzQmFyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzQmFyJyk7XHJcbiAgICBwcm9qZWN0c0Jhci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XHJcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RzQmFyKTtcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gKCgpID0+IHtcclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gZGl2LmNsb25lTm9kZSgpO1xyXG4gICAgICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xyXG4gICAgICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XHJcbiAgICAgICAgcHJvamVjdHNCYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdClcclxuICAgICAgfSkoKTtcclxuXHJcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAvLy8vLy8vLy8vQ1JFQVRJTkcgREVGQVVMVCBBRERUQVNLIENBUkQvLy8vLy8vLy8vLy9cclxuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZGl2LmNsb25lTm9kZSgpO1xyXG50YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrc0NvbnRhaW5lcicpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZUJ0biA9ICgoKSA9PiB7XHJcbiAgY29uc3QgdGFza0J0biA9IGRpdi5jbG9uZU5vZGUoKTtcclxuICB0YXNrQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2tCdG4nKTtcclxuICB0YXNrQnRuLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xyXG4gIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tCdG4pO1xyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9