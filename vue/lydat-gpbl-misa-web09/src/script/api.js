// import axios from 'axios'
// import {API} from '../script/config.js'
// import {display} from '../script/common.js'
// // EMPLOYEE

// /**
//  * Lấy danh sách nhân viên
//  * LCDAT(31/10/2022)
//  */
//  export function getAllEmployee(item){
//     try {
//       axios.get(`${API.EMPLOYEE}`).then((response) => {
//         this.employees = response.data;
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

// /**
//  * Xóa nhân viên
//  * @param {EmployeeId} id Truyền id của nhân viên cần xóa
//  * LCDAT (02/11/2022)
//  */
//    export function deleteEmployee(id){
//     try {
//       axios.delete(`${API.EMPLOYEE}/${id}`).then((res) => {
//         if(res.status == 200){
//           // // Hiện thông báo đã xóa thành công
//           // display('successfulItem', 'flex');
//           // //Ẩn thông báo xóa thành công sau 5 giây
//           // setTimeout(function(){
//           //     display('successfulItem', 'none');
//           // }, 5000);
//           // Ẩn khung danh sách
//           display('editList', 'none');
//           //Gọi lại hàm load
//           this.getAllEmployee();
//         }
//       })
//     } catch (error) {
//       console.log(error);
//     }
//   }