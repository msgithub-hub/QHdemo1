<template>
    <div class="banner content">
        <image :src="banner.avatar" class="head" mode="aspectFill" @click="previewImage(`${banner.avatar}`)"></image>
        <p class="words">{{banner.id}}.{{banner.city}}</p>
        <map :latitude="latitude1" :longitude="longitude1" :markers="covers" class="map"></map>
        <mymap :msg="msg" @listNewsClick="mapClick" ></mymap>
        <!--@getLocation="mapLocation"-->
    </div>
</template>

<script>
    import mymap from "@/components/zujian/zujian" //第一步，导入组件
    import property from "../../property";
    // ${this.baseUrl}
    export default {
        name: "listNews",
        data(){
            return{
                banner:[],
                baseUrl: property.BASE_URL,
                previewImages:[],
                msg:'我是btn组件',
                latitude1: '',
                longitude1: '',
                covers: [],
            }
        },
        components: {
            mymap //第二步，注册组件
        },
        onLoad(event) {
            this.banner = JSON.parse(decodeURIComponent(event.detailDate));
            this.previewImages.push(`${this.banner.avatar}`);
            // console.log(this.banner);
            // //详情标题
            uni.setNavigationBarTitle({
                title: this.banner.title
            });
            this.mapLocation()
        },
        methods: {
            mapClick(rel){
                uni.showToast({
                    icon:'none',
                    title: this.banner.title,
                });
            },

            //获取自己所在地址
          async mapLocation() {
            let [err, data] = await uni.getLocation()
            console.log(data)
            this.latitude1 = data.latitude
            this.longitude1 = data.longitude
            const marker = {
              latitude: this.latitude1,
              longitude: this.longitude1
            }
            // console.log(this.latitude1, this.longitude1)
            this.covers.push(marker)
          },

            // 预览图片
            previewImage(current){
                uni.previewImage({
                    current, //预览图片的下标
                    urls:this.previewImages, //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
                })
            }
        }
    }
</script>

<style scoped>
    .head {
        width: 100%;
    }
    .words{
        width: 100%;
        line-height: 150rpx;
        font-size: 40rpx;
        color: red;
    }
    .map{
        width: 100%;
        height: 30vh;
        margin-bottom: 15px
    }

</style>