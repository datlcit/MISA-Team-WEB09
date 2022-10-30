import {displayNone, displayBlock} from './common.js'

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
            displayNone('iconGridLink');
            displayNone('iconMenu');
            displayBlock('iconMenuSidebarLink');
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
            displayNone('iconMenuSidebarLink');
            displayBlock('iconGridLink');
            displayBlock('iconMenu');
        }    
    } catch (error) {
        console.log(error);
    }
}