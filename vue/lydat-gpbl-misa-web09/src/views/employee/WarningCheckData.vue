<template>
    <!-- Báo không được trùng mã-->
    <div id="wrapperCheckData" class="bg-overlay">
        <div class="error-id-dialog">
            <div class="error-id-dialog-padding">
                <div class="warning-icon-and-text">
                    <div class="warning-icon"></div>
                    <div class="warning-text">
                        <p id="warningText" class="primary-text">{{checkError}}</p>
                        <!-- Mã nhân viên NV001 đã tồn tại trong hệ <br> thống, vui lòng kiểm tra lại -->
                    </div>
                </div>
            </div>
            <div class="btn-agree">
                <button class="m-btn m-btn-bg-green" @click="closeWarning">Đồng ý</button>
            </div>
        </div>
    </div>
</template>

<script>
import {display} from '../../script/common.js'

export default {
    name: 'WarningCheckData',
    props: ["checkError"],
    methods: {
        closeWarning(){
            display('wrapperCheckData', 'none');
        }
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