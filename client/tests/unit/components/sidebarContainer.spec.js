import { shallowMount } from '@vue/test-utils'
import SidebarContainer from '@/components/sidebarContainer.vue'

describe('sidebarContainer.vue', () => {
  it('Component can be instantiated', () => {
    const wrapper = shallowMount(SidebarContainer)
    expect(wrapper.exists()).toBeTruthy
  })
  it(' Click on button shows sidebar', () => {
    const wrapper = shallowMount(SidebarContainer)
    wrapper.find('.sidebar-button').trigger('click')
    expect(wrapper.vm.visibleLeft).toBeTruthy
  })
  
})