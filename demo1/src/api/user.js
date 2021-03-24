import { axios } from 'castle-haozijunqaq-uni-utils'

/**
 * PHP服务登录
 * @param code 小程序登录code
 * @returns {*}
 */

/**获取列表**/
export function getNewsList() {
    return axios.postData('/test/getUserInfo');
}









