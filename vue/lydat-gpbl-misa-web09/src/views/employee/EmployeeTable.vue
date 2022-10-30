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
                <input id="checkAll" type="checkbox" />
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
          <tbody>
            <!--Dữ liệu trên api sẽ được chèn vào đây-->
            <tr
              class="table-row table-row-data"
              v-for="(emp, index) in employees"
              :key="index"
            >
              <td class="text-box-flex col-textbox">
                <input class="check-employee" type="checkbox" />
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
                    <div class="btn-edit-function"></div>
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
        <div class="wrap-up-down-option edit-list">
          <div class="m-option cs-pointer">
            <p class="primary-text">Nhân bản</p>
          </div>
          <div class="m-option cs-pointer"><p class="primary-text">Xóa</p></div>
          <div class="m-option cs-pointer">
            <p class="primary-text">Ngưng sử dụng</p>
          </div>
        </div>
      </div>
</template>

<script>

import axios from 'axios'

import {formatDateDDMMYYYY} from '../../script/format.js'

export default {
    name: 'EmployeeTable',
    props: [],
    created() {
    // Lấy dữ liệu
    // fetch("https://amis.manhnv.net/api/v1/employees")
    // .then((res) => res.json())
    // .then((res) => {
    //     this.employees = res;
    // })

    //Cách 2: Dùng axios
    try {
      axios.get("https://amis.manhnv.net/api/v1/employees").then((response) => {
        this.employees = response.data;
      });
    } catch (error) {
      console.log(error);
    }
  },
    methods: {
        //Gọi tới hàm formatDateDDMMYYYY
        callFormatDate(dob){
            return formatDateDDMMYYYY(dob);
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