<template>
  <div id="app">
    <button @click="showUserList">Mostrar usuarios principal</button>
    <show-users :userList="userList"></show-users>
    <register-form/>
  </div>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue'
import ShowUsers from './components/ShowUsers.vue'

export default {
  name: 'App',
  components: {
    RegisterForm,
    ShowUsers
  },
  data() {
    return {
      userList: []
    }
  },
  methods: {
    async showUserList() {
      const apiUrl = "https://reqres.in/api/users?per_page=20"

      try {
        const response = await fetch(apiUrl) 
       const data = await response.json()

      this.userList = data.data;

      console.log(this.userList)

      }catch (error){
        console.log(error)
      }
    }
  }
}
</script>

<style>

:root {
  --main: #011526;
  --secondary:#092B40;
  --third: #F2505D;
  --four: #F28066;
  --five: #F2D9BB;
}

html {
  box-sizing: border-box;
  background-color: var(--main)	;	
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--five);
  margin-top: 60px;
}
</style>
