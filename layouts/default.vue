<template>
  <v-app>
    <v-app-bar
      dark
      fixed
      app
      color="#4caf50"
      shrink-on-scroll
      src="/test_app_bar.jpg"
    >
      <v-btn icon>
        <img alt="SAS Judo" src="/logo_sas_judo.png" height="50" />
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon :nuxt="true" to="/login">
        <v-icon>mdi-lock</v-icon>
      </v-btn>
      <span class="overline">&copy; {{ new Date().getFullYear() }}</span>
    </v-app-bar>
    <v-main>
      <v-container class="overflow-y-auto">
        <nuxt />
      </v-container>
      <v-container>
        <v-row height="150px">
          &nbsp;
        </v-row>
      </v-container>
    </v-main>
    
    <mq-layout mq="md+">
      <footer-menu-md
        :internal-links="internalLinks"
        :internal-extend-links="internalExtendLinks"
        :internal-article-links="internalArticleLinks"
        :external-links="externalLinks"
      >
      </footer-menu-md>
    </mq-layout>
    <mq-layout mq="sm">
      <footer-menu-Sm
        :internal-links="internalLinks"
        :internal-extend-links="internalExtendLinks"
        :internal-article-links="internalArticleLinks"
        :external-links="externalLinks"
      >
      </footer-menu-Sm>
    </mq-layout>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import FooterMenuSm from '~/components/sm/FooterMenuSm.vue'
import FooterMenuMd from '~/components/md/FooterMenuMd.vue'

import { IInternalLink, IExternalLink } from '~/types/main.ts'

@Component({
  components: {
    FooterMenuSm,
    FooterMenuMd
  }
})
export default class Default extends Vue {
  title: string = 'SAS Judo Jujitsu'
  internalLinks: Array<IInternalLink> = [
    { name: 'Accueil', route: '/', icon: 'mdi-home' }
  ]

  internalExtendLinks: Array<IInternalLink> = [
    { name: 'Bureau', route: '/office', icon: 'mdi-human-male-child' },
    { name: 'Cours', route: '/planning', icon: 'mdi-calendar' },
    { name: 'Dojo', route: '/dojo', icon: 'mdi-map-marker' },
    { name: 'Contact', route: '/', icon: 'mdi-email' }
  ]

  internalArticleLinks: Array<IInternalLink> = [
    { name: 'Moments', route: '/moments', icon: 'mdi-heart' },
    { name: 'Historique', route: '/history', icon: 'mdi-history' }
  ]

  externalLinks: Array<IExternalLink> = [
    {
      name: 'CDP 37',
      url: 'https://cdjudo37.sportsregions.fr/',
      img: '/logo_cdp37.jpg'
    },
    {
      name: 'CVL',
      url: 'http://www.ligue-centre-val-de-loire-judo-jujitsu-da.fr/',
      img: '/logo_cvl.gif'
    },
    { name: 'FFJDA', url: 'https://www.ffjudo.com/', img: '/logo_ffjda.png' }
  ]

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
