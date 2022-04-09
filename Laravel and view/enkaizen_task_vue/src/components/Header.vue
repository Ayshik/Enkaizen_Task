<template>
      <div class="menu">
        <div class="leftmenu">
          <h3> <router-link to="home.html">Enkaizen Task</router-link></h3>
        </div>
        <div class="rightmenu">
          <ul>
            <li> <router-link to="/">HOME</router-link></li>
            <li> <router-link to="services.html">Services</router-link></li>
            <li> <router-link to="spaceowner.php">Space Owner</router-link></li>
            <li> <router-link to="parker.php">Parker</router-link></li>
            <li> <router-link to="aboutus.html">About Us</router-link></li>
            <li>
               <router-link to="contact.html">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
</template>


<script>
export default {
    name:'Header',
    props:{

        title:String
    }
}
</script>