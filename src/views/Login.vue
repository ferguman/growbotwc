<template>
<v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="user_name" label="User Name" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
                <v-btn color="primary">Password Reset</v-btn>
                <v-btn color="primary">Cancel</v-btn>
              </v-card-actions>
            </v-card>
</template>

<script>

export default {

  data: function () {
    return {
      foo: 'bar'
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login')
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
