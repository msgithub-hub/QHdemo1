<template>
    <div class="content">
        就会副教授副教授
        <button :class="{btn:isShow}">{{btnMsg}}</button>
        <!-- 分组成员名单 ul-->
        <ul class="list">
            <!-- li -->
            <li class="box" v-for="(item,index) in play" :key="item.id" @click="goDetail(item)">
                <image :src="item.avatar" class="head"></image>
                <div class="name">ddddddd{{index+1}}.{{item.city}}</div>
            </li>
        </ul>
        <!--<div class="noMession" v-if="showLoadMore">{{loadMoreText}}</div>-->
    </div>
</template>

<script>
    import {getNewsList} from "../../api/user";
    import resultCode from '../../axios/resultCode'

    export default {
        data() {
            return {
                btnMsg: '哈哈哈',
                isShow: false,
                page: 1,
                limit: 4,
                photo_li1: [],
                play: [],
                timer: null,
            }
        },

        onLoad() {
            this.getGroup()
        },
        onReachBottom() {
            // uni.showToast({
            //     icon:'none',
            //     title: '触底加载中',
            // });
            this.timer = setInterval(() => {
                this.page++;
                this.play = [...this.play, ...this.getMoreNews(this.photo_li1)];
            }, 150)
        },
        onPullDownRefresh() {
            // this.photo_li1=[];
            this.getGroup()
        },
        methods: {
            //加载分页
            getMoreNews(arr) {
                if (arr.length <= this.limit) {
                    return arr;
                }
                let index = (this.page - 1) * this.limit;
                let targetIndex = this.limit * this.page;
                return arr.slice(index, targetIndex);
            },

            //发送ajax
            async getGroup() {
                uni.showLoading({
                    title: '正在加载中...',
                    mask: true
                });
                let {data} = await getNewsList();
                // console.log(data);
                uni.hideLoading();
                if (data.code === resultCode.SUCCESS.code) {
                    this.photo_li1 = data.data.list || [];
                    this.play = [...this.play, ...this.getMoreNews(this.photo_li1)];
                    this.isShow = true;
                    this.btnMsg = '我爱你'
                }

                // uni.request({
                //     url: 'https://easydoc.top/mock/ft9mJNIn/test/getUserInfo',
                //     method: 'get',
                //     success: (res) => {
                //         uni.hideLoading();
                //         // console.log(res);
                //         if (res.data.code === 200) {
                //             this.photo_li1 = res.data.data.list || [];
                //             this.play = [ ...this.play,...this.getMoreNews(this.photo_li1)];
                //         }
                //     }
                // });
            },

            //点击跳转页面（传参）
            goDetail(e) {
                let detail = {
                    id: e.id,
                    avatar: e.avatar,
                    city: e.city,
                    title: e.city,
                };
                uni.navigateTo({
                    url: '../listNews/listNews?detailDate=' + encodeURIComponent(JSON.stringify(detail))
                });
            },
        }
    }
</script>

<style>
    .list {
        width: 640rpx;
        /* height: 796rpx; */
        padding-bottom: 20rpx;
        /*background: red; */
        border-radius: 20rpx;

        display: flex;
        flex-wrap: wrap;
    }

    .box {
        width: 100%;
        /* height: 100rpx; */
        margin-left: 0%;
        /*padding-bottom: 20rpx;*/
        margin-top: 50rpx;
        /* background: blue; */
        border: 1px solid red;
        display: flex;
        align-items: center;
    }

    .head {
        width: 50%;
        height: 300rpx;
        /* border-radius: 50%; */
    }

    .name {
        width: 50%;
        height: 44rpx;
        line-height: 44rpx;
        font-size: 32rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        /* background: red; */
        margin-left: 0%;
        text-align: center;
        letter-spacing: 2rpx;

        display: block;
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .noMession {
        width: 100%;
        line-height: 40rpx;
        padding-bottom: 10rpx;
        text-align: center;
        font-size: 30rpx;
        color: #999999;
    }

    .btn {
        width: 100%;
        height: 60rpx;
        line-height: 60rpx;
        background: #dd524d;
        color: white;
        /*position: fixed;*/
    }

    /*.logo {*/
    /*height: 200 upx;*/
    /*width: 200 upx;*/
    /*margin-top: 200 upx;*/
    /*}*/

    /*.title {*/
    /*font-size: 36 upx;*/
    /*color: #8f8f94;*/
    /*}*/
</style>
