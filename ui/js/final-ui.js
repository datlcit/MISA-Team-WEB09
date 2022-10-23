// -------------------------------------------------------
// Demo dạy comment với hàm có tham số
// /**
//  * Lấy tên của nhân viên
//  * @param {String} name Tên
//  * @returns Tên của nhân viên
//  * Author: LCDAT (19/10/2022)
//  */
// function getName(name){
//     return name;
// }
// -------------------------------------------------------------

// BẮT ĐẦU

/**
 * Hàm tự động khởi hàm nào đấy sau khi load window còn chỉ thực thi khi dược gọi đến
 * Author: LCDAT (19/10/2022)
 */
window.onload = function(){
    //Gọi hàm khởi tạo sự kiện
    initEvents();

    //Load data
    loadData();
    
}


/**
 * Hàm khởi gọi sự kiện chung để dễ quản lý
 * Author: LCDAT (19/10/2022)
 */
function initEvents(){
    try {
        //Nút thêm nhân viên
        // document.getElementById("btnAddEmployee").addEventListener("click", showFormEmployeeInformation);
        $('#btnAddEmployee').click(showFormEmployeeInformation);

        //Nút đóng form
        // document.getElementById("formEmployeeClose").addEventListener("click", closeFormEmployee);
        $('#formEmployeeClose').click(closeFormEmployee);

        //Nút Cancel
        // document.getElementById("cancelForm").addEventListener("click", closeFormEmployee);
        $('#cancelForm').click(closeFormEmployee);

        // Nút thu gọn sidebar
        // document.getElementById("iconMenu").addEventListener("click", showHideMenu);
        $('#iconMenu').click(hideMenu);

        // Nút mở rộng sidebar
        // document.getElementById("iconMenu").addEventListener("click", showHideMenu);
        $('#iconGrid').click(showMenu);
        
        // Ẩn hiện dropdown trên header
        $('#mDropdowmListCompany').click(function(){
            showHideDropdown($('#mDropdownHeader'));
        });

        // Ẩn hiện dropup dưới chân trang
        $('#mDropupRangeItem').click(function(){
            showHideDropdown($('#mWrapDropupPagination'));
        });

        // Ẩn hiện dropdown trong form Thông tin nhân viên
        $('#comboboxUnitBtn').click(function(){
            showHideDropdown($('#comboboxUnitItems'));
        });

        // Nút Cất
        // document.getElementById("btnSave").addEventListener("click", validateData);
        $('#btnSave').click(validateData);
        // Nút Cất và thêm
        // document.getElementById("btnSaveAndAdd").addEventListener("click", validateData);
        $('#btnSaveAndAdd').click(btnSaveByClick);

        //Nút check-all cho toàn bộ nhân viên
        $('#checkAll').change(checkAllChange);

        //Nút check từng nhân viên
        $('.check-employee').change(checkItemChange);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Load data
 * Author: LCDAT (23/10/2022)
 */

function loadData(){

   try {
     //Xóa dữ liệu cũ để không bị lặp lại dữ liệu
     $('#tblEmployee tbody').empty();
     // Gọi api thực hiện lấy dữ liệu
     $.ajax({
         type: "GET",
         url: "https://amis.manhnv.net/api/v1/Employees",
         // data: Khai báo tham số truyền lên (hiện 0 cần)
         // data: "json",
         // Không có data thì cũng không cần dataType nữa
         // dataType: "json",
         success: function (response) {
             console.log(response);
             for (const emp of response) {
 
                 //Khai báo gán biến cho từng thuộc tính
                 const employeeCode = emp.EmployeeCode; //cách 1 để lấy thuộc tính
                 const employeeName = emp["EmployeeName"]; //cách 2 để lấy thuộc tính
                 const genderName = emp.GenderName;

                 const dob = new Date(emp.DateOfBirth);
                //  const dob = emp.DateOfBirth;
                 let day = dob.getDate();
                 let month = dob.getMonth() + 1;
                 let year = dob.getFullYear();
                 day = day < 10 ? `0${day}` : day;
                 month = month < 10 ? `0${month}` : month;

                 const identityNumber = emp.IdentityNumber;
                 const employeePosition = emp.EmployeePosition;
                 const departmentName = emp.DepartmentName;
                 const bankAccountNumber = emp.BankAccountNumber;
                 const bankName = emp.BankName;
                 const bankBranchName = emp.BankBranchName;
 
                 var trHTML = $(`<tr class="table-row">
                                     <td class="text-box-flex col-textbox">
                                        <input class="check-employee" type="checkbox">
                                     </td>
                                     <td class="table-data col-id">${employeeCode}</td>
                                     <td class="table-data col-name">${employeeName}</td>
                                     <td class="table-data col-gender">${genderName}</td>
                                     <td class="table-data-date col-date-of-birth">${`${day}/${month}/${year}`}</td>
                                     <td class="table-data col-identity-number">${identityNumber}</td>
                                     <td class="table-data col-duty">${employeePosition}</td>
                                     <td class="table-data col-unit">${departmentName}</td>
                                     <td class="table-data col-num-account">${bankAccountNumber}</td>
                                     <td class="table-data col-bank">${bankName}</td>
                                     <td class="table-data col-bank-branch">${bankBranchName}</td>
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
         }
     });
   } catch (error) {
    console.log(error);
   }

    // Xử lý dữ liệu

    // Hiển thị trên table 

}

/**
 * Hiển thị form thông tin
 * Author: LCDAT (19/10/2022)
 */
function showFormEmployeeInformation(){
    try {
        $('#formAddEmployee').css('display', 'flex');
        $('#txtEmployeeCode').focus();
    } catch (error) {
        console.log(error);
    }
}

/**
 * Đóng form
 * Author: LCDAT (19/10/2022)
 */
function closeFormEmployee(){
    try {
        $('#formAddEmployee').css('display', 'none');
    } catch (error) {
        console.log(error);
    }
}


/**
 * Thu sidebar
 * Author: LCDAT (23/10/2022)
 */
function hideMenu(){
    try {
        if($('#wrapper').css('position') != "relative"){
            $('#wrapper').css('position', "relative");
            $('#headerAndMain').css('position',"absolute");
            $('#headerAndMain').css('left', "48px");
            $('#headerAndMain').css('width', "calc(100% - 48px)");
            $('#iconGridLink').css('display', 'none');
            $('#iconMenu').css('display', 'none');
            $('#iconMenuSidebarLink').css('display', 'block');
        } 
    } catch (error) {
        console.log(error);
    }
}

/**
 * Mở rộng sidebar
 * Author: LCDAT (23/10/2022)
 */
function showMenu(){
    try {
        if($('#iconMenuSidebarLink').css('display', 'block')){
            $('#wrapper').css('position', "static") ;
            $('#headerAndMain').css('position', "static");
            $('#headerAndMain').css('width', "calc(100% - 200px)");
            $('#iconMenuSidebarLink').css('display', 'none');
            $('#iconGridLink').css('display', 'block');
            $('#iconMenu').css('display', 'block');
        }    
    } catch (error) {
        console.log(error);
    }
}

/**
 * Ẩn hiện dropdown và dropup
 * Author: LCDAT (23/10/2022)
 */
function showHideDropdown(dropdownItem){
    try {
        if(dropdownItem.css('display') == "block"){
            dropdownItem.css('display', "none");
        } else {
            dropdownItem.css('display', "block");
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * Thực hiện lưu dữ liệu trên form
 * Author: LCDAT (19/10/2022)
 */
function btnSaveByClick(){
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
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    switch (statusCode) {
                        case 201:
                            alert("Thêm mới thành công");
                            // Ẩn dialog
                            $('#formAddEmployee').hide();
                            // Load lại dữ liệu
                            loadData();
                            break;
                        case 400:
                            alert(data.userMsg);
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

/**
 * Thực hiện validate dữ liệu
 * Author: LCDAT (19/10/2022)
 */
function validateData(){
    try {
        var isValid = true;
        //Các thông tin bắt buộc nhập
        //Lấy ra toàn bộ các thông tin bắt buộc nhập
        var inputRequireds = getAllElementsWithAttribute("required");
        for (const input of inputRequireds) {
            var value = input.value;
            if(!value){
                //Thêm border đỏ
                input.classList.add('err-input');
                // $('.m-input-id .err-text').css('display', 'flex');
                isValid = false;
            } else {
                //Bỏ border đỏ
                input.classList.remove('err-input');
                // $('.m-input-id .err-text').css('display', 'none');
            }
        }
        return isValid;

        //Các thông tin đúng định dạng

        //Ngày tháng
    } catch (error) {
        console.log(error);
    }

}

/**
 * Lấy element bằng tên attribute
 * @param {string} attribute 
 * @returns 
 * Author: LCDAT (20/10/2022)
 */
function getAllElementsWithAttribute(attribute){
  try {
    var matchingElements = [];
    var allElements = $('*');
    for (var i = 0, n = allElements.length; i < n; i++)
    {
        if (allElements[i].getAttribute(attribute) !== null)
        {
        // Element exists with attribute. Add to array.
        matchingElements.push(allElements[i]);
        }
    }
    return matchingElements;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Checkbox tích cho toàn bộ nhân viên
 * Author: LCDAT (22/10/2022)
 */

function checkAllChange(){
    try {
        // #checkAll thay đổi như nào sẽ kéo theo .check-employee thay đổi theo như vậy
        $(".check-employee").prop("checked", $('#checkAll').prop("checked"));
    } catch (error) {
        console.log(error);
    }
}


/**
 * Checkbox xử lý khi check từng nhân viên
 * Author: LCDAT (22/10/2022)
 */
function checkItemChange(){
    try {
        if($('.check-employee:checked').length == $('.check-employee').length){
            $('#checkAll').prop('checked', true);
        } 
        else {
            $('#checkAll').prop('checked', false);
        }
    } catch (error) {
        console.log(error);
    }
}