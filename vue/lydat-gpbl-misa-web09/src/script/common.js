/**
 * Ẩn hiện bất kì
 * @param {element} item Truyền element cần ẩn hoặc hiện
 * Author: LCDAT (23/10/2022)
 */
 export function showHide(item){
    try {
        if(document.getElementById(item).style.display == "block"){
            display(item, 'none');
        } else {
            display(item, 'block');
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * Kiểu hiển thị bất kì
 * Author: LCDAT (19/10/2022)
 */
 export function display(id, type){
    try {
        document.getElementById(id).style.display = type;
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
        display(item, 'flex');
        document.getElementById(itemText).innerHTML = text;
    } catch (error) {
        console.log(error);
    }
}