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
          @click="getAllEmployee"
        ></div>
    </div>
    <div class="table-area">
        <table
          id="tblEmployee"
          cellspacing="0"
          api="https://amis.manhnv.net/api/v1/Employees"
        >
          <thead>
            <tr class="table-row table-row-titles">
              <th class="text-box-flex col-textbox">
                <input id="checkAll" type="checkbox" @click="callCheckAllChange"/>
              </th>
              <th class="text-left title-column col-id"><p>Mã nhân viên</p></th>
              <th class="text-left title-column col-name">
                <p>Tên nhân viên</p>
              </th>
              <th class="text-left title-column col-gender">
                <p>Giới tính</p>
              </th>
              <th class="title-date title-column col-date-of-birth">
                <p>Ngày sinh</p>
              </th>
              <th
                class="text-left title-column col-identity-number"
                title="Số chứng minh nhân dân"
              >
                <p>Số CMND</p>
              </th>
              <th class="text-left title-column col-duty"><p>Chức danh</p></th>
              <th class="text-left title-column col-unit"><p>Tên đơn vị</p></th>
              <th class="text-left title-column col-num-account">
                <p>Số tài khoản</p>
              </th>
              <th class="text-left title-column col-bank">
                <p>Tên ngân hàng</p>
              </th>
              <th
                class="text-left title-column col-bank-branch"
                title="Chi nhánh tài khoản ngân hàng"
              >
                <p>Chi nhánh TK ngân hàng</p>
              </th>
              <th class="title-column table-edit th-edit-title col-edit">
                <p>Chức năng</p>
              </th>
            </tr>
          </thead>
          <tbody id="tbodyEmployee">
            <!--Dữ liệu trên api sẽ được chèn vào đây-->
            <tr
              class="table-row table-row-data"
              v-for="(emp, index) in employees"
              :key="index"
              @dblclick="dblClickDisplayForm(emp.EmployeeCode)"
            >
              <td class="text-box-flex col-textbox">
                <input @click="callCheckItemChange" class="check-employee" type="checkbox" />
              </td>
              <td class="table-data col-id">{{ emp.EmployeeCode || "" }}</td>
              <td class="table-data col-name">{{ emp.EmployeeName || "" }}</td>
              <td class="table-data col-gender">{{ emp.GenderName || "" }}</td>
              <td class="table-data-date col-date-of-birth">
                {{ callFormatDate(emp.DateOfBirth) || "" }}
              </td>
              <td class="table-data col-identity-number">
                {{ emp.IdentityNumber || "" }}
              </td>
              <td class="table-data col-duty">
                {{ emp.EmployeePosition || "" }}
              </td>
              <td class="table-data col-unit">
                {{ emp.DepartmentName || "" }}
              </td>
              <td class="table-data col-num-account">
                {{ emp.BankAccountNumber || "" }}
              </td>
              <td class="table-data col-bank">{{ emp.BankName || "" }}</td>
              <td class="table-data col-bank-branch">
                {{ emp.BankBranchName || "" }}
              </td>
              <td class="table-data table-edit td-edit-sticky col-edit">
                <div class="cell-edit">
                  <p class="edit-text">Sửa</p>
                  <div class="wrap-btn-edit">
                    <div class="btn-edit-function" @click="callShowHideDropdownFixed(); this.storeEmpId = emp.EmployeeId"></div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!--Dropdown menu Sửa-->
        <div id="editList" class="wrap-up-down-option edit-list">
          <div class="m-option cs-pointer">
            <p class="primary-text">Nhân bản</p>
          </div>
          <div class="m-option cs-pointer" @click="deleteEmployee(storeEmpId)"><p class="primary-text">Xóa</p></div>
          <div class="m-option cs-pointer">
            <p class="primary-text">Ngưng sử dụng</p>
          </div>
        </div>
      </div>

    <!-- Form thông tin nhân viên để đưa lên đầu table sau khi thêm xong -->
    <employee-detail @employeeAdded = getDataFromForm></employee-detail>

    <!-- Xóa thành công -->
    <!-- <dialog-add-successful :successText="'Xóa nhân viên thành công!'"></dialog-add-successful> -->
</template>

<script>

import axios from 'axios'

// import ToolbarFunctions from './ToolbarFunctions.vue'
import EmployeeDetail from '../employee/EmployeeDetail.vue'
// import DialogAddSuccessful from '../employee/DialogAddSuccessful.vue'

