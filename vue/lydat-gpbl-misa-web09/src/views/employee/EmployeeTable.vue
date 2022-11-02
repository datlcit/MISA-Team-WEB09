<template>
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

          <!-- <tbody>
                                    <tr class="table-row">
                                        <td class="text-box-flex col-textbox">
                                            <input class="check-employee" type="checkbox">
                                        </td>
                                        <td class="table-data col-id">MF1435</td>
                                        <td class="table-data col-name">Lý Chính Đạt</td>
                                        <td class="table-data col-gender">Nam</td>
                                        <td class="table-data-date col-date-of-birth"><p>05/01/1999</p></td>
                                        <td class="table-data col-identity-number">0123456789</td>
                                        <td class="table-data col-duty">Fresher Web</td>
                                        <td class="table-data col-unit">Khối Giải pháp bán lẻ</td>
                                        <td class="table-data col-num-account">0123456789</td>
                                        <td class="table-data col-bank">ACB</td>
                                        <td class="table-data col-bank-branch">Duy Tân</td>
                                        <td class="table-data table-edit td-edit-sticky col-edit">
                                            <div class="cell-edit">
                                                <p class="edit-text">Sửa</p>
                                                <div class="wrap-btn-edit">
                                                    <div class="btn-edit-function"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody> -->
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

    <!-- <employee-list @resultSearch = getDataSearch></employee-list> -->

    <!-- Form thông tin nhân viên để đưa lên đầu table sau khi thêm xong -->
    <employee-detail @employeeAdded = getDataFromForm></employee-detail>

    <!-- Xóa thành công -->
    <!-- <dialog-add-successful :successText="'Xóa nhân viên thành công!'"></dialog-add-successful> -->
</template>

<script>

import axios from 'axios'

// import EmployeeList from '../employee/EmployeeList.vue'
import EmployeeDetail from '../employee/EmployeeDetail.vue'
// import DialogAddSuccessful from '../employee/DialogAddSuccessful.vue'

import {formatDateDDMMYYYY} from '../../script/format.js'
import {showHideDropdownFixed, checkAllChange, checkItemChange} from '../../script/functions.js'
import { display } from '@/script/common.js'

export default {
    name: 'EmployeeTable',
    components: {
      // DialogAddSuccessful,
       EmployeeDetail, 
      // EmployeeList
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
            axios.get("https://amis.manhnv.net/api/v1/employees").then((response) => {
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
          data.GenderName = this.getGenderName(data.Gender);
          this.employees.unshift(data);
          console.log(data);
        },

        /**
         * Lấy dữ liệu thêm nhân viên và đẩy lên đầu
         * @param {employeeGender} gender Truyền thông kí tự số của giới tính vào
         * @return {GenderName}
         * LCDAT(02/11/2022)
         */
        getGenderName(gender){
            if(gender == 0){
                return 'Nam';
            }else if(gender == 1){
                return 'Nữ';
            } else if(gender == 2){
                return 'Không xác định';
            }
        },

        getDataSearch(data){
          this.employees = data;
          console.log(data);
        },

        //Gọi tới hàm formatDateDDMMYYYY
        callFormatDate(dob){
            return formatDateDDMMYYYY(dob);
        },

        
        callShowHideDropdownFixed(){
          return showHideDropdownFixed();
        },

        /**
         * Xóa nhân viên
         * @param {EmployeeId} id Truyền id của nhân viên cần xóa
         * LCDAT (02/11/2022)
         */
        deleteEmployee(id){
          try {
            axios.delete(`https://amis.manhnv.net/api/v1/Employees/${id}`).then((res) => {
              if(res.status == 200){
                // // Hiện thông báo đã xóa thành công
                // display('successfulItem', 'flex');
                // //Ẩn thông báo xóa thành công sau 5 giây
                // setTimeout(function(){
                //     display('successfulItem', 'none');
                // }, 5000);
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
        dblClickDisplayForm(code){
          this.searchEmployee(code);
          return display('formAddEmployee', 'flex');
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
        },

        /**
         * Gọi hàm checkAllChange
         * LCDAT (02/11/2022)
         */
        callCheckAllChange(){
          return checkAllChange();
        },

        /**
         * Gọi hàm callCheckItemChange
         * LCDAT (02/11/2022)
         */
        callCheckItemChange(){
          return checkItemChange();
        }
    },
    data() {
        return {
            employees: [],
        }
    },
}
</script>

<style scoped>
@import url(../../style/components/table.css);
</style>