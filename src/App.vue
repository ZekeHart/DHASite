<template>
  <div id="app">
    <router-view  class="main-content"/>
    <div class="nav">
      <router-link class="col" to="/"><div><font-awesome-icon icon="home" /><p>About</p></div>
      </router-link>

      <router-link class="col" to="/help"><div><font-awesome-icon icon="hand-holding-heart" /><p>Help</p></div>
      </router-link>

      <router-link class="col" to="/testimonies"><div><font-awesome-icon icon="comment-dots" /><p>Testimonies</p></div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-content {
  padding-bottom: 20%;
}
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
  background: white;
  display: flex;
  justify-content: space-between;
}

.col {
  padding: 30px;
  height: 25px;
  text-align: center;
  padding-top: 5px;
  align-self: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
