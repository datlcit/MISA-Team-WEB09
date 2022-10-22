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
    initEvents();
}


/**
 * Hàm khởi gọi sự kiện chung để dễ quản lý
 * Author: LCDAT (19/10/2022)
 */
function initEvents(){
    //Nút thêm nhân viên
    // document.getElementById("btnAddEmployee").addEventListener("click", showFormEmployeeInformation);
    $('#btnAddEmployee').click(showFormEmployeeInformation);

    //Nút đóng form
    // document.getElementById("formEmployeeClose").addEventListener("click", closeFormEmployee);
    $('#formEmployeeClose').click(closeFormEmployee);

    //Nút Cancel
    // document.getElementById("cancelForm").addEventListener("click", closeFormEmployee);
    $('#cancelForm').click(closeFormEmployee);

    // Nút thu mở sidebar
    // document.getElementById("iconMenu").addEventListener("click", showHideMenu);
    $('#iconMenu').click(showHideMenu);
    
    // Ẩn hiện dropdown trên header
    // document.querySelector(".m-dropdown-list-company").addEventListener("click", showHideDropdown(document.querySelector(".m-wrap-dropdown-option")));
    // document.querySelector(".m-dropdown-list-company").addEventListener("click", showHideHeaderDropdown);
    $('.m-dropdown-list-company').click(showHideHeaderDropdown);

    // Ẩn hiện dropup dưới chân trang
    // document.querySelector(".m-dropup-range-item").addEventListener("click", showHideFooterDropup);
    $('.m-dropup-range-item').click(showHideFooterDropup);

    // Ẩn hiện dropdown trong form Thông tin nhân viên
    // document.querySelector("#comboboxUnitBtn").addEventListener("click", showHideFormDropdown);
    $('#comboboxUnitBtn').click(showHideFormDropdown);

    // Nút Cất
    // document.getElementById("btnSave").addEventListener("click", validateData);
    $('#btnSave').click(validateData);
    // Nút Cất và thêm
    // document.getElementById("btnSaveAndAdd").addEventListener("click", validateData);
    $('#btnSaveAndAdd').click(validateData);

    //Nút check-all cho toàn bộ nhân viên
    $('#checkAll').change(checkAllChange);

    //Nút check từng nhân viên
    $('.check-employee').change(checkItemChange);

}

/**
 * Hiển thị form thông tin
 * Author: LCDAT (19/10/2022)
 */
function showFormEmployeeInformation(){
    // document.getElementById("formAddEmployee").style.display = "flex";
    $('#formAddEmployee').css('display', 'flex');
    // document.getElementById("txtEmployeeCode").focus();
    $('#txtEmployeeCode').focus();

}

/**
 * Đóng form
 * Author: LCDAT (19/10/2022)
 */
function closeFormEmployee(){
    // document.getElementById("formAddEmployee").style.display = "none";
    $('#formAddEmployee').css('display', 'none');
}


/**
 * Thu/mở sidebar
 * Author: LCDAT (19/10/2022)
 */
function showHideMenu(){
    // if(document.getElementById("wrapper").style.position == "relative"){
    //     document.getElementById("wrapper").style.position = "static";
    //     document.getElementById("headerAndMain").style.position = "static";
    //     document.getElementById("headerAndMain").style.width = "calc(100% - 200px)";
    // } else {
    //     document.getElementById("wrapper").style.position = "relative";
    //     document.getElementById("headerAndMain").style.position = "absolute";
    //     document.getElementById("headerAndMain").style.left = "48px";
    //     document.getElementById("headerAndMain").style.width = "calc(100% - 48px)";
    // }
    if($('#wrapper').css('position') == "relative"){
        $('#wrapper').css('position', "static") ;
        $('#headerAndMain').css('position', "static");
        $('#headerAndMain').css('width', "calc(100% - 200px)");
    } else {
        $('#wrapper').css('position', "relative");
        $('#headerAndMain').css('position',"absolute");
        $('#headerAndMain').css('left', "48px");
        $('#headerAndMain').css('width', "calc(100% - 48px)");
    }
    
}


function showHideDropdown(dropdownItem){
    if(dropdownItem.style.display == "block"){
        dropdownItem.style.display = "none";
    } else {
        dropdownItem.style.display = "block";
    }
}



