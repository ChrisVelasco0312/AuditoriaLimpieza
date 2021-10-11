import { shallowMount } from '@vue/test-utils'
import ListarRevisiones from '@/components/ListarRevisiones.vue'
import router from '@/router'

const mountOptions = {
  global: {
    mocks: {
      $route: '/registrar',
      $router: {
        push: jest.fn(),
      },
    },
    plugins: [router],
  },
}

describe('ListarRevisiones.vue', () => {
  it('Component can be instantiated', () => {
    const wrapper = shallowMount(ListarRevisiones, mountOptions)
    expect(wrapper.exists()).toBeTruthy
  })
})
