-- Lấy ra toàn bộ nhân viên
CALL `misa.web09.gpbl.lcdat`.Proc_employee_GetAll();

-- Insert một nhân viên
CALL `misa.web09.gpbl.lcdat`.PROC_employee_InsertNewEmployee(
UUID(), 
'NV12', 
'Đào Trọng Khang', 
'469b3ece-744a-45d5-957d-e8c757976496', 
'354f1b13-17bf-1b52-87d5-ba100c6f7bce', 
'1999-10-10', 
0,
'34324353', 
'2015-11-10', 
'Công an tỉnh Thái Bình', 
'Thái Bình', 
'32454354', 
'235434543', 
'nam@gmail.com', 
'6178956217', 
'ACB', 
'ACB Duy Tân');

-- Láy thông tin chi tiết nhân viên theo mã nhân viên
CALL `misa.web09.gpbl.lcdat`.PROC_employee_GetEmployeeDetail('NV12');

-- Xóa một nhân viên theo mã nhân viên
CALL `misa.web09.gpbl.lcdat`.PROC_employee_DeleteOneEmployee('NV12');

-- Lấy mã nhân viên lớn nhất
CALL `misa.web09.gpbl.lcdat`.PROC_employee_GetMaxEmployeeCode();

-- Cập nhật thông tin nhân viên
CALL `misa.web09.gpbl.lcdat`.PROC_employee_UpdateEmployee(
'NV12',
'Đào Trọng Nam', 
'17120d02-6ab5-3e43-18cb-66948daf6128', 
'1b691e79-236d-5b5a-9d20-39c2f00615e8', 
'1999-10-13', 
2,
'44444444', 
'2014-11-10', 
'Công an tỉnh Thái Nguyên', 
'Thái Nguyên', 
'5555555', 
'6666666', 
'trongnam@gmail.com', 
'77777777', 
'BIDV', 
'BIDV Duy Tân'
);

SELECT * FROM Employee e
where e.EmployeeCode = 'NV12'

