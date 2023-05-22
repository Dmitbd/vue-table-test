<template>
  <input class="input" v-model="formattedName" @input="formatInput">
</template>

<script>
export default {
  data() {
    return {
      formattedName: ''
    };
  },
  methods: {
    formatInput() {
      const formatted = this.formattedName.charAt(0).toUpperCase() +
        this.formattedName.slice(1).toLowerCase();
      this.formattedName = formatted.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
      this.$emit('input', this.formattedName);
    }
  }
};
</script>

<style scoped>
.input {
  border-radius: 6px;
  border: 1px solid #2589FF;
}
</style>
