<template>
    <div class="content">
        <div class="picRong">
            <image class="photo" v-for="item in imgArr " :src="item" @click="preveImg(item)"></image>
        </div>
        <button type="primary" @click="chooseImage">选择图片</button>
    </div>
</template>

<script>
    export default {
        name: "speak",
        data() {
            return {
                imgArr: []
            }
        },
        methods: {
            chooseImage(){
                uni.chooseImage({
                    count: 3, //默认9
                    success:res=> {
                        // console.log(res);
                        this.imgArr=res.tempFilePaths
                    }
                });
            },
            preveImg(current){
                uni.previewImage({
                    current:current,
                    urls:this.imgArr,
                    indicator:"number",
                    loop:true
                })
            }
        }
    }
</script>

<style scoped>
    .picRong{
        width: 90%;
        /*background: royalblue;*/
        padding-top: 10rpx;
        padding-bottom: 10rpx;
        /*margin-bottom: 10rpx;*/
        display: flex;
        flex-wrap: wrap;

    }
    .photo{
        width: 30%;
        height: 200rpx;
        margin-left: 20rpx;
    }

</style>