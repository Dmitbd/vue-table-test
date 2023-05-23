<template>
  <div v-if="hasError" class="error-message">{{ errorMessage }}</div>
</template>

<script>
export default {
  props: {
    hasError: {
      type: Boolean,
      required: true
    },
    errorMessage: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.error-message {
  color: #e53935;
  position: absolute;
  top: 20px;
  left: 135px;
  font-size: 14px;
}
</style>
