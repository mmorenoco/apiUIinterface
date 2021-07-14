<template>
    <div class="form">
        <h1>Register Form</h1>
        <h2>Please fill out all details below</h2>
        <label  class="form__label" for="email">Email</label>
        <input class="form__input" type="text" placeholder="xxxx@domain.com">
        <label class="form__label" for="firstName">Forename</label>
        <input class="form__input" type="text">
        <label class="form__label" for="surname">Surname</label>
        <input class="form__input"  type="text">
        <button class="button" type="submit">Register</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
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
        height: 40px;
        border: none;
        border-bottom: 1px solid #FF6B6B;
        background-color: inherit;
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
}
</style>