import {validateData, showHideDropdownFixed, showWarning, showHide, editEmployeeInfo} from "./final-ui.js";
import { formatDateDDMMYYYY } from "./base.js";

/**
 * Trả về dữ liệu từ api
 * @param {array} res dữ liệu trả về
 * Author: LCDAT (24/10/2022)
 */
export function renderDataFromApi(res){
    // Xóa sạch dữ liệu cũ để gọi dữ liệu mới tránh bị lặp lại
    $('#tblEmployee tbody').empty();
    for (let emp of res) {
 
        //Khai báo gán biến cho từng thuộc tính
        let employeeCode = emp.EmployeeCode; //cách 1 để lấy thuộc tính
        let employeeName = emp["EmployeeName"]; //cách 2 để lấy thuộc tính
        let genderName = emp.GenderName;

        let dob = formatDateDDMMYYYY(emp.DateOfBirth);

        let identityNumber = emp.IdentityNumber;
        let employeePosition = emp.EmployeePosition;
        let departmentName = emp.DepartmentName;
        let bankAccountNumber = emp.BankAccountNumber;
        let bankName = emp.BankName;
        let bankBranchName = emp.BankBranchName;

        var trHTML = $(`<tr class="table-row table-row-data">
                            <td class="text-box-flex col-textbox">
                               <input class="check-employee" type="checkbox">
                            </td>
                            <td class="table-data col-id">${employeeCode || ''}</td>
                            <td class="table-data col-name">${employeeName || ''}</td>
                            <td class="table-data col-gender">${genderName || ''}</td>
                            <td class="table-data-date col-date-of-birth">${dob || ''}</td>
                            <td class="table-data col-identity-number">${identityNumber || ''}</td>
                            <td class="table-data col-duty">${employeePosition || ''}</td>
                            <td class="table-data col-unit">${departmentName || ''}</td>
                            <td class="table-data col-num-account">${bankAccountNumber || ''}</td>
                            <td class="table-data col-bank">${bankName || ''}</td>
                            <td class="table-data col-bank-branch">${bankBranchName || ''}</td>
                            <td class="table-data table-edit td-edit-sticky col-edit">
                                <div class="cell-edit">
                                    <p class="edit-text">Sửa</p>
                                    <div class="wrap-btn-edit">
                                        <div class="btn-edit-function"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>`);
        $('#tblEmployee tbody').append(trHTML);
    }
    // Gọi tới hàm bắt sự kiện dropdown các chức năng Sửa
    showHideDropdownFixed();

    editEmployeeInfo();
}

/**
 * Load data
 * Author: LCDAT (23/10/2022)
 */
 export function loadData(){

    try {
      //Xóa dữ liệu cũ để không bị lặp lại dữ liệu
     //  $('#tblEmployee tbody').empty();
      // Gọi api thực hiện lấy dữ liệu
      $.ajax({
          type: "GET",
          url: "https://amis.manhnv.net/api/v1/Employees",
          // data: Khai báo tham số truyền lên (hiện 0 cần vì chỉ đang lấy dữ liệu về)
          // data: "json",
          // Không có data thì cũng không cần dataType nữa
          // dataType: "json",
          success: function (response) {
             // Phần xử lý response gọi sang hàm mới để tối ưu code
             renderDataFromApi(response);
          }
      });
    } catch (error) {
     console.log(error);
    }
 
     // Xử lý dữ liệu
 
     // Hiển thị trên table 
 
 }

 /**
  * Trả về số bản ghi cần hiện
  * @param {string} pageSize số bản ghi
  * Author: LCDAT (23/10/2022)
  */
 export function getRangeRecords(pageSize){
    try {
        // $('#tblEmployee tbody').empty();
        $.ajax({
            type: "GET",
            url: `https://amis.manhnv.net/api/v1/Employees/filter?pageSize=${pageSize}&pageNumber=1`,
            // data: "data",
            // dataType: "dataType",
            success: function (response) {
                // console.log(response);
                renderDataFromApi(response.Data);
            }
        });

        // Gán pageSize cho ô hiển thị số records chính để gọi ra ở hàm chọn số trang
        $('#choiceRangeRecord').data('choice-records', pageSize);

    } catch (error) {
        console.log(error);
    }
}

/**
 * Chọn số trang
 * Author: LCDAT (24/10/2022)
 */
