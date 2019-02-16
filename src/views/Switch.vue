<template>
  <div class="container py-3">
    <section>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <img src="../assets/images/switch-2.jpg" class="img-fluid" alt="">
        </div>
      </div>
      <h2 class="page_title my-3">關於 Switch</h2>
      <p class="px-3 text-justify">
        任天堂Switch（日語：ニンテンドースイッチ，英語：Nintendo Switch）是日本任天堂公司出品的電子遊戲機，
        於2017年3月3日在日本、北美、歐洲和香港發售，同年12月1日在韓國和台灣發售。
        擁有可拆卸控制器和可分離式主機，遊戲載體使用了專用卡匣。
        主機處理器使用了NVIDIA客制的Tegra X1系統晶片，這是任天堂首次採用NVIDIA的系統晶片。
        開發期中的主機於2015年3月17日以「NX」代號首次公布，在2016年10月20日首次於網路影片上公開正式名稱任天堂Switch和其造型。
      </p>
    </section>
    <section>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <img src="../assets/images/switch-3.jpg" class="img-fluid" alt="">
        </div>
      </div>
      <h2 class="page_title my-3">買 Switch 的理由</h2>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <ul class="buy-reason reason-switch mb-3 text-center">
            <li class="py-1">
              <img src="../assets/images/Mario.png" class="img-fluid" alt="" width="50">
              <span>陪伴你童年的瑪莉歐大叔</span>
            </li>
            <li class="py-1">
              <img src="../assets/images/eve.png" class="img-fluid" alt="" width="50">
              <span>全世界火紅的精靈寶可夢</span>
            </li>
            <li class="py-1">
              <img src="../assets/images/link.png" class="img-fluid" alt="" width="50">
              <span>耐玩性超高的「薩爾達」系列</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <h2 class="page_title my-3">相關遊戲特惠中</h2>
      <ProdSlider prodCategory="Switch"></ProdSlider>
    </section>
    <section class="my-3">
      <h2 class="page_title">想看更多？</h2>
      <div class="d-flex justify-content-center py-3">
        <router-link to="/products" class="toShopping font-weight-bold">
          前往 PlayStation Store
          <i class="fas fa-caret-right ml-1"></i>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import ProdSlider from '../components/ProdSlider.vue';

export default {
  components: {
    ProdSlider,
  },
};
</script>
