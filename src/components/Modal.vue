<template>
  <div class="back">
    <div class="modal">
      <div class="input-container">
        <p class="input-text">Имя</p>
        <TextInput v-model="name"></TextInput>
      </div>
      <div class="input-container">
        <p class="input-text">Телефон</p>
        <PhoneInput v-model="phone"></PhoneInput>
      </div>
      <div class="input-container">
        <p class="input-text">Начальник</p>
        <select class="select" v-model="selectedItem">
          <option v-if="tableData.length === 0" disabled>Таблица пуста</option>
          <option v-for="item in tableData" :key="item.id" :value="item.id">{{ item.name }}</option>
        </select>
      </div>
      <button class="save-button" @click="saveData">Сохранить</button>
      <button class="close-button" @click="closeModal">x</button>
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput.vue'
import HponeInput from './PhoneInput.vue'
import PhoneInput from './PhoneInput.vue'

export default {
  data() {
    return {
      name: '',
      phone: '',
      selectedItem: ''
    }
  },
  components: {
    TextInput,
    HponeInput,
    PhoneInput
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    saveData() {
      const newItem = {
        id: Math.random().toString(),
        name: this.name,
        phone: this.phone, // Используйте значение this.phone, полученное через v-model
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
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.input-text {
  padding: 0;
  margin: 0;
}

.input {
  border-radius: 6px;
  border: 1px solid #2589FF;
}

input:focus {
  outline: none;
}

.select {
  width: 167px;
  border-radius: 6px;
  border: 1px solid #2589FF;
}

select:focus {
  outline: none;
}

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

.save-button:hover {
  background-color: rgba(51, 146, 254, 0.876);
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



