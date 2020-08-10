<template>
  <ClientOnly>
    <tiptap-vuetify
      v-model="inputText"
      :extensions="extensions"
      :toolbar-attributes="{ color: 'green  lighten-3' }"
      @keyup.native="refresh"
      @init="onInit"
    />

    <template #placeholder>
      Loading...
    </template>
  </ClientOnly>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator'
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Image,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  TodoList,
  TodoItem,
  History
} from 'tiptap-vuetify'

@Component({
  components: {
    TiptapVuetify
  }
})
export default class Editor extends Vue {
  @PropSync('content', { type: String }) syncedContent: String = ""

  inputText: String = ''

  extensions = [
    History,
    Blockquote,
    Image,
    Link,
    Underline,
    Strike,
    Italic,
    ListItem,
    BulletList,
    OrderedList,
    [
      Heading,
      {
        options: {
          levels: [1, 2, 3]
        }
      }
    ],
    Bold,
    Link,
    Code,
    HorizontalRule,
    Paragraph,
    TodoList,
    TodoItem,
    HardBreak
  ]

  onInit () {
    this.inputText = this.syncedContent
  }

  refresh () {
    this.$emit('update', this.inputText)
  }

  mounted () {
    this.inputText = this.syncedContent
  }
}
</script>
