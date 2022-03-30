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
        //로컬 스토리지에서 전부 다 들고 와서 배열에 담아주고 반환해준다.
    },
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch() // 모든 컴포넌트에서 공통적으로 쓸 수 있는 데이터
    },
    getters: {
        getNumber(state) {
            return state.num;
        },
        doubleNumber(state) {
            return state.num * 2;
        }
    }
});