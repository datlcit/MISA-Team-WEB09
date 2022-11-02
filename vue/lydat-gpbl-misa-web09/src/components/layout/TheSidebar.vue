<template>
    <div id="sidebar" class="sidebar">
        <div class="icon-grid-and-logo row-jus-start">
            <a id="iconGridLink" href="">
                <div id="iconGrid" class="m-icon-grid m-icon-24"></div>
            </a>
            <a id="iconMenuSidebarLink" href="javascript:void(0)">
                <div id="iconMenuSidebar" class="m-icon-24 cs-pointer" @click="callShowMenu"></div>
            </a>
            <div class="m-logo">
                <a href="">
                    <img src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg" alt="">
                </a>
            </div>
        </div>
        <div class="m-sidebar-list">
            <ul class="list-function-sidebar" title="Tổng quan">
                <div class="function-wrap">
                    <a href="">
                        <li>
                            <div class="function-icon-overview m-icon-24"></div>
                            <p>Tổng quan</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Tiền mặt">
                    <a href="">
                        <li>
                            <div class="function-icon-cash m-icon-24"></div>
                            <p>Tiền mặt</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Tiền gửi">
                    <a href="">
                        <li>
                            <div class="function-icon-deposit m-icon-24"></div>
                            <p>Tiền gửi</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Mua hàng">
                    <a href="">
                        <li>
                            <div class="function-icon-shopping m-icon-24"></div>
                            <p>Mua hàng</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Bán hàng">
                    <a href="">
                        <li>
                            <div class="function-icon-sell m-icon-24"></div>
                            <p>Bán hàng</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Quản lý hóa đơn">
                    <a href="">
                        <li>
                            <div class="function-icon-invoice-management m-icon-24"></div>
                            <p>Quản lý hóa đơn</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Kho">
                    <a href="">
                        <li>
                            <div class="function-icon-warehouse m-icon-24"></div>
                            <p>Kho</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Công cụ dụng cụ">
                    <a href="">
                        <li>
                            <div class="function-icon-tool m-icon-24"></div>
                            <p>Công cụ dụng cụ</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Tài sản cố định">
                    <a href="">
                        <li>
                            <div class="function-icon-fixed-assets m-icon-24"></div>
                            <p>Tài sản cố định</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Thuế">
                    <a href="">
                        <li>
                            <div class="function-icon-tax m-icon-24"></div>
                            <p>Thuế</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Giá thành">
                    <a href="">
                        <li>
                            <div class="function-icon-cost m-icon-24"></div>
                            <p>Giá thành</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Tổng hợp">
                    <a href="">
                        <li>
                            <div class="function-icon-general m-icon-24"></div>
                            <p>Tổng hợp</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Ngân sách">
                    <a href="">
                        <li>
                            <div class="function-icon-budget m-icon-24"></div>
                            <p>Ngân sách</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Báo cáo">
                    <a href="">
                        <li>
                            <div class="function-icon-report m-icon-24"></div>
                            <p>Báo cáo</p>
                        </li>
                    </a>
                </div>
                <div class="function-wrap" title="Phân tích tài chính">
                    <a href="">
                        <li>
                            <div class="function-icon-financial-analysis m-icon-24"></div>
                            <p>Phân tích tài chính</p>
                        </li>
                    </a>
                </div>
            </ul>
        </div>
    </div>
</template>
<script>

import {showMenu} from '../../script/functions.js'
// import {displayBlock, displayNone} from '../../script/common.js'
    export default {
        name: "TheSidebar",
        props:[],
        methods: {
            callShowMenu(){
                return showMenu();
            },
        },
        data() {
            return {
                // sidebarItems: [
                //     {icon: 'function-icon-overview', itemName: 'Tổng quan'},
                //     {icon: 'function-icon-cash', itemName: 'Tiền mặt'},
                //     {icon: 'function-icon-deposit', itemName: 'Tiền gửi'},
                //     {icon: 'function-icon-shopping', itemName: 'Mua hàng'},
                //     {icon: 'function-icon-sell', itemName: 'Bán hàng'},
                //     {icon: 'function-icon-invoice', itemName: 'Quản lý hóa đơn'},
                //     {icon: 'function-icon-warehouse', itemName: 'Kho'},
                //     {icon: 'function-icon-tool', itemName: 'Công cụ dụng cụ'},
                //     {icon: 'function-icon-fixed', itemName: 'Tài sản cố định'},
                //     {icon: 'function-icon-tax', itemName: 'Thuế'},
                //     {icon: 'function-icon-cost', itemName: 'Giá thành'},
                //     {icon: 'function-icon-general', itemName: 'Tổng hợp'},
                //     {icon: 'function-icon-budget', itemName: 'Ngân sách'},
                //     {icon: 'function-icon-report', itemName: 'Báo cáo'},
                //     {icon: 'function-icon-financial', itemName: 'Phân tích tài chính'},
                // ]
            }
        },
    }
</script>
<style scoped>
@import url(../../style/layout/sidebar.css);
</style>