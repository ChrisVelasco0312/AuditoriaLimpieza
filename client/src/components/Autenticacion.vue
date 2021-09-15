<template>
  <div>
    <h5>Basic</h5>
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

<style lang="scss" scoped>
::v-deep(.p-password input) {
  width: 15rem;
}
</style>