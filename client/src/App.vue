<template>
  <!-- Nav bar -->
  <!-- <nav
      class="
        navbar navbar-dark
        bg-primary
        justify-content-between
        flex-nowrap flex-row
      "
    >
      <div class="container">
        <a class="navbar-brand float-left">Auditoría de Limpieza</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/registrar">
              Registrar
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/consultar"
              >Consultar</router-link
            >
          </li>
        </ul>
      </div>
    </nav> -->
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
