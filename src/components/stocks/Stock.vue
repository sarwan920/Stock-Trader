<template>
  <div class="col-md-3 col-xs-12">
    <div class="card mt-2 bg-light" style="width: 16rem;">
      <div class="card-header bg-dark text-white border-dark"><h5 class="card-title">
          {{ stock.name }} <small>(Price:{{ stock.price }})</small>
        </h5></div>
      <div class="card-body">
        
        <input type="number" class="form-control" />
        <button href="#" class="btn btn-dark mt-2">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
};
</script>

<style></style>
