const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const pendingPath = "todos";
    
    const getTodos = () =>
        fetch([baseUrl, pendingPath].join("/")).then((response) => response.json());
    
    const postTodo = (newtodo) =>
        fetch([baseUrl, pendingPath].join("/"), {
        method: "POST",
        body: JSON.stringify(newtodo),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        }).then((response) => response.json());
    
    const deleteTodo = (id) =>
    fetch([baseUrl, pendingPath, id].join("/"), {
        method: "DELETE",
    });
    
    
    // Edit
    const putTodo = (newtodo, id) =>
    fetch([baseUrl, pendingPath, id].join("/"), {
        method: "PUT",
        body: JSON.stringify(newtodo),
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        },
    }).then((response) => response.json());
    
    return { getTodos, postTodo, deleteTodo, putTodo };
    })();
      
    
    const View = (() => {
      const domstr1 = {
        pendingContainer: ".pendinglist__items",
        completedContainer: ".completedlist__items",
        inputboxbutton: ".btn",
        bothListContainer: ".lists__container",
      };
    
      const render = (ele, tmp) => {
        ele.innerHTML = tmp;
      };
    
      const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((ele) => {
          tmp += `
            <li id="${ele.id}" class="list__item">
                <text class="description">${ele.title}</text>
                <div class="option__buttons">
                              
                    <button class="edit-btn" id="${ele.id}">
                        <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24"  aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
                    </button>
                    
                    <button id="${ele.id}" class="delete-btn">
                        <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                    </button>
    
                    <button id="${ele.id}" class="swap-btn">
                        <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon" aria-label="fontSize small"><path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
                    </button>
                </div>
            </li>
          `;
        });
        return tmp;
      };
    
      const createTmpTwo = (arr) => {
        let tmp = "";
        arr.forEach((ele) => {
          tmp += `
          <li id="${ele.id}" class="list__item">
          <button id="${ele.id}" class="swap-btn">
            <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
          </button>
    
          <text class="description2">${ele.title}</text>
          <div class="option__buttons2">
    
          <button id="${ele.id}" class="edit-btn">
            <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24"  aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
          </button>
          
          <button id="${ele.id}" class="delete-btn">
            <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
          </button>
          </div>
        </li>
          `;
        });
        return tmp;
      };
    
      const editTodo = (arr, id, type) => {
        let tmp = "";
        arr.forEach((ele) => {
          if (+ele.id === +id) {
            if (type === "pending") {
              tmp += `
                <li class="list__item">
                  <input type="text" class="description" value="${ele.title}"></input>
                  <div class="option__buttons">
    
                    <button id="${ele.id}" class="swap-btn">
                      <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon" aria-label="fontSize small"><path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
                    </button>
    
                    <button id="${ele.id}" class="edit-btn">
                    <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24"  aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
                    </button>
    
                    <button id="${ele.id}" class="delete-btn">
                      <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                    </button>
                  </div>
                </li>
              `;
            } else if (type === "completed") {
              tmp = `
              <li class="list__item">
              <button id="${ele.id}" class="swap-btn">
                <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
              </button>
    
              <input type="text" class="description2" value="${ele.title}"></input>
              <div class="option__buttons2">
    
              <button id="${ele.id}" class="edit-btn">
                <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24"  aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
              </button>
    
              <button id="${ele.id}" class="delete-btn">
                <svg class="svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
              </button>
              </div>
            </li>
              `;
            }
          }
        });
    
        return tmp;
      };
    
      return { render, createTmp, domstr1, createTmpTwo, editTodo };
    })();
    
    const Model = ((api, view) => {
      const { getTodos, deleteTodo, postTodo, putTodo, swapTodo } = api;
    
      class State {
        #pendingList = [];
        #completedList = [];
        #editMode = false;
    
        get editMode() {
          return this.#editMode;
        }
    
        set editMode(newMode) {
          this.#editMode = newMode;
        }
    
        get pendinglist() {
          return this.#pendingList;
        }
        set pendinglist(newPendinglist) {
          this.#pendingList = newPendinglist;
    
          const pendingContainer = document.querySelector(
            view.domstr1.pendingContainer
          );
          const tmp = view.createTmp(this.#pendingList);
          view.render(pendingContainer, tmp);
        }
    
        get completedlist() {
          return this.#completedList;
        }
        set completedlist(newCompletedlist) {
          this.#completedList = newCompletedlist;
    
          const completedContainer = document.querySelector(
            view.domstr1.completedContainer
          );
          const tmp2 = view.createTmpTwo(this.#completedList);
          view.render(completedContainer, tmp2);
        }
      }
    
      class Todo {
        constructor(title, status) {
          this.title = title;
          this.completed = status;
          this.id = null;
        }
      }
    
      class Todo2 {
        constructor(title, status, theId) {
          this.title = title;
          this.completed = status;
          this.id = theId;
        }
      }
      return {
        getTodos,
        postTodo,
        deleteTodo,
        swapTodo,
        putTodo,
        State,
        Todo,
        Todo2,
      };
    })(Api, View);
    
    const Controller = ((model, view) => {
      const state = new Model.State();
    
      const addTodo = () => {
        const btn = document.querySelector(view.domstr1.inputboxbutton);
        function postNewTodo(e) {
          const parent = e.target.closest("div");
          const input = parent.querySelector("input");
          const inputValue = input.value;
    
          const newTodo = new model.Todo(inputValue, false);
    
          model.postTodo(newTodo).then((todo) => {
            state.pendinglist = [todo, ...state.pendinglist];
          });
          input.value = "";
        }
    
        btn.addEventListener("click", postNewTodo);
      };
    
      const deleteTodo = () => {
        const pendingContainer = document.querySelector(
          view.domstr1.pendingContainer
        );
        pendingContainer.addEventListener("click", (event) => {
          if (event.target.className === "delete-btn") {
            state.pendinglist = state.pendinglist.filter(
              (todo) => +todo.id !== +event.target.id
            );
            model.deleteTodo(event.target.id);
          }
        });
    
        const completedContainer = document.querySelector(
          view.domstr1.completedContainer
        );
        completedContainer.addEventListener("click", (event) => {
          if (event.target.className === "delete-btn") {
            state.completedlist = state.completedlist.filter(
              (todo) => +todo.id !== +event.target.id
            );
            model.deleteTodo(event.target.id);
          }
        });
      };
      const swap2 = () => {
        console.log("In function baby");
      };
      const swap = () => {
        const pendingContainer = document.querySelector(
          view.domstr1.pendingContainer
        );
    
        pendingContainer.addEventListener("click", (event) => {
          if (event.target.className === "swap-btn") {
            let item = state.pendinglist.filter(
              (todo) => +todo.id === +event.target.id
            );
            state.pendinglist = state.pendinglist.filter(
              (todo) => +todo.id !== +event.target.id
            );
            console.log(item[0].title);
            const newTodo = new model.Todo(item[0].title, true);
    
            model.deleteTodo(event.target.id).then(
              model.postTodo(newTodo).then((todo) => {
                state.completedlist = [todo, ...state.completedlist];
              })
            );
          }
        });
    
        const completedContainer = document.querySelector(
          view.domstr1.completedContainer
        );
    
        completedContainer.addEventListener("click", (event) => {
          if (event.target.className === "swap-btn") {
            let item2 = state.completedlist.filter(
              (todo) => +todo.id === +event.target.id
            );
            state.completedlist = state.completedlist.filter(
              (todo) => +todo.id !== +event.target.id
            );
            console.log(item2[0].title);
            const newTodo = new model.Todo(item2[0].title, false);
    
            model.deleteTodo(event.target.id).then(
              model.postTodo(newTodo).then((todo) => {
                state.pendinglist = [todo, ...state.pendinglist];
              })
            );
          }
        });
      };
    
      const editTodo = () => {
        const bothListContainer = document.querySelector(
          view.domstr1.bothListContainer
        );
        bothListContainer.addEventListener("click", (event) => {
          if (event.target.className === "edit-btn") {
            state.editMode = !state.editMode;
            let category =
              event.target.parentElement.parentElement.parentElement.className;
    
            const element = document.getElementById(event.target.id);
    
            if (state.editMode === true) {
              if (category === "pendinglist__items") {
                let tmp = view.editTodo(
                  state.pendinglist,
                  event.target.id,
                  "pending"
                );
                view.render(element, tmp);
              } else if (category === "completedlist__items") {
                let tmp = view.editTodo(
                  state.completedlist,
                  event.target.id,
                  "completed"
                );
                view.render(element, tmp);
              }
            }
    
            else if (state.editMode === false) {
              const parent = event.target.closest("li");
    
              const input = parent.querySelector("input");
              const inputValue = input.value;
              if (element.offsetParent.className === "pending__list") {
                let curTodo = state.pendinglist.filter(
                  (todo) => +todo.id === +event.target.id
                );
    
                const newTodo = new model.Todo2(
                  inputValue,
                  curTodo[0].completed,
                  +event.target.id
                );
    
                model.putTodo(newTodo, event.target.id).then((todo) => {
                  state.pendinglist = [todo, ...state.pendinglist];
                });
              }
    
              else if (element.offsetParent.className === "completed__list") {
                let curTodo = state.completedlist.filter(
                  (todo) => +todo.id === +event.target.id
                );
                const newTodo = new model.Todo2(
                  inputValue,
                  curTodo[0].completed,
                  +event.target.id
                );
    
                model.putTodo(newTodo, event.target.id).then((todo) => {
                  state.completedlist = [todo, ...state.completedlist];
                });
              }
            }
          }
        });
      };
    
      const init = () => {
        const pending = [];
        const completed = [];
        model.getTodos().then((todos) => {
          todos.forEach((todo) => {
            if (todo.completed === false) {
              pending.push(todo);
            } else {
              completed.push(todo);
            }
          });
          state.pendinglist = pending;
          state.completedlist = completed;
        });
    
        addTodo();
        deleteTodo();
        swap();
        editTodo();
        swap2();
      };
    
      const bootstrap = () => {
        init();
      };
    
      return { bootstrap };
    })(Model, View);
    
    Controller.bootstrap();
    