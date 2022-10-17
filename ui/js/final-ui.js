// Popup form thông tin nhân viên

// Gán id tổng
var formAddEmp = document.getElementById("form-add-employee");

var addEmp = document.getElementById("btn-add-employee");
addEmp.onclick = function(){
    formAddEmp.style.display = "flex";
}

var formClose = document.getElementById("form-close");
formClose.onclick = function(){
    formAddEmp.style.display = "none";
}

var formClose2 = document.getElementById("form-close-2");
formClose2.onclick = function(){
    formAddEmp.style.display = "none";
}

// var btnEdit = document.getElementsByClassName("wrap-btn-edit");
// var editList = document.getElementsByClassName("edit-list");
// btnEdit.onclick = function(){
    
//     editList.style.zIndex = "10";
//     editList.style.display = "block";
// }

var showHideMenu = document.getElementById("icon-menu");
var sideBar = document.getElementById("sidebar");
var wrapper = document.getElementById("wrapper");
var headerAndMain = document.getElementById("header-and-main");
showHideMenu.onclick = function(){
    // if(sideBar.style.width == '200px'){
    //     headerAndMain.style.width = "calc(100% - 200px)";
    // } else {
        
    // }
    if(wrapper.style.position == "relative"){
        wrapper.style.position = "static";
        headerAndMain.style.position = "static";
        headerAndMain.style.width = "calc(100% - 200px)";
    } else {
        wrapper.style.position = "relative";
        headerAndMain.style.position = "absolute";
        headerAndMain.style.left = "48px";
        headerAndMain.style.width = "calc(100% - 48px)";
    }
    
}