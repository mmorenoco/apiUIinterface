<template>
    <div class="user-container">
        <div class="single-user">
            <div class="spin">
                <div class="spin__one"></div>
                <div class="spin__two"></div>
                <img :src="user.avatar" alt="avatar" class="spin__image">
            </div> 
            <p class="single-user__personal">{{ user.first_name }}</p>
            <p class="single-user__personal">{{ user.last_name }}</p>
            <p class="single-user__personal">{{ user.email }}</p>
            <button class="single-user__personal--button" @click="updateDetails = true">Update User</button>
        </div>
        <router-link to="/" class="nav-back">Go Back</router-link> 
        <div class="update-user" v-if="updateDetails">
            <div class="update-user-modal">
                <button class="update-user-modal__close" @click="updateDetails = false">X</button>
                <p>Id: {{ user.id }}</p>
                <label  class="form__label" for="email">Email</label>
                <input class="form__input" type="text" placeholder="Let us know how to contact you back" v-model="user.email">
                <label class="form__label" for="firstName">Forename</label>
                <input class="form__input" type="text" placeholder="Write your name here" v-model="user.first_name">
                <label class="form__label" for="surname">Surname</label>
                <input class="form__input"  type="text"  placeholder="Write your surname here" v-model="user.last_name">
                <button class="user-info__details" @click="updateUserDetails">Update User</button>
            </div>
        </div>
    </div>
</template>

<script>
 const url = 'https://reqres.in/api/users/'

export default {
    data() {
        return {
            user: null,
            updateDetails: false
        }
    },
    methods: {
        async showUserDetails() {
            try {
                const data = await fetch(url + `${this.$route.params.id}`)
                const response = await data.json()
                this.user = response.data
                console.log(this.user)
            } catch(error) {
                alert(error)
            }
        },
        updateUserDetails() {
            var headers = new Headers();
            headers.append("Content-Type", "application/json")

            var raw = JSON.stringify(this.user)

            var requestOptions = {
                method: 'PUT',
                headers: headers,
                body: raw,
                redirect: 'follow'
            };

            fetch(url +`${this.user.id}`, requestOptions)
            .then(response => response.text())
            .catch(error => alert('error', error));
        }
    },
    mounted() {
        this.showUserDetails()
    }
}
</script>

<style>
.single-user {
    color: var(--main);
    font-size: x-large;
    font-weight: 700;
    box-shadow: 0px 0px 15px 0px rgba(247,247,247,0.7);
    background-color: var(--secondary);
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='26' viewBox='0 0 32 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 0v3.994C14 7.864 10.858 11 7 11c-3.866 0-7-3.138-7-7.006V0h2v4.005C2 6.765 4.24 9 7 9c2.756 0 5-2.236 5-4.995V0h2zm0 26v-5.994C14 16.138 10.866 13 7 13c-3.858 0-7 3.137-7 7.006V26h2v-6.005C2 17.235 4.244 15 7 15c2.76 0 5 2.236 5 4.995V26h2zm2-18.994C16 3.136 19.142 0 23 0c3.866 0 7 3.138 7 7.006v9.988C30 20.864 26.858 24 23 24c-3.866 0-7-3.138-7-7.006V7.006zm2-.01C18 4.235 20.244 2 23 2c2.76 0 5 2.236 5 4.995v10.01C28 19.765 25.756 22 23 22c-2.76 0-5-2.236-5-4.995V6.995z' fill='%23f49f11' fill-opacity='0.46' fill-rule='evenodd'/%3E%3C/svg%3E");
    margin: 0 auto;
    width: 600px;
    height: 600px;
    border: 2px solid var(--details-one);
    border-radius: 10px;
}

.spin__one {
    border-top: 2px solid rgb(244, 159, 17);
    border-bottom: 2px solid rgb(244, 159, 17);
    border-left: 2px solid rgb(244, 159, 17,0);
    border-right: 2px solid rgb(244, 159, 17);
    }

.spin__two {
    border-top: 2px solid rgb(244, 159, 17);
    border-bottom: 2px solid rgb(244, 159, 17);
    border-left: 2px solid rgb(244, 159, 17);
    border-right: 2px solid rgb(244, 159, 17, 0);
}

.user-info__details {
    margin-top: 50px;
    color: var(--details-one);
}

.user-info__details:hover {
    color: var(--secondary);
}

.single-user__personal--button {
    height: 30px;
    width: 90%;
    background-color: inherit;
    color: var(--details-one);
    font-size: large;
    font-weight: bold;
    border: 2px solid var(--details-one);
    border-radius: 25px;
    margin: 0 auto;
    margin-top: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.single-user__personal--button:hover {
    cursor: pointer;
    background-color: var(--details-one);
    color: var(--secondary);
    box-shadow: 0px 0px 10px 0px rgba(18, 32, 60,1);
}

.nav-back {
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
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-back a {
    text-decoration: none;
    color: var(--secondary);
}

.nav-back:hover {
    cursor: pointer;
    background-color: var(--details-one);
    box-shadow: 0px 0px 10px 0px rgba(18, 32, 60,1);
}

.update-user {
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

.update-user-modal {
    background-color: rgba(222, 222, 222, .25);  
    backdrop-filter: blur(1px);
    color: var(--details-two);
    font-size: large;
    font-weight: 700;
    width: 350px;
    height: 400px;
    border-radius: 15px;
    border: 1px solid var(--details-two);
    padding: 10px 20px;
    margin: 25px auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.update-user-modal__close {
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
</style>