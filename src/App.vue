<template>
<div class="wrapper">
<NavBarComp/>
<HomePageView/>
<main class="container-fluid">
  <router-view/>
</main>
</div>
</template>
<script>
import NavBarComp from "@/components/NavBarComp.vue";
import HomePageView from "@/views/HomePageView.vue";
export default {
components: {

  NavBarComp,
  HomePageView
}

}

</script>


<style src="./assets/Styles/Style.css">

</style>
