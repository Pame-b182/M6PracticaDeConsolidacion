<template>
  <div id="app">
    <navegation />
    <!-- Se aplica animación a las vistas a través de librería "animate.style" -->
    <transition mode="out-in" enter-active-class="animate__animated animate__zoomInDown" leave-active-class="animate__animated animate__zoomOut">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "app",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  components: {
    navegation: Nav,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
body {
  background-image: url("https://www.mediaplaynews.com/wp-content/uploads/2020/02/videogames-1-e1522270884482.jpg");
  background-size: 400px

}
</style>
