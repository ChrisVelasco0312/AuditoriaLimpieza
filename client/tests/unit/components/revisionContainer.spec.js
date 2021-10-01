import { shallowMount } from '@vue/test-utils'
import RevisionContainer from '@/components/revisionContainer.vue'

describe('revisionContainer.vue', () => {
  it('Component can be instantiated', () => {
    const wrapper = shallowMount(RevisionContainer)
    expect(wrapper.exists()).toBeTruthy
  })
})