<template>
  <div class="mt-3">
    <loading :active.sync="isLoading">
      <img src="../assets/images/loading.gif" alt="" width="200">
    </loading>
    <div class="swiper-container" id="prodSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in filterData" :key="item.id">
          <ProductCard :cardData="item" class="h-100"></ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import ProductCard from './ProductCard.vue';

export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  components: {
    ProductCard,
  },
  props: {
    prodCategory: {
      type: String,
      default: '',
    },
    searchFilter: {
      type: String,
      default: '',
    },
    searchResult: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getProducts() {
      // 取得所有產品
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products/all`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.products = response.data.products;
          vm.isLoading = false;
          vm.showSwiper();
        }
      });
    },
    showSwiper() {
      const mySwiper = new Swiper('#prodSwiper', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
        grabCursor: true,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        observer: true, // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        breakpoints: {
          480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
  },
  computed: {
    filterData() {
      const vm = this;
      if (vm.searchFilter || vm.searchResult.length) {
        return vm.searchResult;
      }
      return vm.products.filter((item) => {
        if (vm.prodCategory === 'all') {
          return item;
        }
        return item.category === vm.prodCategory;
      });
    },
  },
  created() {
    const vm = this;
    vm.getProducts();
  },
};
</script>

<style lang="scss" scoped>
#prodSwiper {
  min-height: 370px;
}
</style>
