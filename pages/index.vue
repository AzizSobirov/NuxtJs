<template>
  <main>
    <section class="home">
      <div class="home_content">
        <h3>{{ $t("home.title") }}</h3>
        <h2 class="ml11">
          <span class="text-wrapper">
            <span class="line line1"></span>
            <span class="letters">Aziz Sobirov</span>
          </span>
        </h2>
        <p v-html="$t('home.description')"></p>
        <span>
          <a class="btn" href="#">{{ $t("home.start_btn") }}</a>
          <a class="btn" href="#resume">{{ $t("home.about_btn") }}</a>
        </span>
      </div>
      <div class="home_img">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            d="M48.9,-61.4C61.4,-47.8,68.1,-30.5,70.4,-13.1C72.6,4.3,70.3,21.8,62.8,37.7C55.3,53.5,42.6,67.8,27.4,71.9C12.1,75.9,-5.6,69.9,-21.3,62.5C-37.1,55.1,-51,46.3,-62.3,33C-73.6,19.6,-82.3,1.8,-79.9,-14.5C-77.4,-30.7,-63.9,-45.4,-48.8,-58.5C-33.6,-71.6,-16.8,-83,0.7,-83.9C18.2,-84.7,36.4,-74.9,48.9,-61.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <img
          src="https://www.uiocean.com/wrap/kanye/assets/img/user-image.png"
          alt=""
        />
      </div>
      <div class="home_social">
        <!-- get social network icons -->
        <a href="#">
          <v-icon>
            mdi-facebook
          </v-icon>
        </a>
        <a href="#">
          <v-icon>
            mdi-twitter
          </v-icon>
        </a>
        <a href="#">
          <v-icon>
            mdi-instagram
          </v-icon>
        </a>
        <a href="#">
          <v-icon>
            mdi-linkedin
          </v-icon>
        </a>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  mounted() {
    var textWrapper = document.querySelector(".ml11 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    );

    this.$anime
      .timeline({ loop: true })
      .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
      })
      .add({
        targets: ".ml11 .line",
        translateX: [
          0,
          document.querySelector(".ml11 .letters").getBoundingClientRect()
            .width + 20,
        ],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100,
      })
      .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=500",
        delay: (el, i) => 34 * (i + 1),
      })
      .add({
        targets: ".ml11",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  },
};
</script>
