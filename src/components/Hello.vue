<template>
  <div id="app">
    <h1>记事本</h1>
    <input type="text" placeholder="请输入内容" v-model="msg" @keyup.enter="Add()">
    <ul class="items">
      <li class="item" v-for="(item,index) in list" :key="index" @dblclick="del(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
data() {
  return {
    list:[],
    msg:''
  }
},
methods:{
  Add(){
    this.list.push(this.msg);
    this.msg = "";
  },
  del(index){
    this.list.splice(index,1)
  }
}
}
</script>

<style>
#app{
  margin: 0 auto;
  text-align: center;
}
input{
  width: 300px;
  height: 25px;
  border-radius: 5px;
  outline: none;
  padding-left:10px ;
}
.items{
  list-style: none;
  padding: 0;
  width: 300px;
  margin: 0 auto;
}
.items .item{
  font-size: 25px;
  text-align: center;
  cursor: pointer;
}
</style>