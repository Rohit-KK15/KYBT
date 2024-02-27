<template>
  <div class="bg" :style="{ 'background-image': 'url(https://image.tmdb.org/t/p/original'+ backdropPath + ')' }"></div>
  <div class="main-container">
    <div class="kybt-container">
      <div class="heading">
        <p style="text-shadow: 2px 2px 4px #000000;color: rgb(241, 195, 12);font-weight: bolder;font-size: 2rem;">Know Your Binge Time</p>
      </div>
      <showtime />
      <tvshowsearch />
    </div>
  </div>
</template>

<script>
import tvshowsearch from './TVShowSearch.vue';
import showtime from './ShowTime.vue';
import { getBackdropPath } from '../backdropPath.js';

export default {
  components: {
    tvshowsearch,
    showtime,
  },
  data() {
    return {
      backdropPath: null // Default backdrop path
    };
  },
  created(){
    this.changeBackdrop();
  },
  methods: {
    changeBackdrop(){
      this.backdropPath=getBackdropPath();
    }
  }
}
</script>

<style scoped>

.main-container{
  z-index: 2;
  position: fixed;
  background-color: rgb(0,0,0,0.5);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  align-items: center;

}

.kybt-container{
  top: 0;
  left: 0;
  margin: 0;
}

.bg{
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  /* background-image: url("https://image.tmdb.org/t/p/original/rIe3PnM6S7IBUmvNwDkBMX0i9EZ.jpg"); */
  transition: all .3s;
  background-size: cover;
  background-position: 50% 0;
}



</style>
