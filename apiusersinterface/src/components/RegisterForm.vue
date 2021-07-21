<template>
    <div class="form">
        <h1>Register Form</h1>
        <h2>Please fill out all details below</h2>
        <label  class="form__label" for="email">Email</label>
        <input class="form__input" type="text" placeholder="Let us know how to contact you back" v-model="email">
        <label class="form__label" for="firstName">Forename</label>
        <input class="form__input" type="text" placeholder="Write your name here" v-model="name">
        <label class="form__label" for="surname">Surname</label>
        <input class="form__input"  type="text"  placeholder="Write your surname here" v-model="surname">
        <button class="button" type="submit" @click="addRegisteredUser">Register</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            name: '',
            surname: ''
        }
    },
    methods: {
        async addRegisteredUser() {

            const user = JSON.stringify({
                email: this.email,
                name: this.name,
                surname: this.surname
            })

            const addUser = {
                method: 'POST',
                body: user,
                redirect: 'follow'
            }

             await fetch("https://reqres.in/api/users", addUser)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            console.log(user)
        }
    },
}
</script>

<style>


@media only screen and  (max-width: 576px) {
    .form {
        display: flex;
        flex-direction: column;
    }

    .form__input {
        outline: none;
        height: 40px;
        border: none;
        background-color: inherit;
        margin-bottom: 25px;
        text-align: center;
       
    }

    ::placeholder {
        color: var(--secondary);
        opacity: .75;
    }

    .form__input:focus {
        border-bottom: 1px solid var(--third)
    }

    .button {
        height: 40px;
        background-color: #FF6B6B;
        color: #fff;
        font-size: large;
        border: none;
        border-radius: 5px;
        border-bottom: 2px solid #154360;
        margin-top: 25px;
    }

    .button:hover {
        cursor: pointer;
        box-shadow: 0px 0px 10px 0px rgba(255,107,107,1);
    }

    .button:active {
        transform: translate(0, 0.3rem);
        box-shadow: 0 0.1 rgba(255,255,255, 0.65);
    }
}
</style>