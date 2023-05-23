<template>
  <div class="container">
    <button class="add-button" @click="openModal">Добавить</button>
    <Table :tableData="tableData" @sort="sortTableData" />
    <Modal v-if="isOpenModal" :tableData="tableData" @addTableItem="addTableItem" @close="closeModal" />
  </div>
</template>

<script>
import Table from "@/components/Table/Table.vue";
import Modal from "@/components/Modal/Modal.vue";

export default {
  data() {
    return {
      isOpenModal: false,
      tableData: [],
    };
  },
  components: {
    Table,
    Modal,
  },
  created() {
    // Загрузка данных из localStorage при создании компонента
    this.loadTableData();
  },
  watch: {
    tableData: {
      handler(newData) {
        // Сохранение данных в localStorage при изменении tableData
        this.saveTableData(newData);
      },
      deep: true,
    },
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
    closeModal() {
      this.isOpenModal = false;
    },
    addTableItem(newItem) {
      this.tableData.push(newItem);
    },
    sortTableData() {
      const recursiveSort = (data) => {
        data.sort((a, b) => a.name.localeCompare(b.name));

        data.forEach((item) => {
          if (item.nestedItems && item.nestedItems.length > 0) {
            recursiveSort(item.nestedItems);
          }
        });
      };

      recursiveSort(this.tableData);
    },
    saveTableData(data) {
      localStorage.setItem("tableData", JSON.stringify(data));
    },
    loadTableData() {
      const storedTableData = localStorage.getItem("tableData");
      this.tableData = storedTableData ? JSON.parse(storedTableData) : [];
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.add-button {
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
}

.add-button:hover {
  background-color: rgba(51, 146, 254, 0.876);
}
</style>

