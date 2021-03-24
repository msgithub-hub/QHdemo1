<template>
    <!--<map style="width: 100%; height: 50vh;" :latitude="latitude1" :longitude="longitude1"-->
         <!--:markers="covers"></map>-->
    <map style="width: 100%; height: 100vh;" latitude="31.41586" longitude="119.4846"
         ></map>
</template>

<script>
    export default {
        name: "dizhi",
        data() {
            return {
                // latitude1: '',
                // longitude1: '',
                // covers: [],
            }
        },
        onLoad() {
            // this.getMinLocation();
        },
        methods: {
            // async getMinLocation() {
            //     let [err, data] = await uni.getLocation();
            //     this.latitude1 = data.latitude;
            //     this.longitude1 = data.longitude;
            //
            //     const marker = {
            //         latitude: this.latitude1,
            //         longitude: this.longitude1,
            //     };
            //     this.covers.push(marker)
            //     console.log(marker)
            // }

        }
    }
</script>

<style scoped>

</style>