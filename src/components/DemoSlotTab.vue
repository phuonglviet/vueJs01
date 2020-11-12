<template>
  <div class="demo-slot">
    <comp-tab title="Tiêu đề của Tab">
      <ul class="tab-header">
        <li v-for="(item, index) in tabsHeader" v-bind:key="index" v-on:click="onTabClick(index)" v-bind:class="{ active: tabActive === index }">
          {{ item.text }}
        </li>
      </ul>
      <div class="tab-content tab1" v-if="tabActive === 0">
        <p>Tab 1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit placeat perspiciatis molestiae suscipit facilis cum accusamus optio distinctio culpa! Ipsum itaque laborum aut enim error vel asperiores libero distinctio quo?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus iste nostrum voluptate? Reprehenderit quo nesciunt ducimus! Enim dolor quaerat odit possimus ex voluptas consequatur cumque, quo, sapiente nam ad.</p>
      </div>
      <div class="tab-content tab2" v-else-if="tabActive === 1">
        <p>Tab 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas aliquid illo enim itaque eaque perferendis similique! Unde quo sit sequi alias eum debitis incidunt! Nostrum cumque iusto itaque eveniet?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sint ad a culpa laudantium inventore, dolore labore accusamus non libero ex quis tempora facere deleniti, saepe nobis, earum soluta sapiente.</p>
      </div>
      <div class="tab-content tab3" v-else>
        <p>Tab 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quos itaque deleniti? Temporibus, modi non reiciendis, consectetur laborum voluptatum, excepturi qui recusandae magni laudantium corrupti obcaecati voluptas ullam. Non, itaque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorem necessitatibus, pariatur quo dolor dolorum nobis in iusto, ipsum deserunt voluptates vel expedita nihil, veniam vitae laboriosam facere odio! Sequi!</p>
      </div>
    </comp-tab>
  </div>
</template>

<script>
import CompTab from './CompTab.vue';
export default {
    name: 'demo-slot-tab',
    data() {
        return {
          tabsHeader:[
            { text: 'Tab1' },
            { text: 'Tab2' },
            { text: 'Tab3' },
          ],
          tabActive: 0,
        }
    },
    components: {
      CompTab
    },
    methods: {
      onTabClick(index) {
        this.tabActive = index;
      }
    }
};
</script>

<style>
  .demo-slot {
    margin-top: 10px;
    padding: 10px 10px;
    border: 1px solid #000;
  }
</style>