<template>
  <div class="header">
    <ul class="header__navigation">
      <li class="header__navigation-item">
        <router-link to="/" class="header__navigation-item-link">Home</router-link>
      </li>
      <li class="header__navigation-item">
        <router-link to="/meals" class="header__navigation-item-link">Carbonara Meals Calculator</router-link>
      </li>
      <li class="header__navigation-item">
        <router-link to="/restaurants" class="header__navigation-item-link">Our Restaurants</router-link>
      </li>
      <li class="header__navigation-item">
        <button @click="btnStyle">Light - Dark Mode</button>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
@import './Header.scss';
</style>
<script>
export default {
  name: 'Header',
  methods: {
    btnStyle() {
    var styleMode = document.body; 
    styleMode.classList.toggle("dark"); 
      
    },
  },
}
</script>
