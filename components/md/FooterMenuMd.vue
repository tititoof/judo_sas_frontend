<template>
  <v-footer :fixed="true" :padless="true">
    <v-bottom-navigation :value="activeBtn" color="teal">
      <v-btn
        v-for="link in internalLinks"
        :key="link.name"
        @click="goTo(link.route)"
      >
        <span>{{ link.name }}</span>
        <v-icon>{{ link.icon }} </v-icon>
      </v-btn>
      <v-btn
        v-for="link in internalArticleLinks"
        :key="link.name"
        :to="link.route"
      >
        <span>{{ link.name }}</span>
        <v-icon>{{ link.icon }} </v-icon>
      </v-btn>
      <v-btn
        v-for="link in internalExtendLinks"
        :key="link.name"
        @click="goTo(link.route)"
      >
        <span>{{ link.name }}</span>
        <v-icon>{{ link.icon }} </v-icon>
      </v-btn>
      <v-btn
        v-for="link in externalLinks"
        :key="link.name"
        @click="openInNewTab(link.url)"
      >
        <span>{{ link.name }}</span>
        <img :alt="link.name" :src="link.img" height="30" />
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { IInternalLink, IExternalLink } from '~/types/main.ts'

@Component
export default class FooterMenuMd extends Vue {
  @Prop() internalLinks!: Array<IInternalLink>
  @Prop() internalExtendLinks!: Array<IInternalLink>
  @Prop() internalArticleLinks!: Array<IInternalLink>
  @Prop() externalLinks!: Array<IExternalLink>
  activeBtn: any = ''

  openInNewTab(url: string) {
    const win = window.open(url, '_blank')
    if (win !== null) {
      win.focus()
    }
  }

  goTo(page: string) {
    this.$router.push(page)
  }
}
</script>
