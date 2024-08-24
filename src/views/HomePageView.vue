<template>
    <div class="container-fluid BG">
        <div class="LandingPage">
            <div class="Headline">
            <h2 class="display-2">Personified</h2>
            <h1 class="display-1">Elegance</h1>
            <router-link to="/products">
            <button type="button" id="HeadBtn">See Our Collection</button>
          </router-link>
        </div>
        <img src="https://richtershotline.github.io/Pimages/Images/LandingImage.jpg" class="LandingPhoto" alt="LandingPhoto" loading="lazy">
    </div>
   <div class="TopCon">
    <h2 class="display-5">The Clothes Make The Man</h2>
    <h5 class="display-7">You're a VIP. Dress like it</h5>
    <div class="row" id="contentrow">
        <div class="col" >
          <div class="TopBoxBG"><img src="https://richtershotline.github.io/Pimages/Images/Cheers.jpg" loading="lazy"><p>At Valentine’s EVERY customer is a VIP you’re our #1 priority Always. We value each and every kind of customer. And we will always provide you first-class service/</p></div>
        </div>
        <div class="col">
          <div class="TopBoxBG"><img src="https://richtershotline.github.io/Pimages/Images/Tailor.jpg" loading="lazy"><p>Every article of clothing is hand crafted using the finest materials. Made by the most talented artisans, seamstresses and designers around the world with more than 10 years of experience.</p></div>
  
        </div>
        <div class="col">
          <div class="TopBoxBG"><img src="https://richtershotline.github.io/Pimages/Images/Cash.jpg" loading="lazy"><p>Not satisfied? No problem. Refund any articles you purchase easily. No sweat. Our 24/7 support team works around the clock to make sure you're always satisfied.</p></div>
  
        </div>
        
      </div>
</div>
<div class="MidCon">
    <h2 class="display-5 mt-4 mb-3">The Best Deserves The Best</h2>
    <div class="MidContent">
    <div class="TextContent">
<p>You’re #1. Why not dress like it? You’re worth more than you know and you need clothes to show it.

    Browse our catalogue and we’re sure you’ll find the right fit for you. From shirts to jackets to slacks to blazers. We have everything you need to look your absolute best. Be the center of attention wherever you go. From weddings to business parties. We'll get you fitted. No sweat.</p>
        
    </div>
<div class="ImageContent">
    <img src="https://richtershotline.github.io/Pimages/Images/Window.jpg" loading="lazy">
</div>

    </div>
</div>
<div class="BelowMidCon">
    <h2 class="display-5 mt-4">Our Offers To You</h2>
    <div class="row" id="contentrow">
        <div class="col" >
          <div class="TopBoxBG"><img src="https://richtershotline.github.io/Pimages/Images/Fitting.jpg" loading="lazy"><p>Need a custom suit? Contact us for a fitting and a quote free of charge. We measure all sizes. both men and women.</p></div>
        </div>
        <div class="col">
          <div class="TopBoxBG"><img src="https://richtershotline.github.io/Pimages/Images/SuitShopping.jpg" loading="lazy"><p>Be the center of attention with our rental suits perfect for one-offs. Rent for as long as you want, whenever you want.</p></div>
  
        </div>
        <div class="col">
          <div class="TopBoxBG"><img src="https://richtershotline.github.io/Pimages/Images/Suits.jpg" loading="lazy"><p>See a suit you like but you don’t like the colour? We’ll change it for you. Our team of professional artisans can resize, recolour and redesign any outfit you want.</p></div>
  
        </div>
        
      </div>


</div>
<div class="NearBottomCon">
    <h2 class="display-5 mt-4">Shop Our Collections</h2>
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://richtershotline.github.io/Pimages/Images/Jacket.jpg" class="d-block w-50 RoImg mx-auto mb-2" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>The Richter Collection</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://richtershotline.github.io/Pimages/Images/SuitLady.jpg" class="d-block RoImg w-50 mx-auto mb-2" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>The Miami Summer Collection</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://richtershotline.github.io/Pimages/Images/Mag.jpg" class="d-block RoImg w-50 mx-auto mb-2" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>The Presidential Collection</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



</div>
<div class="HomeProductsCon">
    <h2 class="display-5 mt-4">What's Popular</h2>
    

</div>
<div class="BottomCon">
    <h2 class="display-5 mt-4">Got Any Questions?</h2>
    <div class="QuestionCon">
<router-link to="/contact">
    <button type="button" id="QuestionBtn">Contact Us</button>
  </router-link>
    <p>24/7 Service Guaranteed</p>
  </div>


</div>
        </div>
    
</template>

<script>
export default {

}
</script>

<style>

</style>