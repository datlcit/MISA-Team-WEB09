SELECT e.EmployeeCode, e.EmployeeName, e.Gender, e.DateOfBirth, e.IdentityNumber, j.PositionName, d.DepartmentName, e.BankAccountNumber, e.BankName, e.BankBranchName
  FROM employee e
  JOIN department d ON e.DepartmentId = d.DepartmentId
  JOIN jobposition j ON e.PositionId = j.PositionId
  WHERE e.EmployeeCode = 'NV12';

SELECT * FROM employee WHERE EmployeeCode = 'NV12';

SELECT CURDATE() today;