<template>
  <div class="bg"></div>
  <div class="kybt-container">
    <div class="heading">
      <p style="text-shadow: 2px 2px 4px #000000;color: rgb(182, 34, 34);font-weight: bolder;font-size: 2rem;">Search For <span>TVShows</span></p>
    </div>
    <tvshowsearch />
  </div>
</template>

<script>
import tvshowsearch from './TVShowSearch.vue'
export default {
  components: {
    tvshowsearch,
  }
}
</script>

<style scoped>

.kybt-container{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(0,0,0,0.7);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-container {
    border-radius: 25px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    overflow: hidden;
}

.search-input {
  background-color: rgb(43, 41, 41);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  width: 300px;
  height: 25px;
  border-radius: 25px 0 0 25px;
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
