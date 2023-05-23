<template>
  <button :class="buttonClasses" :disabled="isDisabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return {
        'save-button': true,
        'disabled-button': this.isDisabled,
        'active-button': !this.isDisabled
      };
    },
    isDisabled() {
      return this.disabled;
    }
  },
  methods: {
    handleClick() {
      if (!this.isDisabled) {
        this.$emit('click');
      }
    }
  }
}
</script>

<style scoped>
.save-button {
  padding: 10px 20px;
  width: 123px;
  height: 40px;
  background-color: #2589FF;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px auto 0 auto;
}

.active-button:hover {
  background-color: rgba(51, 146, 254, 0.876);
}

.disabled-button {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

