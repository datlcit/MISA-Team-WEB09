
/**
 * Định dạng ngày tháng năm
 * @param {dob} date Chuỗi ngày tháng năm nhận được
 * Author: LCDAT (26/10/2022)
 */
export function formatDateDDMMYYYY(dob){
    try {
        // CHuyển định dạng ngày tháng năm
        
        if(dob){ // Nếu dob không có dữ liệu sẽ bỏ qua còn có thì sẽ format lại như sau
            let date = new Date(dob);
            // Lấy ngày tháng năm
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            // Điều chỉnh cách hiển thị ngày tháng
            day = day < 10 ? `0${day}` : day;
            month = month < 10 ? `0${month}` : month;

            dob = `${day}/${month}/${year}`;
            return dob;
        }
        return "";
    } catch (error) {
        console.log(error);
    }
}