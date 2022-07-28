<template>
  <nuxt-link class="circle" :to="link">
    <div class="logo">
      <i class="fa-regular fa-arrow-up-right"></i>
    </div>
    <div class="text" :id="id">
      <p>View all Services - View all Services -</p>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
    },
    id: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  mounted() {
    let el = document.getElementById(this.id);
    console.log(el);
    let text = el.querySelector("p");
    // let deg = [];
    text.innerHTML = text.innerText
      .split("")
      .map((char, i) => {
        // deg.unshift(i);
        // console.log(360 / deg[0]);
        return `<span style="transform:rotate(${i * 9}deg)">${char}</span>`;
      })
      .join("");
  },
};
</script>
