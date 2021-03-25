<template>
  <b-container>
    <h1 class="gds-titulo-h1">Título da página</h1>
    <h2 class="gds-titulo-h2">Título h2</h2>
    <b-card
      tag="article"
      class="mb-2 shadow border-0"
      style="max-width: 20rem;"
     >
      <b-card-title class="gds-titulo-h2">
        Card Title
      </b-card-title>
      <b-card-text class="gds-texto">
          Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
    
      <b-button href="#" variant="neutro">Go somewhere</b-button>
    </b-card>
    
    <br>

    <b-button variant="azul" @click="helloWorld()" class="mr-2">Action</b-button>
    <b-button variant="roxo">Action</b-button>
    <br><br>

    <b-row class="alert-roxo exemplo-conteudo-principal">
      <b-col cols="1" lg="6" xl="3" :key="l" v-for="l in loop">
        <b-form-group
        label="Email address:"
        :label-for="returnString(l)"
        description="We'll never share your email with anyone else."
        >
          <b-form-input
            :id="returnString(l)"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button variant="vermelho">Ação</b-button>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    idButton: "test",
    loop: [
      1,
      2,
      3,
      4
    ]
  }),
  props: {
    msg: String
  },
  methods: {
    helloWorld () {
      alert('Its work!')
    },
    returnString(s) {
      return s.toString()
    }
  }
}
</script>
