/**
 * Ẩn hiện bất kì
 * @param {element} item Truyền element cần ẩn hoặc hiện
 * Author: LCDAT (23/10/2022)
 */
 export function showHide(item){
    try {
        if(document.getElementById(item).style.display == "block"){
            document.getElementById(item).style.display = 'none';
        } else {
            document.getElementById(item).style.display = "block";
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * Ẩn bất kì
 * Author: LCDAT (19/10/2022)
 */
 export function displayNone(id){
    try {
        document.getElementById(id).style.display = "none";
    } catch (error) {
        console.log(error);
    }
}

/**
 * display block bất kì
 * Author: LCDAT (19/10/2022)
 */
 export function displayBlock(id){
    try {
        document.getElementById(id).style.display = "block";
    } catch (error) {
        console.log(error);
    }
}