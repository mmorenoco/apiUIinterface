<template>
  <div id="app">
    <button @click="showUserList">Mostrar usuarios principal</button>
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
  },
  data() {
    return {
      userList: {
        pageOne: [],
        pageTwo: []
      }
    }
  },
  methods: {
    async showUserList() {
      const apiUrl = "https://reqres.in/api/users?page=1"
      const apiUrl2 = "https://reqres.in/api/users?page=2"

      try {
        const response = await fetch(apiUrl)
        const response2 = await fetch(apiUrl2)
        
        const data = await response.json()
        const data2 = await response2.json()
        
        this.userList.pageOne.push(data.data)
        this.userList.pageTwo.push(data2.data)

        console.log(this.userList.pageOne)
        console.log(this.userList.pageTwo)

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
