<template>
    <div class="users-container">
        <div class="user">
            <div class="user-info" v-for="users in userList" v-bind:key ="users.id">
                {{ users.email }}
                <div class="spin">
                    <div class="spin-one"></div>
					<div class="spin-two"></div>
                    <img :src="users.avatar" alt="avatar" class="spin-image">
                </div>  
                <button class="user-info__details" @click="showUserDetails(users.id)">View Details</button>
                <button class="user-info__details" @click="deleteUser(users.id )">Delete User</button>
            </div>
        </div>
        <div class="user-details" v-if="showUser">
            <div class="user-details-modal">
                <button class="user-details-modal--close" @click="showUser = false">X</button>
                <div class="spin">
                    <div class="spin-one"></div>
					<div class="spin-two"></div>
                    <img :src="user.avatar" alt="avatar" class="spin-image">
                </div> 
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
            
            const userDetails = this.userList.filter((user)=> {
                return id === user.id
            })

            this.user ={            
                avatar: userDetails[0].avatar,
                name: userDetails[0].first_name,
                surname: userDetails[0].last_name,
                email: userDetails[0].email,
                id: userDetails[0].id
            }
        },
        deleteUser(id) {
            this.$emit('deleteUser', id)
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

    .user-details {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #12203c;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='26' viewBox='0 0 32 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 0v3.994C14 7.864 10.858 11 7 11c-3.866 0-7-3.138-7-7.006V0h2v4.005C2 6.765 4.24 9 7 9c2.756 0 5-2.236 5-4.995V0h2zm0 26v-5.994C14 16.138 10.866 13 7 13c-3.858 0-7 3.137-7 7.006V26h2v-6.005C2 17.235 4.244 15 7 15c2.76 0 5 2.236 5 4.995V26h2zm2-18.994C16 3.136 19.142 0 23 0c3.866 0 7 3.138 7 7.006v9.988C30 20.864 26.858 24 23 24c-3.866 0-7-3.138-7-7.006V7.006zm2-.01C18 4.235 20.244 2 23 2c2.76 0 5 2.236 5 4.995v10.01C28 19.765 25.756 22 23 22c-2.76 0-5-2.236-5-4.995V6.995z' fill='%23dedede' fill-opacity='0.46' fill-rule='evenodd'/%3E%3C/svg%3E");
        display: table;
        transition: opacity .3s ease;
    }

        .user-details-modal {
            background-color: rgba(222, 222, 222, .25);  
            backdrop-filter: blur(1px);
            color: var(--details-two);
            width: 50%;
            height: 400px;
            border-radius: 15px;
            border: 1px solid var(--details-two);
            padding: 10px 20px;
            margin: 25px auto;
            position: relative;
        }

        .user-details-modal--close {
            background-color:var(--details-one);
            color: var(--details-two);
            line-height: 25px;
            position: absolute;
            right: 5px;
            text-align: center;
            top: 5px;
            width: 24px;
            text-decoration: none;
            font-weight: bold;
            -webkit-border-radius: 12px;
            -moz-border-radius: 12px;
            border-radius: 12px;
            -moz-box-shadow: 1px 1px 3px var(--main);
            -webkit-box-shadow: 1px 1px 3px var(--main);
            box-shadow: 1px 1px 3px var(--main);
        }

        .user-personal {
            font-weight: bold;
            font-size: x-large;
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

        .spin-image {
            position: absolute;
            border-radius: 50%;
            width: 100px;
            height: 100px;
        }

        .spin-one , .spin-two {
            margin: 0;
            padding: 0;
            position: absolute;
            border-radius: 50%;
            background-color: transparent;
        }

        .spin-one:hover, .spin-two:hover {
            animation: rotate 2s linear;
        }

        .spin-one {
            height: 110px;
            width: 110px;
            border-top: 2px solid rgb(244, 159, 17);
            border-bottom: 2px solid rgb(244, 159, 17);
            border-left: 2px solid rgb(244, 159, 17,0);
            border-right: 2px solid rgb(244, 159, 17);
        }

        .spin-two {
            height: 120px;
            width: 120px;
            border-top: 2px solid rgb(244, 159, 17);
            border-bottom: 2px solid rgb(244, 159, 17);
            border-left: 2px solid rgb(244, 159, 17);
            border-right: 2px solid rgb(244, 159, 17, 0);
        }

    @media only screen and  (max-width: 576px) {

        .user-info {
            width: 95%;
        }

        .user-details-modal {
            width: 90%;
        }

        .user-personal {
            font-weight: bold;
            font-size: x-large;
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

