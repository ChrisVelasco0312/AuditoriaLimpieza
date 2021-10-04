<template>
  <div class="revision__container">
    <Card class="header__card">
      <template #content>
        <h2>Editar Auditoria</h2>
        <p><b>fecha</b>: {{ auditoriaDate }}</p>
        <br />
        <p><b>id_Auditoria:</b>:{{ auditoria._id }}</p>
        <Button
          class="close-button shadow-3 p-button-danger"
          label="cancelar auditoria"
          icon="pi pi-times"
          @click.passive="cancelarEdicion($event)"
        />
        <ConfirmPopup></ConfirmPopup>
      </template>
    </Card>
    <Card class="sede__card">
      <template #content>
        <Dropdown
          class="sede__select"
          v-model="selectedPlace"
          :options="places"
          optionLabel="name"
          placeholder="Selecciona una sede"
        />
        <span class="aseador__input p-float-label">
          <InputText id="aseador" type="text" v-model="aseador" />
          <label for="aseador">Funcionario que realizó la limpieza:</label>
        </span>
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
        <form class="revision__form" @submit.prevent.passive>
          <div class="form-group" @click.passive="refreshPercentage">
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
        <Button
          class="shadow-3 form-button"
          label="Actualizar"
          @click.passive="handleUpdateForm()"
          icon="pi pi-plus"
        />
      </template>
    </Card>
    <Dialog
      class="shadow-6"
      header="Atención"
      v-model:visible="displayAlert"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem;" />
        <span
          >El formulario no ha sido completado <br />revise e intente
          nuevamente</span
        >
      </div>
    </Dialog>
  </div>
</template>

<script>
import 'primeflex/primeflex.css'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Dropdown from 'primevue/dropdown'
import Knob from 'primevue/knob'
import TriStateCheckbox from 'primevue/tristatecheckbox'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import ConfirmPopup from 'primevue/confirmpopup'

//Axios Import
import axios from 'axios'

export default {
  name: 'EdicionContainer',
  components: {
    Button,
    Card,
    Dropdown,
    Knob,
    TriStateCheckbox,
    InputText,
    Dialog,
    ConfirmPopup,
  },

  data: () => {
    return {
      auditoria: {},

      checkForm: {
        silla: null,
        camilla: null,
        escritorio: null,
        lavamanos: null,
        soporteLiquidos: null,
      },

      auditoriaDate: '',
      selectedPlace: '',
      places: [
        { name: 'Sede Sur', code: 'SS' },
        { name: 'Sede Norte', code: 'SN' },
        { name: 'Sede Occidente', code: 'SO' },
      ],
      aseador: '',
      cleanPercentage: 0,
      notCleanPercentage: 0,
      displayAlert: false,
    }
  },

  created() {
    let apiURL = `http://localhost:3000/api/editar/${this.$route.params.id}`
    console.log(axios.get(apiURL))
    axios.get(apiURL).then((res) => {
      //console.log('Entramos')
      console.log(res.data)
      this.auditoria = res.data
      console.log(this.auditoria)
      //console.log(this.auditoria.soporte)
      //this.auditoria.silla = true
      //this.checkForm.soporteLiquidos = this.auditoria.soporteLiquidos

      this.checkForm.silla = this.finalBooleanObject(this.auditoria.silla)
      this.checkForm.camilla = this.finalBooleanObject(this.auditoria.camilla)
      this.checkForm.escritorio = this.finalBooleanObject(
        this.auditoria.escritorio
      )
      this.checkForm.lavamanos = this.finalBooleanObject(
        this.auditoria.lavamanos
      )
      this.checkForm.soporteLiquidos = this.finalBooleanObject(
        this.auditoria.soporte
      )
      this.auditoriaDate = this.auditoria.fecha
      this.selectedPlace = this.auditoria.sede

      this.selectedPlace = this.auditoria.sede
      console.log(this.selectedPlace)
      this.aseador = this.auditoria.aseador
      this.cleanPercentage = this.auditoria.porcentajeLimpio
      this.notCleanPercentage = this.auditoria.porcentajeSucio
    })
  },

  methods: {
    finalBooleanObject(estado) {
      let newBoolean = estado
      if (newBoolean == 'Limpio') {
        newBoolean = true
      } else if (newBoolean == 'Sucio') {
        newBoolean = false
      }
      return newBoolean
    },

    finalStringObject(object) {
      let newString = this.checkForm[`${object}`]
      if (newString == true) {
        newString = 'Limpio'
      } else if (newString == false) {
        newString = 'Sucio'
      }
      return newString
    },

    handleUpdateForm() {
      if (!this.validate()) {
        this.displayAlert = true
      } else {
        let auditoriaUpdate = {
          nombreAuditor: 'Cecilia Diaz',
          sede: this.selectedPlace.name,
          aseador: this.aseador,
          fecha: this.auditoriaDate,
          silla: this.finalStringObject('silla'),
          camilla: this.finalStringObject('camilla'),
          escritorio: this.finalStringObject('escritorio'),
          lavamanos: this.finalStringObject('lavamanos'),
          soporte: this.finalStringObject('soporteLiquidos'),
          porcentajeSucio: this.notCleanPercentage,
          porcentajeLimpio: this.cleanPercentage,
        }

        let apiURL = `http://localhost:3000/api/actualizar/${this.$route.params.id}`
        axios
          .put(apiURL, auditoriaUpdate)
          .then((res) => {
            console.log(res)
            this.$router.push('/consultar')
            console.log('auditoria actualizada')
          })
          .catch((error) => {
            console.log(error)
          })
        // window.location.href = '/consultar'
      }
    },

    cancelarEdicion(event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: '¿Está seguro de que quiere cancelar la edición?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          window.location.href = '/consultar'
        },
        reject: () => {
          return ''
        },
      })
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
        } else if (!this.selectedPlace) {
          valid = false
        } else if (!this.aseador) {
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

.form-button {
  padding: 1rem;
}

.p-card {
  background-color: var(--color-light);
  height: 100%;
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

.aseador__input {
  width: 100%;
}
.aseador__input > input {
  width: 100%;
}

.sede__card .p-card-content {
  height: 150px;
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

.confirmation-content {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 600px) {
  .header__card {
    display: grid;
    place-items: center;
    grid-column: 1 / 3;
    height: 100%;
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
