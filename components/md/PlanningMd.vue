<template>
  <div class="schedule">
    <div class="time-ground">
      <ul style="list-style-type: none;">
        <li v-for="(time, index) in timeGround" :key="index">
          <span>
            {{ time }}
          </span>
          <p :style="timeListSty"></p>
        </li>
      </ul>
    </div>
    <div class="task-ground">
      <ul style="list-style-type: none;">
        <li v-for="(day, index) in weekGround" :key="index" class="task-list">
          <p>
            <i>{{ day }}</i>
          </p>
          <ul :style="taskListSty">
            <li
              v-for="detail in tasksList[index]"
              :key="detail.title"
              :style="detail.styleObj"
              class="task-list-item"
            >
              <h5>{{ detail.title }}</h5>
              <p>{{ detail.dateStart }} - {{ detail.dateEnd }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class PlanningMd extends Vue {
  @Prop() tasksList!: Array<any>
  @Prop() weekGround!: Array<string>
  @Prop() timeGround!: Array<string>

  taskListSty: object = {
    height: '35em',
    paddingLeft: 0
  }

  timeListSty: object = {
    width: '100%'
  }

  taskIndex: number = 0
}
</script>
<style>
.schedule {
  width: 50em;
  /* max-width: 1400px; */
  margin: 0 auto;
  position: relative;
}

.time-ground {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.time-ground ul {
  padding-left: -1em;
}

.time-ground ul li {
  margin-top: 3em;
  font-size: 1rem;
  height: 3em;
}

.time-ground ul li span {
  position: absolute;
  left: -2.5em;
  margin-top: -0.7em;
}

.time-ground ul li p {
  position: absolute;
  left: 0;
  height: 1px;
  background-color: #eaeaea;
}

.task-ground {
  width: 100%;
}

.task-list {
  float: left;
  width: 14.28%;
  box-sizing: border-box;
  border: 1px solid #eaeaea;
}

.task-list p {
  text-align: center;
  font-size: 1rem;
  padding: 1rem;
}

.task-list-item {
  position: absolute;
  background-color: #577f92;
  width: 14%;
  height: 50px;
  cursor: pointer;
  list-style-type: none;
  box-shadow: 0px 1px 50px #5e5e5e;
}
.task-list-item p {
  text-align: left;
  padding: 0;
  margin: 1rem 0 0 1rem;
  font-size: 0.8rem;
  color: #edf2f6;
}
.task-list-item h5 {
  color: #e0e7e9;
  margin: 1rem 0 0 1rem;
}

.task-list-item-phone-p {
  text-align: left;
  padding: 0;
  margin: 1rem 0 0 1rem;
  font-size: 0.8rem;
  color: #edf2f6;
}

.task-list-item-phone-h {
  color: #e0e7e9;
  margin: 1rem 0 0 1rem;
}
</style>
