import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i ++){
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(), // 모든 컴포넌트에서 공통적으로 쓸 수 있는 데이터
        num: 10,
        storeNum: 10,
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        },
    },
    mutations: { //mutations에서 state로 접근하는 방법은 첫번째로 주어진 인자 state를 접근해서 안에 속성으로 접근
        addOneItem(state, todoItem) {
            console.log('received');
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1); 
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            //로컬 스토리지의 데이터를 갱신
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        },
        
    }
});