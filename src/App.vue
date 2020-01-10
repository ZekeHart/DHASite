<template>
  <div id="app">
    <router-view  class="main-content"/>
    <div class="nav">
      <router-link class="col" to="/">About</router-link>
      <router-link class="col" to="/help">Help</router-link>
      <router-link class="col" to="/testimonies">Testimonies</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-content {
  padding-bottom: 5%;
}
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5%;
  background: white;
  display: flex;
  justify-content: space-between;
}

.col {
  padding: 30px;
  padding-top: 5px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
