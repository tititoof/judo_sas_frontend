<template>
  <v-container>
    <mq-layout mq="lg+">
      <planning-md
        :tasks-list="tasksList"
        :week-ground="weekGround"
        :time-ground="timeGround"
      ></planning-md>
    </mq-layout>
    <mq-layout mq="sm">
      <planning-sm
        :tasks-list="tasksList"
        :week-ground="weekGround"
        :time-ground="timeGround"
      ></planning-sm>
    </mq-layout>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PlanningMd from '~/components/md/PlanningMd.vue'
import PlanningSm from '~/components/sm/PlanningSm.vue'
import { ITaskPlanning } from '~/types/main.ts'

@Component({
  components: {
    PlanningMd,
    PlanningSm
  }
})
export default class Planning extends Vue {
  tasksList: Array<Array<ITaskPlanning>> = [
    [
      {
        dateStart: '18h',
        dateEnd: '19h',
        styleObj: {
          height: '6em',
          top: '15em',
          backgroundColor: '#43A047'
        },
        title: 'Mini Poussins - Poussins'
      },
      {
        dateStart: '20h15',
        dateEnd: '21h30',
        styleObj: {
          height: '8em',
          top: '28em',
          backgroundColor: '#33691E'
        },
        title: 'Jujitsu (Adultes)'
      }
    ],
    [
      {
        dateStart: '18h15',
        dateEnd: '19h30',
        styleObj: {
          height: '8em',
          top: '16em',
          backgroundColor: 'green'
        },
        title: 'Benjamins-Minimes'
      },
      {
        dateStart: '19h30',
        dateEnd: '21h',
        styleObj: {
          height: '9em',
          top: '24em',
          backgroundColor: '#1B5E20'
        },
        title: 'Adultes'
      }
    ],
    [
      {
        dateStart: '17h30',
        dateEnd: '18h30',
        styleObj: {
          height: '6em',
          top: '12em',
          backgroundColor: '#7CB342'
        },
        title: 'Mini Poussins'
      },
      {
        dateStart: '18h30',
        dateEnd: '19h30',
        styleObj: {
          height: '6em',
          top: '18em',
          backgroundColor: '#388E3C'
        },
        title: 'Poussins'
      },
      {
        dateStart: '20h',
        dateEnd: '21h30',
        styleObj: {
          height: '8em',
          top: '27em',
          backgroundColor: '#33691E'
        },
        title: 'Jujitsu (Adultes)'
      }
    ],
    [],
    [
      {
        dateStart: '18h15',
        dateEnd: '19h30',
        styleObj: {
          height: '8em',
          top: '16em',
          backgroundColor: 'green'
        },
        title: 'Benjamins-Minimes'
      },
      {
        dateStart: '19h30',
        dateEnd: '21h',
        styleObj: {
          height: '9em',
          top: '24em',
          backgroundColor: '#1B5E20'
        },
        title: 'Adultes'
      }
    ]
  ]

  weekGround: Array<string> = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche'
  ]

  timeGround: Array<string> = [
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ]
}
</script>
