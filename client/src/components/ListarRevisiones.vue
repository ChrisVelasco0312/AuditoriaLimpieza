<template>
  <SidebarContainer v-show="isVisible" />
  <!-- <Button @click="toggleMenu" class="menu-button" icon="pi pi-list" /> -->
</template>
<script>
// import Button from 'primevue/button'
// import DataTable from 'primevue/datatable'
import SidebarContainer from './sidebarContainer.vue'
// import Column from 'primevue/column'
// import ColumnGroup from 'primevue/columngroup'

export default {
  name: 'ListarRevisiones',
  components: {
    SidebarContainer,
    // Button,
    // DataTable,
    // Column,
    // ColumnGroup,
  },
  data: () => {
    return {
      isVisible: false,
    }
  },
  methods: {},
}
</script>

<style>
</style>



