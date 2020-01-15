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

.rotator {
    -webkit-animation: rotator 1s ease-in-out infinite;
      animation: rotator 1s ease-in-out infinite;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #EA4360;
}
.btn-outline {
  all:unset;
  background: transparent;
  border: 2px solid #EA4360;
  height: auto;
  border-radius: 1000000px;
  padding: 8px 30px 8px 30px;
  align-self: center;
  text-align: center;
  cursor: pointer;
  transition: 0.35s;
  font-weight: 500;
}
.btn-outline:hover {
  background: #EA4360;
  color: white;
}

 @-webkit-keyframes rotator {
  0% {
      transform: rotate(0deg)
  }
  100% {
      transform: rotate(360deg)
  }
}
@keyframes rotator {
  0% {
      transform: rotate(0deg)
  }
  100% {
      transform: rotate(360deg)
  }
}

</style>
