<template>
    <div id="formAddEmployee" class="bg-overlay">
        <div class="info-form">
            <div class="info-form-padding">
                <form @submit.prevent="saveAndAdd()">
                    <i class="icofont-question-circle cs-pointer" title="Câu hỏi thường gặp"></i>
                    <i id="formEmployeeClose" class="icofont-close-line cs-pointer" title="Đóng" @click="btnClose"></i>
                    <div class="title-checkbox-form row-jus-start">
                        <div class="info-form-title">
                            <p>Thông tin nhân viên</p>
                        </div>
                        <div class="customer-or-provider row-jus-center">
                        <div class="is-customer row-jus-center">
                            <input id="cbCustomer" checked="" type="checkbox" value="customer" name="isCustomerOrProvider">
                            <p>Là khách hàng</p>
                        </div>
                        <div class="is-provider row-jus-center">
                            <input id="cbProvider" type="checkbox" value="provider" name="isCustomerOrProvider">
                            <p>Là nhà cung cấp</p>
                        </div>
                    </div>
                    </div>
                    <div class="personal-info">
                        <div class="personal-info-left">
                            <div class="row m-information m-input-id w-40">
                                <label>Mã <span>*</span></label>
                                <input tabindex="1" class="required m-input m-input-information" type="text" name="" id="txtEmployeeCode" placeholder="VD: NV01" v-model="employee.EmployeeCode" :class="{'isInvalid': errors.EmployeeCode}">
                                <span v-if="errors.EmployeeCode" class="err-text" title="Mã nhân viên không được phép để trống">Mã nhân viên không được phép để trống</span>
                            </div>
                            <div class="row m-information m-input-fullname margin-left-8">
                                <label>Tên <span>*</span></label>
                                <input tabindex="2" class="required m-input m-input-information" type="text" name="" id="txtFullName" placeholder="VD: Lý Đạt" v-model="employee.EmployeeName" :class="{'isInvalid': errors.EmployeeName}">
                                <span v-if="errors.EmployeeName" class="err-text" title="Tên nhân viên không được phép để trống">Tên khách hàng không được phép để trống</span>
                            </div>
                            <div class="m-flex m-information m-input-unit w-100">
                                <label>Đơn vị <span>*</span></label>
                                <div class="combobox-unit row-jus-center">
                                    <input id="txtUnit" tabindex="3" class="m-input m-input-information m-input-unit" type="text" placeholder="VD: Phòng hành chính">
                                    <div id="comboboxUnitBtn" class="row-jus-center wh-34 combobox-unit__btn cs-pointer"><i class="icofont-curved-down"></i></div>
                                    <div id="comboboxUnitItems" class="wrap-up-down-option m-wrap-dropdown-option combobox-unit_items">
                                        <div data-name="Phòng tài chính" class="m-option option-departments cs-pointer"><p>Phòng tài chính</p></div>
                                        <div data-name="Phòng kế toán" class="m-option option-departments cs-pointer"><p>Phòng kế toán</p></div>
                                        <div data-name="Phòng kinh doanh" class="m-option option-departments cs-pointer"><p>Phòng kinh doanh</p></div>
                                        <div data-name="Phòng hành chính" class="m-option option-departments cs-pointer"><p>Phòng hành chính</p></div>
                                        <div data-name="Phòng IT" class="m-option option-departments cs-pointer"><p>Phòng IT</p></div>
                                        <div data-name="Phòng marketing" class="m-option option-departments cs-pointer"><p>Phòng marketing</p></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m-information m-input-duty w-100">
                                <label>Chức danh</label>
                                <input tabindex="4" class="m-input m-input-information" type="text" name="" id="txtDuty" placeholder="VD: Lập trình viên" v-model="employee.ProductName">
                            </div>
                        </div>
                        <div class="personal-info-right">
                            <div class="row m-information m-input-date m-input-birthday w-40">
                                <label>Ngày sinh</label>
                                <input tabindex="5" class="m-input m-input-information" type="date" name="" id="dateOfBirth" v-model="employee.DateOfBirth">
                            </div>
                            <div class="row m-information m-radio-gender margin-left-8">
                                <label>Giới tính</label>
                                <div class="row-jus-between m-input-gender">
                                    <input checked value="1" tabindex="6" type="radio" name="gender" id="rdMale" v-model="employee.Gender">
                                    <label class="margin-left-8">Nam</label>
                                    <input value="0" tabindex="7" class="margin-left-24" type="radio" name="gender" id="rdFemale" v-model="employee.Gender">
                                    <label class="margin-left-8">Nữ</label>
                                    <input value="2" tabindex="8" class="margin-left-24" type="radio" name="gender" id="rdOther" v-model="employee.Gender">
                                    <label class="margin-left-8">Khác</label>
                                </div>
                            </div>
                            <div class="row m-information m-input-identity-number">
                                <label title="Số chứng minh nhân dân">Số CMND</label>
                                <input tabindex="9" class="m-input m-input-information" type="text" name="" id="txtIdentityNumber" placeholder="VD: 0123456789" v-model="employee.IdentityNumber">
                            </div>
                            <div class="row m-information m-input-date-range w-40 margin-left-8">
                                <label>Ngày cấp</label>
                                <input tabindex="10" class="m-input m-input-information" type="date" name="" id="dateRange" v-model="employee.IdentityDate">
                            </div>
                            <div class="row m-information m-input-providing-place w-100">
                                <label>Nơi cấp</label>
                                <input tabindex="11" class="m-input m-input-information w-100" type="text" name="" id="txtProvidingPlace" placeholder="VD: Công an thành phố Hà Nội" v-model="employee.IdentityPlace">
                            </div>
                        </div>
                    </div>
                    <div class="contact-and-bank-info">
                        <div class="row m-information m-input-address w-100">
                            <label>Địa chỉ</label>
                            <input tabindex="12" class="m-input m-input-information" type="text" name="" id="txtAddress" placeholder="Số nhà, ngõ, tên đường, phường/xã, quận/huyện, tỉnh/thành phố" v-model="employee.Address">
                        </div>
                        <div class="row-jus-start contact-info w-100">
                            <div class="row m-information m-input-mobile">
                                <label title="Số điện thoại di động">ĐT di động</label>
                                <input tabindex="13" class="m-input m-input-information" type="text" name="" id="txtMobile" placeholder="VD: 0987654321" v-model="employee.PhoneNumber">
                            </div>
                            <div class="row m-information m-input-phone margin-left-8">
                                <label title="Số điện thoại cố định">ĐT cố định</label>
                                <input tabindex="14" class="m-input m-input-information" type="text" name="" id="txtPhone" placeholder="VD: 0123456789" v-model="employee.TelephoneNumber">
                            </div>
                            <div class="row m-information m-input-email margin-left-8">
                                <label>Email</label>
                                <input tabindex="15" class="m-input m-input-information" type="text" name="" id="txtEmail" placeholder="VD: nguyenvana@gmail.com" v-model="employee.Email">
                            </div>
                        </div>
                        <div class="bank-info-wrapper">
                            <div class="row bank-info w-100">
                                <div class="row m-information m-input-bankId">
                                    <label>Tài khoản ngân hàng</label>
                                    <input tabindex="16" class="m-input m-input-information" type="text" name="" id="txtBankId" placeholder="VD: 0987654321" v-model="employee.BankAccountNumber">
                                </div>
                                <div class="row m-information m-input-bankName margin-left-8">
                                    <label>Tên ngân hàng</label>
                                    <input tabindex="17" class="m-input m-input-information" type="text" name="" id="txtBankName" placeholder="VD: ACB Bank" v-model="employee.BankName">
                                </div>
                                <div class="row m-information m-input-bankBranch margin-left-8">
                                    <label>Chi nhánh</label>
                                    <input tabindex="18" class="m-input m-input-information" type="text" name="" id="txtBankBranch" placeholder="VD: Duy Tân" v-model="employee.BankBranchName">
                                </div>
                            </div>
                        </div>
                        <div class="row-jus-between info-btn-list">
                            <button tabindex="21" id="cancelForm" class="m-btn m-btn-bg-white" type="reset">Hủy</button>
                            <div class="row get-info-btn">
                                <button @click="saveClicked = true" id="btnSave" tabindex="19" class="m-btn m-btn-bg-white get-btn" type="submit">Cất</button>
                                <button id="btnSaveAndAdd" tabindex="20" class="m-btn m-btn-bg-green" type="submit">Cất và Thêm</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Popup không được để trống -->
   <warning-required :textError="this.errors.EmployeeCode"></warning-required>
   <!-- Popup trùng mã nhân viên -->
    <warning-check-data></warning-check-data>
    <!-- Thêm mới thành công -->
    <dialog-add-successful></dialog-add-successful>
