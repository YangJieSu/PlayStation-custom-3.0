<template>
  <div class="main">
    <loading :active.sync="isLoading">
      <img src="../assets/images/loading.gif" alt="" width="200">
    </loading>
    <Topslider></Topslider>
    <div class="products container">
      <h2 class="page_title my-3">購物專區</h2>
      <div class="row justify-content-end mb-3">
        <div class="col-md-8 col-lg-4">
          <div class="form-group m-0 position-relative">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search something..." v-model.trim="searchFilter" @input="searchProducts">
              <div class="input-group-append">
                <button type="button" class="btn border-0 bg-warning" @click="searchProducts">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-lg-2">
          <ul class="category-list d-flex flex-md-column justify-content-between mb-0 flex-wrap">
            <li>
              <a href="#" class="font-weight-bold mb-3" :class="{ 'active' : selected == 'all' }" @click.prevent="changeCategory('all');">
                <img src="../assets/images/Game_icon.png" class="d-none d-md-inline-block img-fluid" width="50" alt="">
                <span>全部系列</span>
              </a>
            </li>
            <li>
              <a href="#" class="font-weight-bold mb-3" :class="{ 'active' : selected == 'Switch' }" @click.prevent="changeCategory('Switch');">
                <img src="../assets/images/Nintendo_Switch_icon.png" class="d-none d-md-inline-block img-fluid" width="50" alt="">
                <span>Switch 遊戲</span>
              </a>
            </li>
            <li>
              <a href="#" class="font-weight-bold mb-3" :class="{ 'active' : selected == 'PS4' }" @click.prevent="changeCategory('PS4');">
                <img src="../assets/images/ps4_icon.png" class="d-none d-md-inline-block img-fluid" width="50" alt="">
                <span>PS4 遊戲</span>
              </a>
            </li>
            <li>
              <a href="#" class="font-weight-bold mb-3" :class="{ 'active' : selected == 'N3DS' }" @click.prevent="changeCategory('N3DS');">
                <img src="../assets/images/n3ds_icon.png" class="d-none d-md-inline-block img-fluid" width="50" alt="">
                <span>N3DS 遊戲</span>
              </a>
            </li>          
          </ul>
        </div>
        <div class="col-md-8 col-lg-10 d-none d-sm-block">
          <div class="alert alert-warning d-flex justify-content-center align-items-center" v-if="searchFilter && searchResult.length == 0">
            Sorry,依您的關鍵字「{{ searchFilter }}」搜尋不到產品呢...
          </div>
          <template v-else>
            <div class="row">
              <div class="col-sm-6 col-lg-4 mb-3" v-for="item in filterData" :key="item.id">
                <ProductCard :cardData="item"></ProductCard>
              </div>
            </div>
            <Pagination :pageData="pagination" @changepage="getProducts"></Pagination>
          </template>
        </div>
        <div class="col d-sm-none">
          <div class="alert alert-warning d-flex justify-content-center align-items-center" v-if="searchFilter && searchResult.length == 0">
            Sorry,依您的關鍵字「{{ searchFilter }}」搜尋不到產品呢...
          </div>
          <ProdSlider :prodCategory="selected" :searchFilter="searchFilter" :searchResult="searchResult" v-else></ProdSlider>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Topslider from '../components/Topslider.vue';
import ProductCard from '../components/ProductCard.vue';
import ProdSlider from '../components/ProdSlider.vue';
  export default {
    components: {
      ProductCard,
      Topslider,
      ProdSlider
    },
    data() {
      return {
        products: [],
        isLoading: false,
        pagination: {
          filterPageSize : 10,
          total_pages: 1,
          current_page: 1,
          has_pre: false,
          has_next: false,
        },
        selected: 'all',
        searchFilter: '',
        searchResult: [],
        status: {
          loading: false
        }
      };
    },
    methods: {
      getProducts(page = 1) {
        const vm = this;
        let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products/all`;
        vm.isLoading = true;
        this.$http.get(api).then((response) => {
          console.log(response.data)
          vm.products = response.data.products;
          vm.pagination.current_page = page;
          vm.isLoading = false;
        });
      },
      changeCategory(category) {
        const vm = this;
        vm.selected = category;
        vm.pagination.current_page = 1;
        vm.searchFilter = '';
        vm.searchResult = [];
      },
      searchProducts() {
        // 過濾搜尋
        const vm = this;
        vm.pagination.current_page = 1;
        vm.selected = '';
        if(vm.searchFilter !== '') {
          vm.searchResult = vm.products.filter((item) => {
            return item.title.match(vm.searchFilter);
          });
        } else {
          vm.selected = 'all';
          vm.searchResult = [];
        };
      }
    },
    computed: {
      filterProd() {
        // 過濾搜尋及過濾分類
        const vm = this;
        if(vm.searchFilter || vm.searchResult.length) {
          vm.selected = vm.searchResult[0].category;
          return vm.searchResult;
        } else {
          return vm.products.filter((item) => {
            if(vm.selected == 'all') {
              return item
            } else {
              return item.category == vm.selected;
            }
          });
        }
      },
      filterData() {
        // 分頁邏輯
        const vm = this;
        let dataLen = vm.filterProd.length;
        let nowPage = vm.pagination.current_page;
        vm.pagination.total_pages = Math.ceil( dataLen / vm.pagination.filterPageSize );
        nowPage > 1 ? vm.pagination.has_pre = true : vm.pagination.has_pre = false;
        nowPage == vm.pagination.total_pages ? vm.pagination.has_next = false : vm.pagination.has_next = true;
        return vm.filterProd.filter((item, index) => {
          return index < (nowPage * vm.pagination.filterPageSize) && index >= (nowPage - 1) * vm.pagination.filterPageSize;
        });
      }
    },
    created() {
      this.getProducts();
    },
  };
</script>