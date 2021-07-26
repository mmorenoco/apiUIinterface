import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        userList: []
    },
    mutations: {
        setUserList(state, userList) {
            state.userList = userList
            console.log(state.userList)
        }
    },
    actions: {
        async updateUserList({ commit }) {
            const apiUrl = "https://reqres.in/api/users?per_page=100"
            try {
                const response = await fetch(apiUrl) 
                const data = await response.json()
                commit('setUserList', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        async createUser({ dispatch }, user) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(user);
            try {
                 const addUser = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                }
                
                await fetch("https://reqres.in/api/users", addUser)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
                
                dispatch('updateUserList')
            } catch (error) {
                console.log(error)
            }
        },
    },
    // modules: {}
})