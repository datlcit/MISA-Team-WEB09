<template>
    <div id="formAddEmployee" class="bg-overlay">
        <div class="info-form">
            <div class="info-form-padding">
                <i class="icofont-question-circle cs-pointer" title="Câu hỏi thường gặp"></i>
                <i id="formEmployeeClose" class="icofont-close-line cs-pointer" title="Đóng" @click="btnClose"></i>
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
                <div class="personal-info">
                    <div class="personal-info-left">
                        <div class="row m-information m-input-id w-40">
                            <label>Mã <span>*</span></label>
                            <input required="" tabindex="1" class="required m-input m-input-information" type="text" name="" id="txtEmployeeCode" placeholder="VD: NV01">
                            <span class="err-text" title="Mã nhân viên không được phép để trống">Mã khách hàng không được phép để trống</span>
                        </div>
                        <div class="row m-information m-input-fullname margin-left-8">
                            <label>Tên <span>*</span></label>
                            <input required="" tabindex="2" class="required m-input m-input-information" type="text" name="" id="txtFullName" placeholder="VD: Lý Đạt">
                            <span class="err-text" title="Tên nhân viên không được phép để trống">Tên khách hàng không được phép để trống</span>
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
                            <input tabindex="4" class="m-input m-input-information" type="text" name="" id="txtDuty" placeholder="VD: Lập trình viên">
                        </div>
                    </div>
                    <div class="personal-info-right">
                        <div class="row m-information m-input-date m-input-birthday w-40">
                            <label>Ngày sinh</label>
                            <input tabindex="5" class="m-input m-input-information" type="date" name="" id="dateOfBirth">
                        </div>
                        <div class="row m-information m-radio-gender margin-left-8">
                            <label>Giới tính</label>
                            <div class="row-jus-between m-input-gender">
                                <input checked="" tabindex="6" type="radio" name="gender" id="rdFemale">
                                <label class="margin-left-8">Nam</label>
                                <input tabindex="7" class="margin-left-24" type="radio" name="gender" id="rdMale">
                                <label class="margin-left-8">Nữ</label>
                                <input tabindex="8" class="margin-left-24" type="radio" name="gender" id="rdOther">
                                <label class="margin-left-8">Khác</label>
                            </div>
                        </div>
                        <div class="row m-information m-input-identity-number">
                            <label title="Số chứng minh nhân dân">Số CMND</label>
                            <input tabindex="9" class="m-input m-input-information" type="text" name="" id="txtIdentityNumber" placeholder="VD: 0123456789">
                        </div>
                        <div class="row m-information m-input-date-range w-40 margin-left-8">
                            <label>Ngày cấp</label>
                            <input tabindex="10" class="m-input m-input-information" type="date" name="" id="dateRange">
                        </div>
                        <div class="row m-information m-input-providing-place w-100">
                            <label>Nơi cấp</label>
                            <input tabindex="11" class="m-input m-input-information w-100" type="text" name="" id="txtProvidingPlace" placeholder="VD: Công an thành phố Hà Nội">
                        </div>
                    </div>
                </div>
                <div class="contact-and-bank-info">
                    <div class="row m-information m-input-address w-100">
                        <label>Địa chỉ</label>
                        <input tabindex="12" class="m-input m-input-information" type="text" name="" id="txtAddress" placeholder="Số nhà, ngõ, tên đường, phường/xã, quận/huyện, tỉnh/thành phố">
                    </div>
                    <div class="row-jus-start contact-info w-100">
                        <div class="row m-information m-input-mobile">
                            <label title="Số điện thoại di động">ĐT di động</label>
                            <input tabindex="13" class="m-input m-input-information" type="text" name="" id="txtMobile" placeholder="VD: 0987654321">
                        </div>
                        <div class="row m-information m-input-phone margin-left-8">
                            <label title="Số điện thoại cố định">ĐT cố định</label>
                            <input tabindex="14" class="m-input m-input-information" type="text" name="" id="txtPhone" placeholder="VD: 0123456789">
                        </div>
                        <div class="row m-information m-input-email margin-left-8">
                            <label>Email</label>
                            <input tabindex="15" class="m-input m-input-information" type="text" name="" id="txtEmail" placeholder="VD: nguyenvana@gmail.com">
                        </div>
                    </div>
                    <div class="bank-info-wrapper">
                        <div class="row bank-info w-100">
                            <div class="row m-information m-input-bankId">
                                <label>Tài khoản ngân hàng</label>
                                <input tabindex="16" class="m-input m-input-information" type="text" name="" id="txtBankId" placeholder="VD: 0987654321">
                            </div>
                            <div class="row m-information m-input-bankName margin-left-8">
                                <label>Tên ngân hàng</label>
                                <input tabindex="17" class="m-input m-input-information" type="text" name="" id="txtBankName" placeholder="VD: ACB Bank">
                            </div>
                            <div class="row m-information m-input-bankBranch margin-left-8">
                                <label>Chi nhánh</label>
                                <input tabindex="18" class="m-input m-input-information" type="text" name="" id="txtBankBranch" placeholder="VD: Duy Tân">
                            </div>
                        </div>
                    </div>
                    <div class="row-jus-between info-btn-list">
                        <button tabindex="21" id="cancelForm" class="m-btn m-btn-bg-white" @click="btnClose">Hủy</button>
                        <div class="row get-info-btn">
                            <button id="btnSave" tabindex="19" class="m-btn m-btn-bg-white get-btn">Cất</button>
                            <button id="btnSaveAndAdd" tabindex="20" class="m-btn m-btn-bg-green">Cất và Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {displayNone} from '../../script/common.js'

export default {
    name: "EmployeeDetail",
    props: [],
    methods: {
        //Nút đóng và hủy
        btnClose(){
            displayNone('formAddEmployee');
        },
    },
    data() {
        return {
        }
    },
}
</script>
<style scoped>
@import url(../../style/components/dialog.css);
</style>