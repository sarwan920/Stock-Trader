<template>
  <div class="row">
    <appStock v-for="stock in stocks" :key="stock" :stock="stock"></appStock>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: "110" },
        { id: 2, name: "Google", price: "300" },
        { id: 3, name: "Apple", price: "250" },
        { id: 4, name: "Facebook", price: "12" },
        { id: 4, name: "Facebook", price: "12" },
          
        
      ],
    };
  },
  components: {
    appStock: Stock,
  },
};
</script>

<style></style>
