<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  :root {
    --main: #12203C;
    --secondary: #DEDEDE;
    --details-one: #F49F11;
    --details-two: #F7F7F7;
  }

  html {
    box-sizing: border-box;
    background-color: #12203c;
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='26' viewBox='0 0 32 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 0v3.994C14 7.864 10.858 11 7 11c-3.866 0-7-3.138-7-7.006V0h2v4.005C2 6.765 4.24 9 7 9c2.756 0 5-2.236 5-4.995V0h2zm0 26v-5.994C14 16.138 10.866 13 7 13c-3.858 0-7 3.137-7 7.006V26h2v-6.005C2 17.235 4.244 15 7 15c2.76 0 5 2.236 5 4.995V26h2zm2-18.994C16 3.136 19.142 0 23 0c3.866 0 7 3.138 7 7.006v9.988C30 20.864 26.858 24 23 24c-3.866 0-7-3.138-7-7.006V7.006zm2-.01C18 4.235 20.244 2 23 2c2.76 0 5 2.236 5 4.995v10.01C28 19.765 25.756 22 23 22c-2.76 0-5-2.236-5-4.995V6.995z' fill='%23dedede' fill-opacity='0.46' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--five);
  }

  .nav { 
    font-size: x-large;
    padding-bottom: 30px;
  }

  .nav a {
    margin: 10px;
    padding: 15px;
    font-weight: bold;
    color: var(--details-two);
    text-decoration: none;
    border-radius: 10px;
  }

  .nav a.router-link-exact-active {
    background-color: var(--details-one);
    color: var(--main)
  }

</style>
