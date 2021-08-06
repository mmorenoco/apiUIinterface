<template>
<!-- Identacion!!!! -->
<div>
    <!-- Si no tienen slots, mejor </show-users>  -->
    <!-- Realmente, si este componente solo hacer que llamar a otro, ¿Que utilidad tiene? -->
    <show-users></show-users>
</div>
</template>

<script>
import ShowUsers from '../components/ShowUsers.vue'
export default {
    components: { ShowUsers },
}
</script>

<style>

</style>