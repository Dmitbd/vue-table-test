<template>
  <div class="container">
    <div class="name-column">{{ item.name }}</div>
    <div class="column">{{ item.phone }}</div>
  </div>
</template>

<script>
export default {
  name: 'ChildrenTableItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}

.name-column {
  padding: 5px;
  width: calc(100% - 40px);
  border: 1px solid #e6f2fe;
}

.column {
  padding: 5px;
  width: 100%;
  border: 1px solid #e6f2fe;
}
</style>
