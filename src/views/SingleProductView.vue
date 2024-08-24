<template>
    <div v-if="fetchProductData">
      <div class="Products" v-for="product in product" :key="product.prodID" >
        <div class="producters">
            
            <img :src="product.prodUrl" class="card-img-top img-fluid proImg" alt="product" loading="lazy">
            <h3 class="ProductName">{{ product.prodName }}</h3>
            <h3>{{ product.Category }}</h3>
            <h3>${{ product.amount }}</h3>

        </div>

      </div>
    
    </div>
    <div v-else>
        <LoadingSpinner/>
      </div>
  </template>
  
  <script>
  import LoadingSpinner from "@/components/LoadingSpinner.vue"
  export default {
    components: {
        LoadingSpinner

    },
    methods: {
      fetchProductData() {
        this.$store.dispatch('fetchProduct', this.$route.params.id);
      },
    },
    computed: {
      product() {
        return this.$store.state.product;
      },
    },
    mounted() {
      this.fetchProductData();
    },
  };
  </script>
  