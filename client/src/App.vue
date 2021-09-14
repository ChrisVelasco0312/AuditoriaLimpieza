<template>
  <div id="app">
    <!-- PrimeVue Components will go here -->
    <div class="welcome p-5 animation-duration-1000 fadein">
      <h1 class="title">Auditoria Limpieza</h1>

      <h4>Escriba algo a continuación:</h4>
      <div class="card grid flex justify-content-center align-items-center p-1">
        <InputText type="text" v-model="text" class="col m-1" />
      </div>
      <Card>
        <template #title> Advanced Card </template>
        <template #subtitle> {{ text }} </template>
        <template #content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          doloribus dolor consequatur ducimus nulla sequi perspiciatis quasi
          quia enim voluptatum!
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Save" />
          <Button
            icon="pi pi-times"
            label="Cancel"
            class="p-button-secondary"
            style="margin-left: 0.5em"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import 'primeflex/primeflex.css'

export default {
  name: 'App',
  components: {
    Button,
    InputText,
    Card,
  },
  data: () => {
    return {
      text: '',
    }
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Helvetica';
}

#app {
  height: 100vh;
  display: grid;
  place-items: center;
}

.welcome {
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
  width: 80%;
  min-width: 300px;
}
</style>
