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
            // No hay que olvidarse de los console
            console.log(state.userList)
        }
    },
    actions: {
        async updateUserList({ commit }) {
            const apiUrl = "https://reqres.in/api/users?per_page=100"
            try {
                const response = await fetch(apiUrl) 
                // No entiendo este segundo await, el response es una promesa?¿?¿?
                // data es muy generico, no? listUsers mejor?
                const data = await response.json()
                commit('setUserList', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        async createUser({ dispatch }, user) {
            // myHeaders quiza no tiene mucho sentido. headers es mejor. My implica que es de algo/alguien y no le veo mucho sentido.
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
                // La url esta repe en ambos lados, podrias llevarla a una constante para ambos y solo añadirle la parte despues del .in
                // const url = "https://reqres.in/api/users"
                // En esta llamada no hacemos absolutamente nada con el resultado, no? De ser así mejor no poner then y catch.
                // Si ponemos catch que sea para mostrar mensajes de error.
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