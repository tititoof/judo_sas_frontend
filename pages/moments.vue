<template>
  <v-container>
    <mq-layout mq="md+">
      <history-md :story="story"></history-md>
    </mq-layout>
    <mq-layout mq="sm">
      <history-sm :story="story"></history-sm>
    </mq-layout>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import HistoryMd from '~/components/md/HistoryMd.vue'
import HistorySm from '~/components/sm/HistorySm.vue'
import { IStory } from '~/types/main.ts'

@Component({
  components: {
    HistorySm,
    HistoryMd
  }
})
export default class GoodTime extends Vue {
  story: Array<IStory> = [
    {
      icon: 'mdi-karate',
      name: 'Mai 2014',
      color: 'indigo',
      small: false,
      description: `A l'initiative de la section Karaté de Saint-Avertin Sports, 
un entrainement commun a été organisé entre divers arts martiaux : le Karaté bien sur, mais aussi le Jujitsu (Self Défense), 
<img class="images" src="P1040934.gif" width="200px">
la participation de France Shaolin, et des représentants du Penchak Silat.<br/>
<img class="images" src="P1040845.gif" width="200px">
Cette rencontre, dans un ambiance amicale, a permis d'échanger les divers aspects de chacune des disciplines.<br/>
<img class="images" src="P1040885.gif" width="200px">
Comme toujours, à Saint-Avertin, la soirée se terminait autour du "pot de l'amitié" <br/>
(plus qu'un simple verre, les participants avaient apporté de quoi reprendre les quelques grammes perdues !!!!!<br/>
<img class="images" src="947.jpg" width="200px">`
    },
    {
      icon: 'mdi-account-heart-outline',
      name: '2013-2014',
      color: 'indigo',
      small: false,
      description: `Trois sections de Saint-Avertin Sports participaient au Téléthon :<br/>
La Gym'form, le Karaté et le Judo.<br/>
Pour le Judo, les adhérents étaient sollicités pour amener leurs amis, afin de leur faire découvrir leur sport.<br/>
Petits et Grands s'en sont donnés à coeur joie.<br/>
<img class="images" src="ballons2.jpg" width="200px">
Les plus jeunes participaient à des jeux, des initiations,<br/>
Les plus grands assistaient à des démonstrations de judo et de jujitsu :<br/>
La "pauvre femme" agressée a beaucoup amusé les spectateurs !!!<br/>
<img class="images" src="jujit.jpg" width="200px">
Le Public a répondu présent, et la buvette a tenu ses promesses<br/>
Judokas et participants se retrouvaient pour une initiation au Body Karaté.<br/>
<img class="images" src="zumba1.jpg" width="200px"> `
    },
    {
      icon: 'mdi-kabaddi',
      name: '2013-2014',
      color: 'indigo',
      small: false,
      description: `Samedi 16 Novembre, Saint-Avertin organisait une animation poussins-benjamins encadrés par les judokas du club ayant intégré l'U.J. 37.<br/>
<img class="images" src="julien_sophie.jpg" width="200px">
Julien et Sophie MOREL montraient aux enfants très attentifs les différentes techniques<br/>
<img class="images" src="poussins.jpg" width="200px"> `
    },
    {
      icon: 'mdi-go-kart',
      name: '2013-2014',
      color: 'indigo',
      small: false,
      description: `Pour la reprise de la saison 2013-2014, retrouvailles autour d'une course  de kart, organisée par Sylvain.<br/>
    <img class="images" src="/DSCN0325.jpg" width="200px">
Après la théorie, ou toutes les consignes de sécurité ont été données, chacun revêt sa tenue (admirer les charlottes !!!!), <br/>
pour une initiation avant l'heure H.<br/>
<img class="images" src="/DSCN0336.jpg" width="200px">
Puis les choses sérieuses commencent avec une compétition acharnée.<br/>
Comme toujours à Saint-Avertin, la soirée se termine autour d'un pot (plus exactement autour d'un buffet, alimenté par chaque participant)<br/>
<img class="images" src="/DSCN0340.jpg" width="200px">`
    },
    {
      icon: 'mdi-weight-lifter',
      name: '2013',
      color: 'indigo',
      small: false,
      description: `Les vacances ont été mises a profit pour l'installation de la salle de musculation, et çà n'a pas été une mince affaire<br/>
      <img class="images" src="/IMG_2143.jpg" width="200px">
      <img class="images" src="/IMG_2145.jpg" width="200px">
      Mais le résultat est là !<br/>
      <img class="images" src="/IMG_2148.jpg" width="200px">`
    }
  ]
}
</script>
