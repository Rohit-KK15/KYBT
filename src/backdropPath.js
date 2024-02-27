import Vue from 'vue';

const state = Vue.observable({
  backdropPath: "/rIe3PnM6S7IBUmvNwDkBMX0i9EZ.jpg"
});

export const setBackdropPath = newPath => {
  state.backdropPath = newPath;
};

export const getBackdropPath = () => {
  return state.backdropPath;
};