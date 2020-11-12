<script>
export default {
  functional: true,
  props: {
    value: { type: [String, Number], required: true }
  },
  render(h, { data, props, scopedSlots }) {
    const { value } = props
    const slotFn = value in scopedSlots ? scopedSlots[value] : scopedSlots.default
    // console.log('render:value:', value);
    // console.log('render:scopedSlots:', scopedSlots);

    return slotFn ? slotFn(data.attrs) : null
  }
}
</script>