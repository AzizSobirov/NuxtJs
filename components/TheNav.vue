<template>
  <nav class="nav" :class="nav ? 'active' : ''">
    <div class="bar" @click="nav = !nav">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="logo" @click="$router.push('/')">
      <img src="../static/logo.png" alt="Aziz Sobirov portfolio" />
      <h2>Aziz<mark>Dev</mark></h2>
    </div>
    <ul>
      <li v-for="list in $t('navbar', { returnObjects: true })" :key="list.id">
        <router-link :to="list.link">{{ list.title }}</router-link>
      </li>
    </ul>
    <div class="close" @click="nav = !nav"></div>
    <div class="lang">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
        v-if="!lang"
        @click="lang = !lang"
      >
        <title>Language</title>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M48 112h288M192 64v48M272 448l96-224 96 224M301.5 384h133M281.3 112S257 206 199 277 80 384 80 384"
        />
        <path
          d="M256 336s-35-27-72-75-56-85-56-85"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
        @click="lang = !lang"
        v-else
      >
        <title>Close</title>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M368 368L144 144M368 144L144 368"
        />
      </svg>
      <div class="lang_content" v-show="lang">
        <label
          for="lang1"
          @click="$i18n.locale = $i18n.locale === 'en' ? 'uz' : 'en'"
        >
          <input
            type="radio"
            id="lang1"
            name="lang"
            :checked="$t('lang') == 'Uzbek'"
          />
          <span>Uzbek</span>
        </label>
        <label
          for="lang3"
          @click="$i18n.locale = $i18n.locale === 'en' ? 'uz' : 'en'"
        >
          <input
            type="radio"
            id="lang3"
            name="lang"
            :checked="$t('lang') == 'English'"
          />
          <span>English</span>
        </label>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      nav: false,
      lang: false,
    };
  },
  mounted() {
    let nav = document.querySelector(".nav");
    window.addEventListener("scroll", function () {
      nav.classList.toggle("sticky", window.scrollY > 0);
    });
  },
};
</script>
