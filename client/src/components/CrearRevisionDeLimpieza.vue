<template>
  <SidebarContainer v-show="isVisible" />
  <Button @click="toggleMenu" class="menu-button" icon="pi pi-list" />
  <div class="revision__container">
    <h1 class="text-center">Auditoría de limpieza</h1>

    <form class="revision__form" @submit.prevent="handleSubmitForm">
      <div class="form-group">
        <div class="form-switch">
          <h5>Silla</h5>
          <InputSwitch v-model="checkForm.checked1" />
        </div>
        <br />
        <div class="form-switch">
          <h5>Camilla</h5>
          <InputSwitch v-model="checkForm.checked2" />
        </div>
        <br />
        <div class="form-switch">
          <h5>Escritorio del consultorio</h5>
          <InputSwitch v-model="checkForm.checked3" />
        </div>
        <br />
        <div class="form-switch">
          <h5>Lavamanos</h5>
          <InputSwitch v-model="checkForm.checked4" />
        </div>
        <br />
        <div class="form-switch">
          <h5>Soporte de líquidos</h5>
          <InputSwitch v-model="checkForm.checked5" />
        </div>
      </div>
      <br /><br />

      <div class="form-button">
        <Button label="Registrar" @click="handleClick($event)" />
      </div>
    </form>
  </div>
</template>

<script>
import InputSwitch from 'primevue/inputswitch'
import Button from 'primevue/button'
import SidebarContainer from './sidebarContainer.vue'
import 'primeflex/primeflex.css'

export default {
  name: 'App',
  components: {
    InputSwitch,
    Button,
    SidebarContainer,
  },
  data: () => {
    return {
      checkForm: {
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
      },
      isVisible: false,
    }
  },
  methods: {
    handleClick($event) {
      console.log($event)
      console.log(this.checkForm)
    },
    toggleMenu() {
      this.isVisible = !this.isVisible
    },
  },
}
</script>

<style>
.menu-button {
  position: absolute;
  top: 20px;
  left: 20px;
}
.revision__container {
  display: grid;
  width: 100%;
  padding: 1rem;
}
.revision__form {
  display: grid;
  place-items: center;
}
.form-group {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
}
</style>



