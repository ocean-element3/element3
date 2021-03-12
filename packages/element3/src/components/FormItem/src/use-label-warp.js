import { inject } from 'vue'

export function useProvide() {
  const style = {}

  const { autoLabelWidth } = inject('elForm', {})

  if (autoLabelWidth && autoLabelWidth.value !== 'auto') {
    style.marginLeft = parseInt(autoLabelWidth, 10) + 'px'
  }

  return { style }
}
