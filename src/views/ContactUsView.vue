<template>
  <div class="container-fluid">
<h2>Reach Out</h2>
<div class="Legacy pt-5">
    <h2>Head Office</h2>
    <div class="LocationContent">
  <p>129 SE 2nd Ave And 199 SE 2nd Ave Downtown Miami, Miami</p>
  <p>Tel: 065 045 1767</p>
  <p>Email: KeenanTimmieWeb@gmail.com</p>
  </div>
</div>
<div class="Legacy pt-3">
    <h2>Operating Hours</h2>
    <div class="LocationContent">
  <p>Monday - Friday 08h00 - 17h00</p>
  <p>Weekends - Closed</p>
  </div>
</div>
<div class="Legacy pt-5">
    <h2>Miami Street Branch</h2>
    <div class="LocationContent">
  <p>475 NE 1st Ave and 477 477 NE 1st Ave</p>
  <p>Tel: (305)-183-1985</p>
  </div>
</div>
<div class="Legacy pt-3">
    <h2>Operating Hours</h2>
    <div class="LocationContent">
  <p>Monday - Friday 10h00 - 19h00</p>
  <p>Weekends - 10h00 - 15h00</p>
  </div>
</div>
<div class="Legacy pt-5">
    <h2>Nightfall Branch</h2>
    <div class="LocationContent">
  <p>1427 NE 2nd Ave and 1428 NE 2nd Ave</p>
  <p>Tel: (305)-180-1992</p>
  </div>
</div>
<div class="Legacy pt-3">
    <h2>Operating Hours</h2>
    <div class="LocationContent">
  <p>Monday - Friday 17h00 - 02h00</p>
  <p>Weekends - 19h00 - 04h00</p>
  </div>
</div>
<h2>Get in Touch Personally</h2>
<p class="UnderText">24/7 support. Guaranteed</p>
<div class="Contact">
    <form action="https://formspree.io/f/mwperpdo" id="UserForm"
          method="POST">
    <div class="row">
        <div class="col">
          
          
  <h2 class="text-center">First Name:</h2> 
  <div class="ContactUsText">
  <input type="text" name="FirstName" placeholder="First name..." class="User" id="ContactForm" required UserEntry>
  </div>
        </div>
        <div class="col">
          <h2 class="text-center">Family Name:</h2> 
          <div class="ContactUsText">
              <input type="text" name="LastName" placeholder="Last name..." class="User" id="ContactForm"  required UserEntry>
          </div>
                    </div>
    </div>
    <div class="row pt-4">
      <div class="col">
  <h2 class="text-center">Mobile Number:</h2> 
  <div class="ContactUsText">
  <input type="number" name="Phone" placeholder="Mobile Number" id="ContactForm" required UserEntry>
  </div>
      </div>
      <div class="col">
        <h2 class="text-center">Email Address:</h2> 
        <div class="ContactUsText">
            <input type="email" name="Email" placeholder="Email..." id="ContactForm" required UserEntry>
        </div>
        
                  </div>
                  <div class="row pt-4">
                    <div class="col">
                <h2 class="text-center">Nature of Inquiry</h2> 
                <div class="ContactUsText">
                <select  name="Category" id="ContactForm">
                <option value="Complaint">Complaint</option>
                <option value="Feedback">Feedback</option>
                <option value="Inquiry">Inquiry</option>
                <option value="GeneralMessage">General Message</option>
                <option value="SubInq">Become A Partner</option>
                <option value="SubInq">Cleaning Services</option>

                </select>
                </div>
            </div>
                
        </div>
        <div class="row pt-4">
            <div class="col">
        <h2 class="text-center">Your Message</h2> 
        <div class="ContactUsText">
        <textarea id="ContactForm" name="UserMessage" rows="5" cols="50" required></textarea>
        </div>
            </div>
        </div>
        <div class="BtnCenter">
        <button id="VipBtn" type="submit" @click="Validation()" class="mb-5">Send Your Message</button>
        <button id="VipBtn" type="button" @click="Clear()" class="mb-5">Clear</button>
        <span id="cleartxt"></span>
        </div>
        
        
  </div>
</form>

    



</div>
  </div>
</template>

<script>
export default {
components: {

  

},
methods: { 
  Clear() {

let UserEntries = document.getElementById("UserForm")
UserEntries.reset()
alert("Your form has been cleared")
  },
  Validation() {
  let UserEntry = document.getElementById("ContactForm")
  console.log(UserEntry.value)
switch(UserEntry.value) {

  case "":
    alert("Please enter your details")
break;
case 70: 
alert("Please enter values that are less than 70 characters")
break;
case "Richter" :
  alert("Welcome. Owner")
}

  }

}
}

</script>

<style>

</style>