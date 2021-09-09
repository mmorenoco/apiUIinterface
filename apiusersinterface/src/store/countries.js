const url = 'https://countriesnow.space/api/v0.1/countries';

const countries = {
    namespaced: true,
    state: {
        allCountries: [],
    },
    mutations: {
        setCountriesList(state, allCountries)
        {
            state.allCountries = allCountries
        }
    },
    actions: {
        async updateCountriesList({ commit }) {
            try {
                const response = await fetch(url)
                const listOfCountries = await response.json()
                commit('setCountriesList', listOfCountries.data)
                
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default countries;