<template>
  <v-container>
    <v-list>
      <v-list-item
        v-for="(weekDay, indexWeek) in weekGround"
        :key="indexWeek"
        link
      >
        <v-list-item-content>
          <v-card color="green darken-3" dark>
            <v-card-title>
              {{ weekDay }}
            </v-card-title>
            <v-card-text
              v-for="(course, indexDayCourse) in tasksList[indexWeek]"
              :key="indexDayCourse"
            >
              <h3>
                <i>{{ course.dateStart }} - {{ course.dateEnd }}</i> :<br />
              </h3>
              <h3>{{ course.title }}<br /></h3>
            </v-card-text>
          </v-card>
          <v-spacer></v-spacer>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class PlanningMd extends Vue {
  @Prop() tasksList!: Array<any>
  @Prop() weekGround!: Array<string>
  @Prop() timeGround!: Array<string>
}
</script>
