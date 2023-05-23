<template>
  <div class="table">

    <div class="header">
      <div class="column" >
        <p style="margin: 0;">Имя</p>
        <img :src="sortIcon" alt="sort icon" class="icon" @click="$emit('sort')">
      </div>
      <div class="column">Телефон</div>
    </div>

    <div class="items">
      <TableItem v-for="item in tableData" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import TableItem from './TableItem.vue'

import SortIcon from '../../assets/sort-icon.svg'

export default {
  data () {
    return {
      sortIcon: SortIcon
    }
  },
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
  position: relative;
}

.column {
  font-weight: bold;
  padding: 5px;
  width: 100%;
  display: flex;
}

.items {
  display: flex;
  flex-direction: column;
}

.icon {
  margin: auto 20px auto auto;
  cursor: pointer;
  position: absolute;
  left: -20px;
}
</style>
