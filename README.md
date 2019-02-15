# Vue.js 購物網站
## Demo
https://yangjiesu.github.io/PlayStation-custom-3.0/dist
## Intro
* 將後臺所建立的商品及購買系統利用 Ajax 將畫面呈現至前台客戶端
# 功能
本作品其主要功能有：
* 前台:商品展示、購物車清單、商品下單、優惠券套用、訂單列表、訂單結帳
## Skills
* Vue Cli 3.0
* Vue Router
* Vue Component
* API的應用
* Bootstrap 4 + 手刻 SCSS 的混合應用
# 前台內容介紹
## 快速商品展示列
使用 swiper.js 製作成輪播元件，並可藉由傳入的 Props 切換不同的產品類別、商品名稱來提升靈活度
![default](https://user-images.githubusercontent.com/40859746/52620168-c25cf480-2ede-11e9-8b78-7450879fec60.PNG)
## 購物專區
重複使用「快速商品展示列」內的商品元件重新排版並製作商品搜尋、類別篩選、商品分頁功能，並於行動裝置時切換至快速商品展示列，避免頁面過長影響瀏覽體驗。
![default](https://user-images.githubusercontent.com/40859746/52620188-cdb02000-2ede-11e9-9f18-b76c6faa32f3.PNG)
## 商品介紹
商品詳細介紹，選擇數量後即時顯示加總結果，方便使用者評估金額並加入購物車，提升使用體驗
![default](https://user-images.githubusercontent.com/40859746/52620105-9b062780-2ede-11e9-9290-c3e64160f148.PNG)
## 購物車 & 訂單資料填寫 
主要分為兩個部分，右方為購物車內容，左方為整個購物車商品的加總，並可套用優惠券。<br>
表單部分具有驗證功能及提示，並於畫面上方放置步驟順序，提升操作體驗。
![default](https://user-images.githubusercontent.com/40859746/52620204-d9034b80-2ede-11e9-8afd-87784bb0fb81.PNG)
![default](https://user-images.githubusercontent.com/40859746/52620217-e4567700-2ede-11e9-9893-abff8ab300e4.PNG)
## 付款 & 付款完成頁面
![default](https://user-images.githubusercontent.com/40859746/52620224-eddfdf00-2ede-11e9-849a-eaa8ebb07278.PNG)
![default](https://user-images.githubusercontent.com/40859746/52620234-f3d5c000-2ede-11e9-8941-2dc866aeb7c6.PNG)

## API Source
[六角學院 vue-course-api](https://github.com/hexschool/vue-course-api-wiki/wiki)
## Vue Plugins
* AJAX-[VuwAxios](https://www.npmjs.com/package/vue-axios)
* Loading-[Vue Loading Overlay](https://github.com/ankurk91/vue-loading-overlay)
* Validate-[VeeValidate](https://github.com/baianat/vee-validate)
* Swiper-[Swiper.js](http://idangero.us/swiper/)
