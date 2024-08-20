<template>
<div class="wrapper">
<NavBarComp/>
<!-- <HomePageView/> -->
<main class="container-fluid">
  <router-view/>
</main>
</div>
</template>
<script>
import NavBarComp from "@/components/NavBarComp.vue";

export default {
components: {

  NavBarComp
}

}

</script>


<style src="./assets/Styles/Style.css">

</style>
