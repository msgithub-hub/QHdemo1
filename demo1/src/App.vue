<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
    *{
        margin:0;
        padding:0;
        list-style: none;
    }

    .content {
        width: 100vw;
        min-height: 100vh;
        background: #fff6db;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    /* #ifdef H5 */
    uni-page-head {
        display: none;
    }
    /* #endif */
</style>
