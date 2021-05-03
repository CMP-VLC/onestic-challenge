<template>
  <div>
    <h1>List pasta carbonara secret ingredients</h1>
    <div>
      <table class="default">
        <tr>
          <th>Ingredient</th>

          <th>Size</th>
        </tr>

        <tr>
          <td>Pasta</td>

          <td>{{ ingredients.pasta }}</td>
        </tr>
        <tr>
          <td>Bacon</td>

          <td>{{ ingredients.bacon }}</td>
        </tr>

        <tr>
          <td>Eggs</td>

          <td>{{ ingredients.eggs }}</td>
        </tr>

        <tr>
          <td>Oil</td>

          <td>{{ ingredients.oil }}</td>
        </tr>

        <tr>
          <td>Butter</td>

          <td>{{ ingredients.butter }}</td>
        </tr>

        <tr>
          <td>Milk</td>

          <td>{{ ingredients.milk }}</td>
        </tr>
      </table>
    </div>

    <div style="padding-top: 10%">
      <Banner :text="firstMessage + numMeals" />
    </div>
    
  </div>
</template>

<script>
import Banner from "@/components/Banner/Banner";

export default {
  name: "Formula",
  components: {
    Banner,
  },
  data() {
    return {
      firstMessage:
        "With the ingredients entered you can make this number of dishes: ",
      numMeals: this.$route.params.resultMeals,
      ingredients: this.$route.params.ingredientsList,
    };
  },
};
</script>
