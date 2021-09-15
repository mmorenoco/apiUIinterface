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
                    lat: 40.2085,
                    lng: -3.713
                },
                zoom: 6
            }

            loader
            .load()
            .then((google) => {
                const map = new google.maps.Map(document.getElementById("map"), mapOptions);

                new google.maps.Marker({
                    position: { lat: -40.416729, lng: -3.703339},
                    map: map,
                    title: "Madrid",
                })

                new google.maps.Marker({
                    position: { lat: 36.67777, lng: -5.446},
                    map: map,
                    title: "Ubrique",
                })

                return map
            })


            .catch(e => {
                console.log(e)
            })
        }
    },
    async mounted() {
         await this.loadMap()
    }
}
</script>

<style>
    #map {
        margin: 0 auto;
        height: 500px;
        width: 500px;
    }
</style>
