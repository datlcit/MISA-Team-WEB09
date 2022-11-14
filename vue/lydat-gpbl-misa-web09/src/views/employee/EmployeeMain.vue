<template>
  <div class="row-jus-between title-table-and-add-btn">
    <div class="title-table">
      <h1 class="title-table-text">Nhân viên</h1>
    </div>
    <button id="btnAddEmployee" class="m-btn m-btn-bg-green" @click = "btnAddOnclick() ;">
      Thêm mới nhân viên
    </button>
  </div>
  <div class="toolbar-and-table">
    <div class="toolbar-and-table-padding">
      <employee-table></employee-table>
      <employee-pagination></employee-pagination>
    </div>
  </div>

  <employee-detail></employee-detail>
</template>

<script>

import EmployeeDetail from './EmployeeDetail.vue';
import EmployeeTable from './EmployeeTable.vue'
import EmployeePagination from './EmployeePagination.vue'

import {showFormEmployeeInformation} from '../../script/functions.js'
export default {
  name: "EmployeeList",
  components: {
    EmployeeDetail, EmployeePagination, EmployeeTable
  },
  props: [],
  methods: {
    /**
     * Hiển thị form Thêm mới nhân viên
     * LCDAT (30/10/2022)
     */
    btnAddOnclick(){
       try {
        document.getElementById('titleForm').innerHTML = 'Thông tin nhân viên';
        return showFormEmployeeInformation();
       } catch (error) {
        console.log(error);
       }
    },
  },
  data() {
    return {
      titleForm:""
    };
  },
};
</script>
<style scoped>
@import url(../../style/pages/employee-list.css);
</style>