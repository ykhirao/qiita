import { shallowMount } from '@vue/test-utils'
import App from '../App.vue'

describe('App.vue', () => {
  it('renders the correct markup', () => {
    const app = shallowMount(App)

    expect(app).toMatchSnapshot()
  })
})