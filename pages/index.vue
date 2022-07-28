<template>
  <main>
    <section class="home">
      <div class="home_content">
        <div class="home_content-text">
          <the-title
            short="Hello!"
            text="We have Design Experience"
          ></the-title>

          <p>
            Hi! I'm Aziz Sobirov. <br />
            I'm a web designer and developer from Uzbekistan.
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
          <p>Check Out My</p>
          <span>
            <a href="#" class="fa-brands fa-facebook-f"></a>
            <a href="#" class="fa-brands fa-instagram"></a>
            <a href="#" class="fa-brands fa-telegram"></a>
            <a href="#" class="fa-brands fa-linkedin"></a>
          </span>
        </div>
      </div>
      <img src="../assets/img/home1.png" alt="" />
      <div class="home_scroll-line">
        <hr />
        <h4>Scroll Down</h4>
      </div>
    </section>

    <section class="services">
      <div class="services_content">
        <the-title short="Service" text="Services I Offer"></the-title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          dolorem dolor accusamus sint fugit perferendis adipisci et consequatur
          necessitatibus. Eius?
        </p>
        <the-circle text="View all Services - View all Services -" id="btn1" link="/services"></the-circle>
      </div>
      <ul class="services_list">
        <li v-for="service in list" :key="service.id">
          <h2>{{ service.id }}/</h2>
          <div>
            <h1>{{ service.title }}</h1>
            <span>
              <p>Explore</p>
              <nuxt-link
                :to="/services/ + service.link"
                class="fa-regular fa-arrow-up-right"
              ></nuxt-link>
            </span>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: "01",
          title: "Web UI/UX Design",
          link: "web-design",
        },
        {
          id: "02",
          title: "Mobile App UI/UX Design",
          link: "web-design",
        },
        {
          id: "03",
          title: "Dashboard & Web Design",
          link: "web-design",
        },
      ],
    };
  },
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
};
</script>
