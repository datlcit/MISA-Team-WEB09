<template>
    <!-- Báo không được để trống -->
    <div id="wrapperRequired" class="bg-overlay">
        <div class="error-id-dialog">
            <div class="error-id-dialog-padding">
                <div class="warning-icon-and-text">
                    <div class="red-warning-icon"></div>
                    <div class="warning-text row-jus-center">
                        <p class="primary-text">{{textError}}</p>
                    </div>
                </div>
            </div>
            <div class="btn-close row-jus-center">
                <button class="m-btn m-btn-bg-green" @click="closeWarning()">Đóng</button>
            </div>
        </div>
    </div>
</template>

<script>

import {display} from '../../script/common.js'
export default {
    name: 'WarningRequired',
    props: ["textError"],
    methods: {
        /**
         * ĐÓng popup
         * LCDAT (31/10/2022)
         */
        closeWarning(){
            try {
                display('wrapperRequired', 'none');
            } catch (error) {
                console.log(error);
            }
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