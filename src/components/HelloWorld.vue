<template>
  <b-container>
    <g-card titulo="Título do card" imgSrc="https://picsum.photos/600/300/?image=25" alt="Descrição" class="mt-4">

      <template v-slot:texto>
        Aqui ficará o texto do card
      </template>

      <template v-slot:botoes>
          <g-botao :tema="tema" tipo="secundario">Botão secundário</g-botao>
          <g-botao :tema="tema" tipo="primario">Botão primário</g-botao>
      </template>

    </g-card>

  </b-container>
</template>

<script>
import GBotao from './../../../getrak-dsp-web/vuejs/g-botao.vue'
import GCard from './../../../getrak-dsp-web/vuejs/g-card.vue'
export default {
  name: 'HelloWorld',
  data: () => ({
    tema: "abacate"
  }),
  components: {
    GBotao,
    GCard
  }
}
</script>
