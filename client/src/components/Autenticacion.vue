<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <!--LOGIN-->
    <Password v-model="value1" :feedback="false" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value1 = ref()
    return { value1 }
  },
}
</script>

<style>
/* ::v-deep(.p-password input) {
  width: 15rem;
} */
</style>