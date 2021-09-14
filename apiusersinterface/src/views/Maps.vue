<template>
    <div id="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"

export default {
    name: 'Maps',
    methods: {
        loadMap() {

            const loader = new Loader({
                apiKey: "AIzaSyBmKeMZYfBGqIKwbiSy4t-OQfGs-f1otcA",
                version: "weekly",
                libraries: ["places"]
            })

            const mapOptions = {
                center: {
                    lat: -34.397,
                    lng: 150.644
                },
                zoom: 4
            }

            loader
            .load()
            .then((google) => {
                new google.maps.Map(document.getElementById("map"), mapOptions);
                this.$nextTick()
                this.$forceUpdate()
            })
            .catch(e => {
                console.log(e)
            });
        }
    },
    async mounted() {
         await this.loadMap()
    }
}
</script>

<style>
    #map {
        height: 100%;
    }
</style>
