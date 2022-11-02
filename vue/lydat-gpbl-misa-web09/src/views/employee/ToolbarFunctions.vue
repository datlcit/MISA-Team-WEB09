<template>
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
        ></div>
    </div>
</template>

<script>

import axios from 'axios'

import {API} from '../../script/config.js'  
export default {
    name: 'ToolbarFunctions',
    props: [],
    methods: {
        /**
         * Tìm kiếm nhân viên đang lỗi
         * @param {string} keySearch nhập vào mã hoặc tên hoặc số điện thoại
         * LCDAT(02/11/2022)
         */
        searchEmployee(keySearch){
            try {
                // document.querySelector("#tbodyEmployee")
                let key = document.getElementById(keySearch).value;
                axios.get(`${API.EMPLOYEE}/filter?employeeFilter=${key}`).then((response) => {
                    this.employeesSearched = response.data.Data;
                    this.$emit("resultSearch", this.employeesSearched);
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
    data() {
        return {
            employeesSearched: []
        }
    },
}
</script>

<style scoped>

</style>