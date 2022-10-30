<template>
    <div class="header">
        <div class="m-wrap-header-content">
            <div class="row m-header-left">
                <div id="iconMenu" class="m-icon-24 cs-pointer" @click="callHideMenu"></div>
                <div class="m-company-dropdown">
                    <div id="mDropdowmListCompany" class="m-dropdown m-dropdown-list-company" @click="callShowHide('mDropdownHeader')">
                        <p id="companyName">Công ty TNHH SẢN XUẤT - THƯƠNG MẠI - THƯƠNG MẠI QUI PHÚC</p>
                        <div class="iconfont-div"><i class="icofont-curved-down"></i></div>
                        <div id="mDropdownHeader" class="wrap-up-down-option m-wrap-dropdown-option">
                            <div data-name="Công ty TNHH SẢN XUẤT - THƯƠNG MẠI - THƯƠNG MẠI QUI PHÚC" class="m-option option-companies"><p>Công ty TNHH SẢN XUẤT - THƯƠNG MẠI - THƯƠNG MẠI QUI PHÚC</p></div>
                            <div data-name="Công ty B" class="m-option option-companies"><p>Công ty B</p></div>
                            <div data-name="Công ty C" class="m-option option-companies"><p>Công ty C</p></div>
                            <div data-name="Công ty D" class="m-option option-companies"><p>Công ty D</p></div>
                            <div data-name="Công ty E" class="m-option option-companies"><p>Công ty E</p></div>
                            <div data-name="Công ty F" class="m-option option-companies"><p>Công ty F</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row m-header-right">
                <div class="m-icon-notification m-icon-24 cs-pointer" title="Thông báo"></div>
                <div class="row m-profile">
                    <div class="m-profile-ava m-icon-24 cs-pointer">
                        <i class="icofont-user-alt-7"></i>
                    </div>
                    <div class="m-profile-name cs-pointer"><p class="">Lý Chính Đạt</p></div>
                    <i class="icofont-curved-down cs-pointer"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {showHide} from '../../script/common.js'
import {hideMenu} from '../../script/functions.js'
export default {
    name: "TheHeader",
    props:[],
    methods: {
        //Gọi tới hàm showHide()
        callShowHide(item){
            return showHide(item);
        },

        callHideMenu(){
            return hideMenu();
        },
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
@import url(../../style/layout/header.css);
</style>