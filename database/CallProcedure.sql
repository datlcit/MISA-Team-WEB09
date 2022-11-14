-- Lấy ra toàn bộ nhân viên
CALL `misa.web09.gpbl.lcdat`.Proc_employee_GetAll();

-- Insert một nhân viên
CALL `misa.web09.gpbl.lcdat`.PROC_employee_Insert(
UUID(), 
'NV12634', 
'Đào Trọng Khang', 
'469b3ece-744a-45d5-957d-e8c757976496',  
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
'ACB Duy Tân',
'Giám đốc');

-- Láy thông tin chi tiết nhân viên theo id nhân viên
CALL `misa.web09.gpbl.lcdat`.PROC_employee_GetById('9dc06295-5eb8-11ed-92cd-74e5f93472a8');

-- Xóa một nhân viên theo id nhân viên
CALL `misa.web09.gpbl.lcdat`.PROC_employee_Delete('11131abd-1b99-688b-96f6-423b4e874d0f');

-- Lấy mã nhân viên lớn nhất
CALL `misa.web09.gpbl.lcdat`.PROC_employee_GetMaxCode();

-- Cập nhật thông tin nhân viên
CALL `misa.web09.gpbl.lcdat`.PROC_employee_Update(
'9dc06295-5eb8-11ed-92cd-74e5f93472a8',
'NV1234',
'Đào Trọng Kheng', 
'469b3ece-744a-45d5-957d-e8c757976496',
'Giám đốc',
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

-- Filter
CALL `misa.web09.gpbl.lcdat`.PROC_employee_GetPaging(0, 10, null, "EmployeeName like '%Quang%'");

SELECT * FROM Employee e
where e.EmployeeId = '11326c16-72e5-61b3-82c2-579daad24557'

SELECT * FROM Employee e
where e.EmployeeCode = 'NV1234'