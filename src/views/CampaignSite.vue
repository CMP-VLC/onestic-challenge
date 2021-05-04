<template>
  <div>
    <h2>You can see restaurants in this link  <router-link :to="{ name: 'Restaurants' }">Restaurants</router-link></h2>
    <Banner
      :text="firstMessage"
      :backgroundMedia="imageObject"
      :textDistribution="topPosition"
    />
  </div>
  
</template>

<script>
import Banner from "@/components/Banner/Banner";

export default {
  name: "CampaignSite",
  components: {
    Banner,
  },
  data() {
    return {
      firstMessage: "Our famous carbonara pizza ",
      topPosition: "top",
      imageObject: {
        type: "image",
        src:
          "https://recetasdecocina.elmundo.es/wp-content/uploads/2018/02/pizza-carbonara.jpg",
      },
    };
  },
};
</script>
