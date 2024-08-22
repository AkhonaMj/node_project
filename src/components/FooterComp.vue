<template>
    <footer class="container-fluid footerstyle">
  <div class="row">
  <p class="text-center">Valentine's &copy; <span>{{cYear}}</span>
  
  </p>
  
  </div>
  
    </footer>
  
  </template>
  
  <script>
  export default {
  data() {
  
      return {
    cYear: new Date().getUTCFullYear()
  
  
      }
  
  
  
  },
  
  
  }
  </script>
  
  <style>
  
  </style>