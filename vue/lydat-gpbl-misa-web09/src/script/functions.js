import {display, showHide} from './common.js'

/**
 * Hiển thị form thông tin
 * Author: LCDAT (19/10/2022)
 */
 export function showFormEmployeeInformation(){
    try {
        document.getElementById('formAddEmployee').style.display = "flex";
        document.getElementById('txtEmployeeCode').focus();
    } catch (error) {
        console.log(error);
    }
}

/**
 * Thu sidebar
 * Author: LCDAT (23/10/2022)
 */
 export function hideMenu(){
    try {
        if(document.getElementById('wrapper').style.position != "relative"){
            document.getElementById('wrapper').style.position = "relative";
            document.getElementById('headerAndMain').style.position = "absolute";
            document.getElementById('headerAndMain').style.left = "48px"
            document.getElementById('headerAndMain').style.width = 'calc(100% - 48px)';
            display('iconGridLink', 'none');
            display('iconMenu', 'none');
            display('iconMenuSidebarLink', 'block');
        } 
    } catch (error) {
        console.log(error);
    }
}

/**
 * Mở rộng sidebar
 * Author: LCDAT (23/10/2022)
 */
export function showMenu(){
    try {
        if(document.getElementById('iconMenuSidebarLink').style.display == "block"){
            document.getElementById('wrapper').style.position = 'static';
            document.getElementById('headerAndMain').style.position = 'static';
            document.getElementById('headerAndMain').style.width = 'calc(100% - 200px)';
            display('iconMenuSidebarLink', 'none');
            display('iconGridLink', 'block');
            display('iconMenu', 'block');
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
        let editList = document.getElementById('editList');
        let editBtn = document.getElementsByClassName('wrap-btn-edit');
        for(let i=0;i<editBtn.length;i++){
        editBtn[i].onclick = function(){
            let coor =  editBtn[i].getBoundingClientRect();
            showHide('editList');
            editList.style.top = `${coor.y + 20}px`;
            editList.style.left = `${coor.x - 90}px`;
            editList.style.position = "fixed";
        }
       }
    } catch (error) {
        console.log(error);
    }
}

/**
 * Checkbox tích cho toàn bộ nhân viên
 * Author: LCDAT (22/10/2022)
 */

 export function checkAllChange(){
    try {
        let checkEmployee = document.getElementsByClassName('check-employee');
        for(let i=0; i< checkEmployee.length; i++){
            if(document.getElementById('checkAll').checked == true){
                checkEmployee[i].checked = true;
            } else {
                checkEmployee[i].checked = false;
            }
        }
    } catch (error) {
        console.log(error);
    }
}


/**
 * Checkbox xử lý khi check từng nhân viên
 * Author: LCDAT (22/10/2022)
 */
 export function checkItemChange(){
    try {
        let count = 0;
        let checkAll = document.getElementById('checkAll');
        let checkEmployee = document.getElementsByClassName('check-employee');
        for(let i=0; i< checkEmployee.length; i++){
            if(checkEmployee[i].checked == true){
                count++;
            }
        }
        if(count == checkEmployee.length){
            checkAll.checked = true;
        } else {
            checkAll.checked = false;
        }
    } catch (error) {
        console.log(error);
    }
}