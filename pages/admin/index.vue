<template>
  <v-container>
    <v-card>
      <v-toolbar>
        <h3>Administration</h3>
      </v-toolbar>
      <v-card-text style="height: 500px;" class="grey lighten-5 overflow-y-auto">
        <v-row v-for="(post, index) in getPosts.data" :key="index">
          <v-col md="2">
            {{ post.id }}
          </v-col>
          <v-col md="4">
            {{ post.title }}
          </v-col>
          <v-col md="4">
            <v-btn
              color="green"
              dark
              small
              fab
              @click="editArticle(post.id)"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-btn
        color="green"
        dark
        absolute
        small
        bottom
        right
        fab
        @click="newArticle"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, namespace, Getter,Action, getModule } from 'nuxt-property-decorator'
import PostsModule from '~/store/PostsModule'
import DatatableHeaderType from '~/types/index.js'

const postsStore = namespace('PostsModule')

@Component
export default class AdminIndex extends Vue {
  postsStore: PostsModule = getModule(PostsModule, this.$store)
  @postsStore.Action('loadPosts') loadPosts: any
  @postsStore.Getter('getPosts') getPosts: any
  options: any = {}
  headers: Array<DatatableHeaderType> = [
    { text: 'Title', value: 'post_title', searching: '', map: 'post_title' },
  ]

  mounted() {
    const _self = this
    _self.loadPosts().then(() => {
      console.log(_self.getPosts)
    })
  }

  rawContent(content: string) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = content;
    return textArea.value;
  }

  newArticle() {
    this.$router.push({
        path: '/admin/new'
      })
  }

  editArticle(id) {
    this.$router.push({
      path: `/admin/edit/${id}`
    })
  }

  setDatableOptions () {
    return {
      length: this.options.itemsPerPage,
      start: (this.options.itemsPerPage * (this.options.page - 1)),
      order: this.getDatatableOptionsSort(),
      columns: this.getDatatableOptionsColumns()
    }
  }

  getDatatableOptionsSort () {
    const _self = this
    const sortBy: any = {}
    for (let index = 0; index < _self.options.sortBy.length; index++) {
      for (let indexHeader = 0; indexHeader < _self.headers.length; indexHeader++) {
        if (_self.headers[indexHeader].value === _self.options.sortBy[index]) {
          sortBy[index] = {
            column: indexHeader + '',
            dir: _self.options.sortDesc[index] === true ? 'desc' : 'asc'
          }
        }
      }
    }
    return sortBy
  }

  getDatatableOptionsColumns () {
    const _self = this
    const columns: any = {}
    for (let indexHeader = 0; indexHeader < _self.headers.length; indexHeader++) {
      const columnInfos: any = {}
      const header: any = _self.headers[indexHeader]
      if ((header.hasOwnProperty('map'))) {
        columnInfos.search = {
          value: header.searching,
          regex: false
        }
        columnInfos.data = header.map
        columnInfos.name = ''
        columnInfos.searchable = true
        columnInfos.orderable = true
        columns[indexHeader] = columnInfos
      }
    }
    return columns
  }
}
</script>
