<template>
    <form class="box" action="/Admin_panel" >
      <h1>Login</h1>
      <input type="text" name="uname" placeholder="Username"  required/>
      <input type="password" name="psw" placeholder="Password" required/>

      <!--<router-link :to="{ path: '/Admin_panel' }"><button id="buttonone">Login</button></router-link>-->

      <input type="submit" name="login" value="Login" />
    </form>
</template>


<script>


export default {
    name:'Login',
}
</script>
