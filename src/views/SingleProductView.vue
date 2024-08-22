<template>
    <div class="container vh-100">
      <div class="row">
        <h2 class="display-2">Product Details</h2>
      </div>
      <div class="row justify-content-center" v-if="product">
        <h3>{{product.prodName}}</h3>
        <CardComp>
          <template #cardHeader>
            <img
              :src="product.prodUrl"
              loading="lazy"
              class="img-fluid"
              :alt="product.prodName"
            />
          </template>
          <template #cardBody>
            <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
            <p class="lead">
            </p>
            <p class="lead">
              <span class="text-tertiary fw-bold">Amount</span>: R{{
                product.amount
              }}
            </p>
          </template>
        </CardComp>
      </div>
      <div v-else>
        <LoadingSpinner />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from "vuex";
  import { computed, onMounted } from "vue";
  import CardComp from "@/components/CardComp.vue";
  import LoadingSpinner from "@/components/LoadingSpinner.vue";
  import { useRoute } from "vue-router";
  const store = useStore();
  const route = useRoute();
  const product = computed(() => store.state.product);
  onMounted(() => {
    store.dispatch("fetchProduct", route.params.id);
  });
  </script>
  
  <style scoped>
  
 
  </style>