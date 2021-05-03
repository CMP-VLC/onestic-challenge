<template>
  <div class="recipe-form">
    <p>
      Introduce below the quantity for each ingredient you have and we will
      calculate how many Pasta Carbonara meals you can cook!
    </p>
    <form class="recipe-form__form">
      <label for="recipe-eggs">Eggs</label>
      <input
        class="recipe-form__form-input"
        v-model="eggs"
        type="number"
        name="eggs"
        id="recipe-eggs"
        value="0"
      />
      <label for="recipe-pasta">Pasta</label>
      <input
        class="recipe-form__form-input"
        v-model="pasta"
        type="number"
        name="pasta"
        id="recipe-pasta"
        value="0"
      />
      <label for="recipe-butter">Butter</label>
      <input
        class="recipe-form__form-input"
        v-model="butter"
        type="number"
        name="butter"
        id="recipe-butter"
        value="0"
      />
      <label for="recipe-milk">Milk</label>
      <input
        class="recipe-form__form-input"
        v-model="milk"
        type="number"
        name="milk"
        id="recipe-milk"
        value="0"
      />
      <label for="recipe-oil">Oil</label>
      <input
        class="recipe-form__form-input"
        v-model="oil"
        type="number"
        name="oil"
        id="recipe-oil"
        value="0"
      />
      <label for="recipe-bacon">Bacon</label>
      <input
        class="recipe-form__form-input"
        v-model="bacon"
        type="number"
        name="bacon"
        id="recipe-bacon"
        value="0"
      />
      <button type="submit" @click="calculate">Calculate</button>
    </form>
  </div>
</template>
<style lang="scss">
@import "./RecipeForm.scss";
</style>
<script>
export default {
  name: "RecipeForm",
  data() {
    return {
      meals: 0,
      eggs: 0,
      pasta: 0,
      butter: 0,
      milk: 0,
      oil: 0,
      bacon: 0,
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({}),
    },
    params: {
      type: String,
    },
  },
  methods: {
    calculate() {
    let resultEggs = Math.floor(this.eggs / this.ingredients.eggs);
    let resultPasta = Math.floor(this.pasta / this.ingredients.pasta);
    let resultButter = Math.floor(this.butter / this.ingredients.butter);
    let resultMilk = Math.floor(this.milk / this.ingredients.milk);
    let resultOil = Math.floor(this.oil / this.ingredients.oil);
    let resultBacon = Math.floor(this.bacon / this.ingredients.bacon);

    let totalResult = Math.min(resultEggs, resultPasta, resultButter, resultMilk, resultOil, resultBacon);
    console.log(resultEggs, resultPasta, resultButter, resultMilk, resultOil, resultBacon)
    console.log(totalResult)
    this.$router.push({name: 'Formula', params:{resultMeals : totalResult, ingredientsList: this.ingredients}})
    },
  },
};
</script>
