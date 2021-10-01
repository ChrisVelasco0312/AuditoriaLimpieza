import { shallowMount } from '@vue/test-utils'
import ListarRevisiones from '@/components/ListarRevisiones.vue'

describe('ListarRevisiones.vue', () => {
  it('Component can be instantiated', () => {
    const wrapper = shallowMount(ListarRevisiones)
    expect(wrapper.exists()).toBeTruthy
  })
})