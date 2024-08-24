<template>
  <div class="container-fluid">
    <h2 class="display-2 text-center">Admin Page</h2>
    <h4 class="text-center">Control the world from here</h4>
    <div class="col">
      <h2>Search via Product name</h2>
      <input type="text" class="mt-2" v-model="SearchData"  @keyup="Search" ref="Searchbar" id="Searcher">
  </div>
    <div class="SortButtons mt-4">
      <button type="button" id="SortBtnPrice" ref="Sorter" @click="Sort()">Sort By Highest</button>
      <button type="button" id="SortBtn" @click="SortCategoryW()">Sort By Women</button>
      <button type="button" id="SortBtn" @click="SortCategoryM()">Sort By Men</button>

  </div>
  <div class="modal fade" id="UserAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Adding New User...</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row text-center" >
                <div class="col">
        
            <h4>Enter new first name</h4>
            <input type="text" id="productName"  v-model="payload.firstName">
            <h4>Enter new last Name</h4>
            <input type="text" id="productName"  v-model="payload.lastName">
            <h4>Enter new Age</h4>
            <input type="number" id="productName"  v-model="payload.userAge">
            <h4>Enter new gender</h4>
            <input type="text" id="productName"  v-model="payload.gender">
            <h4>Enter new userRole</h4>
            <input type="text" id="productName"  v-model="payload.userRole">
            <h4>Enter new Emailaddress</h4>
            <input type="text" id="productName"  v-model="payload.emailAdd">
            <h4>Enter new password</h4>
            <input type="text" id="productName"  v-model="payload.userPass">
            <h4>Enter new password</h4>
            <input type="text" id="productName"  v-model="payload.userProfile">
            <button type="submit" class="mb-4" @click.prevent="userAddition" id="ProductBtn2">Add Product</button>            </div>
    
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
    </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Adding New Product...</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="row text-center" >
            <div class="col">
              <!-- <h4>Enter new item ID</h4>
              <input type="text" id="productName"  v-model="payload.prodID"> -->
        <h4>Enter new item name</h4>
        <input type="text" id="productName"  v-model="payload.prodName">
        <h4>Select new item category</h4>
        <select name = "category" id="selectCategory" v-model="payload.Category">
            <option value="men">men</option>
            <option value="women">women</option>
        </select>
        <h4>Enter new item price</h4>
        <input type="number" id="ItemPrice"  v-model="payload.amount">
        <h4>Enter new item Quantity</h4>
        <input type="number" id="ItemPrice"  v-model="payload.quantity">
        <h4>Enter new item Image</h4>
        <input type="text" id="ItemImage" v-model="payload.prodUrl">
        <button type="submit" class="mb-4" @click.prevent="ProductAddition" id="ProductBtn2">Add Product</button>            </div>

        </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>

<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Updating Product...</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="row text-center">
            <div class="col">
                <h4>Enter Product ID</h4>
        <input type="text" id="IDUpdate" productadd required v-model="this.payload.prodID">
        <h4>Enter new item name</h4>
        <input type="text" id="productNameUpdate" productadd required v-model="this.payload.prodName">
        <h4>Enter new item quantity</h4>
        <input type="number" id="productCategoryAmount" required v-model="this.payload.quantity">
        <h4>Select new item category</h4>
        <select name = "category" id="productCategoryUpdate" required v-model="this.payload.Category">
            <option value="men">men</option>
            <option value="women">women</option>
        </select>
        <h4>Enter new item price</h4>
        <input type="number" id="productCategoryAmount" required v-model="this.payload.amount">
        <h4>Enter new item Image</h4>
        <input type="text" id="productCategoryImg" productadd required v-model="this.payload.prodUrl">>
        <button type="button" class="mb-4" @click="updateProduct()" id="ProductBtn2">Update Product</button>            </div>

        </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>

<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Deleting Product....</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="row text-center">
            <div class="col">
        <h4>Enter item ID</h4>
        <input type="number" id="InputDel" v-model="payload.prodID">

        <button type="submit" id="Deleter" @click.prevent="ProductDeletion">Delete</button>
    </div>

        </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

</div> 
<div class="container-fluid">
<div class="row mx-auto text-center">
<div class="col">
    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add a new product
          </button>
          <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#UserAdd">
            Add a new user
              </button>
        </div>
        <div class="col">
            </div>
            <div class="col">
                </div>
                </div>
            </div>
    <div class="Products" ProductPage> 
      <div class="table-responsive" v-if="products && products.length">
        <table class="table table-bordered">
          <thead>
            <h2>Users</h2>

            <div class="modal fade" id="UserModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Updating New User...</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <div class="row text-center" >
                          <div class="col">
                            <h4>Enter new item ID</h4>
                            <input type="text" id="productName"  v-model="this.payloadUser.userID">
                      <h4>Enter new first name</h4>
                      <input type="text" id="productName"  v-model="this.payloadUser.firstName">
                      <h4>Enter new last Name</h4>
                      <input type="text" id="productName"  v-model="this.payloadUser.lastName">
                      <h4>Enter new Age</h4>
                      <input type="number" id="productName"  v-model="this.payloadUser.userAge">
                      <h4>Enter new gender</h4>
                      <input type="text" id="productName"  v-model="this.payloadUser.gender">
                      <h4>Enter new userRole</h4>
                      <input type="text" id="productName"  v-model="this.payloadUser.userRole">
                      <h4>Enter new Emailaddress</h4>
                      <input type="text" id="productName"  v-model="this.payloadUser.emailAdd">
                      <h4>Enter new password</h4>
                      <input type="text" id="productName"  v-model="this.payloadUser.userPass">
                      <h4>Enter new profile</h4>
                      <input type="text" id="productName"  v-model="this.payloadUser.userProfile">
                      <button type="submit" class="mb-4" @click.prevent="userUpdate" id="ProductBtn2">Update Product</button>            </div>
              
                      </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
              </div>

            <tr>
              <th>ID</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>userAge</th>
              <th>gender</th>
              <th>User Type</th>
              <th>Email Address</th>
              <th>Password</th>
              <th>UserProfile</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userPass }}</td>
              <td>{{ user.userProfile }}</td>

              <td>
                <button
                class="btn btn-success" data-bs-toggle="modal" data-bs-target="#UserModel">
                  Edit User
                </button>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteUser(user.userID)"
                >
                  Delete
                </button>
              </td>
            </tr>
            <h2>Products</h2>

            <tr v-for="product in SearchedProducts" :key="product.prodID">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.Category }}</td>
              <td>{{ product.amount }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.prodUrl }}</td>


              <td>
                <button
                class="btn btn-success" data-bs-toggle="modal" data-bs-target="#updateModal">
                  Edit Product
                </button>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteProduct(product.prodID)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  </div>
