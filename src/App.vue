<template>
  <div id="app">
    <Header />
    <Content />
    <Bottom />
<!--    <router-link to="/foo">Перейти к Foo</router-link>-->
<!--    <router-link to="/bar">Перейти к Bar</router-link>-->
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Bottom from './components/Bottom.vue'

export default {
  name: 'app',
  components: {
      Header,
      Content,
      Bottom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
