<template>
  <div class="Entire">
    <div class="Logo">
      <router-link to="/">
        <h1 class="TextDecoRemover">Valentine's</h1>
      </router-link>
    </div>
    <div class="BGImg container-fluid NavBar" loading="lazy">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <router-link to="../index.html">
                    </router-link>
            
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mx-auto mb-2">
                  <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Home |</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link active" to="/about">About |</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Reach Us |</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/products">Products |</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/admin">Admin |</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
</template>

<script>
export default {


}
</script>

<style>

</style>