<template>
  <!-- <demo-component label = "Họ và tên"></demo-component>
  <demo-component label = "Ngày sinh"></demo-component>
  <demo-component v-bind:label = "labelDemo"></demo-component>
  <button @click="onChangeLabel">Thay đổi label</button> -->
  Họ và đệm:<input type="text" v-model='employee.FirstName'><br>
  Tên:<input type="text" v-model='employee.LastName'><br>
  Họ và tên:<input type="text" v-model='fullName'><br>
  <div v-show="employee.FirstName != undefined && employee.LastName != undefined"><b>{{employee.FirstName+' '+employee.LastName}}</b></div>
  <!-- <div v-else>Họ và tên không được undefined</div> -->
  <demo-component v-show="employee.FirstName != '' && employee.LastName != ''" label = "Tên"></demo-component>
  <div><b>{{fullName}}</b></div>
  <button @click="onChangeFullName">Lưu dữ liệu</button>
  <div>{{JSON.stringify(employee)}}</div>

  <base-table-component apiUrl="https://amis.manhnv.net/api/v1/employees"></base-table-component>


</template>

<script>

import DemoComponent from './components/Demo.vue';
// import axios from 'axios';
import BaseTableComponent from './components/BaseTable.vue'

export default {
  name: 'App',
  components: {
    DemoComponent,
    BaseTableComponent
  },
  created() {
    // Lấy dữ liệu
    // this.loadData();
  },
  methods: {
    onChangeLabel(){
      this.labelDemo = Math.random(0,1);
    },
    onChangeFullName(){
      this.fullName = Math.random(0,1);
    },
    loadData(){
      // Cách 1: Dùng fetch
      fetch("https://amis.manhnv.net/api/v1/employees")
      .then(res=>res.json())
      .then(data=>{
        this.employeeList = data;
        console.log(data);
      })

      //Cách 2: Dùng axios
      // axios.get(`http://amis.manhnv.net/api/v1/employees`)
      // .then (response => {
      //   this.employeeList = response;
      //   console.log(response);
      // })
      // .catch(e => {
      //   this.errors.push(e);
      // })
    },
    onClickItem(item){
        alert(item.EmployeeName);
    }
  },
  data() {
    return {
      labelDemo: '',
      employee:{},
      employeeList: []
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
