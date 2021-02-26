import { defineComponent } from 'vue'
import { shallowMount } from '../src'
import { RouterLinkStub } from '../src/components/RouterLinkStub'

const KebabCaseLink = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  template: `
    <router-link class="link" :to="{ name }">
      <slot>kebab-case link</slot>
    </router-link>
  `
})

const PascalCaseLink = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  template: `
    <RouterLink class="link" :to="{ name }">
      <slot>PascalCase link</slot>
    </RouterLink>
  `
})

describe('RouterLinkStub', () => {
  it('should stub a kebab-case router-link', () => {
    // arrange
    const name = 'some-route'

    // act
    const wrapper = shallowMount(KebabCaseLink, {
      props: {
        name
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    // assert
    expect(wrapper.getComponent('.link').props('to')).toEqual({ name })
  })

  it('should stub a PascalCase RouterLink', () => {
    // arrange
    const name = 'some-route'

    // act
    const wrapper = shallowMount(PascalCaseLink, {
      props: {
        name
      },
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      }
    })

    // assert
    expect(wrapper.getComponent('.link').props('to')).toEqual({ name })
  })
})
