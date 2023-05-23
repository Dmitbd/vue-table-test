<template>
  <div class="back">
    <div class="modal">
      <div class="input-container">
        <p class="input-text">Имя</p>
        <TextInput v-model="name" @input="handleNameInput"></TextInput>
        <ErrorMessage :has-error="isNameInvalid" error-message="Мин. длина 2 символа"></ErrorMessage>
      </div>
      <div class="input-container">
        <p class="input-text">Телефон</p>
        <PhoneInput v-model="phone" @input="handlePhoneInput"></PhoneInput>
        <ErrorMessage :has-error="isPhoneInvalid" error-message="Мин. длина 11 символов"></ErrorMessage>
      </div>
      <div class="input-container">
        <p class="input-text">Начальник</p>
        <select class="select" v-model="selectedItem">
          <option v-if="tableData.length === 0" disabled>Таблица пуста</option>
          <option v-for="item in tableData" :key="item.id" :value="item.id">{{ item.name }}</option>
        </select>
      </div>
      <SaveButton :disabled="isSaveButtonDisabled || isFieldsEmpty" @click="saveData">Сохранить</SaveButton>
      <button class="close-button" @click="closeModal">x</button>
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput.vue'
import PhoneInput from './PhoneInput.vue'
import ErrorMessage from './ErrorMessage.vue'
import SaveButton from './SaveButton.vue'

export default {
  data() {
    return {
      name: '',
      phone: '',
      selectedItem: '',
      isNameInputStarted: false,
      isPhoneInputStarted: false
    }
  },
  components: {
    TextInput,
    PhoneInput,
    ErrorMessage,
    SaveButton
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isPhoneInvalid() {
      return this.isPhoneInputStarted && this.phone.length < 16;
    },
    isNameInvalid() {
      return this.isNameInputStarted && this.name.length < 2;
    },
    isSaveButtonDisabled() {
      return this.isPhoneInvalid || this.isNameInvalid;
    },
    isFieldsEmpty() {
      return this.name.length === 0 || this.phone.length === 0;
    }
  },
  methods: {
    saveData() {
      const newItem = {
        id: Math.random().toString(),
        name: this.name,
        phone: this.phone,
        nestedItems: []
      }

      if (this.selectedItem) {
        const selectedItem = this.tableData.find(item => item.id === this.selectedItem);
        if (selectedItem) {
          selectedItem.nestedItems.push(newItem);
        }
      } else {
        this.tableData.push(newItem);
      }
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    },
    handlePhoneInput() {
      this.isPhoneInputStarted = true;
    },
    handleNameInput() {
      this.isNameInputStarted = true;
    }
  }
}
</script>

<style scoped>
.back {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
}

.modal {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 200px auto auto;
  padding: 20px;
  width: 300px;
  background-color: rgb(245, 245, 245);
  border-radius: 8px;
  border: 2px solid #2589FF;
}

.input-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.input-text {
  padding: 0;
  margin: 0;
}

.select {
  width: 167px;
  border-radius: 6px;
  border: 1px solid #2589FF;
}

select:focus {
  outline: none;
}

.close-button {
  width: 25px;
  height: 25px;
  background-color: #fd4242;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  right: -13px;
  top: -13px;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #e53935;
}
</style>



