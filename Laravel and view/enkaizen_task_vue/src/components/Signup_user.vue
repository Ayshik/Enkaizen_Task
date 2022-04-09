<template>
<Header/>
     <form class="box" action="" method="post">
      <h1>Sign-Up User</h1>
      <input type="text" name="ouname" placeholder="User Name" />
      <input type="text" name="pname" placeholder="Full Name" />
      <input type="text" name="ophone" placeholder="Phone Number">
      <input type="text" name="pnid" placeholder="Nid No" />
      <input type="text" name="oaddress" placeholder="Your Address" />
      <input type="password" name="ocpass" placeholder="Password" />
      <input type="submit" name="ownersignup" value="Sign-Up" />
    </form>
</template>

<script>
import Header from './Header.vue'
export default{

name:'Signup_user',
 components: {
    Header
  }

}
</script>
