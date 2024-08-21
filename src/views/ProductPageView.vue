<template>
    <div class="container-fluid text-center Monials ">
        <div class="row align-items-center g-0 MonialRow mx-auto" v-if="fetchProducts">
          <CardComp  v-for="product in fetchProducts" :key="product.prodID" >
                
                <template #cardHeader>
            
                    <img :src="product.ProdURL" class="card-img-top img-fluid" alt="product" loading="lazy">
                  
                  </template>
                 <template #cardBody>
                  <div class="hovering">
                 <h3 class="name">{{product.prodName}} </h3>
                 <p>{{product.amount}} </p>
                 <p class="quota">"{{product.Category}}"</p>
                  </div>
                </template>
         
        </CardComp>
    
        </div>
        <LoadingSpinner v-else>
          
        </LoadingSpinner>
      </div>
</template>

<script>
import CardComp from "@/components/CardComp.vue"
import LoadingSpinner from "@/components/LoadingSpinner.vue"
export default {
components: {

    CardComp,
    LoadingSpinner


},
computed: {
    fetchProducts() {
    return this.$store.state.products
    }

},
mounted() {

    this.$store.dispatch("fetchProducts")

}

}
</script>

<style>

</style>