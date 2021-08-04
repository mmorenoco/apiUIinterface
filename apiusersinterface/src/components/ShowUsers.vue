<template>
<div class="users-container">
    <div class="user">
        <div class="user-info" v-for="users in userList" v-bind:key ="users.id">
            <p>{{ users.email }}</p>
            <div class="spin">
                <div class="spin__one spin__one--yellow"></div>
				<div class="spin__two spin__two--yellow"></div>
                <img :src="users.avatar" alt="avatar" class="spin__image">
            </div>  
            <router-link :to="`/user/${users.id}`" class="user-info__details">View Details</router-link>
         </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'ShowUsers',
    methods: {
        showUserList() {
            this.$store.dispatch('updateUserList')
        }
    },
    async created() {
        this.showUserList()
    },
    computed: {
        // Muy bien esto tambien pero prueba a usar MapState
        userList() {
            return this.$store.state.userList
        }
    }
}

</script>

<style>
    .user {
        margin: auto;
        width: 850px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }

    .user-info {
        width: 400px;
        height: 400px;
        background-color: rgba(222, 222, 222, .25);  
        color: var(--details-two);            font-size: x-large;
        font-weight: bold;
        backdrop-filter: blur(1px);
        border-radius: 15px;
        border: 1px solid var(--details-two);
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    
    .user-info__details {
        height: 30px;
        width: 90%;
        background-color: inherit;
        color: var(--secondary);
        font-size: large;
        font-weight: bold;
        border: 2px solid var(--details-one);
        border-radius: 25px;
        margin: 0 auto;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .user-info__details:hover {
        cursor: pointer;
        background-color: var(--details-one);
        box-shadow: 0px 0px 10px 0px rgba(18, 32, 60,1);
    }

    .user-info__details:active {
        transform: translate(0, 0.3rem);
        box-shadow: 0 0.1 rgba(255,255,255, 0.65);
    }

    .spin {
        height: 40%;
        width: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        margin-top: 25px;
        margin-bottom: 35px;
    }

    .spin__image {
        position: absolute;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    .spin__one , .spin__two {
        margin: 0;
        padding: 0;
        position: absolute;
        border-radius: 50%;
        background-color: transparent;
    }

    .spin__one:hover, .spin__two:hover {
        animation: rotate 2s linear;
    }

    .spin__one {
        height: 110px;
        width: 110px;
    }

    .spin__one--yellow {
        border-top: 2px solid rgb(244, 159, 17);
        border-bottom: 2px solid rgb(244, 159, 17);
        border-left: 2px solid rgb(244, 159, 17,0);
        border-right: 2px solid rgb(244, 159, 17);
    }

    .spin__two {
        height: 120px;
        width: 120px;
    }

    .spin__two--yellow {
        border-top: 2px solid rgb(244, 159, 17);
        border-bottom: 2px solid rgb(244, 159, 17);
        border-left: 2px solid rgb(244, 159, 17);
        border-right: 2px solid rgb(244, 159, 17, 0);
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

        .user-info {
            width: 95%;
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(180deg);
        }
        50% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

</style>

