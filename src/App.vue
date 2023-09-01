<template>
  <div class="h-full"  id="app">
<!--    <HeaderPage/>-->
    <homePage/>
<!--    <router-view/>-->

  </div>
</template>


<script >
// import HeaderPage from "./components/pages/HeaderPage";
import HomePage from "./views/HomePage";

export default {
  name:"App",
  components : {
//    HeaderPage,
    HomePage,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


