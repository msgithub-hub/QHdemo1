import resultCode from "./resultCode"

export default function (response) {
  // console.log(response);
  if (response && response.statusCode === 200) {
    switch (response.data.code) {
        case resultCode.SUCCESS.code:
            break;
        case resultCode.USER_NOT_AUTH.code:
            break;
        default:
          uni.showToast({ title: response.data.msg, icon: 'none' });
    }
  } else {
    uni.showToast({ title: response.statusCode + '错误', icon: 'none' });
  }
}
