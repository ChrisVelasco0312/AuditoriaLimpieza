import { shallowMount } from '@vue/test-utils'
import CrearRevisionDeLimpieza from '@/components/CrearRevisionDeLimpieza.vue'

describe('CrearRevisionDeLimpieza.vue', () => {
  it('Component can be instantiated', () => {
    const wrapper = shallowMount(CrearRevisionDeLimpieza)
    expect(wrapper.exists()).toBeTruthy
  })
})
