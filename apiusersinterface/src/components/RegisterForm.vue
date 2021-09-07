<template>
    <div class="form-container">
        <div class="form">
            <h1>Register Form</h1>
            <h2>Please fill out all details below</h2>
            <!-- Podrias crear tu propio componente <Input label="loquesea" :value="name" /> De cada uno de los label + input --> // No se a que te refieres con esto
            <label  class="form__label" for="email">Email</label>
            <input class="form__input" type="text" placeholder="Let us know how to contact you back" v-model="email">
            <label class="form__label" for="firstName">Forename</label>
            <input class="form__input" type="text" placeholder="Write your name here" v-model="first_name">
            <label class="form__label" for="surname">Surname</label>
            <input class="form__input"  type="text"  placeholder="Write your surname here" v-model="last_name">
            <button class="form__button" type="submit" @click="createUser">Register</button>
        </div>
        <router-link to="/" class="form__button--back">Go Back</router-link>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Form',
    data() {
        return {
            email: '',
            first_name: '',
            last_name: ''
        }
    },
    methods: {
        // Primer parametro es el nombre de la store. El caso es que no tenemos modulos en la store
        // https://vuex.vuejs.org/guide/modules.html#module-local-state
        // Organiza así los modulos en la store. Solo tendras un modulo. El nombre que tenga
        // El objeto que vayas a crear sera el nombre que tendras que  poner en el primer parametro
        // de mapActions. El segundo, el array, es el nombre de cada action que quieras traerte
        ...mapActions('createUser', ['getUser']),
        createUser() {
            if(!this.email || !this.first_name || !this.last_name) {
                return
            }

            // eslint-disable-next-line no-useless-escape
            const validEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            if(!validEmail.test(this.email)) {
                return
            }

            // const user = {
            //     email: this.email,
            //     name: this.first_name,
            //     surname: this.last_name
            // }
            // Bien, pero prueba a usar mapActions tambien. // He estado leyendo pero no me queda claro como se utiliza y como pasar parametros
            // this.$store.dispatch('createUser', user)
            
            this.resetForm()
        },
        resetForm() {
            this.email = ''
            this.first_name = ''
            this.last_name = ''
        },
        
    }
}
</script>

<style>
    .form {
        margin: auto;
        width: 50%;
        font-size: large;
        display: flex;
        flex-direction: column;
        color: var(--details-one);
        background-color: var(--secondary);
        border-radius: 15px;
        align-items: center;
        justify-content: center;
    }

    .form__input {
        outline: none;
        height: 40px;
        border: none;
        background-color: inherit;
        margin-bottom: 25px;
        text-align: center;
       width: 80%;
    }

    ::placeholder {
        color: var(--main);
        opacity: .75;
    }

    .form__input:focus {
        background-color: transparent;
        border-bottom: 1px solid var(--details-one)
    }

    .form__button {
        width: 85%;
        height: 40px;
        background-color: rgba(222, 222, 222, .25);  
        color: var(--details-one);
        font-size: x-large;
        border: 2px solid var(--details-one);
        border-radius: 25px;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .form__button:hover {
        cursor: pointer;
        box-shadow: 0px 0px 10px 0px rgba(18, 32, 60,1);
    }

    .form__button:active {
        transform: translate(0, 0.3rem);
        box-shadow: 0 0.1 rgba(255,255,255, 0.65);
    }

    .form__button--back {
        height: 30px;
        width: 200px;
        background-color: inherit;
        color: var(--secondary);
        font-size: large;
        font-weight: bold;
        border: 2px solid var(--details-one);
        border-radius: 25px;
        margin: 0 auto;
        margin-top: 25px;
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: var(--secondary);
    }

    a:hover {
        cursor: pointer;
        background-color: var(--details-one);
        box-shadow: 0px 0px 10px 0px rgba(18, 32, 60,1);
    }

@media only screen and  (max-width: 576px) {
    .form {
        width: 100%;
    }

    .form_button {
        width: 95%;
    }
}

</style>