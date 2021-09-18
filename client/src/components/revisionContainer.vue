<template>
  <div class="revision__container">
    <!-- <h1 class="text-center">Auditoría de limpieza</h1> -->
    <Card class="header__card">
      <template #title> Auditoria </template>
      <template #content>
        <strong> ID: {{ (auditoriaDate.id = '001') }} </strong>
        <p><b>fecha</b>: {{ auditoriaDate.date }}</p>
      </template>
    </Card>
    <Card>
      <template #title>
        <i class="pi pi-map-marker"></i> Seleccionar Sede
      </template>
      <template #content>
        <Dropdown
          class="sede__select"
          v-model="selectedPlace"
          :options="places"
          optionLabel="name"
          placeholder="Selecciona una sede"
        />
      </template>
    </Card>
    <Card class="clean-progress">
      <template #title> <i class="pi pi-percentage"></i> Porcentaje </template>
      <template #content>
        <Knob v-model="progressValue" readonly />
      </template>
    </Card>

    <form class="revision__form" @submit.prevent="handleSubmitForm">
      <div class="form-group" @click="refreshPercentage">
        <div class="form-switch">
          <h5>Silla</h5>
          <InputSwitch v-model="checkForm.checked1" />
        </div>
        <div class="form-switch">
          <h5>Camilla</h5>
          <InputSwitch v-model="checkForm.checked2" />
        </div>
        <div class="form-switch">
          <h5>Escritorio del consultorio</h5>
          <InputSwitch v-model="checkForm.checked3" />
        </div>
        <div class="form-switch">
          <h5>Lavamanos</h5>
          <InputSwitch v-model="checkForm.checked4" />
        </div>
        <div class="form-switch">
          <h5>Soporte de líquidos</h5>
          <InputSwitch v-model="checkForm.checked5" />
        </div>
      </div>
      <div class="form-button">
        <Button label="Registrar" @click="handleClick()" />
      </div>
    </form>
  </div>
</template>

<script>
import 'primeflex/primeflex.css'
import InputSwitch from 'primevue/inputswitch'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Dropdown from 'primevue/dropdown'
import Knob from 'primevue/knob'

export default {
  name: 'RevisionContainer',
  components: {
    Button,
    InputSwitch,
    Card,
    Dropdown,
    Knob,
  },
  data: () => {
    return {
      checkForm: {
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
      },
      auditoriaDate: {
        id: '',
        date: '17 septiembre 2021 14:00pm',
      },
      selectedPlace: null,
      places: [
        { name: 'Sede Sur', code: 'SS' },
        { name: 'Sede Norte', code: 'SN' },
        { name: 'Sede Occidente', code: 'SO' },
      ],
      progressValue: 0,
    }
  },
  methods: {
    handleClick() {
      console.log(Object.values(this.checkForm))
    },
    calcPercentage() {
      let refreshValue = Object.values(this.checkForm).filter(
        (item) => item === true
      ).length
      let calcProgress =
        (refreshValue * 100) / Object.values(this.checkForm).length
      return calcProgress
    },
    refreshPercentage() {
      this.progressValue = this.calcPercentage()
    },
  },
}
</script>

<style>
.revision__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
}
.header__card {
  grid-column: 1 / 3;
}
.revision__form {
  grid-row: 3;
  grid-column: 1 / 3;
}
.form-group {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  width: 100%;
  padding: 1rem;
}
.p-card {
  background-color: var(--color-light);
  /* height: 150px; */
}
.p-card .p-card-title {
  margin: 0;
}
.p-card .p-card-content {
  display: flex;
  place-items: center;
  justify-content: space-around;
  gap: 2rem;
  padding: 0.5rem;
}
.p-dropdown {
  width: 100%;
}
.clean-progress .p-card-content {
  display: flex;
}
.p-progressbar.p-component.p-progressbar-determinate {
  border: 2px solid rgb(192, 191, 191);
}
</style>

