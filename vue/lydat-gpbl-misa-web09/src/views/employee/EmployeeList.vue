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
      <div class="row-jus-end">
        <div class="m-search">
          <input id="searchTextField"
            class="m-input"
            type="text"
            placeholder="Tìm theo mã, tên nhân viên"
          />
          <div class="m-icon-20 m-icon-search cs-pointer" @click="searchEmployee('searchTextField')"></div>
        </div>
        <div
          class="m-icon-refresh m-icon-24 cs-pointer"
          title="Tải lại dữ liệu"
          @click="getAllEmployee"
        ></div>
      </div>
      <employee-table></employee-table>
      <employee-pagination></employee-pagination>
    </div>
  </div>

  <employee-detail></employee-detail>
</template>

<script>

import axios from 'axios'


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
     * Thêm mới nhân viên
     * LCDAT (30/10/2022)
     */
    btnAddOnclick(){
       return showFormEmployeeInformation();
    },

    /**
     * Tìm kiếm nhân viên đang lỗi
     * LCDAT(02/11/2022)
     */
    searchEmployee(keySearch){
      try {
        // document.querySelector("#tbodyEmployee")
        let key = document.getElementById(keySearch).value;
        console.log(key);
        axios.get(`https://amis.manhnv.net/api/v1/Employees/filter?employeeFilter=${key}`).then((response) => {
          this.employeesSearched = response.data;
          console.log(this.employeesSearched);
          this.$emit('resultSearch', this.employeesSearched.Data);
        });
      } catch (error) {
          console.log(error);
      }
    }

  },
  data() {
    return {
      employeesSearched: []

    };
  },
};
</script>
<style scoped>
@import url(../../style/pages/employee-list.css);
</style>