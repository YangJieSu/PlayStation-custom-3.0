<template>
  <nav class="navbar navbar-light bg-white sticky-top shadow-sm">
    <div class="container navbar-expand-lg">
      <router-link class="navbar-brand mr-0 mr-sm-3" to="/index">
        <h1>PlayStation Store </h1>
      </router-link>
      <button
        class="navbar-toggler border-0 p-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="menu navbar-nav">
          <li class="nav-item" @click="currentPage = 'Home'" >
            <router-link class="nav-link font-weight-bold" to="/index" active-class="active" @click.native="closeNav">首頁</router-link>
          </li>
          <li class="nav-item" @click="currentPage = 'Gamehost'">
            <router-link class="nav-link font-weight-bold" to="/gamehost" active-class="active" @click.native="closeNav">主機介紹</router-link>
          </li>
          <li class="nav-item" @click="currentPage = 'Products'">
            <router-link class="nav-link font-weight-bold" to="/products" active-class="active" @click.native="closeNav">產品列表</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery';
  export default {
    data() {
      return {
        currentPage: 'Home'
      };
    },
    methods: {
      Page() {
        this.currentPage = this.$router.history.current.name;
      },
      closeNav() {
        $('.collapse').collapse('hide');
      }
    },
    created() {
      this.Page();
    },
  };
</script>