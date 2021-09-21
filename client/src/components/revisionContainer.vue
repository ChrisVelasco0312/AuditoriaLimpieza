<template>
  <div class="revision__container">
    <Card class="header__card">
      <template #content>
        <h1>Auditoria</h1>
        <strong> ID: {{ (auditoriaDate.id = '001') }} </strong>
        <p><b>fecha</b>: {{ auditoriaDate.date }}</p>
      </template>
    </Card>
    <Card class="sede__card">
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
        <div class="percentage__info">
          Limpio
          <Knob class="clean-percentage" v-model="cleanPercentage" readonly />
        </div>
        <div class="percentage__info">
          Sucio
          <Knob
            valueColor="var(--color-danger)"
            v-model="notCleanPercentage"
            readonly
          />
        </div>
      </template>
    </Card>
    <Card class="form__card">
      <template #title> Objetos a revisar </template>
      <template #content>
        <form class="revision__form" @submit.prevent="handleSubmitForm">
          <div class="form-group" @click="refreshPercentage">
            <div class="form-switch">
              <h4>Silla</h4>
              <div class="p-field-checkbox p-m-0">
                <TriStateCheckbox v-model="checkForm.silla" />
                <label>{{
                  checkForm.silla == null
                    ? ' Sin revisar'
                    : checkForm.silla == true
                    ? ' Limpio'
                    : ' Sucio'
                }}</label>
              </div>
            </div>
            <div class="form-switch">
              <h4>Camilla</h4>
              <div class="p-field-checkbox p-m-0">
                <TriStateCheckbox v-model="checkForm.camilla" />
                <label>{{
                  checkForm.camilla == null
                    ? ' Sin revisar'
                    : checkForm.camilla == true
                    ? ' Limpio'
                    : ' Sucio'
                }}</label>
              </div>
            </div>
            <div class="form-switch">
              <h4>Escritorio del consultorio</h4>
              <div class="p-field-checkbox p-m-0">
                <TriStateCheckbox v-model="checkForm.escritorio" />
                <label>{{
                  checkForm.escritorio == null
                    ? ' Sin revisar'
                    : checkForm.escritorio == true
                    ? ' Limpio'
                    : ' Sucio'
                }}</label>
              </div>
            </div>
            <div class="form-switch">
              <h4>Lavamanos</h4>
              <div class="p-field-checkbox p-m-0">
                <TriStateCheckbox v-model="checkForm.lavamanos" />
                <label>{{
                  checkForm.lavamanos == null
                    ? ' Sin revisar'
                    : checkForm.lavamanos == true
                    ? ' Limpio'
                    : ' Sucio'
                }}</label>
              </div>
            </div>
            <div class="form-switch">
              <h4>Soporte de líquidos</h4>
              <div class="p-field-checkbox p-m-0">
                <TriStateCheckbox v-model="checkForm.soporteLiquidos" />
                <label>{{
                  checkForm.soporteLiquidos == null
                    ? ' Sin revisar'
                    : checkForm.soporteLiquidos == true
                    ? ' Limpio'
                    : ' Sucio'
                }}</label>
              </div>
            </div>
          </div>
        </form>
        <div class="form-button">
          <Button label="Registrar" @click="handleClick()" icon="pi pi-plus" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import 'primeflex/primeflex.css'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Dropdown from 'primevue/dropdown'
import Knob from 'primevue/knob'
import TriStateCheckbox from 'primevue/tristatecheckbox'

export default {
  name: 'RevisionContainer',
  components: {
    Button,
    Card,
    Dropdown,
    Knob,
    TriStateCheckbox,
  },

  data: () => {
    return {
      checkForm: {
        silla: null,
        camilla: null,
        escritorio: null,
        lavamanos: null,
        soporteLiquidos: null,
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
      cleanPercentage: 0,
      notCleanPercentage: 0,
    }
  },
  methods: {
    handleClick() {
      if (!this.validate()) {
        alert(
          'No ha completado la revision, por favor revise todos los objetos.'
        )
      } else {
        console.log(Object.entries(this.checkForm))
        alert('Auditoria registrada')
        // window.location.href = '/consultar'
      }
    },
    calcPercentage(value) {
      let refreshValue = Object.values(this.checkForm).filter(
        (item) => item === value
      ).length
      let calcProgress =
        (refreshValue * 100) / Object.values(this.checkForm).length
      return calcProgress
    },
    refreshPercentage() {
      this.cleanPercentage = this.calcPercentage(true)
      this.notCleanPercentage = this.calcPercentage(false)
    },
    validate() {
      let valid = true
      Object.values(this.checkForm).forEach((item) => {
        if (item == null) {
          valid = false
        }
      })
      return valid
    },
  },
}
</script>

<style>
.revision__container {
  display: grid;
  grid-template-columns: unset;
  grid-template-rows: unset;
  gap: 1rem;
}

.header__card {
  grid-column: unset;
  height: 120px;
  align-self: end;
}

.form__card {
  grid-row: unset;
  grid-column: unset;
}

.revision__form {
  width: 100%;
}

.sede__card {
  align-self: center;
}

.form-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  width: 100%;
}

.form-switch {
  border: 2px solid rgb(189, 189, 189);
  border-radius: 5px;
  padding: 0.5rem;
  display: grid;
  place-items: center;
  justify-content: space-evenly;
  grid-template-columns: repeat(2, 105px);
  gap: 0.5rem;
  width: 100%;
}

.form-button > Button {
  width: 100%;
  height: 100%;
}

.p-card {
  background-color: var(--color-light);
  height: fit-content;
  max-width: 100%;
}

.p-card .p-card-title {
  margin: 0;
}

.p-card .p-card-content {
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: space-around;
  gap: 2rem;
  padding: 0.5rem;
}

.p-dropdown {
  width: 100%;
}

.sede__card .p-card-content {
  height: 120px;
}

.clean-progress {
  align-self: center;
}

.clean-progress .p-card-content {
  display: flex;
}

.p-progressbar.p-component.p-progressbar-determinate {
  border: 2px solid rgb(192, 191, 191);
}

.percentage__info {
  display: grid;
  place-items: center;
  font-weight: 700;
}

@media (min-width: 600px) {
  .header__card {
    grid-column: 1 / 3;
    height: 120px;
    align-self: end;
  }

  .form__card {
    grid-row: 3;
    grid-column: 1 / 3;
  }

  .revision__container {
    display: grid;
    padding: 0rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
  }
}
</style>
