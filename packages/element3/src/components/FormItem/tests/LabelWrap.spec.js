import LabelWrap from '../src/LabelWrap.vue'
import { setupGlobalOptions } from '../../../composables/globalConfig'
import { render, waitFor } from '@testing-library/vue'
import { reactive } from 'vue'

describe('LabelWrap.vue', () => {
  it('test was slot when the components property was slot', async () => {
    const content = 'foo'
    const warpper = render(LabelWrap, {
      slots: {
        default: () => content
      }
    })
    expect(warpper.getByText('foo')).toBeInTheDocument()
  })

  it('test wasnt have slot when the components property was slot', () => {
    const v_1 = render(LabelWrap, {
      slots: {}
    })

    expect(v_1.queryByText('foo')).toBeNull()
  })

  it('should auto width when props.isAutoWidth is true', () => {
    const warpper = render(LabelWrap, {
      props: {
        isAutoWidth: true
      }
    })

    expect(warpper.getByTestId('lable-warp')).toBeTruthy()
  })

  it('should has marginLeft if inject autoLabelWidth attr ', () => {
    const elForm = reactive({ autoLabelWidth: '100px' })

    const warpper = render(LabelWrap, {
      global: {
        provide: {
          elForm
        }
      },
      props: {
        isAutoWidth: true
      }
    })

    expect(warpper.getByTestId('lable-warp')).toHaveAttribute('style')
  })
})
