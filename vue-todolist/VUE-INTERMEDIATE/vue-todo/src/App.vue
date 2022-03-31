<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput
    v-on:addTodoItem="addOneItem" 
    ></TodoInput>
    <TodoList 
    v-bind:todoItems="todoItems"
     >
     </TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
    // data() {
    //   return {
    //     todoItems: [],
    //   }
    // },
    // methods: {
    // mutations 
    // addOneItem(todoItem) {
    //   const obj = { completed: false, item: todoItem };
    //   localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   todoItem.completed = !todoItem.completed;

    //   localStorage.removeItem(todoItem);
    //   this.todoItems.splice(index, 1); 
    // },
    // toggleOneItem(todoItem, index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   //로컬 스토리지의 데이터를 갱신
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  // },
  // created() { //인스턴스가 생성되자마자 호출되는 라이프사이클 훅 
  //   if(localStorage.length > 0) {
  //     for(let i = 0; i < localStorage.length; i ++){
  //       if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //       }
  //     }
  //   }
  // },
  components: {
    //컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
