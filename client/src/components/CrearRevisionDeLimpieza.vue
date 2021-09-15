<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1 class="text-center">Auditoría de limpieza</h1>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <h5>Silla</h5>
          <InputSwitch v-model="checked1" />
        </div>
        <br />
        <div class="form-group">
          <h5>Camilla</h5>
          <InputSwitch v-model="checked2" />
        </div>
        <br />
        <div class="form-group">
          <h5>Escritorio del consultorio</h5>
          <InputSwitch v-model="checked3" />
        </div>
        <br />
        <div class="form-group">
          <h5>Lavamanos</h5>
          <InputSwitch v-model="checked4" />
        </div>
        <br />
        <div class="form-group">
          <h5>Soporte de líquidos</h5>
          <InputSwitch v-model="checked5" />
        </div>
        <br /><br />

        <div class="form-group">
          <Button label="Registrar" @click="handleClick($event)" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputSwitch from 'primevue/inputswitch'
import Button from 'primevue/button'
import 'primeflex/primeflex.css'

export default {
  name: 'App',
  components: {
    InputSwitch,
    Button,
  },
  data: () => {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
    }
  },
}
</script>



