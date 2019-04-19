import { mount } from '@vue/test-utils'
import ParticleJS from '@/components/ParticleJS.vue'

describe('ParticleJS', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ParticleJS)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
