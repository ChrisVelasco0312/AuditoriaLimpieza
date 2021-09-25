<template>
  <!-- Router view -->
  <div class="root-container">
    <router-view></router-view>
  </div>
</template>

<script>
import 'primeflex/primeflex.css'
export default {
  name: 'App',
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

.root-container {
  width: 100vw;
  display: flex;
}

</style>
