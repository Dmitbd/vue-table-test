<template>
  <div class="table">
    <div class="header">
      <div class="column" @click="$emit('sort')">Имя</div>
      <div class="column">Телефон</div>
    </div>
    <div class="items">
      <TableItem v-for="item in tableData" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import TableItem from './TableItem.vue'

export default {
  components: {
    TableItem
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.table {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 50px;
}

.header {
  display: flex;
  background-color: #e6f2fe;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.column {
  font-weight: bold;
  padding: 5px;
  width: 100%;
}

.items {
  display: flex;
  flex-direction: column;
}
</style>

