<template>
  <div class="main-container">
    <SidebarContainer />
    <RevisionContainer />
  </div>
</template>

<script>
import SidebarContainer from './sidebarContainer.vue'
import RevisionContainer from './revisionContainer.vue'
import 'primeflex/primeflex.css'

export default {
  name: 'CrearRevisionDeLimpieza',
  components: {
    SidebarContainer,
    RevisionContainer,
  },
}
</script>

<style>
.main-container {
  all: inherit;
  margin: 0 auto;
}

.revision__container {
  max-width: 1420px;
  margin: 0 auto;
  display: grid;
  width: 100vw;
  height: unset;
  padding: 1rem;
}

.revision__form {
  display: grid;
  place-items: center;
}

@media (min-width: 600px) {
  .revision__container {
    max-width: 1420px;
    margin: 0 auto;
    display: grid;
    width: 100%;
    height: 100vh;
  }
}
</style>



