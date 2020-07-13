<template>
  <v-container>
    <v-card>
      <v-toolbar>
        <h3>Editer article</h3>
      </v-toolbar>
      <v-card-text style="height: 600px;" class="grey lighten-5">
        <v-row>
          <v-text-field
            v-model="title"
            label="Titre"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          Texte
        </v-row>
        <template v-if="content === ''">
        </template>
        <template v-else>
          <editor :content="content" @update="setContent"></editor>
        </template>
      </v-card-text>
      <v-btn
        color="green"
        dark
        absolute
        small
        bottom
        right
        fab
      >
        <v-icon @click="save">mdi-content-save</v-icon>
      </v-btn>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, namespace, getModule } from 'nuxt-property-decorator'
import Editor from '~/components/forms/Editor.vue'
import PostsModule from '~/store/PostsModule'

const postsStore = namespace('PostsModule')

@Component({
  components: { Editor }
})
export default class AdminPost extends Vue {
  postsStore: PostsModule = getModule(PostsModule, this.$store)
  @postsStore.Action('updatePost') updatePost: any
  @postsStore.Action('loadPost') loadPost: any
  @postsStore.Getter('getPost') getPost: any
  content: string = ''
  title: string = ''
  postId: string = ''
  $auth: any

  validate ({ params }: any) {
    // Doit être un nombre
    return /^\d+$/.test(params.id)
  }

  mounted() {
    this.postId = this.$route.params.id
    this.loadPost(this.postId).then( () => {
      this.content = this.getPost.data.attributes.content.body
      this.title = this.getPost.data.attributes.title
      console.log(this.getPost)
    })
  }

  setContent(content: string) {
    this.content = content
  }

  save() {
    this.updatePost({
      id: this.postId,
      post: {
        title: this.title,
        content: this.content,
        user_id: this.$auth.user.id
      }}
    ).then(() => {
      this.$router.push({
        path: `/admin/`
      })
    })
  }
}
</script>
