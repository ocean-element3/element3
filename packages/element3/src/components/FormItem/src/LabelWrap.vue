<script lang="jsx">
import { defineComponent, toRefs } from 'vue'
import { useProvide } from './use-label-warp'

export default defineComponent({
  props: {
    isAutoWidth: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { isAutoWidth } = toRefs(props)

    const { style } = useProvide()

    return {
      isAutoWidth,
      style
    }
  },
  render({ isAutoWidth, $slots, style }) {
    if (isAutoWidth) {
      return (
        <div
          class="el-form-item__label-wrap"
          style={style}
          data-testid="lable-warp"
        >
          {$slots.default ? $slots.default() : null}
        </div>
      )
    }

    return $slots.default ? $slots.default() : null
  }
})
</script>
