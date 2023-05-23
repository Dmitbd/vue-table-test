<template>
  <input class="input" v-model="formattedPhone" maxlength="16" @input="formatInput">
</template>

<script>
export default {
  data() {
    return {
      formattedPhone: ''
    };
  },
  methods: {
    formatInput() {
      // Удаление всех нецифровых символов из ввода
      let digitsOnly = this.formattedPhone.replace(/\D/g, '');

      // Проверка первой цифры для добавления "+7" или преобразования любой цифры в "+7"
      if (digitsOnly.length > 0) {
        digitsOnly = '+7' + digitsOnly.slice(1);
      }

      // Добавление пробелов между группами цифр
      let formatted = '';
      for (let i = 0; i < digitsOnly.length; i++) {
        if (i === 2 || i === 5 || i === 8 || i === 10) {
          formatted += ' ';
        }
        formatted += digitsOnly[i];
      }

      this.formattedPhone = formatted;
      // Возможно этой строки можно избежать построив все на swith of, но я торопился :)
      // to do избавиться от строки ниже
      this.$emit('input', `${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5, 8)} ${digitsOnly.slice(8, 10)} ${digitsOnly.slice(10, 12)}`);
    }


  }
};
</script>

<style scoped>
.input {
  border-radius: 6px;
  border: 1px solid #2589FF;
}

input:focus {
  outline: none;
}
</style>
