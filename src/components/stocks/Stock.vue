<template>
  <div class="card m-2 bg-light " style="max-width: 300px;">
    <div class="row no-gutters justify-content-center align-items-center">
      <div class="col-xs-2">
        <div class="card-body">
          <h3 class="card-title pt-1">{{stock.name}} <small>(Price:{{stock.price}})</small></h3>
          <input type="number" class="form-control" />
          <button class="btn btn-primary mt-1">
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['stock']
};
</script>

<style></style>
