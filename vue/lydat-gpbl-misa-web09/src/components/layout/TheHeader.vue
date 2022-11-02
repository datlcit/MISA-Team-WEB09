<template>
    <div class="header">
        <div class="m-wrap-header-content">
            <div class="row m-header-left">
                <div id="iconMenu" class="m-icon-24 cs-pointer" @click="callHideMenu"></div>
                <div class="m-company-dropdown">
                    <div id="mDropdowmListCompany" class="m-dropdown m-dropdown-list-company" @click="callShowHide('mDropdownHeader')">
                        <p id="companyName">{{currentCompany}}</p>
                        <div class="iconfont-div"><i class="icofont-curved-down"></i></div>
                        <div id="mDropdownHeader" class="wrap-up-down-option m-wrap-dropdown-option">
                            <div @click="chooseCompany(com.companyName)" class="m-option option-companies" v-for="(com, index) in companies" :key="index">
                                <p>{{com.companyName}}</p>
                            </div>
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
        chooseCompany(name){
            this.currentCompany = name;
        }
    },
    data() {
        return {
            companies: [
                {companyName: 'Công ty TNHH SẢN XUẤT - THƯƠNG MẠI - THƯƠNG MẠI QUI PHÚC'},
                {companyName: 'Công ty A'},
                {companyName: 'Công ty B'},
                {companyName: 'Công ty C'},
                {companyName: 'Công ty D'},
                {companyName: 'Công ty E'},
            ],
            currentCompany: 'Công ty TNHH SẢN XUẤT - THƯƠNG MẠI - THƯƠNG MẠI QUI PHÚC',
        }
    },
}
</script>
<style scoped>
@import url(../../style/layout/header.css);
</style>