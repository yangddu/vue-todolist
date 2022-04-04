import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';

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
        // todoItems: storage.fetch(),  모든 컴포넌트에서 공통적으로 쓸 수 있는 데이터
        num: 10,
        storeNum: 10,
    },
    getters: getters, 
    mutations: mutations,  //mutations에서 state로 접근하는 방법은 첫번째로 주어진 인자 state를 접근해서 안에 속성으로 접근
});