export function getDataByPageNumber(pageNumber){
    try {
        // Gán biến tham chiếu tới dữ liệu của ô hiển thị số records chính
        let pageSize = $('#choiceRangeRecord').data('choice-records');
        $.ajax({
            type: "GET",
            url: `https://amis.manhnv.net/api/v1/Employees/filter?pageSize=${pageSize}&pageNumber=${pageNumber}`,
            // data: "data",
            // dataType: "dataType",
            success: function (response) {
                // console.log(response);
                renderDataFromApi(response.Data);
            }
        });

        // Gán data cho 2 nút Trước và Sau để áp dụng chuyển trang
        $('.btn-prev').data('prev-page', pageNumber - 1);
        $('.btn-next').data('next-page', pageNumber + 1);

        if(pageNumber > 1){
            $('.btn-prev').show();
        } else {
            $('.btn-prev').hide();
        }

    } catch (error) {
        console.log(error);
    }
}

/**
 * Thực hiện lưu dữ liệu trên form
 * Author: LCDAT (19/10/2022)
 */
 export function btnSaveByClick(){
    try {
        //Validate dữ liệu
        var isValid = validateData();
        if(isValid){
            //Thu thập dữ liệu
            // let customer = $('#isCustomer');
            // let provider = $('#isProvider');
            var employeeCode = $('#txtEmployeeCode').val();
            var fullName =  $('#txtFullName').val();
            var unit =  $('#txtUnit').val();
            var duty =  $('#txtDuty').val();
            var dob =  $('#dateOfBirth').val();

            var gender = null;
            var rdMale =  $('#rdMale');
            var rdFemale =  $('#rdFemale');
            var rdOther =  $('#rdOther');
            if(rdMale[0].checked == true){
                gender = 0;
            } else if(rdFemale[0].checked == true){
                gender = 1;
            } else if(rdOther[0].checked == true){
                gender = 2;
            }

            var identityNumber =  $('#txtIdentityNumber').val();
            var dateRange =  $('#dateRange').val();
            var providingPlace = $('#providingPlace').val();
            var address =  $('#txtAddress').val();
            var mobile =  $('#txtMobile').val();
            var phone =  $('#txtPhone').val();
            var email =  $('#txtEmail').val();
            var bankId =  $('#txtBankId').val();
            var bankName =  $('#txtBankName').val();
            var bankBranch =  $('#txtBankBranch').val();

            var employee = {
                EmployeeCode : employeeCode,
                EmployeeName : fullName,
                DepartmentId : "142cb08f-7c31-21fa-8e90-67245e8b283e",
                EmployeePosition : duty,
                DateOfBirth : dob,
                Gender : gender,
                IdentityNumber: identityNumber,
                IdentityDate: dateRange,
                IdentityPlace: providingPlace,
                Address: address,
                PhoneNumber: mobile,
                TelephoneNumber: phone,
                Email: email,
                BankAccountNumber: bankId,
                BankName: bankName,
                BankBranchName: bankBranch
            };

            //Gọi api thực hiện cất dữ liệu

            //Cách 1: Dùng ajax trong jQuery

            // $.ajax({
            //     type: "POST",
            //     url: "https://amis.manhnv.net/api/v1/employees",
            //     data: JSON.stringify(employee),
            //     dataType: "json",
            //     //Gọi ajax phải khai báo thêm contentType
            //     contentType: "application/json",
            //     success: function (response) {
            //         console.log(response);
            //     }
            // });

            //Cách 2: Dung fetch dua duong dan api vao, su dung method post theo quy uoc de luu du lieu, sau do body chuyen du lieu thanh chuoi JSON de day len api

            var statusCode = null;
            fetch("https://amis.manhnv.net/api/v1/employees", {
                method: "POST",
                body: JSON.stringify(employee),
                // Khai báo contentType để thông báo tới trình duyệt kiểu dữ liệu gửi tới và do yêu cầu bên api phải gửi đúng kiểu dữ liệu đó mới được
                headers: {
                    'Content-Type': 'application/json'
                }
                })
                .then(res => {
                    statusCode = res.status;
                    console.log(statusCode)
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    switch (statusCode) {
                        case 201:
                            // Hiện thông báo đã thêm mới thành công
                            showHide($('.successful-item'));
                            //Ẩn thông báo thêm mới thành công sau 3 giây
                            setTimeout(function(){
                                $('.successful-item').css('display', 'none');
                            }, 3000);
                            // Ẩn dialog
                            $('#formAddEmployee').hide();
                            // Load lại dữ liệu
                            loadData();
                            break;
                        case 400:
                            // Hiện cảnh báo và nội dung cảnh báo
                            showWarning($('#wrapperCheckData'),  $('#warningText'), data.userMsg);
                            // alert(data.userMsg);
                            break;
                    
                        default:
                            //Toast message
                            break;
                    }
                })
                .catch(res => {
                    // Vào catch là xảy ra lỗi
                    console.log(res);
                })

            //Kiểm tra kết quả trả về -> Đưa ra thông báo
        }
    } catch (error) {
        console.log(error);
    }
}