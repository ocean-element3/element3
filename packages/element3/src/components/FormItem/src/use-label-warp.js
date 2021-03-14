import { inject } from 'vue'

export function useProvide() {
  const style = {}

  const { autoLabelWidth } = inject('elForm', {})

  if (autoLabelWidth && autoLabelWidth.value !== 'auto') {
    style.marginLeft = parseInt(autoLabelWidth, 10) + 'px'
  }

  return { style }
}

export function getElementComputedStyle(element) {
  const { width, height } = window.getComputedStyle(element)
  return {
    width,
    height
  }
}

export function getLabelWidth(element) {
  let computedWidth = 0
  if (element && element.firstElementChild) {
    const width = getElementComputedStyle(element.firstElementChild)[width]
    computedWidth = Math.ceil(parseFloat(width))
  }

  return computedWidth
}

export function updateLabelWidth(element, width) {}
