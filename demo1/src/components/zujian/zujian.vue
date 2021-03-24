<template>
    <div class='content1'>

        <button type="primary"  @click="btnClick">按钮{{msg}}</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'map',

            }
        },
        props:['msg'],
        onLoad(){},
        methods: {
            btnClick(){
                // this.$emit("listNewsClick", {name: '单顺'})
                this.$emit("listNewsClick")
            },
        }
    }
</script>

<style>
    .content1 {
        /*width: 100vw;*/
        /*background: #fff6db;*/
        /*display: flex;*/
        /*flex-direction: column;*/
        /*align-items: center;*/
        /*position: relative;*/
    }
</style>
