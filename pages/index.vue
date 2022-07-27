<template>
  <main>
    <section class="home">
      <div class="home_content">
        <div class="home_content-text">
          <h4>Hello!</h4>
          <h1>
            We have Design Experience
          </h1>
          <p>
            Hi! I'm Aziz Sobirov. <br />
            I'm a web designer and developer from the UK.
          </p>
          <span>
            <nuxt-link to="/">
              Let's talk <i class="fa-regular fa-paper-plane"></i>
            </nuxt-link>
            <nuxt-link to="/">
              Portfolio <i class="fa-regular fa-arrow-up-right"></i>
            </nuxt-link>
          </span>
        </div>
        <div class="home_content-networks">
          <h3>Check out my</h3>
          <span>
            <a href="#" class="fa-regular fa-facebook"> </a>
          </span>
        </div>
      </div>
      <img src="../assets/img/home1.png" alt="" />
      <div class="home_scroll-line">
        <hr />
        <h4>Scroll Down</h4>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  head: {
    title: "Aziz Sobirov Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "author",
        name: "author",
        content: "Aziz Sobirov",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Men  Aziz Sobirov  Xorazm viloyati  Hazorasp  tumanida  Ziyolilar Oilasida  tug`ilganman.  Dasturchi hamda mexanikman.  https://www.azizdev.uz/ sayti orqali men haqimda batafsil malumot olasiz. CEO & Dasturchi, Aziz Dev, Abdul Aziz Sobirov",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Aziz Sobirov, Aziz Sobirov Dev, AzizDev, Aziz Sobirov Developer, Abdulaziz Sobirov , iCode Team Owner, Uzbekistan Aziz Sobirov, Uzbek developer, Khorezm Aziz Sobirov ",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // mounted() {
  //   var textWrapper = document.querySelector(".ml11 .letters");
  //   textWrapper.innerHTML = textWrapper.textContent.replace(
  //     /([^\x00-\x80]|\w)/g,
  //     "<span class='letter'>$&</span>"
  //   );

  //   this.$anime
  //     .timeline({ loop: true })
  //     .add({
  //       targets: ".ml11 .line",
  //       scaleY: [0, 1],
  //       opacity: [0.5, 1],
  //       easing: "easeOutExpo",
  //       duration: 700,
  //     })
  //     .add({
  //       targets: ".ml11 .line",
  //       translateX: [
  //         0,
  //         document.querySelector(".ml11 .letters").getBoundingClientRect()
  //           .width + 20,
  //       ],
  //       easing: "easeOutExpo",
  //       duration: 700,
  //       delay: 100,
  //     })
  //     .add({
  //       targets: ".ml11 .letter",
  //       opacity: [0, 1],
  //       easing: "easeOutExpo",
  //       duration: 600,
  //       offset: "-=500",
  //       delay: (el, i) => 34 * (i + 1),
  //     })
  //     .add({
  //       targets: ".ml11",
  //       opacity: 0,
  //       duration: 1000,
  //       easing: "easeOutExpo",
  //       delay: 1000,
  //     });
  // },
};
</script>
