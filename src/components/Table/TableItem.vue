<template>
  <div>
    <div class="container">
      <div class="column">{{ item.name }}</div>
      <div class="column">{{ item.phone }}</div>
    </div>

    <div v-if="item.nestedItems && item.nestedItems.length > 0">
      <div class="nested-items">
        <ChildrenTableItem v-for="nestedItem in item.nestedItems" :key="nestedItem.id" :item="nestedItem" />
      </div>
    </div>
    
  </div>
</template>

<script>
import ChildrenTableItem from './ChildrenTableItem.vue'

export default {
  name: 'TableItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    ChildrenTableItem
  }
}
</script>

<style scoped>
.container {
  display: flex;
}

.column {
  padding: 5px;
  width: 100%;
  border: 1px solid #e6f2fe;
}

.nested-items {
  margin-left: 20px;
}
</style>
