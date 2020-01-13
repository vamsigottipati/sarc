<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 400;
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
.btn-outline {
  all:unset;
  background: transparent;
  border: 2px solid #42b983;
  height: auto;
  border-radius: 1000000px;
  padding: 8px 30px 8px 30px;
  align-self: center;
  text-align: center;
  cursor: pointer;
  transition: 0.35s;
  font-weight: 400;
}
.btn-outline:hover {
  background: #42b983;
  color: white;
}
</style>
