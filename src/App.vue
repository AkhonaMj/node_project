<template>
<div class="wrapper">

<NavBar/>
<main class="container-fluid">
  <router-view/>
</main>
</div>
</template>
<script>
import NavBar from "@/components/NavBarComp.vue"
export default {
components: {

  NavBar

}

}

</script>

<style>


</style>
