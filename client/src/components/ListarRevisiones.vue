<template>
  <div class="revisiones__container">
    <SidebarContainer />

    <div class="auditorias__list">
      <section class="auditorias__list--entries">
        <DataTable :value="revisiones" showGridlines dataKey="id" ref="dt">
          <template #header>
            <header class="auditorias__list--header">
              <div class="auditorias__list--title">
                <i class="pi pi-book"></i>
                <h1>Revisar Auditorias</h1>
              </div>
              <Button
                icon="pi pi-plus-circle"
                label="Nueva Auditoria"
                @click="onNew"
              />
              <Button
                icon="pi pi-external-link"
                label="Exportar a CSV"
                @click="exportCSV()"
              />
            </header>
          </template>
          <Column
            field="id"
            headerStyle="width: 3rem"
            header="Id"
            :sortable="true"
          />
          <Column field="nombreAuditor" header="Auditor"></Column>
          <Column field="sede" header="Sede"></Column>
          <Column field="aseador" header="Aseador"></Column>
          <Column field="fecha" header="Fecha"></Column>
          <Column
            field="porcentajeSucio"
            header="Porcentaje Sucio"
            :sortable="true"
          ></Column>
          <Column
            field="porcentajeLimpio"
            header="Porcentaje Limpio"
            :sortable="true"
          ></Column>
          <!-- Estos datos no están en vista pero se despliegan al exportar -->
          <Column field="silla" header="silla" style="display: none"></Column>
          <Column
            field="camilla"
            header="camilla"
            style="display: none"
          ></Column>
          <Column
            field="escritorio"
            header="escritorio"
            style="display: none"
          ></Column>
          <Column
            field="lavamanos"
            header="lavamanos"
            style="display: none"
          ></Column>
          <Column
            field="soporte"
            header="soporte"
            style="display: none"
          ></Column>
          <!-- ------------------------------------------------------------ -->
          <Column header="Objetos">
            <template #body="slotProps">
              <ul class="object__list">
                <li>
                  <b> Silla: </b>
                  {{ slotProps.data.silla == true ? 'limpio' : 'sucio' }}
                </li>
                <li>
                  <b> Camilla: </b>
                  {{ slotProps.data.camilla == true ? 'limpio' : 'sucio' }}
                </li>
                <li>
                  <b> Escritorio: </b>
                  {{ slotProps.data.escritorio == true ? 'limpio' : 'sucio' }}
                </li>
                <li>
                  <b> Lavamanos: </b>
                  {{ slotProps.data.lavamanos == true ? 'limpio' : 'sucio' }}
                </li>
                <li>
                  <b> Soporte: </b>
                  {{ slotProps.data.soporte == true ? 'limpio' : 'sucio' }}
                </li>
              </ul>
            </template>
          </Column>

          <Column header="Editar y Eliminar">
            <template #body>
              <div class="revisiones__actions">
                <Button
                  class="p-button-rounded"
                  icon="pi pi-pencil"
                  @click="onEdit"
                />
                <Button
                  class="p-button-rounded p-button-danger"
                  icon="pi pi-times"
                  @click="onDelete"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </section>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
// import ColumnGroup from 'primevue/columngroup'
// import RevisionesService from '../services/revisiones.service'
import SidebarContainer from './sidebarContainer.vue'

export default {
  name: 'ListarRevisiones',
  components: {
    SidebarContainer,
    Button,
    DataTable,
    Column,
    // ColumnGroup,
  },
  data: () => {
    return {
      //TODO: Reemplazar el mock por null
      revisiones: [
        {
          id: '1',
          nombreAuditor: 'Maria',
          sede: 'Sede-Sur',
          aseador: 'Jonas Mauricio',
          fecha: '23/09/2021',
          silla: false,
          camilla: true,
          escritorio: true,
          lavamanos: false,
          soporte: true,
          porcentajeSucio: 40,
          porcentajeLimpio: 60,
        },
        {
          id: '2',
          nombreAuditor: 'Romario',
          sede: 'Sede-Norte',
          aseador: 'Rajulio Del Alma',
          fecha: '25/09/2021',
          silla: true,
          camilla: true,
          escritorio: true,
          lavamanos: true,
          soporte: true,
          porcentajeSucio: 0,
          porcentajeLimpio: 100,
        },
      ],
    }
  },
  created: () => {
    //TODO: Crear Service para Revisiones que reciba el get de las auditorias
    // this.revisionesService = new RevisionesService()
  },
  mounted: () => {
    // this.revisionesService.getRevisiones().then(data => this.revisiones = data)
  },
  methods: {
    onNew() {
      window.location.href = '/registrar'
    },
    onEdit() {
      console.log('edited')
    },
    onDelete() {
      console.log('deleted')
    },
    exportCSV() {
      this.$refs.dt.exportCSV()
    },
  },
}
</script>

<style>
.revisiones__container {
  display: grid;
}

.auditorias__list {
  padding: 1rem;
  width: 100vw;
}

.auditorias__list--header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  place-items: center;
  gap: 1rem;
  background: var(--color-light);
  border-radius: 5px;
  padding: 0.5rem 1rem;
}

.auditorias__list--title {
  all: inherit;
}

.auditorias__list--entries {
  position: relative;
  z-index: 1;
}

.object__list {
  display: grid;
  gap: 0.2rem;
  list-style-type: none;
  margin: 0rem;
  padding: 0;
}

.object__list > li {
  background: var(--color-accent-light);
}

.revisiones__actions {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
}
</style>



