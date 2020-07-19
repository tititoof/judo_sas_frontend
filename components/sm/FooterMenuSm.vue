<template>
  <v-footer :fixed="true" :padless="true" style="z-index: 1000">
    <v-bottom-navigation :value="activeBtn" color="teal">
      <v-btn
        v-for="link in internalLinks"
        :key="link.name"
        @click="goTo(link.route)"
      >
        <span>{{ link.name }}</span>
        <v-icon>{{ link.icon }} </v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <span>Articles</span>
            <v-icon>mdi-book-open</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in internalArticleLinks"
            :key="index"
            @click="goTo(item.route)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <span>Informations</span>
            <v-icon>mdi-contacts</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in internalExtendLinks"
            :key="index"
            @click="goTo(item.route)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <span>Liens</span>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in externalLinks"
            :key="index"
            @click="openInNewTab(item.url)"
          >
            <v-list-item-icon>
              <img alt="SAS Judo" :src="item.img" height="30" />
            </v-list-item-icon>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-bottom-navigation>
  </v-footer>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { IInternalLink, IExternalLink } from '~/types/main.ts'

@Component
export default class FooterMenuSm extends Vue {
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
