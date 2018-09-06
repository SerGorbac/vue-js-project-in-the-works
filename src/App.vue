<template>
  <div id="app">
    <router-view></router-view>
    <Header></Header>
    <Info></Info>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Info from "./components/Info.vue"

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Info

  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
