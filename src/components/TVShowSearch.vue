<template>
    <div class="search-container">
      <div :class="['search-box', { 'focused': isInputFocused }]">
      <fa :icon="['fas', 'magnifying-glass']" class="search-icon" color=" rgba(241, 195, 12)" />
      <input
        v-model="searchQuery"
        @focus="isInputFocused = true"
        @blur="isInputFocused = false"
        placeholder="Search TV Shows"
        @input="searchTVShows"
        class="search-input"
      />
      </div>
      <div v-if="tvShows.length > 0" class="search-results">
        <ul>
          <li v-for="tvShow in tvShows" :key="tvShow.id" @click="showTVShowDetails(tvShow.id)">{{ tvShow.name }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
// import { setBackdropPath } from '../backdropPath.js';

export default {
  data() {
    return {
      searchQuery: '',
      isInputFocused: false,
      tvShows: [],
      selectedTVShow: [],
      apiKey: '398dd2815165a8a82bc1f26f61e23970',
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
      
      const apiUrl = `https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${this.searchQuery}`;

      axios.get(apiUrl)
        .then(response => {
          this.tvShows = response.data.results;
          console.log(this.tvShows);
        })
        .catch(error => {
          console.error('Error fetching TV shows:', error);
        });
    },

    showTVShowDetails(tvShowId) {
      const apiUrl = `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${this.apiKey}`;

      axios.get(apiUrl)
        .then(response => {
          this.selectedTVShow = response.data;
          // setBackdropPath(this.selectedTVShow.setBackdropPath)
        })
        .catch(error => {
          console.error('Error fetching TV show details:', error);
        });
    }
  }
};
</script>

<style scoped>

.search-container{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

.search-box {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: inline-block;
  overflow: hidden;
  border-bottom: 2px solid rgba(241, 195, 12, 0.343);
  transition: .3s;
  
}

.focused {
  border-bottom-color: rgb(241, 195, 12);
}

.search-icon{
  height: 2.2rem;
  
}

.search-input {
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 30px;
  width: 500px;
  height: 40px;
}

.search-input:focus {
  outline: none;
}

.search-input:focus ~ .search-box {
    border-bottom:2px solid rgb(241, 195, 12);
}


.search-results{
    width: 500px;
    max-height: 300px;
    backdrop-filter: blur(5px);
    overflow: hidden;
    display: block;
    align-items: center;
}

.search-results li{
  cursor: pointer;
  list-style:none ;
  color: rgba(241, 195, 12, 0.824);
  font-weight: 400;
  text-align: start;
  font-size: 20px;
  padding-bottom: 10px;
}

</style>