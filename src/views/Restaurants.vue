<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div>
      <input type="search" v-model="mySearch" />
      <button @click="filterResults()">Search store</button>
      <button v-if="viewOriginal" onclick="location.reload()">Original results</button>
    </div>
    <div class="pages__stores-list">
      <StoreList :stores="stores" :key="id" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import StoreList from "@/components/StoreList/StoreList";
const stores = require("@/assets/stores/stores.json");

export default {
  name: "Stores",
  components: {
    StoreList,
  },
  data() {
    return {
      currentTime: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      stores,
      mySearch: null,
      id: 1,
      viewOriginal: false
    };
  },
  computed: {
    welcomeMessage() {
      return (
        "Welcome to our restaurants list! Your local time is: " +
        this.currentTime
      );
    },
  },

  methods: {
    filterResults() {
      if(this.mySearch != null){
      this.stores = this.stores.filter((item) =>
        item.name.includes(this.mySearch)
      );
      this.id + 1;
      this.mySearch = '';
      this.viewOriginal = true;
      }
      return this.stores;
    },
  },

  mounted() {
   const setTimer = () =>
      setTimeout(() => {
        this.currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        setTimer();
      }, 1000);
    setTimer();
  },
};
</script>
