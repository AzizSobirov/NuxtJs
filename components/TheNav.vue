<template>
  <nav class="nav" :class="nav ? 'active' : ''">
    <div class="bar" @click="nav = !nav">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h2>AzizDev</h2>
    <ul>
      <li><router-link to="/">Bosh sahifa</router-link></li>
      <li><router-link to="/about">Men haqimda</router-link></li>
      <li><router-link to="/contact">Loyihalar</router-link></li>
      <li><router-link to="/contact">Xizmatlar </router-link></li>
      <li><router-link to="/contact">Blog</router-link></li>
      <li><router-link to="/contact">Aloqa </router-link></li>
    </ul>
    <div class="close" @click="nav = !nav"></div>
    <div class="lang" @click="changeLang()">
      <h3 class="lang_name">{{ $t("lang") }}</h3>
      <div class="lang_icon">
        <v-icon dark>mdi-translate</v-icon>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      nav: false,
    };
  },
};
</script>
