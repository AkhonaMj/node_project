<template>
    <div class="container-fluid">
        <h2>Browse Our Selection</h2>
        <p class="UnderText">Browse our unique and vast catalog to find your perfect fit.</p>
        <div class="row text-center">
            <div class="col">
                <h2>Search via name</h2>
                <input type="text" class="mt-2" v-model="SearchData"  @keyup="Search" ref="Searchbar" id="Searcher">
            </div>
        </div>
        <div class="SortButtons mt-4">
            <button type="button" id="SortBtnPrice" ref="Sorter" @click="Sort()">Sort By Highest</button>
            <button type="button" id="SortBtn" @click="SortCategoryW()">Sort By Women</button>
            <button type="button" id="SortBtn" @click="SortCategoryM()">Sort By Men</button>

        </div>
        <div class="Products mt-3 mx-auto" v-if="SearchedProducts">
            <CardComp v-for="product in SearchedProducts" :key="product.prodID">
                <template #cardHeader>
                    <img :src="product.prodUrl" class="card-img-top img-fluid proImg" alt="product" loading="lazy">
                </template>
                <template #cardBody>
                    <div class="hovering">
                        <h3 class="ProductName">{{ product.prodName }}</h3>
                        <p class="ProductAmount">${{ product.amount }}</p>
                        <p class="Category">{{ product.Category }}</p>
                        <router-link :to="{ name: 'OnePro', params: { id: product.prodID } }">
  <button type="button" class="ViewBtn">View More</button>
</router-link>
                    </div>
                </template>
            </CardComp>
        </div>
        <LoadingSpinner v-else></LoadingSpinner>
    </div>
</template>

<script>
import CardComp from "@/components/CardComp.vue"
import LoadingSpinner from "@/components/LoadingSpinner.vue"
import axios from 'axios';
export default {
    data() {
    return {
      SearchData: "", 
      sorterOn: true
    };
  },
components: {

    CardComp,
    LoadingSpinner
   

},

computed: {
    products() {
    return this.$store.state.products
    },
    SearchedProducts() {
   return this.SearchData == "" ? this.products : this.products.filter(product => product.prodName.toUpperCase().includes(this.SearchData.toUpperCase())


   )

},


},
props: ["searchBar"],   


    
methods: {



  Sort() {
    try {
        if (this.sorterOn) {
    this.products.sort((cheap, pricey) => pricey.amount - cheap.amount);
     this.sorterOn = false;
      this.$refs.Sorter.innerHTML = "Sort By Highest";
     } else {
       this.products.sort((cheap, pricey) => cheap.amount - pricey.amount);
       this.sorterOn = true;
       this.$refs.Sorter.innerHTML = "Sort By Lowest";
        }
    } catch (e) {
        throw new Error("Cannot sort at this time");
    }
},
SortCategoryW() {
    try {
        console.log("Women clicked");

        // this filters by women
        const WomenProducts = this.products.filter(unit => unit.Category.includes("women"));
        this.$store.state.products = WomenProducts; // Update the products array

    } catch (e) {
        throw new Error("Cannot sort at this time. Please contact the owner.");
    }
},
SortCategoryM() {
    try {
        console.log("Men clicked");

        // Filter products for men
        const MenProducts = this.products.filter(unit => unit.Category.indexOf("women"));
        console.log("MenProducts:", MenProducts); // Log the filtered products
        this.$store.state.products = MenProducts; // Update the products array

    } catch (e) {
        throw new Error("Cannot sort at this time. Please contact the owner.");
    }
},

    
    SearchItem() {
  try {
    if (this.$refs.Searchbar.value.length < 1) {
      this.showItems(this.apiURL);
    }

    let searchedProduct = this.apiURL.filter((Item) =>
      Item.productName.toUpperCase().includes(this.$refs.Searchbar.value.toUpperCase())
    );

    this.showItems(searchedProduct);
    if (!searchedProduct.length) {
      throw new Error("Not found. Please check your spelling.");
    }
  } catch (e) {
    this.innerHTML =
      "Something went awry. The item might not exist. Please check your spelling as well.";
  }
},
async Search() {
      try {
        const response = await axios.get('https://node-project-xlvk.onrender.com/products');
        this.products = response.data; 

      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    },
  },
   


mounted() {

    this.$store.dispatch("fetchProducts")
    console.log(this.products) 

}

}
</script>

<style>

</style>