<template>
    <!-- Báo không được trùng mã-->
    <div id="wrapperCheckData" class="bg-overlay">
        <div class="error-id-dialog">
            <div class="error-id-dialog-padding">
                <div class="warning-icon-and-text">
                    <div class="warning-icon"></div>
                    <div class="warning-text">
                        <p id="warningText" class="primary-text"></p>
                        <!-- Mã nhân viên NV001 đã tồn tại trong hệ <br> thống, vui lòng kiểm tra lại -->
                    </div>
                </div>
            </div>
            <div class="btn-agree">
                <button class="m-btn m-btn-bg-green">Đồng ý</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WarningCheckData',
    props: [],
    methods: {
        
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