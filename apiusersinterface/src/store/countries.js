const url = 'https://countriesnow.space/api/v0.1/countries';

const countries = {
    namespaced: true,
    state: {
        allCountries: [],
    },
    mutations: {
        setCountriesList(state, countriesList) {
            state.countriesList = countriesList
        }
    },
    actions: {
        async updateCountriesList({ commit }) {
            try {
                const response = await fetch(url)
                const listOfCountries = await response.json() //No se porque pero sino pones el await no te muestra los usuarios
                commit('setCountriesList', listOfCountries.data)
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default countries;