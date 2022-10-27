import { renderDataFromApi, loadData, getRangeRecords, btnSaveByClick, getDataByPageNumber} from "./api.js";


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
    // loadData();

    // Gọi mặc định 20 bản ghi một trang
    getRangeRecords(20);
    
}


/**
 * Hàm khởi gọi sự kiện chung để dễ quản lý
 * Author: LCDAT (19/10/2022)
 */
function initEvents(){
    try {
        //Nút thêm nhân viên
        $('#btnAddEmployee').click(function(){
            $('.info-form-title p').text('Thêm mới nhân viên'); 
            showFormEmployeeInformation();
        })

        //Nút đóng form
        $('#formEmployeeClose').click(closeFormEmployee);

        //Nút Cancel
        $('#cancelForm').click(closeFormEmployee);

        // Nút thu gọn sidebar
        $('#iconMenu').click(hideMenu);

        // Nút mở rộng sidebar
        $('#iconMenuSidebar').click(showMenu);
        
        // Ẩn hiện dropdown trên header
        $('#mDropdowmListCompany').click(function(){
            showHide($('#mDropdownHeader'));
        });

        // Ẩn hiện dropup dưới chân trang
        $('#mDropupRangeItem').click(function(){
            showHide($('#mWrapDropupPagination'));
        });

        // Ẩn hiện dropdown trong form Thông tin nhân viên
        $('#comboboxUnitBtn').click(function(){
            showHide($('#comboboxUnitItems'));
        });

        //Chọn công ty (truyền vào các tham số theo thứ tự: (id hoặc class, data-name, phần nội dung cần thay đổi, dữ liệu trả về)
        chooseOption($('.option-companies'), 'name', $('#companyName'));

        //Chọn số bản ghi trong 1 trang (truyền vào các tham số theo thứ tự: (id hoặc class, data-name, phần nội dung cần thay đổi)
        chooseOption($('.option-records'), 'name', $('#choiceRangeRecord'));

        //Render bản ghi ra table
        $('.option-records').click(function(){
            getRangeRecords($(this).data('records'));
        });

        //Chọn số phòng ban (truyền vào các tham số theo thứ tự: (id hoặc class, data-name, phần nội dung cần thay đổi, dữ liệu trả về)
        chooseOption($('.option-departments'), 'name');

        //Phân trang theo nút số trang
        $('.page-number').click(function(){
            getDataByPageNumber(choosePageNumber($(this), 'page-number'));
        });

        // Nút chuyển trang Trước
        $('.btn-prev').click(function(){
            getDataByPageNumber($('.btn-prev').data('prev-page'));
        })

        // Nút chuyển trang Sau
        $('.btn-next').click(function(){
            getDataByPageNumber($('.btn-next').data('next-page'));
        })

        // Nút Cất
        $('#btnSave').click(validateData);

        // Nút Cất và thêm
        $('#btnSaveAndAdd').click(btnSaveByClick);

        //Nút check-all cho toàn bộ nhân viên
        $('#checkAll').change(checkAllChange);

        //Nút check từng nhân viên
        $(document).on('change', $('.check-employee'), function(){
            checkItemChange();
        })
        
        // Nút đóng popup cảnh báo sai dữ liệu
        $('.btn-agree button').click(function(){
            hideWarning($('#wrapperCheckData'));
        });

        //Nút đóng popup không được để trống
        $('.btn-close button').click(function(){
            hideWarning($('#wrapperRequired'));
        });
    } catch (error) {
        console.log(error);
    }
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
 * @param {element} item Truyền element cần ẩn hoặc hiện
 * Author: LCDAT (23/10/2022)
 */
export function showHide(item){
    try {
        if(item.css('display') == "block"){
            item.css('display', "none");
        } else {
            item.css('display', "block");
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * Hiện các popup cảnh báo
 * @param {element} item Đối tượng cần hiện
 * @param {element} itemText Đối tượng chứa nội dung cảnh báo
 * @param {string} text Nội dung cảnh báo
 */
export function showWarning(item, itemText, text){
    try {
        $(item).css('display', 'flex');
        $(itemText).text(text);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Ẩn các popup cảnh báo
 * @param {element} item Đối tượng cần ẩn
 */
function hideWarning(item){
    try {
        $(item).css('display', 'none');
    } catch (error) {
        console.log(error);
    }
}

/**
 * Đổi nội dung trên thân dropdown và dropup
 * @param {element} item Vùng lựa chọn
 * @param {kiểu dataset} dataName dạng data theo khai báo bên html
 * @param {element} choice element lựa chọn ở trong vùng
 * Author: LCDAT (24/10/2022)
 */
function chooseOption(item, dataName, choice){
    try {
        $(item).each(function(){
            $(this).click(function(){
                choice.text($(this).data(dataName));
            })
        })
    } catch (error) {
        console.log(error);
    }
}


/**
 * ấy ra số trang hiện tại
 * @param {element} item class chung các số trang
 * @param {dataset} data tên data chung của các số trang
 * @returns trả về kết quả validate
 * Author: LCDAT (25/10/2022)
 */
function choosePageNumber(item, data){
    try {
        console.log($(item).data(data));
        return $(item).data(data);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Thực hiện validate dữ liệu
 * Author: LCDAT (19/10/2022)
 */
export function validateData(){
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

                // Hiển thị popup báo lỗi để trống
                if($('#txtEmployeeCode').val() == ''){
                    showWarning($('#wrapperRequired'), $('.warning-text p'), 'Mã nhân viên không được để trống');
                    break;
                }
                if($('#txtFullName').val() == ''){
                    showWarning($('#wrapperRequired'), $('.warning-text p'), 'Tên nhân viên không được để trống');
                    break;
                }
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
 * return Element tìm được
 * Author: Web (20/10/2022)
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

/**
 * Ẩn hiện chức năng nút Sửa
 * Author: LCDAT (26/10/2022)
 */
export function showHideDropdownFixed(){
    try {
        $('.wrap-btn-edit').each(function(){
            $(this).click(function(){
                let coor = $(this)[0].getBoundingClientRect();
                showHide($('.edit-list'));
                $('.edit-list').css('position', 'fixed')
                $('.edit-list').css('top', coor.y + 20);
                $('.edit-list').css('left', coor.x - 90);
            })
        })
    } catch (error) {
        console.log(error);
    }
}

/**
 * Gọi form đổi title
 * Author: LCDAT (26/10/2022)
 */
export function editEmployeeInfo(){
    try {
        $('.table-row-data').each(function(){
            $(this).dblclick(function(){
                $('.info-form-title p').text('Sửa thông tin nhân viên'); 
                showFormEmployeeInformation();
            })
        })  
    } catch (error) {
        console.log(error);
    } 
}