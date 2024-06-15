const app = new Vue({
  el: '#app',
  data: {
    entrenadores: [],
    mostrarPokemon: null,
    entrenador1: null,
    entrenador2: null
  },
  mounted() {
    axios.get('./json/entrenadores.json')
      .then(response => {
        this.entrenadores = response.data;
      })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
      });
  },
  methods: {
    verPokemon(index) {
      if (this.mostrarPokemon === index) {
          this.mostrarPokemon = null; 
      } else {
          this.mostrarPokemon = index; 
      }
    },
    seleccionarEntrenador(entrenador) {
      if (!this.entrenador1) {
        this.entrenador1 = entrenador;
      } else if (!this.entrenador2 && this.entrenador1 !== entrenador) {
        this.entrenador2 = entrenador;
        this.iniciarCombate(); 
      }
    },
    
    iniciarCombate() {
      if (this.entrenador1 && this.entrenador2) {
        console.log(`Nuevo combate entre ${this.entrenador1.name} vs ${this.entrenador2.name}`);
      }
    },
    cerrarModal() {
      // Resetea los entrenadores y oculta el modal
      this.entrenador1 = null;
      this.entrenador2 = null;
    }
  }
});
