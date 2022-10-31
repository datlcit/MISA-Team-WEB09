import {display} from './common.js'

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
 * Hiện các popup cảnh báo
 * @param {element} item Đối tượng cần hiện
 * @param {element} itemText Đối tượng chứa nội dung cảnh báo
 * @param {string} text Nội dung cảnh báo
 */
//  export function showWarning(item, itemText, text){
//     try {
//         document.getElementById(item).style('display', 'flex');
//         $(itemText).text(text);
//     } catch (error) {
//         console.log(error);
//     }
// }