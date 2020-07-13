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
      <v-btn icon>
        <v-icon>mdi-lock</v-icon>
      </v-btn>
      <span class="overline">&copy; {{ new Date().getFullYear() }}</span>
    </v-app-bar>
    <v-content>
      <v-container>
        <div class="overflow-y-auto">
          <nuxt />
        </div>
      </v-container>
    </v-content>
    <mq-layout mq="md+">
      <v-footer :fixed="true" :padless="true">
        <v-bottom-navigation :value="activeBtn" color="teal">
          <v-btn v-for="link in internalLinks" :key="link.name">
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
          <v-btn v-for="link in internalExtendLinks" :key="link.name">
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
    </mq-layout>
    <mq-layout mq="sm">
      <v-footer :fixed="true" :padless="true">
        <v-bottom-navigation :value="activeBtn" color="teal" shift>
          <v-btn v-for="link in internalLinks" :key="link.name">
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
    </mq-layout>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { IInternalLink, IExternalLink } from '~/types/main.ts'

@Component
export default class Default extends Vue {
  title: string = 'SAS Judo Jujitsu'
  internalLinks: Array<IInternalLink> = []
  internalExtendLinks: Array<IInternalLink> = []
  internalArticleLinks: Array<IInternalLink> = []
  externalLinks: Array<IExternalLink> = []
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

  mounted() {
    this.internalLinks = [{ name: 'Accueil', route: '/', icon: 'mdi-home' }]
    this.externalLinks = [
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
    this.internalExtendLinks = [
      { name: 'Cours', route: '/', icon: 'mdi-calendar' },
      { name: 'Dojo', route: '/', icon: 'mdi-map-marker' },
      { name: 'Contact', route: '/', icon: 'mdi-email' }
    ]
    this.internalArticleLinks = [
      { name: 'Moments', route: '/', icon: 'mdi-heart' },
      { name: 'Historique', route: '/history', icon: 'mdi-history' }
    ]
  }
}
</script>
