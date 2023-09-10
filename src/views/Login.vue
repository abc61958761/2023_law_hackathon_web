<template>
    <v-row style="height:100vh" no-gutters>
        <v-col class="col-3" style="background: #C7FFF5; display: flex;justify-content: center;align-items: center;">
            <img width="80%" src="../assets/logo.png" />
        </v-col>
        <v-col class="col-9" style="display: flex;justify-content: center;align-items: center;">
            <div style="width: 60%">
                <h2 class="mb-4">歡迎來到判決標注平台</h2>
                <span class="font-weight-medium">E-mail</span>
                <v-text-field
                    class="mb-8"
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    filled
                ></v-text-field>
                <span class="font-weight-medium">密碼</span>
                <v-text-field
                    v-model="password"
                    :rules="[rules.required]"
                    type="password"
                    filled
                ></v-text-field>
                <v-btn @click="login">登入</v-btn>
            </div>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data () {
      return {
        title: 'Preliminary report',
        email: '',
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
    methods: {
        login() {
            this.$router.push(`/`)
        }
    }
}
</script>