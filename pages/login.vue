<template>
  <v-form v-model="valid">
    <v-row :class="`d-flex justify-center mb-6`">
      <v-col cols="12" md="4">
        <h3>Connexion</h3>
      </v-col>
    </v-row>
    <v-row :class="`d-flex justify-center mb-6`">
      <v-col cols="12" md="4">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row :class="`d-flex justify-center mb-6`">
      <v-col cols="12" md="4">
        <v-text-field
          v-model="password"
          :rules="emptyRules"
          label="Password"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row :class="`d-flex justify-center mb-6`">
      <v-col cols="12" md="4">
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
          Log in
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  valid: boolean = false
  email: string = ''
  password: string = ''
  emailRules: Array<any> = [
    (v: any) => !!v || 'E-mail is required',
    (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
  ]

  emptyRules: Array<any> = [(v: any) => !!v || 'Name is required']
  $auth: any

  async login() {
    const _self = this
    const response: any = await _self.$auth.loginWith('local', {
      data: {
        email: _self.email,
        password: _self.password
      }
    })
    _self.$auth.setUserToken(response.headers.client).then(() => {
      _self.$auth.setUser(response.data.data)
      _self.$router.push({
        path: '/admin'
      })
    })
  }

  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push({
        path: '/admin'
      })
    }
  }
}
</script>
