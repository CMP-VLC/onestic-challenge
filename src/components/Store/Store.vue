<template>
  <div class="store" v-if="isVisible">
    <div class="store__wrapper">
      <h2 class="store__title">{{ title }}</h2>
      <span class="store__location">{{ location }}</span>
      <img :src="photo" :alt="title" :title="title" />
      <p class="store__joke">{{ jokeOfTheDay }}</p>
    </div>
  </div>
</template>
<style lang="scss">
@import './Store.scss';
</style>
<script>
import axios from 'axios';

export default {
  name: 'Store',
  data () {
    return {
      jod: 'Getting Joke of the Day...'
    };
  },
  props: {
    title: {
      type: String,
      default: null
    },
    location: {
      type: String,
      default: null
    },
    photo: {
      type: String,
      default: null
    }
  },
  computed: {
    isVisible () {
      return !!this.title && !!this.location;
    },
    jokeOfTheDay () {
      return this.jod;
    }
  },
  methods: {
    async storeJoke () {
      try {
        const joke = await axios('https://api.jokes.one/jod?category=knock-knock');

        this.jod = joke.data.contents.jokes[0].joke.text;
      } catch (err) {
        this.jod = 'Ouch! Can\'t get the Joke of the Day for this store...'
      }
    }
  },
  async mounted () {
    await this.storeJoke();
  }
}
</script>
