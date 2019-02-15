<template>
  <div class="container py-3">
    <section>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <img src="../assets/images/ps4-2.jpg" class="img-fluid" alt="">
        </div>
      </div>
      <h2 class="page_title my-3">關於 PS4</h2>
      <p class="px-3 text-justify">
        PlayStation 4（官方縮寫：PS4）是索尼互動娛樂推出的家用電子遊樂器，首發在2013年11月15日於北美開始販售。
        本機作為PlayStation 3的後續機型，於電子遊戲史中為第八世代機種。在新的應用和服務方面，
        索尼在智慧型手機和平板電腦上推出專屬應用程式「PlayStation App」，讓這些裝置成為第二螢幕以加強遊戲體驗。
        索尼也推出了雲端遊戲的串流服務「PlayStation Now」。此外，搭配的控制器上增加了「分享」按鈕，讓使用者易於將遊玩過程作直播或錄製等用途。
      </p>
    </section>
    <section>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <img src="../assets/images/ps4-3.jpg" class="img-fluid" alt="">
        </div>
      </div>
      <h2 class="page_title my-3">買 PS4 的理由</h2> 
      <div class="row justify-content-center">
        <div class="col-md-6">
          <ul class="buy-reason reason-ps4 mb-3 text-center">
            <li class="py-1">
              <img src="../assets/images/mhw-legiana.png" class="img-fluid" alt="" width="50">
              <span>成為高清獵人的一份子</span>
            </li>
            <li class="py-1">
              <img src="../assets/images/darksouls.png" class="img-fluid" alt="" width="50">
              <span>眾多大廠支持不怕沒遊戲</span>
            </li>
            <li class="py-1">
              <img src="../assets/images/ys8.png" class="img-fluid" alt="" width="50">
              <span><del>我索廚我驕傲(誤)</del></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <h2 class="page_title my-3">相關遊戲特惠中</h2>
      <ProdSlider prodCategory="PS4"></ProdSlider>
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
import ProdSlider from "../components/ProdSlider.vue";
export default {
  components: {
    ProdSlider
  },
}
</script>