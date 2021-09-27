<template>
  <div class="revisiones__container">
    <SidebarContainer />
    <div class="auditorias__list">
      <section class="auditorias__list--entries">
        <DataTable :value="revisiones" showGridlines dataKey="_id" ref="dt">
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
            field="_id"
            headerStyle="width: 15rem"
            header="Id"
            :sortable="true"
          />
          <Column field="nombreAuditor" header="Auditor"></Column>
          <Column field="sede" header="Sede"></Column>
          <Column field="aseador" header="Aseador"></Column>
          <Column
            field="fecha"
            headerStyle="width: 7rem"
            header="Fecha"
          ></Column>
          <Column
            field="porcentajeLimpio"
            header="% Limpio"
            :sortable="true"
          ></Column>
          <Column
            field="porcentajeSucio"
            header="% Sucio"
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

  data() {
    return {
      revisiones: [],
    }
  },

  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          'http://localhost:3000/api/consultar'
        )
        this.revisiones = response.data
      } catch (error) {
        console.log(error)
      }
    },

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

  created() {
    this.getData()
  },
}
</script>

<style>
.revisiones__container {
  max-width: 1420px;
  margin: 0 auto;
  display: grid;
  width: 100vw;
  height: unset;
  padding: 1rem;
}

.auditorias__list {
  padding: 1rem;
  width: 80vw;
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



