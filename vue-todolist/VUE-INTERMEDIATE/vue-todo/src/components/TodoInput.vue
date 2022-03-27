<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>
    <span class="addContainer" @click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== ''){
        let obj = {completed : false, item: this.newTodoItem};
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        // 여기서 JSON.stringify 를 해주는 이유는 그냥 obj만 넣을 경우 로컬 스토리지에서는 확인이 안됨. 
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    },
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: #fff;
}
</style>
