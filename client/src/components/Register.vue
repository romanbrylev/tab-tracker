<template>
  <div>
    <h1>Регистрация</h1>
    <input
    type="email"
    name="email"
    id="email"
    placeholder="Your email"
    v-model="email"
    />
    <br>

    <input
    type="password"
    name="password"
    id="password"
    placeholder="Your password"
    v-model="password"/>
    <br>
    <button @click="register">Зарегистрироваться</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
