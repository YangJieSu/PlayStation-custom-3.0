(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39186c9a"],{1026:function(t,a,s){},"12ae":function(t,a,s){t.exports=s.p+"img/loading.0f6ddb71.gif"},"2d62":function(t,a,s){"use strict";var e=s("1026"),i=s.n(e);i.a},"5f47":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("img",{attrs:{src:s("12ae"),alt:"",width:"200"}})]),e("div",{staticClass:"container productDetail mb-3"},[e("nav",{attrs:{"aria-label":"breadcrumb "}},[e("ol",{staticClass:"breadcrumb px-0"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/index"}},[t._v("首頁")])],1),e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/products"}},[t._v("商品")])],1),e("li",{staticClass:"breadcrumb-item"},[t._v(t._s(t.product.category))]),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.title))])])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:"image"}})]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"prodInfo addCart"},[e("h4",{staticClass:"font-weight-bold"},[t._v(t._s(t.product.title))]),e("div",{staticClass:"d-flex justify-content-between align-items-center py-3"},[t.product.price?t._e():e("div",[t._v(t._s(t._f("currency")(t.product.origin_price)))]),t.product.price?e("del",{staticClass:"text-muted"},[t._v("\n              原價"+t._s(t._f("currency")(t.product.origin_price))+"\n            ")]):t._e(),t.product.price?e("div",{staticClass:"h5 text-danger mb-0"},[t._v("特價\n              "),e("strong",[t._v(t._s(t._f("currency")(t.product.price)))])]):t._e()]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.product.buyNum,expression:"product.buyNum"}],staticClass:"form-control mb-3",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.$set(t.product,"buyNum",a.target.multiple?s:s[0])}}},[e("option",{attrs:{value:"0",selected:"",disabled:""}},[t._v("請選擇商品數量")]),t._l(10,function(a){return e("option",{key:a,domProps:{value:a}},[t._v("選購 "+t._s(a)+" "+t._s(t.product.unit))])})],2),e("div",{staticClass:"text-right font-weight-bold mb-1 total-price"},[t._v("\n            小計 "+t._s(t._f("currency")(t.product.price*t.product.buyNum))+"\n          ")]),e("button",{staticClass:"btn btn-warning w-100 text-primary font-weight-bold",on:{click:function(a){return a.preventDefault(),t.addCart(t.product.id,t.product.buyNum)}}},[t.status.loading?e("i",{staticClass:"fas fa-spinner fa-spin"}):e("i",{staticClass:"fas fa-plus"}),t._v("\n            加入購物車\n          ")])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"prodInfo px-0"},[e("h3",[t._v("產品描述")]),e("p",[t._v(t._s(t.product.description))])])]),e("div",{staticClass:"col-md-12"},[e("h3",{staticClass:"page_title"},[t._v("同類型遊戲")]),e("ProdSlider",{attrs:{prodCategory:t.product.category}})],1),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"goBack text-right"},[e("a",{staticClass:"btn btn-info text-white mt-2",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goBack(a)}}},[t._v("Back")])])])])])],1)},i=[],c=s("efe1"),r={components:{ProdSlider:c["a"]},data:function(){return{isLoading:!1,productId:"",product:{},status:{loading:!1}}},methods:{getProduct:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/product/").concat(t.productId);t.isLoading=!0,this.$http.get(a).then(function(a){t.product=a.data.product,t.$set(t.product,"buyNum",1),t.isLoading=!1})},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this;s.status.loading=!0;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/cart"),i={product_id:t,qty:a};this.$http.post(e,{data:i}).then(function(t){t.data.success&&(s.$bus.$emit("shopCart:update"),s.$bus.$emit("message:push","【".concat(t.data.data.product.title,"】").concat(t.data.data.qty," ").concat(t.data.data.product.unit," ").concat(t.data.message),"success")),s.status.loading=!1})},goBack:function(){this.$router.back()}},created:function(){this.productId=this.$route.params.productId,this.getProduct(),document.body.scrollTop=350,document.documentElement.scrollTop=350}},n=r,o=s("2877"),d=Object(o["a"])(n,e,i,!1,null,null,null);a["default"]=d.exports},e915:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card mt-0 bg-white rounded-0 prod-card"},[s("div",{staticClass:"product-img",staticStyle:{"padding-bottom":"55%","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+t.cardData.imageUrl+")"}}),s("div",{staticClass:"card-body"},[s("div",{staticClass:"prod-info mb-3"},[s("h5",{staticClass:"card-title mb-3 font-weight-bold text-truncate"},[t._v(t._s(t.cardData.title))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.cardData.description))])]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.cardData.price?t._e():s("div",{staticClass:"h5"},[t._v(t._s(t._f("currency")(t.cardData.origin_price))+"元")]),t.cardData.price?s("del",{staticClass:"font-italic"},[t._v("\n        原價 "+t._s(t._f("currency")(t.cardData.origin_price))+"\n      ")]):t._e(),t.cardData.price?s("div",{staticClass:"h5 text-danger font-weight-bold"},[t._v("售價 "+t._s(t._f("currency")(t.cardData.price)))]):t._e()])]),s("div",{staticClass:"card-footer d-flex"},[s("button",{staticClass:"btn btn-outline-info btn-sm",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.goSingleProduct(t.cardData.id)}}},[s("i",{staticClass:"fas fa-info d-none d-md-inline-block"}),t._v("\n      查看商品\n    ")]),s("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.addCart(t.cardData.id,1)}}},[t.status.loading?s("i",{staticClass:"fas fa-spinner fa-spin d-none d-md-inline-block"}):s("i",{staticClass:"fas fa-shopping-cart d-none d-md-inline-block"}),t._v("\n      加入購物車\n    ")])])])},i=[],c={data:function(){return{status:{loading:!1}}},props:{cardData:{type:Object,default:function(){return{}}}},methods:{goSingleProduct:function(t){var a=this;a.$router.push("/productDetail/".concat(t))},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/cart");s.status.loading=!0;var i={product_id:t,qty:a};this.$http.post(e,{data:i}).then(function(t){t.data.success&&(s.$bus.$emit("shopCart:update"),s.$bus.$emit("message:push","【".concat(t.data.data.product.title,"】").concat(t.data.data.qty," ").concat(t.data.data.product.unit," ").concat(t.data.message),"success")),s.status.loading=!1})}}},r=c,n=s("2877"),o=Object(n["a"])(r,e,i,!1,null,null,null);a["a"]=o.exports},efe1:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-3"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("img",{attrs:{src:s("12ae"),alt:"",width:"200"}})]),e("div",{staticClass:"swiper-container",attrs:{id:"prodSwiper"}},[e("div",{staticClass:"swiper-wrapper"},t._l(t.filterData,function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("ProductCard",{staticClass:"h-100",attrs:{cardData:t}})],1)}),0)])],1)},i=[],c=s("41d6"),r=s("e915"),n={data:function(){return{products:[],isLoading:!1}},components:{ProductCard:r["a"]},props:{prodCategory:{type:String,default:""},searchFilter:{type:String,default:""},searchResult:{type:Array,default:function(){return[]}}},methods:{getProducts:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/products/all");t.isLoading=!0,this.$http.get(a).then(function(a){a.data.success&&(t.products=a.data.products,t.isLoading=!1,t.showSwiper())})},showSwiper:function(){new c["a"]("#prodSwiper",{slidesPerView:4,slidesPerGroup:4,spaceBetween:10,grabCursor:!0,speed:600,autoplay:{delay:5e3},observer:!0,breakpoints:{480:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20},767:{slidesPerView:2,slidesPerGroup:2,spaceBetween:30},992:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30}},pagination:{el:".swiper-pagination",clickable:!0}})}},computed:{filterData:function(){var t=this;return t.searchFilter||t.searchResult.length?t.searchResult:t.products.filter(function(a){return"all"===t.prodCategory?a:a.category===t.prodCategory})}},created:function(){var t=this;t.getProducts()}},o=n,d=(s("2d62"),s("2877")),u=Object(d["a"])(o,e,i,!1,null,"662e6cd9",null);a["a"]=u.exports}}]);
//# sourceMappingURL=chunk-39186c9a.8d8fba19.js.map