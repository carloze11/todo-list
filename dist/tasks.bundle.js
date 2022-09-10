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
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "getTaskInfo": () => (/* binding */ getTaskInfo),
/* harmony export */   "taskComplete": () => (/* binding */ taskComplete),
/* harmony export */   "taskIncomplete": () => (/* binding */ taskIncomplete)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


//add tasks to DOM

const createTask = (() => {

const addTask = (title , dueDate = 'No date', priority = 'Low') => {  
  return {title, dueDate, priority}
};

  ///use enter button to get value from task input
  const createBtn = (() => {
    const taskBtn = div.cloneNode();
    taskBtn.classList.add('taskBtn');
    taskBtn.textContent = '+ Add Task';
    tasksContainer.appendChild(taskBtn);
  })();

  const createTaskElement = (el) => {
    if (event.key === 'Enter' && el.value !== ''){
      let task = document.querySelector('.taskBtn')
      const checkBox = createCheckbox();
      const deleteBtn = createDeleteBtn();
      const taskTitle = span.cloneNode();
      const taskInput = task.querySelector('.taskInput');
      taskTitle.classList.add('taskTitle');
      taskTitle.textContent = el.value;
      task.appendChild(taskTitle);
      task.insertBefore(checkBox, task.firstChild);
      task.appendChild(deleteBtn);
      taskInput.remove();
      task.classList.remove('taskBtn');
      task.classList.add('task');
      task.setAttribute('id', `task-${tasks.length}`);
      tasks.push(addTask(taskTitle.textContent));
      return createBtn();
    };
  };

  const createCheckbox = () => {
    const checkBox = document.createElement('input');
    checkBox.classList.add('checkBox');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', 'checkbox');
    return checkBox;
  }
  
  
  const createDeleteBtn = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'Delete';
    return deleteBtn;
  };
  
  
})();

