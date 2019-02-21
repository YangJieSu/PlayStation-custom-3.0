<template>
  <div class="main">
    <Topslider></Topslider>
    <div class="container">
      <section class="py-3">
        <h2 class="page_title m-0">關於 PlayStation Store</h2>
        <p class="p-3">
          這是一個練習 Vue 的作品，此商城內有 Switch、PS4、3DS 等遊戲供大家做選擇，
          未來商城將會加入更多遊戲，若想要推薦商城上架某款特別遊戲，請與本商城聯繫，
          將有專人為您服務
        </p>
      </section>
      <section class="py-3">
        <h2 class="page_title m-0">本期熱銷商品</h2>
        <ProdSlider prodCategory="all"></ProdSlider>
      </section>
    </div>
  </div>
</template>

<script>
import Topslider from '../components/Topslider.vue';
import ProdSlider from '../components/ProdSlider.vue';

export default {
  components: {
    Topslider,
    ProdSlider,
  },
};
</script>