import {formatDateDDMMYYYY} from '../../script/format.js'
import {showHideDropdownFixed, checkAllChange, checkItemChange} from '../../script/functions.js'
import { display } from '@/script/common.js'

import {API} from '../../script/config.js'  
export default {
    name: 'EmployeeTable',
    components: {
      // DialogAddSuccessful,
       EmployeeDetail,
      //  ToolbarFunctions
    },
    props: [],
    created() {
      // Lấy dữ liệu
      // fetch("https://amis.manhnv.net/api/v1/employees")
      // .then((res) => res.json())
      // .then((res) => {
      //     this.employees = res;
      // })

      //Cách 2: Dùng axios
      this.getAllEmployee();
    },
    methods: {
      /**
       * Lấy danh sách nhân viên
       * LCDAT(31/10/2022)
       */
        getAllEmployee(){
          try {
            axios.get(`${API.EMPLOYEE}`).then((response) => {
              this.employees = response.data;
            });
          } catch (error) {
            console.log(error);
          }
        },

        /**
         * Lấy dữ liệu thêm nhân viên và đẩy lên đầu
         * @param {employee} data Truyền thông tin nhân viên mới vào
         * LCDAT(02/11/2022)
         */
        getDataFromForm(data){
          try {
            data.GenderName = this.getGenderName(data.Gender);
            this.employees.unshift(data);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        },

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
                    this.employees = response.data.Data;
                    // this.$emit("resultSearch", this.employeesSearched);
                });
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Gán tên giới tính
         * @param {employeeGender} gender Truyền thông kí tự số của giới tính vào
         * @return {GenderName}
         * LCDAT(02/11/2022)
         */
        getGenderName(gender){
            try {
              if(gender == 0){
                  return 'Nam';
              }else if(gender == 1){
                  return 'Nữ';
              } else if(gender == 2){
                  return 'Không xác định';
              }
            } catch (error) {
              console.log(error);
            }
        },

        /**
         * Trả về danh sách tìm kiếm
         * LCDAT(02/11/2022)
         */
        getDataSearch(data){
          try {
            this.employees = data;
          } catch (error) {
            console.log(error);
          }
        },

        //Gọi tới hàm formatDateDDMMYYYY
        callFormatDate(dob){
            try {
              return formatDateDDMMYYYY(dob);
            } catch (error) {
              console.log(error);
            }
        },

        // Gọi tới hàm showHideDropdownFixed
        callShowHideDropdownFixed(){
          try {
            return showHideDropdownFixed();
          } catch (error) {
            console.log(error);
          }
        },

        /**
         * Xóa nhân viên
         * @param {EmployeeId} id Truyền id của nhân viên cần xóa
         * LCDAT (02/11/2022)
         */
        deleteEmployee(id){
          try {
            axios.delete(`${API.EMPLOYEE}/${id}`).then((res) => {
              if(res.status == 200){
                // // Hiện thông báo đã xóa thành công
                document.getElementById('successText').innerHTML = 'Xóa thành công!';
                display('successfulItem', 'flex');
                //Ẩn thông báo xóa thành công sau 5 giây
                setTimeout(function(){
                    display('successfulItem', 'none');
                }, 5000);
                // Ẩn khung danh sách
                display('editList', 'none');
                //Gọi lại hàm load
                this.getAllEmployee();
              }
            })
          } catch (error) {
            console.log(error);
          }
        },

        /**
         * Hiển thị form sửa nhân viên
         * LCDAT (02/11/2022)
         */
        dblClickDisplayForm(code){
          try {
          document.getElementById('titleForm').innerHTML = 'Sửa thông tin nhân viên';
          console.log(code);
          axios.get(`${API.EMPLOYEE}/filter?employeeFilter=${code}`).then((response) => {
            this.employeeEdit = response.data.Data;
          });
          display('formAddEmployee', 'flex');
          } catch (error) {
            console.log(error);
          }
        },

        /**
         * Gọi hàm checkAllChange
         * LCDAT (02/11/2022)
         */
        callCheckAllChange(){
          try {
            return checkAllChange();
          } catch (error) {
            console.log(error);
          }
        },

        /**
         * Gọi hàm callCheckItemChange
         * LCDAT (02/11/2022)
         */
        callCheckItemChange(){
          try {
            return checkItemChange();
          } catch (error) {
            console.log(error);
          }
        },

        
    },
    data() {
        return {
            employeeEdit: {},
            employees: []
        }
    },
}
</script>

<style scoped>
@import url(../../style/components/table.css);
</style>