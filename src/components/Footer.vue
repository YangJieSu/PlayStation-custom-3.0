<template>
  <div class="footer">
    <div class="bg-primary py-3 subcribe">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5 d-flex align-items-center mb-3 mb-md-0">
            <span class="text-white subcribe-slogan">訂閱 PlayStation Store</span>
          </div>
          <div class="col-md-5">
            <div class="form-group m-0 h-100 position-relative">
              <label for="exampleInputEmail1" class="subcribe-form-icon">
                <i class="fas fa-envelope"></i>
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                name="email"
                aria-describedby="emailHelp"
                placeholder="ex@gmail.com"
                :class="{ 'is-invalid': errors.has('email') }"
                v-validate="'required|email'"
                v-model.trim="subemail"
              >
              <button type="button" class="btn border-0 bg-warning" @click.prevent="subcription">
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-secondary py-3">
      <div class="container">
        <div class="row flex-column-reverse flex-md-row">
          <div class="col-md-6 mt-3 mt-md-0">
            <div class="d-flex">
              <a href="https://github.com/YangJieSu" target="_blank" class="mr-3">
                <i class="fab fa-github fa-3x"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook-square fa-3x"></i>
              </a>
            </div>
            <p class="authorInfo m-0 mt-3">僅個人練習使用．不做商業用途
              <br>圖片版權屬於任天堂、SONY、大宇資訊所有
            </p>
          </div>
          <div class="col-md-6 text-md-right">
            <div class="logo mb-3">
              <!-- <img src="logo.png" height="60" alt> -->
              <img src="../../public/logo.png" height="60" alt>
            </div>
            <ul class="contactInfo list-unstyled mb-0">
              <li>連絡電話 :
                <a href="tel:0920598012">0920-598-012</a>
              </li>
              <li>聯絡信箱 :
                <a href="mailto:BetaPhoenixSNSD@gmail.com">BetaPhoenixSNSD@gmail.com</a>
              </li>
              <li>聯絡地址 : 104 台北市中山區吉林路456巷7號7樓</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      subemail: '',
    };
  },
  methods: {
    subcription() {
      const vm = this;
      const email = document.querySelector('#exampleInputEmail1');
      this.$validator.validate().then((result) => {
        if (result) {
          vm.$bus.$emit('message:push', `感謝 ${vm.subemail} 的訂閱!! `, 'success');
          vm.subemail = '';
        } else {
          vm.$bus.$emit('message:push', '請確認 Email 是否正確', 'danger');
          email.focus();
        }
      });
    },
  },
};
</script>
