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
};
</script>

<style>
body {
  padding: 30px;
  /* background-image: linear-gradient(to right, #83a4d4 , #b6fbff); */
}
</style>
