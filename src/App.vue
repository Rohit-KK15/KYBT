<template>
  <div class="bg"></div>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  font-family: 'Poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: rgb(0, 0, 0, 0.7); */
}

.bg{
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url(https://image.tmdb.org/t/p/original//wiE9doxiLwq3WCGamDIOb2PqBqc.jpg);
  transition: all .3s;
  background-size: cover;
  background-position: 50% 0;
}



</style>
