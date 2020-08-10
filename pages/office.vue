<template>
  <v-container>
    <div id="tree" ref="tree"></div>
  </v-container>
</template>
<script>
import { Vue, Component } from 'nuxt-property-decorator'
import OrgChart from '@balkangraph/orgchart.js/orgchart.js'

@Component({
  components: { OrgChart }
})
export default class Office extends Vue {
  chart = null
  members = []
  nodes = [
    {
      id: 1,
      nom: 'Maingourd Patricia',
      statut: 'Présidente',
      téléphone: '02.47.27.10.01 | 06.25.09.19.11',
      email: 'pmaingourd1@gmail.com',
      adresse: '15 rue A. Bauchant, 37550 Saint-Avertin',
      img: '/presidente.gif'
    },
    {
      id: 2,
      pid: 1,
      nom: 'Catherine Nyszak',
      statut: 'Secrétaire',
      téléphone: '06.07.66.74.66',
      email: 'c.nyszak@orange.fr',
      adresse: '37550 Saint-Avertin',
      img: '/secrétaire.gif'
    },
    {
      id: 3,
      pid: 1,
      nom: 'Chesnay Françoise',
      statut: 'Trésorière',
      téléphone: '06.07.66.74.66',
      adresse: '37200 Tours',
      email: 'chesfran37@orange.fr',
      img: 'comptable.gif'
    },
    {
      id: 4,
      pid: 3,
      nom: 'Touchard Jean-Michel',
      statut: 'Trésorier Adjoint',
      téléphone: '02.47.28.91.32 | 06.78.62.80.86',
      adresse: '37550 Saint-Avertin',
      email: 'jm.touchard@wanadoo.fr',
      img: 'comptable2.gif'
    },
    {
      id: 5,
      pid: 3,
      nom: 'Tymczuk Jean-Marc',
      statut: 'Trésorier Adjoint',
      téléphone: '02.47.27.77.32 | 06.80.45.86.01',
      adresse: '14 allée des Jardins, 37550 Saint-Avertin',
      email: 'jm.tymczuk@kami.fr',
      img: 'comptable1.gif'
    },
    {
      id: 6,
      pid: 1,
      nom: 'Jaraud Francis',
      statut: 'Correspondant Presse',
      téléphone: '02.47.27.99.71 | 06.75.16.17.17',
      adresse: '28 rue Toulouse Lautrec, 37550 Saint-Avertin',
      email: 'isafran@orange.fr',
      img: 'press.gif'
    },
    {
      id: 7,
      pid: 1,
      nom: 'Chauvin Claude',
      statut: 'Membre du bureau',
      téléphone: '02.47.27.96.08 | 06.09.43.23.35',
      adresse: '19 Rue de la Ricottière, 37170 Chambray-Lès-Tours',
      email: 'claude_cha@yahoo.fr',
      img: 'https://cdn.balkan.app/shared/5.jpg'
    },
    {
      id: 8,
      pid: 1,
      nom: 'Maillet Alain',
      statut: 'Membre du bureau',
      téléphone: '06.66.69.38.71',
      adresse: '37550 Saint-Avertin',
      email: 'maillet.alain@bbox.fr',
      img: 'https://cdn.balkan.app/shared/5.jpg'
    },
    {
      id: 9,
      pid: 1,
      nom: 'Leboucher Alain',
      statut: 'Membre du bureau',
      téléphone: '06.61.61.59.56',
      adresse: 'Les Régnières 37550 Esvres',
      email: 'lebouchet.alain@wanadoo.fr',
      img: '/alain_leboucher.png'
    },
    {
      id: 10,
      pid: 1,
      nom: 'Maingourd Olivier',
      statut: 'Coordinateur',
      téléphone: '06.70.30.86.17',
      adresse: '5 rue Paul Boivinet, 37380 NOUZILLY',
      email: 'o.maingourd@laposte.net',
      img: 'coordinateur.gif'
    },
    {
      id: 11,
      pid: 10,
      nom: 'Auger Pascal',
      statut: 'Enseignant',
      téléphone: '02.47.26.52.55 | 06.89.42.22.12',
      adresse: '9 route de la Bouriolle, 37320 Esvres',
      email: 'calou.1963@orange.fr',
      img: 'https://cdn.balkan.app/shared/5.jpg'
    },
    {
      id: 12,
      pid: 10,
      nom: 'Hartmann Christophe',
      statut: 'Enseignant',
      téléphone: '06.65.71.19.75',
      adresse: '1 route de cormery, 37320 Saint-Branchs',
      email: 'chartmann.35@gmail.com',
      img: 'https://cdn.balkan.app/shared/5.jpg'
    },
    {
      id: 13,
      pid: 1,
      nom: 'Voisin Christine',
      statut: 'Animatrice',
      téléphone: '06.32.04.60.68',
      adresse: '37000 Tours',
      email: '-',
      img: 'https://cdn.balkan.app/shared/5.jpg'
    },
  ]

  oc(domEl, x) {
    this.chart = new OrgChart(domEl, {
      template: 'derek',
      nodes: x,
      nodeBinding: {
        field_0: 'nom',
        field_1: 'statut',
        field_2: 'téléphone',
        field_3: 'email',
        img_0: 'img'
      }
    })
  }

  mounted() {
    this.oc(this.$refs.tree, this.nodes)
  }
}
</script>
<style>
[node-id] rect {
  fill: #388e3c;
}
[link-id] path {
  stroke: #7cb342;
}
</style>
