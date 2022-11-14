SELECT e.EmployeeCode, e.EmployeeName, e.Gender, e.DateOfBirth, e.IdentityNumber, e.PositionName, d.DepartmentName, e.BankAccountNumber, e.BankName, e.BankBranchName
  FROM employee e
  JOIN department d ON e.DepartmentId = d.DepartmentId
  WHERE e.EmployeeCode = 'NV12';

SELECT * FROM employee WHERE EmployeeCode = 'NV0981';

SELECT CURDATE() today;

