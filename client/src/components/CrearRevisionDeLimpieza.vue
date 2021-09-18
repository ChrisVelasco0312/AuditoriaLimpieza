<template>
  <div class="main-container">
    <SidebarContainer v-show="isVisible" />
    <Button @click="toggleMenu" class="menu-button" icon="pi pi-list" />
    <RevisionContainer />
  </div>
</template>

<script>
import Button from 'primevue/button'
import SidebarContainer from './sidebarContainer.vue'
import RevisionContainer from './revisionContainer.vue'
import 'primeflex/primeflex.css'

export default {
  name: 'App',
  components: {
    Button,
    SidebarContainer,
    RevisionContainer,
  },
  data: () => {
    return {
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
.main-container {
  all: inherit;
}
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
</style>



