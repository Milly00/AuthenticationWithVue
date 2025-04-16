<template>
  <h1>App Vue</h1>
  <div class="container">
    <form class="row">
      <div class="form-group">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            v-model="email"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <div>
        <button @click.prevent="auth()" type="button" class="btn btn-success mt-2">Success</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import AuthServices from "@/services/AuthService";
import { ref } from "vue";

let email = ref("");
let password = ref("");

const auth = async () => {
  const services = new AuthServices();
  const success = await services.login(email.value, password.value);

  if (success) {
    alert("Exito");
  } else {
    alert("Login Incorrecto");
  }
};
</script>

<style></style>
