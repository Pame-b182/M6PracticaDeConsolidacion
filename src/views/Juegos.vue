<template>
    <div class="container">
    <div class="row">
      <div class="text-light m-3 p-3 text-center">
        <button
          @click="obtenerJuegos"
          type="button"
          class="btn btn-light btn-lg fs-3 fw-bold"
        >
          Mostrar Juegos
        </button>
      </div>
      <div class="row">
        <div v-for="(juego, index) in juegos" :key="index" class="col col-md-3 align-items-stretch">
        <div class="card text-center p-0 m-1">
            <img :src="juego.background_image" class="card-img-top object-fit-cover" height="120px" alt="" />
          <div class="card-body mh-75">
            <!-- Se utiliza el método "slice()" para acortar el nombre del juego a 18 caracteres -->
            <h5 class="card-title fs-6">{{juego.name.slice(0, 18)}}..</h5>
            <a @click="infoJuego(juego.id)" href="#" class="btn btn-dark btn-sm">Ver más</a>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "juegos-component",
  //props: {},
  data: function () {
    return {
      page: 1,
      juegos: [],
      name:'',
      background_image:'',
    };
  },
  // computed: {},
  methods: {
   obtenerJuegos() {
      axios
        .get(
          `https://api.rawg.io/api/games?key=de294bb09054413cb1d75970171acf08&page=${this.page}`
        )
        .then((json) => {
          let results = json.data.results;
          results.forEach((juego) => {
            this.juegos.push(juego);
          });
          this.page++;
          console.log(this.juegos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
      infoJuego(id){
    console.log(id);
    this.$router.push(`/juegos/${id}`);
  }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>