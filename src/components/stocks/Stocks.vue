<template>
  <div class="row">
    <appStock v-for="stock in stocks" :key="stock.id" :stock="stock"></appStock>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Stock from "./Stock";

export default {
  components: {
    appStock: Stock,
  },
  computed:{
    stocks(){
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style></style>
