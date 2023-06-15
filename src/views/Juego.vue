<template>
<div class="container">
    <div class="row">
      <div class="col">
        <div class="card mb-3 m-3 mx-auto" style="max-width: 600px">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="juego.background_image" class="img-fluid rounded-start h-100" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">{{juego.name}}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Clasificación: {{juego.rating}}</li>
                <li class="list-group-item">Fecha Publicación: {{juego.released}}</li>
                <li class="list-group-item">Fecha Actualización: {{juego.updated}}</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
              <div class="text-center">
                <button @click="volverJuegos" type="button" class="btn btn-light">Volver</button>
              </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'juego-component',
    props: {
        id: {
        type: String,
        required: true,
    }
    },
    data: function(){
        return {
    juego:{
      name:'',
      background_image:'',
      rating:'',
      released:'',
      updated:''
      }
        }
    },
    // computed: {},
    methods: {
      getJuego(){
      axios.get(`https://api.rawg.io/api/games/${this.id}?key=de294bb09054413cb1d75970171acf08`)
      .then(result=>{
        this.juego=result.data
        console.log(result.data);
      })
      .catch(error=>{
          console.log(error);
      })
    },
    volverJuegos(){
      this.$router.push('/juegos');
    }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
    this.getJuego()
  }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>