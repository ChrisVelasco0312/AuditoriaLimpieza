import { shallowMount } from '@vue/test-utils'
import Autenticacion from '@/components/Autenticacion.vue'
import InputText from 'primevue/inputtext'

describe('Autenticacion.vue', () => {
  let assignMock = jest.fn()

  delete window.location
  window.location = { assign: assignMock }

  afterEach(() => {
    assignMock.mockClear()
  })

  it('can login with correct values', () => {
    const wrapper = shallowMount(Autenticacion)
    const submitButton = wrapper.find('.login__submit')

    const inputs = wrapper.findAllComponents(InputText)
    inputs.flatMap((input) => {
      input.setValue('demo')
    })
    submitButton.trigger('click')
    expect(wrapper.vm.nameValue).toBe('demo')
    expect(wrapper.vm.passwordValue).toBe('demo')
  })

  it('login with incorrect values launches an alert', () => {
    const wrapper = shallowMount(Autenticacion)
    const submitButton = wrapper.find('.login__submit')

    const inputs = wrapper.findAllComponents(InputText)
    inputs.flatMap((input) => {
      input.setValue('dontknow')
    })
    submitButton.trigger('click')
  })
})
