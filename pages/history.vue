/* eslint-disable vue/no-v-html */
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
export default class History extends Vue {
  story: Array<IStory> = [
    {
      icon: 'mdi-medal-outline',
      name: 'Janvier 2014',
      color: 'purple darken-1',
      small: false,
      description: `<u>24 Janvier</u> Olivier MAINGOURD médaille de Bronze des Ceintures Noires.<br/>
      <img class="images" src="/olivier.jpeg" width="200px">
      <img class="images" src="/alain_olivier.jpeg" width="200px">
      <img class="images" src="/IMG_3403.jpeg" width="200px">
      <img class="images" src="/IMG_3398.jpeg" width="200px">
      <u>Rappel de son parcours</u><br/>
      Ces premiers cours se font à Léon Brûlon, sous la houlette des deux Alain (Leboucher et Maillet déjà !!!!)<br>
Il se prend au jeu, obtient de nombreux podiums en département, région et inter-région voir national et inter-national et obtient à 16ans, âge minimum, le 23 Décembre 1990, sa Ceinture Noire.<br/>
Dès 1991, il s'oriente vers l'enseignement, et devient entraîneur de l'U.J. 37 Tours.<br/>
Cette année là il intégre la section Sports Etudes à Orléans et y restera jusqu'en 1994, après avoir obtenu son 2ème Dan en 1993.<br/>
Il obtient son Brevet d'Etat en 2000, et fidèle à son club d'origine, devient entraineur de S.A.S.-judo, jusqu'à ce jour (et n'envisage pas, on l'espère, d'arrêter !!!!).<br/>
A noter que de Cadet 1ère année à senior, il a toujours participé aux Championnats de France 2ème Div où ses résultats étaient très satisfaisants.<br/>
En 1991, cadet, il termine 2ème au Tournoi du Portugal<br/>
En 1993 il est 3ème aux Championnats de France U.N.S.S.<br/>
et en 1996, même classement aux Championnats de France F.N.S.U.<br/>
Il est d'ailleurs abonné à cette place de 3ème, puisqu'il l'avait obtenue quelques années plus tôt aux jeux de l'avenir organisés par le lycée Corneille.<br/>
Il est également arbitre F2.<br/>
<i>Mais il n'y a pas que le judo !!!</i><br/>
En 2011, il dépose un brevet pour un jeu de cartes qu'il créé :  <a target="_blank" href="https://www.facebook.com/search/top/?q=raclette-party%20jeu%20de%20cartes">raclette party</a>.<br/> 
La création de ce jeu a animé de nombreuses soirées, et obtenu un vif succès.<br/>

Plus récemment, en 2013, avec des copains judokas, il créé le <a target="_blank" href="https://impactstours.kalisport.com/organigramme">club de Floorball de Touraine</a>, où il est à la fois joueur et entraîneur (il cherche des sponsors !!!!).
Sur le plan professionnel, de 2004 à 2012, il a été responsable de la section sportive du Lycée Professionnel Beauregard à Château-Renault où il exerce toujours son emploi d'E.P.S..
Comme on le voit, son emploi du temps est bien rempli, et il a amplement mérité cette distinction.`
    },
    {
      icon: 'mdi-party-popper',
      name: 'Novembre 2011',
      color: 'green lighten-1',
      small: false,
      description: `<u>25 Novembre</u> Comme le dit la Nouvelle République dans son article du 02/12/2011 : "Inauguration en grande pompe".<br/>

Effectivement de nombreux responsables, politiques, sportifs représentants la Ville de Saint Avertin mais aussi le Département et même la région se sont déplacés.<br/>

Tous (ou presque) les judokas et leurs familles sont là.<br/>`
    },
    {
      icon: 'mdi-format-paint',
      name: 'Septembre 2011',
      color: 'green lighten-1',
      small: true,
      description: `<u>14 Septembre</u> Rentrée dans le Dojo refait. Il manque la déco, du mobilier, mais nous retrouvons "notre maison".`
    },
    {
      icon: 'mdi-emoticon-outline',
      name: 'Juillet 2011',
      color: 'cyan lighten-1',
      small: true,
      description: `<u>19 Juillet</u> L'avancée des travaux nous laisse espérer que nous retrouverons notre Dojo dès la rentrée prochaine.<br/>
      <img class="images" src="/DSC05299.jpg" width="200px">
      <img class="images" src="/DSC05300.jpg" width="200px">
      <img class="images" src="/DSC05301.jpg" width="200px">
      <img class="images" src="/DSC05302.jpg" width="200px">
      <img class="images" src="/DSC05303.jpg" width="200px">
      <img class="images" src="/DSC05308.jpg" width="200px">`
    },
    {
      icon: 'mdi-emoticon-excited-outline',
      name: 'Avril 2011',
      color: 'cyan lighten-1',
      small: true,
      description: `<u>12 Avril</u> Arrivée du tapis, infrastructures intérieures terminées. Bon espoir de retrouver "NOTRE" Dojo dès la rentrée..<br/>
      <img class="images" src="/IMG_0217.jpg" width="200px">
      <img class="images" src="/IMG_0258.jpg" width="200px">
      <img class="images" src="/IMG_0263.jpg" width="200px">`
    },
    {
      icon: 'mdi-home-flood',
      name: 'Mars 2011',
      color: 'cyan lighten-1',
      small: true,
      description: `<u>04 Mars</u> Le Dojo renait de ses cendres. Bien sûr il y a encore beaucoup à faire, mais d'apercevoir les poutres du plafond est bien réconfortant.<br/> 
Par ailleurs la dernière image fait apparaitre les modifications de "look".<br/>
<img class="images" src="/DSC04689.jpg" width="200px">
<img class="images" src="/DSC04688.jpg" width="200px">
<img class="images" src="/DSC04686.jpg" width="200px">
<img class="images" src="/DSC04684.jpg" width="200px">
<img class="images" src="/DSC04683.jpg" width="200px">`
    },
    {
      icon: 'mdi-dump-truck',
      name: 'Janvier 2011',
      color: 'cyan lighten-1',
      small: true,
      description: `<u>07 Janvier</u> Les travaux de déblaiement sont terminés. La phase de reconstruction commence, même si cela ne se voit pas beaucoup.<br/>
      <img class="images" src="/IMG_0073.jpg" width="200px">
      <img class="images" src="/IMG_0072.jpg" width="200px">
      <img class="images" src="/IMG_0071.jpg" width="200px">
      <img class="images" src="/IMG_0070.jpg" width="200px">
      <img class="images" src="/IMG_0069.jpg" width="200px">`
    },
    {
      icon: 'mdi-weather-windy',
      name: 'Novembre 2010',
      color: 'cyan lighten-1',
      small: true,
      description: `<u>03 Novembre</u> Un petit tour pour voir ce qu'il en est. Mais malgré les belles couleurs d'automne, le Dojo est toujours aussi triste.<br/> 
  Les accès sont sécurisés mais rien n'a changé. Nous aimerions voir des ouvriers s'affairer... mais patience !!!!<br/><br/>
  <img class="images" src="/10-11-03_dojo.gif" width="200px"><br/><br/>
  <u>22 Novembre</u> Enfin ce que nous attendions tous, .... l'arrivée des ouvriers et des pelleteuses.<br/>
Le travail de déblaiement a bien avancé en deux jours, comme en témoigne les photos ci-contre<br/>
<img class="images" src="/10-11-22_dojo.gif" width="200px"><br/><br/>
<u>26 Novembre</u> La Nouvelle République informe du démarrage de la reconstruction du Dojo, et précise que c'est l'entreprise Garcia qui assure la mise à nu des murs. Nous apprenons également que le montant versé par l'assurance s'élève à 830 000 Euros TTC environ.<br/>
Confirmation est faite que, sauf problème imprévu, nous devrions retrouver "notre Dojo" au début de la saison prochaine.`
    },
    {
      icon: 'mdi-hard-hat',
      name: 'Août 2010',
      color: 'cyan lighten-1',
      small: true,
      description: `<u>04 Août</u> Toujours dans la NR, compte rendu de visites de chantier en Juillet par Monsieur le Maire et quelques élus. Nous apprenons que l'Architecte retenu est le Cabinet Bricchi-Desombre. La grande salle est conservée, avec augmentation de la surface de Tatamis, et mise en place de tribunes. Les skydomes seront supprimés pour éviter tout risque. La toiture et les murs seront mieux isolés et répondront aux normes d'économie d'énergie. Sanitaires et vestiaires vont être aussi modifié pour répondre aux normes d'accessibilité.
L'appel d'offres est lancé, les entreprises doivent répondre pour la mi septembre. Les travaux pourraient débuter dès l'automne, pour une livraison des bâtiments prévue en septembre 2011.`
    },
    {
      icon: 'mdi-text-box-outline',
      name: 'Mai 2010',
      color: 'cyan lighten-1',
      small: true,
      description: `Parution du Bulletin Municipal de Saint-Avertin, qui revient sur l'événement, et note la réactivité de tous les intervenants : Club, SAS et Mairie (page 37)`
    },
    {
      icon: 'mdi-television-guide',
      name: 'Avril 2010',
      color: 'cyan lighten-1',
      small: true,
      description: `<u>09 Avril</u> Nous relevons dans la NR l'appel d'offres pour la reconstruction du Dojo, à l'identique.<br/>
Date limites de la réception des offres : 23 avril 2010 à 12h00<br/><br/>
<u>12 Avril</u> Toujours dans la NR, appel de mission de contrôle technique, et de coordination en matière de SPS date limite de réception 29 Avril 2010 à 16h00`
    },
    {
      icon: 'mdi-tow-truck',
      name: 'Février 2010',
      color: 'cyan lighten-1',
      small: true,
      description: `Les judokas s'organisent, et professeurs et président mettent "la main à la pâte".<br/>
      <img class="images" src="/grand_champs.gif" width="200px"><br/><br/>
      <u>19 Février</u> Nous avons pris nos marques, amélioré l'aménagement, en callant les tapis, en décorant les murs, et en maintenant nos traditionnels stages de vacances scolaires pour les plus jeunes.`
    },
    {
      icon: 'mdi-emoticon-cry-outline',
      name: '22 Janvier 2010',
      color: 'amber lighten-1',
      small: true,
      description: `Traditionnel cérémonie des voeu du Maire, où les benjamins ont amené les larmes aux yeux des participants, en évoquant la perte de "leur seconde maison".`
    },
    {
      icon: 'mdi-snowflake',
      name: '18 Janvier 2010',
      color: 'amber lighten-1',
      small: true,
      description: `Comme prévu les cours reprennent, la salle est basse, pas très chauffée, mais nous mettrons sweat et chaussettes ...`
    },
    {
      icon: 'mdi-kabaddi',
      name: '15 Janvier 2010',
      color: 'green lighten-1',
      small: true,
      description: `Un entrainement des compétiteurs se fait à Montlouis (compétition le Samedi, et St Avertin sera présent)`
    },
    {
      icon: 'mdi-emoticon-frown-outline',
      name: '11 Janvier',
      color: 'red lighten-1',
      small: false,
      description: `Suite au sinistre survenu le 05 Janvier dernier, une réunion d'informations réunissait, dans la Salle des Fêtes de Saint-Avertin, les responsables du Club, le Maire, Monsieur PAUMIER, et l'adjoint aux Sports, Monsieur GUILLEMIN.<br/>
De nombreux parents s'étaient déplacés, et nous apportaient leur soutien. C'est donc très émue, que la Présidente du Club, Patricia Maingourd prenait la parole, afin de les remercier, ainsi que tous les clubs, et autres sections du S.A.S. qui nous ont proposé leur aide. Elle exposait ensuite, le déroulement des événements.<br/>
Des photos étaient projetées, pour que adhérents puissent juger de l'étendue des dégâts<br/>
Monsieur le Maire prenait la parole pour nous assurer de son soutien, et s'engager à tout faire pour réduire au maximum les délais. Les assurances ont déjà été contactées, les experts doivent rendre leurs conclusions (restauration ou démolition et reconstruction), et il semble qu'un délai de 15 mois pourrait être raisonnablement envisagé, pour retrouver nos installations, qui d'un commun accord, Mairie et Club, devraient être reconstruites au même endroit.<br/>
Quant à Monsieur Guillemin, il reprenait, en détails, le fil des événements de la nuit, puisqu'il était sur place lors de l'embrasement du Dojo.<br/>
La réactivité des responsables du club, de la Mairie de Saint-Avertin, en la personne de Monsieur PAUMIER, de Saint-Avertin Sports, en particulier Monsieur MIGEON, permet de pouvoir vous annoncer :<br/>
La reprise des cours dès lundi 18 Janvier 2010, dans une salle du Collège des Grands Champs, attribuée à la Section.<br/>
Les horaires des cours ne changent pas à l'exception du Mercredi, où ils sont décalés d'une demi-heure. Cette solution nous permet de pouvoir finir la saison, en attendant, peut-être, une meilleure installation pour la saison prochaine.<br/>
Nous espérons que cette situation ne pénalisera personne, et que tous, enfants, adultes, jujitsu, compétiteurs pourront continuer à pratiquer leur sport favori.<br/>
Réunion d'informations organisée par la Mairie. Nombreuse participation. Une salle du Gymnase des Grands Champs, nous est attribuée, les cours pourront reprendre dès le 18 Janvier, en conservant les mêmes horaires : un exploit en fonction des circonstances.<br/>
Pendant ces deux semaines, la présidente, les professeurs, des parents et adhérents "déménagent" ce qui peut être récupéré du Dojo et l'entrepose chez quelques uns de nos adhérents.<br/>
Les anciens tatamis, conservés sont remis au travail, la salle commence à être aménagée.`
    },
    {
      icon: 'mdi-emoticon-dead-outline',
      name: '05 Janvier 2010',
      color: 'red lighten-1',
      small: false,
      description: `La Présidente du Club apprend que le Dojo a brûlé dans la nuit, très vite la nouvelle se répand, et de nombreux judokas se rendent sur place.<br/>
Alain Leboucher est interviewé par France Bleue. Et peu après Patricia Maingourd l'est par TV Tours.<br/>
Pour visualiser l'interview fait par TV Tours cliquer sur le lien suivant :<br/>
http://www.dailymotion.com/video/xbssfs_infos-tv-tours-sur-incendie-dojo-de_news<br/>
<img class="images" src="/12_interieur.jpg" width="200px"><br/>
<br/>
Tout le monde est particulièrement choqué, du fait que ce sinistre, est sans aucun doute "criminel".<br/>
Très vite, la solidarité s'organise, Ballan, Montlouis, le J.C.T., Esvres, Saint Pierre des Corps, Chambray etc... proposent de nous attribuer des heures de cours.<br/>
Par ailleurs, la Mairie de St Avertin, Le club Omnisport se démènent pour trouver des solutions.<br/>
Tous les parents, et les adhérents sont prévenus par mail et/ou courrier, les cours sont suspendus jusqu'au 18 Janvier 2010.<br/>
`
    },
    {
      icon: 'mdi-face-outline',
      name: 'Années 90',
      color: 'green lighten-1',
      small: false,
      description: `A partir de Décembre 1990, la section s'étoffe de cours de Jujitsu, avec 14 adhérents dont 5 femmes dès l'ouverture. Madame VOISIN participe à l'animation de ces cours.<br/>
Devant l'augmentation des pratiquants, la municipalité accepte la construction d'un Dojo, qui sera mis en fonction en Décembre 1991 et inauguré officiellement le 15 Février 1992.<br/>
Notre réglementation est celle de Saint-Avertin-Sports où vous pourrez prendre connaissance des documents officiels entre autres les Statuts et le Règlement intérieur<br/>
La Section est ouverte à tous à partir de 6 ans révolus et sans limite d'âge maximum<br/>
Vous pouvez également bénéficier de cours de Jujitsu à partir de 18 ans révolus. Rappelons que le Jujitsu est une technique de Self Défense, et pour plus de renseignements nous vous conseillons la visite du site de Monsieur Laurent Thomas<br/>
Les cours ont lieu au Dojo de Château-Fraisier carte et sont assurés par deux professeurs diplômés d'état : Messieurs Alain LEBOUCHER et Olivier MAINGOURD<br/>
Ils sont assistés : pour le Judo par Monsieur Alain MAILLET, et pour le Jujitsu par Madame Christine VOISIN.<br/>
<img class="images" src="/alain_olivier.jpeg" width="200px"><img class="images" src="/olivier.jpeg" width="200px"><br/>`
    },
    {
      icon: 'mdi-baby',
      name: 'Années 80',
      color: 'green lighten-1',
      small: false,
      description: `Depuis un an nous avons quitté le gymnase de Léon Brûlon, et intégré notre nouveau Dojo (pour l'époque), situé dans une salle du Gymnase de Château-Fraisier. En effet, devant l'augmentation du nombre d'adhérents, la municipalité de Saint-Avertin, transforme ce qui devait être une salle de réunion, en Dojo. Nous sommes ravis, car nous n'aurons plus de poutre, au milieu du tapis, nous obligeant à calculer nos "Ipon Seoi Nagé" !!!!<br/>
Je n'ai malheureusement pas trouvé de photo du Dojo de Léon Brûlon, si vous en possédez, merci de bien vouloir m'en informer, et si possible, de me les confier, pour en intégrer une dans mon historique. D'avance merci.<br/>
<img class="images" src="/annees_80.jpg" width="200px"><br/>
Sur cette photo, on reconnaît :<br/>

<strong>Alain Leboucher</strong> : Obtient son Brevet d'Etat le <mark>17 Juillet 1970 N° 2044</mark>, il arrive en Avril 1973, et est toujours enseignant à ce jour,<br/>
<strong>Franck Leplanquais</strong> : Présidera l'U.J.37 (Aujourd'hui l'U.J.T.M), et qui est aujourd'hui 5<sup>ème</sup> Dan<br/>
<strong>Bruno Legal</strong> : Deviendra le Conseiller Technique Régional de la Région Limousin Poitou Charente<br/>
<strong>Françoise Chesnay</strong> : Secrétaire à l'époque, Trésorière actuellement, fût la 1<sup>ère</sup> Ceinture Noire Féminine du Club le <mark>02/11/85</mark>. Avec sa partenaire Christine Voisin, elles obtiendront le 4ème Dan le 23 Janvier 2000, devenant les 3<sup>ème</sup> et 4<sup>ème</sup> féminines à ce niveau dans le département. (Elles ont été, depuis, bien sûr, largement dépassées, tant en nombre, qu'en niveaux)<br/>
<strong>Christine Voisin</strong> : Participe également à la vie du club, en animant les cours de Jujitsu`
    },
    {
      icon: 'mdi-baby-face',
      name: `Le début`,
      color: 'green lighten-1',
      small: false,
      description: `En Avril 1973,suite au départ précipité de Monsieur SOUQUE, il est fait appel a Alain LEBOUCHER, qui accepte d'assurer l'intérim jusqu'à la fin de saison. Une trentaine d'adhérents sont déjà inscrits.<br/> 
      Il est rejoint, la saison suivante, par Monsieur Alain MAILLET pour l'assister. Tous deux sont toujours professeurs et préparent la saison 2010/2011!<br/>`
    },
    {
      icon: 'mdi-baby-carriage',
      name: 'Création du club',
      color: 'green lighten-1',
      small: false,
      description: `Le Judo Jujitsu est une des 26 sections rattachées à Saint-Avertin-Sports, club Omnisport de la ville de Saint-Avertin en Indre-et-Loire Nous sommes affiliés à F.F.J.D.A.<br/>
En 1969, la Jeunesse et les Sports propose une initiation Judo, sous réserves que l'activité soit développée.<br/>
Cette initiation sera assurée par Monsieur PINIER. Dans la foulée Monsieur FRISQUE et son fils, judoka, aménagent la salle qui deviendra le Dojo de Léon Brûlon. En Octobre 1970, la section est officiellement créée, et est rattachée à Saint-Avertin-Sports.<br/>
Le président est Monsieur PERRET et le professeur Monsieur SOUQUE<br/>
<img class="images" src="/judo-1971.jpg" width="200px"><br/>`
    }
  ]

  mounted() {
  }
}
</script>