const getTaskInfo = (() => {
    const taskInput = document.createElement('input');
    const taskBtn = document.querySelector('.taskBtn'); 
    taskInput.classList.add('taskInput');
    taskInput.setAttribute('onkeydown', 'createTaskElement(this)');
    taskInput.setAttribute('placeholder', '+ Add Task')
    taskInput.setAttribute('required','');
    taskInput.required = true;
    taskBtn.replaceChildren();
    taskBtn.appendChild(taskInput);
    taskInput.focus()
  })();

  const taskComplete = ((element) => {
    const task = element.parentNode;
    const deleteBtn = task.querySelector('button')
    task.style.color = 'lightgray';
    task.style.textDecoration = 'line-through';
    deleteBtn.remove();
  })();

  const taskIncomplete = ((element) => {
    const task = element.parentNode;
    const deleteBtn = createDeleteBtn();
    task.appendChild(deleteBtn);
    task.style.color = 'black';
    task.style.textDecoration = 'none';
  })();

  const deleteTask = ((element) => {
    const task = element.parentNode;
    const taskTitle = task.querySelector('.taskTitle')
    tasks = tasks.filter( (x,i) => `task-${i}` !== task.id)
    task.remove();
  })();

  
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGlFQUFlLFVBQVUsRUFBQztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGFBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEVBQUU7QUFDN0M7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcclxuXHJcblxyXG4vL2FkZCB0YXNrcyB0byBET01cclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2sgPSAoKCkgPT4ge1xyXG5cclxuY29uc3QgYWRkVGFzayA9ICh0aXRsZSAsIGR1ZURhdGUgPSAnTm8gZGF0ZScsIHByaW9yaXR5ID0gJ0xvdycpID0+IHsgIFxyXG4gIHJldHVybiB7dGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5fVxyXG59O1xyXG5cclxuICAvLy91c2UgZW50ZXIgYnV0dG9uIHRvIGdldCB2YWx1ZSBmcm9tIHRhc2sgaW5wdXRcclxuICBjb25zdCBjcmVhdGVCdG4gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFza0J0biA9IGRpdi5jbG9uZU5vZGUoKTtcclxuICAgIHRhc2tCdG4uY2xhc3NMaXN0LmFkZCgndGFza0J0bicpO1xyXG4gICAgdGFza0J0bi50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcclxuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tCdG4pO1xyXG4gIH0pKCk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVRhc2tFbGVtZW50ID0gKGVsKSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGVsLnZhbHVlICE9PSAnJyl7XHJcbiAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tCdG4nKVxyXG4gICAgICBjb25zdCBjaGVja0JveCA9IGNyZWF0ZUNoZWNrYm94KCk7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZURlbGV0ZUJ0bigpO1xyXG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBzcGFuLmNsb25lTm9kZSgpO1xyXG4gICAgICBjb25zdCB0YXNrSW5wdXQgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrSW5wdXQnKTtcclxuICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUaXRsZScpO1xyXG4gICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBlbC52YWx1ZTtcclxuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICB0YXNrLmluc2VydEJlZm9yZShjaGVja0JveCwgdGFzay5maXJzdENoaWxkKTtcclxuICAgICAgdGFzay5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG4gICAgICB0YXNrSW5wdXQucmVtb3ZlKCk7XHJcbiAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZSgndGFza0J0bicpO1xyXG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRhc2stJHt0YXNrcy5sZW5ndGh9YCk7XHJcbiAgICAgIHRhc2tzLnB1c2goYWRkVGFzayh0YXNrVGl0bGUudGV4dENvbnRlbnQpKTtcclxuICAgICAgcmV0dXJuIGNyZWF0ZUJ0bigpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVDaGVja2JveCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrQm94Jyk7XHJcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2tib3gnKTtcclxuICAgIHJldHVybiBjaGVja0JveDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgY29uc3QgY3JlYXRlRGVsZXRlQnRuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnRuJyk7XHJcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcclxuICAgIHJldHVybiBkZWxldGVCdG47XHJcbiAgfTtcclxuICBcclxuICBcclxufSkoKTtcclxuXHJcbmNvbnN0IGdldFRhc2tJbmZvID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tCdG4nKTsgXHJcbiAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza0lucHV0Jyk7XHJcbiAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCdvbmtleWRvd24nLCAnY3JlYXRlVGFza0VsZW1lbnQodGhpcyknKTtcclxuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJysgQWRkIFRhc2snKVxyXG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKTtcclxuICAgIHRhc2tJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICB0YXNrQnRuLnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgdGFza0J0bi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xyXG4gICAgdGFza0lucHV0LmZvY3VzKClcclxuICB9KSgpO1xyXG5cclxuICBjb25zdCB0YXNrQ29tcGxldGUgPSAoKGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHRhc2sgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXHJcbiAgICB0YXNrLnN0eWxlLmNvbG9yID0gJ2xpZ2h0Z3JheSc7XHJcbiAgICB0YXNrLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICBkZWxldGVCdG4ucmVtb3ZlKCk7XHJcbiAgfSkoKTtcclxuXHJcbiAgY29uc3QgdGFza0luY29tcGxldGUgPSAoKGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHRhc2sgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVEZWxldGVCdG4oKTtcclxuICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuICAgIHRhc2suc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgdGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICB9KSgpO1xyXG5cclxuICBjb25zdCBkZWxldGVUYXNrID0gKChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXNrID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudGFza1RpdGxlJylcclxuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKCAoeCxpKSA9PiBgdGFzay0ke2l9YCAhPT0gdGFzay5pZClcclxuICAgIHRhc2sucmVtb3ZlKCk7XHJcbiAgfSkoKTtcclxuXHJcbiAgZXhwb3J0IHtnZXRUYXNrSW5mbywgdGFza0NvbXBsZXRlLCB0YXNrSW5jb21wbGV0ZSwgZGVsZXRlVGFza30iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=