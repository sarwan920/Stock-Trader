<template>
  <div class="container">
    <appHeader></appHeader>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script> 
import Header from "./components/common/Header";

export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>

<style>
body {
  padding: 30px;
  box-sizing: border-box;
 background-color:rgb(223, 219, 219);

}
</style>
