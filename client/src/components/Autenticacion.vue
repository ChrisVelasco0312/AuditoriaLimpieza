<template>
  <div class="login-container">
    <img class="logo" src="@/assets/logo.svg" alt="" />
    <form class="login__form" @keyup.enter="handleSubmitForm">
      <span class="login__input">
        <label for="auditor">Auditor</label>
        <InputText id="auditor" type="text" v-model="nameValue" />
      </span>
      <span class="login__input">
        <label for="password">Contraseña</label>
        <InputText id="password" type="password" v-model="passwordValue" />
      </span>
      <div class="login__actions">
        <Button class="" label="Iniciar Sesion" @click="handleSubmitForm" />
        <p class="forgot" align="center">
          <a href="#">¿contraseña olvidada?</a>
        </p>
      </div>
    </form>
    <Dialog
      class="shadow-7"
      header="Datos incorrectos"
      v-model:visible="display"
    >
      <p>
        Intente <strong>user:</strong> demo | <strong>password:</strong> demo
      </p>
    </Dialog>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import 'primeflex/primeflex.css'

export default {
  name: 'Autenticacion',
  components: {
    InputText,
    Button,
    Dialog,
  },
  data: () => {
    return {
      nameValue: '',
      passwordValue: '',
      display: false,
    }
  },
  methods: {
    handleSubmitForm() {
      this.nameValue == 'demo' && this.passwordValue == 'demo'
        ? (window.location.href = '/consultar')
        : (this.display = true)
    },
  },
}
</script>

<style>
.login-container {
  margin: 0 auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  /* grid-auto-flow: column; */
  place-items: center;
  background-color: #ffffff;
  width: 100%;
  height: fit-content;
}

.logo {
}

.login__form {
  display: grid;
  grid-gap: 1.6rem;
}

.login__input {
  display: grid;
}

.login__actions {
  display: grid;
  width: 100%;
}

.un:focus,
.pass:focus {
  border: 2px solid rgba(0, 0, 0, 0.18) !important;
}

.forgot a {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: var(--color-primary);
  text-decoration: none;
}

.p-dialog-mask {
  background: #27324b52;
}

@media (min-width: 600px) {
  .logo {
    justify-self: end;
    position: relative;
    right: 25px;
  }

  .login__form {
    justify-self: start;
  }

  .main {
    border-radius: 0px;
  }
}
</style>