</template>
<script>

import {display} from '../../script/common.js'
import {API} from '../../script/config.js'

import WarningCheckData from '../employee/WarningCheckData.vue'
import WarningRequired from '../employee/WarningRequired.vue';
import DialogAddSuccessful from '../employee/DialogAddSuccessful.vue';
export default {
    name: "EmployeeDetail",
    components: {
        DialogAddSuccessful, WarningRequired, WarningCheckData
    },
    props: [],
    methods: {
        //Nút đóng và hủy
        btnClose(){
            display('formAddEmployee', 'none');
        },

        validate(){
            let isValid = true;
            this.errors = {
                EmployeeCode: '',
                EmployeeName: '',
                DepartmentId: ''
            }
            if(!this.employee.EmployeeCode){
                this.errors.EmployeeCode = "Mã nhân viên không được phép để trống";
                display('wrapperRequired', 'flex');
                // showWarning('wrapperRequired', '.warning-text p', this.errors.EmployeeCode);
                isValid = false;
            }
            if(!this.employee.EmployeeName){
                this.errors.EmployeeName = "Tên nhân viên không được phép để trống";
                display('wrapperRequired', 'flex');
                isValid = false;
            }
            return isValid;
        },

        saveAndAdd(){
            try {
                let statusCode = null;
                if(this.validate()){
                    this.$axiosRequest.post(`${API.EMPLOYEE}`, this.employee).then(response => {
                    console.log(response);
                    statusCode = response.status;
                    console.log(this.statusCode);
                    switch (statusCode) {
                        case 201:
                            // Hiện thông báo đã thêm mới thành công
                            display('successfulItem', 'flex');
                            //Ẩn thông báo thêm mới thành công sau 5 giây
                            setTimeout(function(){
                                display('successfulItem', 'none');
                            }, 5000);
                            // Ẩn dialog
                            if(this.saveClicked == true){
                                display('formAddEmployee', 'none');
                            }
                            this.saveClicked = false;
                            // Load lại dữ liệu
                            // loadData();
                            break;
                        case 400:
                            console.log(statusCode)
                            // Hiện cảnh báo và nội dung cảnh báo
                            // showWarning('wrapperCheckData', '.warning-text p', `Mã nhân viên ${this.employee.EmployeeName} đã tồn tại trong hệ <br> thống, vui lòng kiểm tra lại`);
                            // alert(data.userMsg);
                            break;
                    
                        default:
                            //Toast message
                            break;
                    }
                });
            }
            } catch (error) {
                console.log(error);
            }
        }
    },
    data() {
        return {
            saveClicked: false,
            errors: {
                EmployeeCode: '',
                EmployeeName: '',
                DepartmentId: ''
            },
            employee:{
                EmployeeCode: '',
                EmployeeName: '',
                DepartmentId: '4e272fc4-7875-78d6-7d32-6a1673ffca7c',
                PositionName: '',
                DateOfBirth: '',
                Gender: 0,
                IdentityNumber: '',
                IdentityDate: '',
                IdentityPlace: '',
                Address: '',
                PhoneNumber: '',
                TelephoneNumber: '',
                Email: '',
                BankAccountNumber: '',
                BankName: '',
                BankBranchName: ''
            }
        }
    },
}
</script>
<style scoped>
@import url(../../style/components/dialog.css);
</style>