<template>
    <div class="users-container">
        <div class="user">
            <div class="user-image">
                <img src="https://reqres.in/img/faces/8-image.jpg" alt="random">
            </div>
            <div class="user-info">
                <p>mmcorrales@outlook.com</p>
                <button @click="listUsers">Show Details</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShowUsers',
    data() {
        return {
            userlist: []
        }
    },
    methods: {
        async listUsers() {
            const apiUrl = "https://reqres.in/api/users"
            try {
                const response = await fetch(apiUrl)
                const data = await response.json()
                this.userlist.push(data.data)
                console.log(this.userlist)
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>

<style>

</style>