<template>
  <b-container class="m-2">
    <h1 class="gds-h1">Título da página</h1>
    <h2 class="gds-h2">Título h2</h2>
    <b-card
      tag="article"
      class="mb-2 shadow border-0"
      style="max-width: 20rem;"
     >
      <b-card-title class="gds-h4">
        Card Title
      </b-card-title>
      <b-card-text class="gds-texto">
          Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
    
      <b-button href="#" variant="purple">Go somewhere</b-button>
    </b-card>
    
    <br>

    <b-button variant="primary" @click="helloWorld()" class="mr-2">Action</b-button>
    <b-button variant="purple">Action</b-button>

  </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    idButton: "test",
  }),
  props: {
    msg: String
  },
  methods: {
    helloWorld () {
      alert('Its work!')
    }
  }
}
</script>
