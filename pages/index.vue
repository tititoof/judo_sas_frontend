<template>
  <!-- <v-layout column justify-center align-center> -->
  <div>
    <v-row
      v-for="(post, index) in posts" :key="index"
      class="mb-6"
      justify="center"
      no-gutters
    >
      <v-col lg="12">
        <v-card class="pa-2">
          <v-card-title class="headline">{{ post.title }}</v-card-title>
          <v-card-text v-html="rawContent(post.content)"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination v-model="page" :length="length" circle></v-pagination>
    </div>
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
  <!-- </v-layout> -->
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import { IPost } from '../types/main'

@Component
export default class home extends Vue {
  posts: Array<IPost> = []
  page: number = 1
  length: number = 10
  totalPosts: number = 0
  itemsPerPage: number = 10
  overlay: boolean = false
  overlayImage: string = ''

  mounted() {
    this.getPosts()
  }

  async getPosts() {
    const _self = this
    const posts = await _self.$axios.$post('/api/list', {
      length: _self.itemsPerPage,
      start: _self.itemsPerPage * (_self.page - 1)
    })
    console.log(posts)
    _self.posts = posts.data
    _self.totalPosts = Number.parseInt(posts.recordsTotal)
    _self.length = Math.ceil(_self.totalPosts / _self.itemsPerPage)

    const images = _self.$el.querySelectorAll('img')
    console.log(images)
    for (let index = 0; index < images.length; index++) {
      images[index].addEventListener('click', function(event: any) {
        _self.overlayImage = event.target.attributes.src.nodeValue
        _self.overlay = true
      })
    }
  }

  rawContent(content: string) {
    let textArea = document.createElement('textarea')
    textArea.innerHTML = content
    return textArea.value
  }

  @Watch('page')
  changePage(newPage: number, oldPage: number) {
    this.getPosts()
  }
}
</script>
