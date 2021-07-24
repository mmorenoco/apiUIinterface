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

            if(!this.email || !this.name || !this.surname) {
                return
            }

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

            this.$emit('updateUserList')
            this.resetForm()
        },
        resetForm() {
            this.email = '',
            this.name = '',
            this.surname = ''
        }
    },
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

    .button {
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

    .button:hover {
        cursor: pointer;
        box-shadow: 0px 0px 10px 0px rgba(18, 32, 60,1);
    }

    .button:active {
        transform: translate(0, 0.3rem);
        box-shadow: 0 0.1 rgba(255,255,255, 0.65);
    }

@media only screen and  (max-width: 576px) {
    .form {
        width: 100%;
    }

    .button {
        width: 95%;
    }
}

</style>