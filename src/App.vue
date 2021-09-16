<template>
  <div id="app" class="md-layout">
    <div class="md-layout-item md-size-33" v-for="quadrinho in quadrinhos" :key="quadrinho.id">
      <Card
        :titulo="quadrinho.title"
        :descricao="quadrinho.description"
        :imagem="getImagem(quadrinho)"
    ></Card>
    </div>
  </div>
</template>


<script>

import MarvelApi from '@/services/MarvelAPI';
import Card from '@/components/Card';

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      quadrinhos: []
    }
  },
  created() {
    var self = this
    MarvelApi.getAllComics(10, comics => {
      self.quadrinhos = comics.data.data.results;
    })
  },
  methods: {
    getImagem: function(quadrinho) {
      if (quadrinho.images.length) {
        return quadrinho.images[0].path + '/portrait_medium.jpg';
      }
    }
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
