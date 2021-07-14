<template>
  <div id="app">
    <user-details/>
    <show-users></show-users>
    <register-form/>
  </div>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue'
import ShowUsers from './components/ShowUsers.vue'
import UserDetails from './components/UserDetails.vue'

export default {
  name: 'App',
  components: {
    RegisterForm,
    ShowUsers,
    UserDetails
  }
}
</script>

<style>
html {
  box-sizing: border-box;
  background-color: #708090	;	
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
