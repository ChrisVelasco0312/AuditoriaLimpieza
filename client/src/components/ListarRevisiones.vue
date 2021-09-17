<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Muestra listado de auditorias -->
      <DataTable :value="products" responsiveLayout="scroll">
        <Column field="idRevision" header="IdRevision"></Column>
        <Column field="fecha" header="Fecha"></Column>
        <Column field="elemento" header="Elemento"></Column>
        <Column field="resultado" header="Resultado"></Column>
      </DataTable>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>



