<template>
    <div class="container-fluid">
      <div class="row">
        <h2 class="display-2 mt-3">ADMIN DASHBOARD</h2>
      </div>
  
      <div class="container mt-3">
        <!-- Manage Users Section -->
        <h1>Manage Users</h1>
        
  <!-- add user -->
        <div class="row mb-3">
          <div class="col-sm-4">
            <button type="button"
              class="btn btn-light mt-3 mb-3"
              @click="showAddUserModal = true">
              Add New User
            </button>
          </div>
        </div>
        <div class="table-responsive" v-if="users && users.length">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userID">
                <td>{{ user.userID }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.userAdd }}</td>
                <td>{{ user.userRole }}</td>
                <td>
                  <button
                    class="btn btn-warning btn-sm"
                    @click="editUser(user)">
                    Edit
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    @click="deleteUser(user.userID)">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="text-center">
          <spinner label="Loading..."></spinner>
        </div>
  
        <!-- Manage Products Section -->
        <h1>Manage Products</h1>
         <!-- sort -->
        <div class="row mb-3">
      <div class="col-sm-4">
        <button
          class="btn btn-secondary"
          @click="sortProductsByAmount"
        >
          Sort by amount
        </button>
        
      </div>
      <button
          class="btn btn-secondary col-sm-2"
          @click="searchProductsByCategory(searchCategory)"
        >
          Search 
        </button>
      <div class="col-sm-4">
        <input
          type="text"
          v-model="searchCategory"
          placeholder="Search by category"
          class="form-control"
        /> 
      </div>
      
    </div>
        <div class="row mb-3">
          <div class="col-sm-4">
            <button
              type="button"
              class="btn btn-light mt-3 mb-3"
              @click="showAddProductModal = true"
            >
              Add New Product
            </button>
          </div>
        </div>
        <div class="table-responsive" v-if="products && products.length">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.prodID">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.Category }}</td>
                <td>{{ product.amount }}</td>
                <td>
                  <button
                    class="btn btn-warning btn-sm"
                    @click="editProduct(product)"
                  >
                    Edit
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
        <div v-else class="text-center">
          <spinner label="Loading..."></spinner>
        </div>
      </div>
      <!-- Add/Edit User Modal -->
     <div v-if="showAddUserModal" class="custom-modal">
      <div class="modal-overlay" @click="showAddUserModal = false">
      </div>
      <div class="modal-content">
        <h3>{{ isEditingUser ? 'Edit User' : 'Add New User' }}</h3>
        <form @submit.prevent="addOrUpdateUser">
          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input v-model="userForm.firstName" type="text" id="firstName" required>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input v-model="userForm.lastName" type="text" id="lastName" required>
          </div>
          <div class="form-group">
              <label for="email">Email:</label>
              <input v-model="userForm.email" type="email" id="email" required>
            </div>
            <div class="form-group">
              <label for="role">Role:</label>
              <input v-model="userForm.role" type="text" id="role" required>
            </div>
            <button type="submit">{{ isEditingUser ? 'Update User' : 'Save User' }}</button>
            <button type="reset" @click="showAddUserModal = false">Cancel</button>
          </form>
      </div>
      </div>
      <!-- Add/Edit Product Modal -->
      <div v-if="showAddProductModal" class="custom-modal">
        <div class="modal-overlay" @click="showAddProductModal = false"></div>
        <div class="modal-content">
          <h3>{{ isEditingProduct ? 'Edit Product' : 'Add New Product' }}</h3>
          <form @submit.prevent="addOrUpdateProduct">
            <div class="form-group">
              <label for="productName">Product Name:</label>
              <input v-model="productForm.prodName" type="text" id="productName" required>
            </div>
            <div class="form-group">
              <label for="category">Category:</label>
              <input v-model="productForm.category" type="text" id="category" required>
            </div>
            <div class="form-group">
              <label for="amount">Price:</label>
              <input v-model="productForm.amount" type="number" id="amount" required>
            </div>
            <button type="submit">{{ isEditingProduct ? 'Update Product' : 'Save Product' }}</button>
            <button type="reset" @click="showAddProductModal = false">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from "vuex";
  import { computed, ref, onMounted } from "vue";
  
  export default {
    name: 'AdminDashboard',
    components: {
    },
    setup() {
      const store = useStore();
  
      // Local state
      const showAddUserModal = ref(false);
      const showAddProductModal = ref(false);
      const isEditingUser = ref(false);
      const isEditingProduct = ref(false);
      const userForm = ref({
        id: null,
        userName: "",
        email: "",
        role: "",
      });
      const productForm = ref({
        id: null,
        productName: "",
        category: "",
        amount: null,
      });
  
      // Vuex state
      const users = computed(() => store.state.users);
      const products = computed(() => store.state.products);
  
      // Fetch users and products on mount
      onMounted(() => {
        store.dispatch("fetchUsers");
        store.dispatch("fetchProducts");
      });
  
      // Methods for handling users
      const addOrUpdateUser = () => {
        if (isEditingUser.value) {
          store.dispatch("updateUser", userForm.value);
        }  else {
      store.dispatch("register", userForm.value).then((newUser) => {
        store.commit("setUsers", [...store.state.users, newUser]);
      });
    }
        showAddUserModal.value = false;
        resetUserForm();
      };
  
      const editUser = (user) => {
        userForm.value = {
    id: user.userID,
    lastName: user.lastName,
    firstName: user.firstName,
    email: user.email,
    role: user.role,
  };
        isEditingUser.value = true;
        showAddUserModal.value = true;
      };
  
      const deleteUser = (id) => {
        store.dispatch("deleteUser", id);
      };
  
      const resetUserForm = () => {
        userForm.value = {
          id: null,
          userName: "",
          email: "",
          role: "",
        };
        isEditingUser.value = false;
      };
  
      // Methods for handling products
      const addOrUpdateProduct = () => {
        if (isEditingProduct.value) {
          store.dispatch("updateProduct", productForm.value);
        } else {
      store.dispatch("addAProduct", productForm.value).then((newProduct) => {
        store.commit("setProducts", [...store.state.products, newProduct]);
      });
    }
        showAddProductModal.value = false;
        resetProductForm();
      };
  
      const editProduct = (product) => {
        productForm.value = {
    id: product.prodID,
    productName: product.prodName,
    category: product.Category,
    amount: product.amount,
  };
        isEditingProduct.value = true;
        showAddProductModal.value = true;
      };
  
      const deleteProduct = (id) => {
        store.dispatch("deleteProduct", id);
      };
  
      const resetProductForm = () => {
        productForm.value = {
          id: null,
          productName: "",
          category: "",
          amount: null,
        };
        isEditingProduct.value = false;
      };
  
      return {
        users,
        products,
        showAddUserModal,
        showAddProductModal,
        userForm,
        productForm,
        isEditingUser,
        isEditingProduct,
        addOrUpdateUser,
        addOrUpdateProduct,
        editUser,
        editProduct,
        deleteUser,
        deleteProduct,
        resetUserForm,
        resetProductForm,
      };
    },
    data() {
      return {
        searchCategory: '',
      }
    },
  
    methods: {
      searchProductsByCategory(category) {
        this.$store.dispatch('searchProductsByCategory', category);
      },
  
      sortProductsByAmount() {
        this.$store.dispatch('sortProductsByAmount');
      },
    },
  }
    
  </script>
  
  <style scoped>
  .container-fluid {
    padding: 20px;
  }
  
  .table-responsive {
    margin-top: 20px;
    border-radius: 5px;
  }
  
  .text-center {
    margin-top: 20px;
  }
  
  /* Modal overlay */
  .custom-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    z-index: 1050; /* Ensure the modal is above other content */
  }
  
/* td */

td, th {

color:white !important;

}


  /* Modal content */
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    width: 100%;
  }
  </style>