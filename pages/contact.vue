<template>
  <v-container>
    <v-card>
      <v-toolbar>
        <h3>Contact</h3>
      </v-toolbar>
      <v-card-text style="height: 600px;" class="grey lighten-5">
        <v-alert type="success" v-if="success">
          Email envoyé
        </v-alert>
        <v-row>
          <v-text-field
            v-model="name"
            label="Nom"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="email"
            label="Email"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="subject"
            label="Sujet"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-textarea
            v-model="message"
            label="Message"
          ></v-textarea>
        </v-row>
        <v-row>
          <v-btn
            color="green"
            dark
            absolute
            small
            bottom
            right
            fab
          >
            <v-icon @click="onSubmit">mdi-send</v-icon>
          </v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class Contact extends Vue {
  name: string = ''
  email: string = ''
  subject: string = ''
  message: string = ''
  $recaptcha: any
  success: boolean = false

  async onSubmit() {
    // try {
      // const token = await this.$recaptcha.execute('send')

      // console.log('ReCaptcha token:', token)
    // } catch (error) {
      // console.log('Login error:', error)
    // }
    this.success = false
    const post = await this.$axios.$post(`/api/email`, { 
      contact: {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      }
    }).then(() => {
      this.success = true
    })

  }

  async send() {
    const post = await this.$axios.$put(`/api/email`, {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    })
  }

  async mounted() {
    // await this.$recaptcha.init()
  }
}
</script>