</template>

<script>
// import CardComp from "@/components/CardComp.vue"
// import LoadingSpinner from "@/components/LoadingSpinner.vue"
import axios from 'axios';
export default {

  name:"AddProduct",

  data() {
      return {
        payload: {
          prodName: "",
          quantity: null,
          amount: null,
          Category: "",
          prodUrl: "",
          
        },
        payloadUser: {
          firstName: "",
          lastName: "",
          userAge: null,
          gender: "",
          userRole: "",
          emailAdd:"",
          userPass:"",
          userProfile:""

        },
        SearchData:""

      };
    },
components: {

    // CardComp,
    // LoadingSpinner
   

},

computed: {
    products() {
    return this.$store.state.products
    },
    users() {

      return this.$store.state.users

    },
    SearchedProducts() {
   return this.SearchData == "" ? this.products : this.products.filter(product => product.prodName.toUpperCase().includes(this.SearchData.toUpperCase())


   )

},
SearchedUsers() {
   return this.SearchData == "" ? this.products : this.products.filter(product => product.prodName.toUpperCase().includes(this.SearchData.toUpperCase())


   )

},

},
props: ["searchBar"],   


    
methods: {
  ProductAddition() {
  try {
    console.log(this.payload);
     this.$store.dispatch("addAProduct", this.payload);
// location.reload()

  } catch (error) {

    console.error(error);


  }



 },
 userAddition() {
  try {
    console.log(this.payload);
     this.$store.dispatch("register", this.payload);
// location.reload()

  } catch (error) {

    console.error(error);


  }



 },
 updateProduct() {
        this.$store.dispatch('updateProduct', {id: this.payload.prodID, data: this.payload});
        alert("Product has been updated.")
      },
      userUpdate() {
        this.$store.dispatch('updateUser', {id: this.payloadUser.userID, data: this.payloadUser});
        alert("User has been updated.")


      },
  ProductDeletion() {
  try {

     this.$store.dispatch("deleteProduct", this.payload);

location.reload()

  } catch (error) {

    console.error(error);


  }



 },
 deleteProduct(prodID) {
        this.$store.dispatch('deleteProduct', prodID );
        alert("Product has been deleted the page will now reload changes might take time to reflect.")
        location.reload()
      },
      deleteUser(userID) {
        this.$store.dispatch('deleteUser', userID );
        alert("User has been deleted the page will now reload changes might take time to reflect.")

        location.reload()
      },

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
        console.log("MenProducts:", MenProducts); 
        this.$store.state.products = MenProducts; 

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
    


    
//     editItems(id, prodName, Category, amount) {
//     this.prodID = id;
//     this.prodName = prodName;
//     this.Category = Category;
//     this.amount = amount;
    
// },
// editItems.config.globalProperties.$itemNameEdit = (newitemName) {
//     this.productName = newitemName;
//     let itemJson = JSON.stringify(this)
//     localStorage.setItem('merchandise' + this.id, itemJson);
// },
// editItems.prototype.editName = function(newitemName) {
//     this.productName = newitemName;
//     let itemJson = JSON.stringify(this)
//     localStorage.setItem('merchandise' + this.id, itemJson);
// }


//     addItem(id, prodName, Category, amount) {
//     let merchandise = this.$store.state.product
//     let prevID = merchandise[merchandise.length - 1].id
//     let newItemID = prevID + 1
//     let newItemAdd = new this.editItems(newItemID, prodName, Category, amount);
//     merchandise.push(newItemAdd);
//     this.$store.state.product("merchandise", JSON.stringify(merchandise));
//     this.$store.state.product(merchandise);


// },
// addNewItem() {
//     let prevID = this.$store.state.product[this.$store.state.product.length - 1].id
//     let newItemID = prevID + 1
//     this.addItem(newItemID, this.prodName.value, this.Category.value)
//   },
Delete(id) {
  let merchandise = this.product(this.product.getItem("merchandise"));
    merchandise = merchandise.filter(merchItem => merchItem.id !== id);
    this.product.setItem("merchandise", JSON.stringify(merchandise));
   

},
deleteViaId() {
    let id = document.getElementById('InputDel').value;
    id = Number(id);
    this.Delete(id) 
},

   
},
mounted() {
    this.$store.dispatch("fetchUsers")
    this.$store.dispatch("fetchProducts")
    console.log(this.products) 
    console.log(this.users) 

}

}
</script>

<style>

</style>
