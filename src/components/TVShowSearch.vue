<template>
    <div class="search-container">
        <input v-model="searchQuery" @input="searchTVShows" placeholder="Search TV Shows" class="search-input">
    </div>
    <div v-if="tvShows.length > 0" class="search-results">
      <ul>
        <li v-for="tvShow in tvShows" :key="tvShow.id">{{ tvShow.name }}</li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      tvShows: []
    };
  },
  methods: {
    searchTVShows() {
      if (this.searchQuery.length <= 2) {
        if(this.searchQuery.length === 0){
          this.tvShows = []
          return;
        }
        this.tvShows = [{'name': 'Enter '+(3-this.searchQuery.length)+' more characters..... '}];
        console.log(this.tvShows)
        return;
      }
      
      const apiKey = '398dd2815165a8a82bc1f26f61e23970';
      const apiUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${this.searchQuery}`;

      axios.get(apiUrl)
        .then(response => {
          this.tvShows = response.data.results;
          console.log(this.tvShows);
        })
        .catch(error => {
          console.error('Error fetching TV shows:', error);
        });
    }
  }
};
</script>

<style scoped>

.search-container {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    overflow: hidden;
}

.search-input {

  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  width: 300px;
  height: 25px;
  border-bottom: 2px solid rgba(241, 195, 12, 0.343);
  transition: .5s;
  /* border-radius: 25px 0 0 25px; */
}

.search-input:focus{
  border-bottom: 2px solid rgba(241, 195, 12, 0.682);
  outline: none;
}

.search-results{
    width: 330px;
    max-height: 300px;
    backdrop-filter: blur(5px);
    overflow: hidden;
    display: block;
}

.search-results li{
  list-style:none ;
  color: rgba(241, 195, 12, 0.824);
  font-weight: 400;
  text-align: start;
}

</style>