<template>
  <img :src="delIcon" alt="del icon" class="icon" @click="deleteItem">
</template>

<script>
import DelIcon from '../../assets/del-icon.svg'

export default {
  data() {
    return {
      delIcon: DelIcon
    }
  },
  methods: {
    deleteItem() {
      this.$emit('delete');
    }
  }
}
</script>

<style scoped>
.icon {
  width: 10px;
  margin-left: 10px;
  position: absolute;
  right: -20px;
  top: 8px;
  cursor: pointer;
}
</style>
