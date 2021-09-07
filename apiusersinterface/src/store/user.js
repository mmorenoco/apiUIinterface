const url = 'https://reqres.in/api/users';

const user = {
    namespaced: true,
    state: {
        userList: [],
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
                const listUsers = await response.json() //No se porque pero sino pones el await no te muestra los usuarios
                commit('setUserList', listUsers.data)
            } catch (error) {
                console.log(error)
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
                
                dispatch('updateUserList')
            } catch (error) {
                console.log(error)
            }
        },
    }
}

export default user;