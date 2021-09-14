<template>
  <div id="app">
    <!-- PrimeVue Components will go here -->
    <div class="welcome">
      <h1 class="title">Auditoria Limpieza</h1>
      <Button label="HOLA MUNDO" />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'

export default {
  name: 'app',
  components: {
    Button,
  },
}
</script>

<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}

.welcome {
  display: grid;
  justify-content: center;
}
</style>
