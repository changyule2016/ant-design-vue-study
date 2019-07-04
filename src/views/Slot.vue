<template>
  <div class="myDiv">
    <child v-bind:text="text">
      <template slot="discard" slot-scope="data">
        <h1>废弃了的语法：v-slot和slot-scope {{data.text1}},{{data.text2}}</h1>
      </template>
      <template v-slot:default="{sex, age}">
        <h1>插槽内容访问子组件中的数据：gender:{{sex}} age:{{age}}</h1>
      </template>
      <template #abbreviation="data">
        <h1>v-slot:的缩写：gender:{{data.sex}}</h1>
      </template>
      <template v-slot:destructuring="{sex}">
        <h1>解构插槽Prop：gender:{{sex}}</h1>
      </template>
      <template v-slot:destructuring-rename="{sex: gender}">
        <h1>解构插槽Prop-prop重命名：gender:{{gender}}</h1>
      </template>
      <template v-slot:header>
        <h1>header</h1>
      </template>
      <template v-slot:main>
        <h1>main</h1>
      </template>
      <template v-slot:footer>
        <h1>footer</h1>
      </template>
      <template v-slot:todo="{todo}">
        <h1>这儿是{{todo.text}}</h1>
      </template>
    </child>
  </div>
</template>

<script>
import child from "./SlotChild"
export default {
  components: { child },
  props: {},
  data() {
    return {
      user: {
        name: 'cyl',
        age: 18
      },
      text: 'abcdefghijklmn',
    }
  }
}
</script>
<style lang="stylus" scoped>
.myDiv 
  text-align: center

</style>
