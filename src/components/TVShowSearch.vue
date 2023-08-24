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
      if (this.searchQuery.length === 0) {
        this.tvShows = [];
        return;
      }
      
      const apiKey = '398dd2815165a8a82bc1f26f61e23970';
      const apiUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${this.searchQuery}`;

      axios.get(apiUrl)
        .then(response => {
          this.tvShows = response.data.results;
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

.search-results{
    width: 300px;
    max-height: 300px;
    background-color: rgb(43, 41, 41);
}

</style>