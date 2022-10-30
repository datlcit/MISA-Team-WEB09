<template>
    <!-- Chân trang -->
      <div class="total-record-and-pagination">
        <div class="total-record">
          <p>Tổng số: <span>1035</span> bản ghi</p>
        </div>
        <div class="pagination row-jus-center">
          <div class="select-total-record">
            <div
              id="mDropupRangeItem"
              class="m-dropdown m-dropup-range-item row-jus-between" @click="callShowHide('mWrapDropupPagination')">
              <p data-choice-records="20" id="choiceRangeRecord">
                20 bản ghi trên một trang
              </p>
              <div class="iconfont-div">
                <i class="icofont-curved-down"></i>
              </div>
              <div
                id="mWrapDropupPagination"
                class="wrap-up-down-option m-wrap-dropup-option"
              >
                <div
                  data-records="10"
                  data-name="10 bản ghi trên 1 trang"
                  class="m-option option-records"
                >
                  <p>10 bản ghi trên 1 trang</p>
                </div>
                <div
                  data-records="20"
                  data-name="20 bản ghi trên 1 trang"
                  class="m-option option-records"
                >
                  <p>20 bản ghi trên 1 trang</p>
                </div>
                <div
                  data-records="30"
                  data-name="30 bản ghi trên 1 trang"
                  class="m-option option-records"
                >
                  <p>30 bản ghi trên 1 trang</p>
                </div>
                <div
                  data-records="40"
                  data-name="40 bản ghi trên 1 trang"
                  class="m-option option-records"
                >
                  <p>40 bản ghi trên 1 trang</p>
                </div>
                <div
                  data-records="50"
                  data-name="50 bản ghi trên 1 trang"
                  class="m-option option-records"
                >
                  <p>50 bản ghi trên 1 trang</p>
                </div>
                <!-- <div data-records = 100 data-name = '100 bản ghi trên 1 trang'  class="m-option option-records"><p>100 bản ghi trên 1 trang</p></div>
                                            <div data-records = 120 data-name = '120 bản ghi trên 1 trang'  class="m-option option-records"><p>120 bản ghi trên 1 trang</p></div> -->
              </div>
            </div>
          </div>
          <div class="btn-page row-jus-center">
            <div data-prev-page="1" class="btn-prev cs-pointer">
              <a href="javascript:void(0)">Trước</a>
            </div>
            <div data-page-number="1" class="page-number cs-pointer">
              <a class="num" href="javascript:void(0)">1</a>
            </div>
            <div data-page-number="2" class="page-number cs-pointer">
              <a class="num" href="javascript:void(0)">2</a>
            </div>
            <div data-page-number="3" class="page-number cs-pointer">
              <a class="num" href="javascript:void(0)">3</a>
            </div>
            <div data-page-number="4" class="page-number cs-pointer">
              <a class="num" href="javascript:void(0)">4</a>
            </div>
            <div data-page-number="5" class="page-number cs-pointer">
              <a class="num" href="javascript:void(0)">5</a>
            </div>
            <!-- <div class="three-dots cs-pointer">
                                        <p>...</p>
                                    </div>
                                    <div class="page-number cs-pointer">
                                        <a href="">52</a>
                                    </div> -->
            <div data-next-page="2" class="btn-next cs-pointer">
              <a href="javascript:void(0)">Sau</a>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

import {showHide} from '../../script/common.js'

export default {
    name: 'EmployeePagination',
    props: {},
    methods: {
      //Gọi tới hàm showHide()
      callShowHide(item){
          return showHide(item);
      }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
@import url(../../style/pages/employee-pagination.css);
</style>