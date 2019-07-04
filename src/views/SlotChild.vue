<template>
  <div class="myDiv">
    <slot name="discard" :text1="text1" :text2="text2"></slot>
    <br>
    <slot :sex="gender" :age="age"></slot>
    <br>
    <slot name="abbreviation" v-bind:sex="gender"></slot>
    <br>
    <slot name="destructuring" v-bind:sex="gender"></slot>
    <br>
    <slot name="destructuring-rename" v-bind:sex="gender"></slot>
    <br>
    <slot name="header">here is header</slot>
    <br>
    <slot name="main">here is main</slot>
    <br>
    <slot name="footer">here is footer</slot>
    <br>
    <ul>
      <li v-for="todo in filteredTodos" v-bind:key="todo.id">
        <!--
    我们为每个 todo 准备了一个插槽，
    将 `todo` 对象作为一个插槽的 prop 传入。
        -->
        <slot name="todo" v-bind:todo="todo">
          <!-- 后备内容 -->
          {{ todo.text }}
        </slot>
      </li>
    </ul>
    <h1>父组件传过来的prop text: {{text}}</h1>
  </div>
</template>

<script>
export default {
  name: "child",
  props:{
    text: {
      type: String,
      required: true
    }
  },
  components: {},
  data() {
    return {
      gender: "男",
      age: 18,
      filteredTodos: [
        {id:1,text:'第一条'},
        {id:2,text:'第二条'},
        {id:3,text:'第三条'}
      ],
      text1: '废弃',
      text2: '惺惺惜惺惺'
    }
  },
  created(){
    console.log(this.$props,'this.props')
  }
}
</script>
<style lang="stylus" scoped>
.myDiv {
}
</style>