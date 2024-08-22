<template>
<div class="wrapper">
<NavBarComp/>
<!-- <HomePageView/> -->
<main class="container-fluid">
  <router-view/>
</main>
<FooterComp/>
</div>
</template>
<script>
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
components: {

  NavBarComp,
  FooterComp
}

}

</script>


<style src="./assets/Styles/Style.css">

</style>
