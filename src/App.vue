<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">表单联动</router-link>
      <!-- <router-link to="/Hook">Hook</router-link> -->
      <router-link to="/b">动态校验规则</router-link>
      <router-link to="/table">表格</router-link>
      <router-link to="/slot">插槽</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    display: block
  }
}
</style>
