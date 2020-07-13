<template>
  <div>
    <v-timeline>
      <v-timeline-item
        v-for="(chapter, index) in story"
        :key="index"
        :color="chapter.color"
        fill-dot
        :right="index % 2 === 0"
        :left="index % 2 !== 0"
        :small="chapter.small"
      >
        <v-card>
          <v-card-title :class="chapter.color">
            <v-icon class="mr-4" dark size="42">
              {{ chapter.icon }}
            </v-icon>
            <h2 class="display-1 white--text font-weight-light">
              {{ chapter.name }}
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col v-html="chapter.description"></v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-overlay :value="overlay">
      <v-row>
        <img :src="overlayImage" width="500px" @click="overlay = false" />
      </v-row>
      <v-row class="justify-center">
        <v-btn icon @click="overlay = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
    </v-overlay>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { IStory } from '~/types/main.ts'

@Component
export default class HistoryMd extends Vue {
  @Prop() story!: Array<IStory>

  overlay: boolean = false
  overlayImage: string = ''

  mounted() {
    const _self = this
    const images = this.$el.querySelectorAll('.images')
    for (let index = 0; index < images.length; index++) {
      images[index].addEventListener('click', function(event: any) {
        _self.overlayImage = event.target.attributes.src.nodeValue
        _self.overlay = true
      })
    }
  }
}
</script>
