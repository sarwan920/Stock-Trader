<template>
  
    <div class="card m-3 bg-light" style="width: 15rem;">
      <div class="card-header bg-dark text-white border-dark">
        <h5 class="card-title">
          {{ stock.name }} <small>(Price:{{ stock.price }})</small>
        </h5>
      </div>
      <div class="card-body">
        <input type="number" class="form-control" v-model="quantity" />
        <button @click="buyStock"  :disabled="quantity <=0" class="btn btn-dark mt-2">
          Buy
        </button>
       
      </div>
    </div>
  
</template>

<script>
export default {
  props: ["stock"],
  data(){
    return {
      quantity:0
    }
  },
  methods:{
    buyStock(){
      const order={
        stockId:this.stock.id,
        stockPrice:this.stock.price,
        stockQuantity:this.quantity
      }
      console.log(order)
      this.$store.dispatch('buyStock',order)
      this.quantity=0;

    }
  }
};
</script>

<style></style>
