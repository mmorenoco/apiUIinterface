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
                apiKey: "yourapikey",
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

                console.log(document.getElementById("map"))
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
