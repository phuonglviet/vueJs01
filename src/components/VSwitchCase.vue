<script>
export default {
  functional: true,
  props: {
    value: { type: [String, Number], required: true }
  },
  render(h, { data, props, scopedSlots }) {
    const { value } = props
    const slotFn = value in scopedSlots ? scopedSlots[value] : scopedSlots.default // children: Một mảng các VNode con trong RenderContext;

    // console.log('render value:', value);
    // for (const item in scopedSlots) {
    //   console.log('scopedSlots:', item); // return scoped slots của tất cả template: #text, #pwd
    // }

    // console.log('scopedSlots[value]:', scopedSlots[value]); // return scopedSlots[pwd] gồm scopedSlots.text & scopedSlots.pwd
    // console.log('slotFn:', slotFn);

    // console.log('data:', data); // VNodeData, gồm data.attrs & data.scopedSlots (scopedSlots.text & scopedSlots.pwd)
    // console.log('data.attrs:', data.attrs); // là 1 prop ? return object chứa thuộc tính HTML
    // console.log('slotFn(data.attrs):', slotFn(data.attrs)); // return VNode: return <template #text> => vnode(tag) div & tất cả các vnode(tag) con như input, button

    var nodeText = scopedSlots["text"];
    var nodePwd = scopedSlots["pwd"];

    return [nodeText(data.attrs), nodePwd(data.attrs)];

    // return slotFn ? slotFn(data.attrs) : null

    /*
    xem vnode.d.ts
    export interface VNodeData {
      key?: string | number;
      slot?: string;
      scopedSlots?: { [key: string]: ScopedSlot | undefined };
      ref?: string;
      refInFor?: boolean;
      tag?: string;
      staticClass?: string;
      class?: any;
      staticStyle?: { [key: string]: any };
      style?: string | object[] | object;
      props?: { [key: string]: any };
      attrs?: { [key: string]: any };
      domProps?: { [key: string]: any };
      hook?: { [key: string]: Function };
      on?: { [key: string]: Function | Function[] };
      nativeOn?: { [key: string]: Function | Function[] };
      transition?: object;
      show?: boolean;
      inlineTemplate?: {
        render: Function;
        staticRenderFns: Function[];
      };
      directives?: VNodeDirective[];
      keepAlive?: boolean;
    }

    export interface VNode {
      tag?: string;
      data?: VNodeData;
      children?: VNode[];
      text?: string;
      elm?: Node;
      ns?: string;
      context?: Vue;
      key?: string | number;
      componentOptions?: VNodeComponentOptions;
      componentInstance?: Vue;
      parent?: VNode;
      raw?: boolean;
      isStatic?: boolean;
      isRootInsert: boolean;
      isComment: boolean;
    }

    xem : options.d.ts
    export interface RenderContext<Props=DefaultProps> {
      props: Props;
      children: VNode[];
      slots(): any;
      data: VNodeData;
      parent: Vue;
      listeners: { [key: string]: Function | Function[] };
      scopedSlots: { [key: string]: NormalizedScopedSlot };
      injections: any
    }

    */
  }
}
</script>