<template>
  <v-container>
    <v-card>
      <v-toolbar>
        <h3>Nouvel article</h3>
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
        <editor :content="content" @update="setContent"></editor>
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
        <v-icon @click="save">mdi-plus</v-icon>
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
export default class AdminNew extends Vue {
  postsStore: PostsModule = getModule(PostsModule, this.$store)
  @postsStore.Action('sendPost') sendPost: any
  content: string = ''
  title: string = ''

  setContent(content: string) {
    this.content = content
  }

  save() {
    this.sendPost({ post: { title: this.title, content: this.content, user_id: this.$auth.user.id }})
  }
}
</script>