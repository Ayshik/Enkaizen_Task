<template>
 <div class="bgimage">
    <Header/>
     <div class="text">
        <h3>SEARCH • PARK • RELAX</h3>
        <h1>Cashless Parking Anywhere</h1>
        <h2>DON'T PARK ON STREET, USE PARKIT</h2>
     <router-link :to="{ path: '/Login' }"><button id="buttonone">Login</button></router-link>
		<div class="dropdown">
        <button class="buttontwo">
          Sign-Up </button>
          <div>
            
              <router-link to="/Signup_admin">Admin_signup</router-link>
              <router-link to="/Signup_user">User_Signup</router-link>
            
          </div>
       
      </div>
    </div>
 </div>
</template>

<script>
import Header from './Header.vue'

export default {
  
    name:'Home',
     components: {
    Header
  }
}
</script>



