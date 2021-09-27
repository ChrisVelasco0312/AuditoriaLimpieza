<template>
  <div class="revision__container">
    <Card class="header__card">
      <template #content>
        <h2>Crear Auditoria</h2>
        <p><b>fecha</b>: {{ auditoriaDate }}</p>
        <Button
          class="close-button shadow-3 p-button-danger"
          label="cancelar auditoria"
          icon="pi pi-times"
          @click.passive="cancelarAuditoria($event)"
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
          label="Registrar"
          @click.passive="handleForm()"
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
        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
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
  created() {
    this.returnDate()
  },
  name: 'RevisionContainer',
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
      checkForm: {
        silla: null,
        camilla: null,
        escritorio: null,
        lavamanos: null,
        soporteLiquidos: null,
      },
      auditoriaDate: '',
      selectedPlace: null,
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
  methods: {
    finalStringSilla() {
      let newStringSilla = this.checkForm.silla
      if (newStringSilla == true) {
        newStringSilla = 'Limpio'
      } else if (newStringSilla == false) {
        newStringSilla = 'Sucio'
      }
      return newStringSilla
    },

    finalStringCamilla() {
      let newStringCamilla = this.checkForm.camilla
      if (newStringCamilla == true) {
        newStringCamilla = 'Limpio'
      } else if (newStringCamilla == false) {
        newStringCamilla = 'Sucio'
      }
      return newStringCamilla
    },

    finalStringEscritorio() {
      let newStringEscritorio = this.checkForm.escritorio
      if (newStringEscritorio == true) {
        newStringEscritorio = 'Limpio'
      } else if (newStringEscritorio == false) {
        newStringEscritorio = 'Sucio'
      }
      return newStringEscritorio
    },

    finalStringLavamanos() {
      let newStringLavamanos = this.checkForm.lavamanos
      if (newStringLavamanos == true) {
        newStringLavamanos = 'Limpio'
      } else if (newStringLavamanos == false) {
        newStringLavamanos = 'Sucio'
      }
      return newStringLavamanos
    },

    finalStringSoporte() {
      let newStringSoporte = this.checkForm.soporteLiquidos
      if (newStringSoporte == true) {
        newStringSoporte = 'Limpio'
      } else if (newStringSoporte == false) {
        newStringSoporte = 'Sucio'
      }
      return newStringSoporte
    },

    handleForm() {
      if (!this.validate()) {
        this.displayAlert = true
      } else {
        let auditoria = {
          nombreAuditor: 'Cecilia Diaz',
          sede: this.selectedPlace.name,
          aseador: this.aseador,
          fecha: this.auditoriaDate,

          silla: this.finalStringSilla(),
          camilla: this.finalStringCamilla(),
          escritorio: this.finalStringEscritorio(),
          lavamanos: this.finalStringLavamanos(),
          soporte: this.finalStringSoporte(),

          porcentajeSucio: this.notCleanPercentage,
          porcentajeLimpio: this.cleanPercentage,
        }

        alert('Auditoria registrada')
        let apiURL = 'http://localhost:3000/api/registrar'
        axios
          .post(apiURL, auditoria)
          .then(() => {
            this.$router.push('/consultar')
            auditoria = {
              nombreAuditor: '',
              sede: null,
              aseador: '',
              fecha: '',
              silla: '',
              camilla: '',
              escritorio: '',
              lavamanos: '',
              soporte: '',
              porcentajeSucio: 0,
              porcentajeLimpio: 0,
            }
            console.log('auditoria registrada')
          })
          .catch(error => {
            console.log(error)
          })
        // window.location.href = '/consultar'
      }
    },
    cancelarAuditoria(event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: '¿Está seguro de que quiere cancelar la auditoría?',
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
        item => item === value
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
      Object.values(this.checkForm).forEach(item => {
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
    returnDate() {
      let today = new Date()
      let dd = today.getDate()

      let mm = today.getMonth() + 1
      let yyyy = today.getFullYear()
      if (dd < 10) {
        dd = '0' + dd
      }

      if (mm < 10) {
        mm = '0' + mm
      }
      today = dd + '/' + mm + '/' + yyyy
      this.auditoriaDate = today
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
