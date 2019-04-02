<template>
  <v-expansion-panel v-model="panel" expand >
    <v-expansion-panel-content>
      <template v-slot:header> <div>Images</div> </template>
      <v-carousel> <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" ></v-carousel-item> </v-carousel>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <template v-slot:header> <div>Charts</div> </template>
      <v-card>Charts</v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <template v-slot:header> <div>Device Console</div> </template>
      <v-card>device console</v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  data () {
    return {
      panel: [true, true, true],
      items: [
        { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }
      ]
    }
  }
}
</script>
