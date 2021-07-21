<template>
    <div class="users-container">
        <div class="user">
            <div class="user-info" v-for="users in userList" v-bind:key ="users.id">
                {{ users.email }}
                <img :src="users.avatar" alt="avatar" class="user-info__image">
                <button class="user-info__details" @click="showUserDetails(users.id)">View Details</button>
            </div>
        </div>
        <div class="user-details" v-if="showUser">
            <div class="user-details-modal">
                <button class="user-details-modal--button" @click="showUser = false">X</button>
                <img :src="user.avatar" alt="avatar" class="user-info__image">
                <p class="user-personal">{{ user.name }}</p>
                <p class="user-personal">{{ user.surname }}</p>
                <p class="user-personal">{{ user.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShowUsers',
    props:[ "userList" ],
    data() {
        return {
            showUser: false,
            user: {}
        }
    },
    methods: {
        showUserDetails(id) {
            this.showUser = true

            this.user ={
                avatar: this.userList[id].avatar,
                name: this.userList[id].first_name,
                surname: this.userList[id].last_name,
                email: this.userList[id].email
            }

            console.log(this.user)
            }
        }
    }
</script>

<style>

@media only screen and  (max-width: 576px) {

    .user-info {
        width: 95%;
        height: 200px;
        background-color: greenyellow;
        border-radius: 5px;
        margin: 5px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }

    .user-info__image {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        margin-bottom: 25px;
        margin-top: 15px;
    }

        .user-info__details {
        height: 30px;
        width: 90%;
        background-color: #FF6B6B;
        color: #fff;
        font-size: large;
        border: none;
        border-radius: 5px;
        border-bottom: 2px solid #154360;
        margin: 0 auto;
    }

    .user-info__details:hover {
        cursor: pointer;
        box-shadow: 0px 0px 10px 0px rgba(255,107,107,1);
    }

    .user-info__details:active {
        transform: translate(0, 0.3rem);
        box-shadow: 0 0.1 rgba(255,255,255, 0.65);
    }



}

</style>