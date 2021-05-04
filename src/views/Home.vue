<template>
  <div class="page page__home">
    <p>{{ welcomeMessage }}</p>
    <div style="padding-top: 10%">
      <Banner :backgroundMedia="imageObject" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Banner from "@/components/Banner/Banner";

export default {
  name: "Home",
  components: {
    Banner,
  },
  data() {
    return {
      currentTime: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      imageObject: {
        type: "image",
        src:
          "https://media.istockphoto.com/photos/fresh-tasty-pizza-collage-set-on-white-background-big-set-of-pizzas-picture-id1225893660?k=6&m=1225893660&s=170667a&w=0&h=KmXEa4mdgwALWg71vajx1NlUNaYYGSs6dIM0F0rCgFM=",
      },
    };
  },
  computed: {
    welcomeMessage() {
      return "Welcome! Your local time is: " + this.currentTime;
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
