import Vue from 'vue'
import Vuex from 'vuex'

const url = "https://reqres.in/api/users"

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        userList: []
    },
    mutations: {
        setUserList(state, userList) {
            state.userList = userList
        }
    },
    actions: {
        async updateUserList({ commit }) {
            try {
                const response = await fetch(url + "?per_page=100") 
                const listUsers = await response.json() //Sin este await no funciona
                commit('setUserList', listUsers.data)
            } catch (error) {
                alert(error)
            }
        },
        async createUser({ dispatch }, user) {
            var headers = new Headers();
            headers.append("Content-Type", "application/json");

            var raw = JSON.stringify(user);
            try {
                 const addUser = {
                    method: 'POST',
                    headers: headers,
                    body: raw,
                    redirect: 'follow'
                }
                await fetch(url, addUser)
                    .then(response => response.text())
                    .then(console.log(this.response))
                    .catch(error => alert('error', error));
                
                dispatch('updateUserList')
            } catch (error) {
                alert(error)
            }
        },
    }
})