/**
 * Ẩn hiện dropdown trên header
 * Author: LCDAT (19/10/2022)
 */
function showHideHeaderDropdown(){
    // if(document.querySelector(".m-wrap-dropdown-option").style.display == "block"){
    //     document.querySelector(".m-wrap-dropdown-option").style.display = "none";
    // } else {
    //     document.querySelector(".m-wrap-dropdown-option").style.display = "block"
    // }
    if($('.m-wrap-dropdown-option').css('display') == "block"){
        $('.m-wrap-dropdown-option').css('display', "none");
    } else {
        $('.m-wrap-dropdown-option').css('display', "block");
    }
}

/**
 * Ẩn hiện dropup dưới Footer
 * Author: LCDAT (19/10/2022)
 */
function showHideFooterDropup(){
    if($('.m-wrap-dropup-option').css('display') == "block"){
        $('.m-wrap-dropup-option').css('display', "none");
    } else {
        $('.m-wrap-dropup-option').css('display', "block");
    }
}

/**
 * Ẩn hiện dropdown trên form Thông tin nhân viên
 * Author: LCDAT (19/10/2022)
 */
function showHideFormDropdown(){
    // if(document.querySelector("#comboboxUnitItems").style.display == "block"){
    //     document.querySelector("#comboboxUnitItems").style.display = "none";
    // } else {
    //     document.querySelector("#comboboxUnitItems").style.display = "block"
    // }
    if($('#comboboxUnitItems').css('display') == "block"){
        $('#comboboxUnitItems').css('display', "none");
    } else {
        $('#comboboxUnitItems').css('display', "block");
    }
}

/**
 * Thực hiện lưu dữ liệu trên form
 * Author: LCDAT (19/10/2022)
 */
function saveForm(){
    //Validate dữ liệu
    var isValid = validateData();

    //Thu thập dữ liệu
    var employee = {};
    var employeeCode = "";

    //Gọi api thực hiện cất dữ liệu
    fetch("https://amis.manhnv.net/api/v1/Departments", { method: "POST", body: JSON.stringify(employee) })
        .then(res => res.json())
        .then(res => {
            console.log(res); // Vào tới đây là thành công
        })
        .catch(res => {
            // Vào catch là xảy ra lỗi
        })

    //Kiểm tra kết quả trả về -> Đưa ra thông báo
}

/**
 * Thực hiện validate dữ liệu
 * Author: LCDAT (19/10/2022)
 */
function validateData(){
    //Các thông tin bắt buộc nhập
    //Lấy ra toàn bộ các thông tin bắt buộc nhập
    var inputRequireds = getAllElementsWithAttribute("required");
    for (const input of inputRequireds) {
        var value = input.value;
        if(!value){
            //Thêm border đỏ
            input.classList.add('err-input');
            // $('.m-input-id .err-text').css('display', 'flex');
        } else {
            //Bỏ border đỏ
            input.classList.remove('err-input');
            // $('.m-input-id .err-text').css('display', 'none');
        }
    }
    return;

    //Các thông tin đúng định dạng

    //Ngày tháng

}

/**
 * Lấy element bằng tên attribute
 * @param {string} attribute 
 * @returns 
 * Author: LCDAT (20/10/2022)
 */
function getAllElementsWithAttribute(attribute)
{
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
}

//Chọn Dropdown header
// let items = document.getElementsByClassName("m-option");
// for(let i = 0; i < items.length; i++){
//     items[i].setAttribute("onclick", "changeValue(this)");
// }

// function changeValue(e){
//     document.getElementById("companyName").value = e.innerText;
// }


// let wrapEdit = document.querySelectorAll(".wrap-btn-edit");



/**
 * Checkbox tích cho toàn bộ nhân viên
 * Author: LCDAT (22/10/2022)
 */

function checkAllChange(){
    // #checkAll thay đổi như nào sẽ kéo theo .check-employee thay đổi theo như vậy
    $(".check-employee").prop("checked", $('#checkAll').prop("checked"));
}


/**
 * Checkbox xử lý khi check từng nhân viên
 * Author: LCDAT (22/10/2022)
 */
function checkItemChange(){
    if($('.check-employee:checked').length == $('.check-employee').length){
        $('#checkAll').prop('checked', true);
    } else {
        $('#checkAll').prop('checked', false);
    }
}
