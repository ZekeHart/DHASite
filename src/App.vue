<template>
<div>
  <mq-layout mq="mobile">
    <router-view  class="main-content"/>
    <div class="nav">
      <router-link class="col" to="/"><div><font-awesome-icon icon="home" size="2x" /><p>About</p></div>
      </router-link>

      <router-link class="col" to="/help"><div><font-awesome-icon icon="hand-holding-heart" size="2x" /><p>Help</p></div>
      </router-link>

      <router-link class="col" to="/testimonies"><div><font-awesome-icon icon="comment-dots" size="2x"/><p>Testimonies</p></div>
      </router-link>
    </div>
  </mq-layout>
  <mq-layout mq="kyle+">
    <div class="nav-big">
      <router-link class="col" to="/"><div><font-awesome-icon icon="home" size="2x" /><p>About</p></div>
      </router-link>

      <router-link class="col" to="/help"><div><font-awesome-icon icon="hand-holding-heart" size="2x" /><p>Help</p></div>
      </router-link>

      <router-link class="col" to="/testimonies"><div><font-awesome-icon icon="comment-dots" size="2x"/><p>Testimonies</p></div>
      </router-link>
    </div>
    <router-view  class="main-content"/>
  </mq-layout>
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
  align-items: center;
}

.nav-big {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  // border: #2c3e50 solid;
  box-shadow: 0 0 0 .2rem #2c3e50;

  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 99;
}

.col {
  margin-left: 20px;
  margin-right: 20px;
  // height: 30px;
  text-align: center;
  align-self: center;
}

// .nav a {
//   font-weight: bold;
//   color: #2c3e50;
// }

.nav a.router-link-exact-active {
  color: #2c3e50;
}

.nav-big a.router-link-exact-active {
  color: #2c3e50;
}
</style>
