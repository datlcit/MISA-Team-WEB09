using Dapper;
using Microsoft.AspNetCore.Mvc;
using MISA.AMIS.NhanVien.API.Entities;
using MISA.AMIS.NhanVien.API.Entities.DTO;
using MySqlConnector;
using System.Diagnostics;

namespace MISA.AMIS.NhanVien.API.Controllers
{
    [Route("api/v1/[controller]")] //attribute
    [ApiController]
    public class EmployeesController : ControllerBase // extends, implements
    {
        /// <summary>
        /// API Lấy danh sách tất cả nhân viên
        /// </summary>
        /// <returns>Danh sách tất cả nhân viên</returns>
        /// Created by: LCDAT (06/11/2022)
        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            try
            {
                // Khởi tạo kết nối tới DB MySQL
                string connectionString = "Server=localhost;Port=3306;Database=misa.web09.gpbl.lcdat;Uid=root;Pwd=123456789;";
                var mySqlConnection = new MySqlConnection(connectionString);

                // Chuẩn bị câu lệnh SQL
                string storeProcedureName = "PROC_employee_GetAll";

                // Thực hiện gọi vào DB
                var employees = mySqlConnection.Query(storeProcedureName, commandType: System.Data.CommandType.StoredProcedure);

                // Xử lý kết quả trả về

                if (employees != null)
                {
                    // Thành công: Trả vè dữ liệu cho client
                    return StatusCode(StatusCodes.Status200OK, employees);
                }

                return StatusCode(StatusCodes.Status200OK, new List<Employee>());

                
            }
            catch (Exception ex)
            {
                // Try catch exception có log lỗi
                Console.WriteLine(ex.Message);
                // Trả về lỗi nếu thất bại
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    ErrorCode = 1,
                    DevMsg = "Catched an exception.",
                    UserMsg = "Có lỗi xảy ra, vui lòng liên hệ MISA.",
                    MoreInfo = "https://openapi.misa.com.vn/errorcode/1",
                    TraceId = HttpContext.TraceIdentifier
                });
            }
        }

        /// <summary>
        /// API Lấy thông tin một nhân viên theo ID
        /// </summary>
        /// <returns>Thông tin nhân viên muốn lấy</returns>
        /// Created by: LCDAT(06/11/2022)
        [HttpGet("{employeeId}")]
        public IActionResult GetEmployeeById([FromRoute] Guid employeeId)
        {

            try
            {
                // Khởi tạo kết nối tới DB MySQL
                string connectionString = "Server=localhost;Port=3306;Database=misa.web09.gpbl.lcdat;Uid=root;Pwd=123456789;";
                var mySqlConnection = new MySqlConnection(connectionString);

                // Chuẩn bị câu lệnh SQL
                string storeProcedureName = "PROC_employee_GetById";

                // Chuẩn bị tham số  đầu vào
                var parameter = new DynamicParameters();
                parameter.Add("@keyId", employeeId);

                // Thực hiện gọi vào DB
                var employee = mySqlConnection.QueryFirstOrDefault<Employee>(storeProcedureName, parameter, commandType: System.Data.CommandType.StoredProcedure);

                // Xử lý kết quả trả về
                if (employee != null)
                {
                    // Thành công: Trả vè dữ liệu cho client
                    return StatusCode(StatusCodes.Status200OK, employee);
                }

                // Thất bại: Trả về lỗi
                return StatusCode(StatusCodes.Status404NotFound);

                // Try catch exception có log lỗi
            }
            catch (Exception ex)
            {
                // Try catch exception có log lỗi
                Console.WriteLine(ex.Message);
                // Trả về lỗi nếu thất bại
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    ErrorCode = 1,
                    DevMsg = "Catched an exception.",
                    UserMsg = "Có lỗi xảy ra, vui lòng liên hệ MISA.",
                    MoreInfo = "https://openapi.misa.com.vn/errorcode/1",
                    TraceId = HttpContext.TraceIdentifier
                });
            }
        }

        ///// <summary>
        ///// API lấy danh sách nhân viên theo bộ lọc và phân trang
        ///// </summary>
        ///// <param name="keyword">Từ khóa muốn tìm kiếm</param>
        ///// <param name="employeeCode">Mã nhân viên muốn lọc</param>
        ///// <param name="employeeName">Tên nhân viên muốn lọc</param>
        ///// <param name="phoneNumber">Số điện thoại nhân viên muốn lọc</param>
        ///// <param name="limit">Số bản ghi muốn lấy</param>
        ///// <param name="offset">Vị trí của bản ghi bắt đầu lấy</param>
        ///// <returns>Danh sách nhân vien và tổng số bản ghi</returns>
        ///// Created by: LCDAT (06/11/2022)
        //[HttpGet("filter")]
        //public IActionResult GetEmployeeByFilterAndPaging(
        //    // Lọc
        //    [FromQuery] string? keyword, // dấu ? là nullable tức là cho phép null
        //    [FromQuery] string? employeeCode,
        //    [FromQuery] string? employeeName,
        //    [FromQuery] string? phoneNumber,
        //    //Phân trang
        //    [FromQuery] int limit = 10, // mặc định lấy 10 bản ghi
        //    [FromQuery] int offset = 0 // mặc định lấy 10 bản ghi đầu tiên nếu 0 truyền limit offset
        //    )
        //{

        //    // Khởi tạo kết nối tới DB MySQL
        //    string connectionString = "Server=localhost;Port=3306;Database=misa.web09.gpbl.lcdat;Uid=root;Pwd=123456789;";
        //    var mySqlConnection = new MySqlConnection(connectionString);

        //    // Chuẩn bị câu lệnh SQL
        //    string storeProcedureName = "PROC_employee_GetPaging";

        //    //Chuẩn bị tham số đầu vào
        //    var parameters = new DynamicParameters();
        //    parameters.Add("v_Offset", offset);
        //    parameters.Add("v_Limit", limit);
        //    parameters.Add("v_Sort", employeeName);
        //    parameters.Add("v_Where", keyword);
        //    return StatusCode(StatusCodes.Status200OK, new PagingResult
        //    {
        //        Data = new List<Employee>
        //        {
        //            new Employee
        //            {
        //                EmployeeId = Guid.NewGuid(),
        //                EmployeeCode = "NV0001",
        //                EmployeeName = "Lý Chính Đạt",
        //                DateOfBirth = DateTime.Now,
        //                Gender = Enums.Gender.Male,
        //                CreatedBy = "Lý CHính Đạt",
        //                CreatedDate = DateTime.Now,
        //                ModifiedBy = "Lý CHính Đạt",
        //                ModifiedDate = DateTime.Now
        //            },
        //            new Employee
        //            {
        //                EmployeeId = Guid.NewGuid(),
        //                EmployeeCode = "NV0002",
        //                EmployeeName = "Nguyễn Văn A",
        //                DateOfBirth = DateTime.Now,
        //                Gender = Enums.Gender.Male,
        //                CreatedBy = "Lý CHính Đạt",
        //                CreatedDate = DateTime.Now,
        //                ModifiedBy = "Lý CHính Đạt",
        //                ModifiedDate = DateTime.Now
        //            },
        //            new Employee
        //            {
        //                EmployeeId = Guid.NewGuid(),
        //                EmployeeCode = "NV0003",
        //                EmployeeName = "Trần Thị B",
        //                DateOfBirth = DateTime.Now,
        //                Gender = Enums.Gender.Female,
        //                CreatedBy = "Lý CHính Đạt",
        //                CreatedDate = DateTime.Now,
        //                ModifiedBy = "Lý CHính Đạt",
        //                ModifiedDate = DateTime.Now
        //            }
        //        },
        //        TotalCount = 3
        //    });
        //}

        [HttpGet("NewEmployeeCode")]

        public IActionResult GetNewCode()
        {
            try
            {
                // Khởi tạo kết nối tới DB MySQL
                string connectionString = "Server=localhost;Port=3306;Database=misa.web09.gpbl.lcdat;Uid=root;Pwd=123456789;";
                var mySqlConnection = new MySqlConnection(connectionString);

                // Chuẩn bị câu lệnh SQL
                string storeProcedureName = "PROC_employee_GetMaxCode";

                // Thực hiện gọi vào DB
                string maxCode = mySqlConnection.QueryFirstOrDefault<String>(storeProcedureName, commandType: System.Data.CommandType.StoredProcedure);

                if (maxCode != "")
                {
                    string newEmployeeCode;
                    newEmployeeCode = "NV" + (Int64.Parse(maxCode.Substring(2)) + 1).ToString();
                    return StatusCode(StatusCodes.Status200OK, newEmployeeCode);
                }

                return StatusCode(StatusCodes.Status200OK, "NV001");
            }
            catch (Exception ex)
            {
                // Try catch exception có log lỗi
                Console.WriteLine(ex.Message);
                // Trả về lỗi nếu thất bại
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    ErrorCode = 1,
                    DevMsg = "Catched an exception.",
                    UserMsg = "Có lỗi xảy ra, vui lòng liên hệ MISA.",
                    MoreInfo = "https://openapi.misa.com.vn/errorcode/1",
                    TraceId = HttpContext.TraceIdentifier
                });
            }

        }

        /*/// <summary>
        /// Lấy mã nhân viên mới
        /// </summary>
        /// <returns></returns>
        [HttpGet ("newEmployeeCode")]
        public IActionResult GetNewEmployeeCode()
        {
            return StatusCode(StatusCodes.Status200OK, Guid.NewGuid());
        }*/

        /// <summary>
        /// API Thêm mới 1 nhân viên
        /// </summary>
        /// <param name="employee">Đối tượng nhân viên cần thêm mới</param>
        /// <returns>ID của nhân viên vừa thêm mới</returns>
        /// Created by: LCDAT (06/11/2022)
        [HttpPost]
        public IActionResult InsertEmployee([FromBody] Employee employee)
        {

            try
            {
                // Khởi tạo kết nối tới DB MySQL
                string connectionString = "Server=localhost;Port=3306;Database=misa.web09.gpbl.lcdat;Uid=root;Pwd=123456789;";
                var mySqlConnection = new MySqlConnection(connectionString);

                // Chuẩn bị câu lệnh SQL
                string storeProcedureName = "PROC_employee_Insert";

                // Chuẩn bị tham số đầu vào
                var newEmployeeId = Guid.NewGuid(); // gán guid vào 1 biến để không bị đổi nếu gọi lại
                var parameters = new DynamicParameters();
                parameters.Add("@EmployeeId", newEmployeeId);
                parameters.Add("@EmployeeCode", employee.EmployeeCode);
                parameters.Add("@EmployeeName", employee.EmployeeName);
                parameters.Add("@DepartmentId", employee.DepartmentId);
                parameters.Add("@DateOfBirth", employee.DateOfBirth);
                parameters.Add("@Gender", employee.Gender);
                parameters.Add("@IdentityNumber", employee.IdentityNumber);
                parameters.Add("@IdentityDate", employee.IdentityDate);
                parameters.Add("@IdentityPlace", employee.IdentityPlace);
                parameters.Add("@Address", employee.Address);
                parameters.Add("@PhoneNumber", employee.PhoneNumber);
                parameters.Add("@TelephoneNumber", employee.TelephoneNumber);
                parameters.Add("@Email", employee.Email);
                parameters.Add("@BankAccountNumber", employee.BankAccountNumber);
                parameters.Add("@BankName", employee.BankName);
                parameters.Add("@BankBranchName", employee.BankBranchName);
                parameters.Add("@PositionName", employee.PositionName);
                // Kiểm tra số bản ghi bị ảnh hưởng
                var numberAffectedRow = mySqlConnection.Execute(storeProcedureName, parameters, commandType: System.Data.CommandType.StoredProcedure);

                // Xử lý kết quả trả về (nếu số bản ghi >0 thì đúng)
                if (numberAffectedRow > 0)
                {
                    return StatusCode(StatusCodes.Status201Created, newEmployeeId);
                }

                // Thất bại: Trả về lỗi
                return StatusCode(StatusCodes.Status500InternalServerError, new
                    {
                        ErrorCode = 2,
                        DevMsg = "Database insert failed!.",
                        UserMsg = "Thêm mới nhân viên thất bại.",
                        MoreInfo = "https://openapi.misa.com.vn/errorcode/2",
                        TraceId = HttpContext.TraceIdentifier
                    }
                );

                // Try catch exception có log lỗi
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    ErrorCode = 1,
                    DevMsg = "Catched an exception.",
                    UserMsg = "Có lỗi xảy ra, vui lòng liên hệ MISA.",
                    MoreInfo = "https://openapi.misa.com.vn/errorcode/1",
                    TraceId = HttpContext.TraceIdentifier
                }
               );
            }
        }
           
        /// <summary>
        /// API Sửa thông tin nhân viên theo ID
        /// </summary>
        /// <param name="employeeId"></param> ID nhân viên muốn sửa
        /// <param name="employee"></param> Đối tượng nhân viên muốn sửa
        /// <returns>ID của nhân viên vừa sửa</returns>
        /// Created by: LCDAT (06/11/2022)
        [HttpPut("{employeeId}")]
        public IActionResult UpdateEmployee(
            [FromRoute] Guid employeeId,
            [FromBody] Employee employee)
        {
            try
            {
                // Khởi tạo và kết nối DB với MySQL
                string connectionString = "Server=localhost;Port=3306;Database=misa.web09.gpbl.lcdat;Uid=root;Pwd=123456789;";
                var mySqlConnection = new MySqlConnection(connectionString);

                //CHuẩn bị câu lệnh SQL
                string storeProcedureName = "PROC_employee_Update";

                // Chuẩn bị tham số đầu vào
                var parameters = new DynamicParameters();
                parameters.Add("keyEmployeeId", employeeId);
                parameters.Add("@EmployeeCode", employee.EmployeeCode);
                parameters.Add("@EmployeeName", employee.EmployeeName);
                parameters.Add("@DepartmentId", employee.DepartmentId);
                parameters.Add("@PositionName", employee.PositionName);
                parameters.Add("@Gender", employee.Gender);
                parameters.Add("@DateOfBirth", employee.DateOfBirth);
                parameters.Add("@IdentityNumber", employee.IdentityNumber);
                parameters.Add("@IdentityDate", employee.IdentityDate);
                parameters.Add("@IdentityPlace", employee.IdentityPlace);
                parameters.Add("@Address", employee.Address);
                parameters.Add("@PhoneNumber", employee.PhoneNumber);
                parameters.Add("@TelephoneNumber", employee.TelephoneNumber);
                parameters.Add("@Email", employee.Email);
                parameters.Add("@BankAccountNumber", employee.BankAccountNumber);
                parameters.Add("@BankName", employee.BankName);
                parameters.Add("@BankBranchName", employee.BankBranchName);

                // Kiểm tra số bản ghi bị ảnh hưởng
                var numberAffectedRow = mySqlConnection.Execute(storeProcedureName, parameters, commandType: System.Data.CommandType.StoredProcedure);

                // Xử lý kết quả trả về (nếu số bản ghi >0 thì đúng)
                if (numberAffectedRow > 0)
                {
                    return StatusCode(StatusCodes.Status200OK, employee);
                }

                // Thất bại: Trả về lỗi
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    ErrorCode = 2,
                    DevMsg = "Database update failed!.",
                    UserMsg = "Chỉnh sửa nhân viên thất bại.",
                    MoreInfo = "https://openapi.misa.com.vn/errorcode/2",
                    TraceId = HttpContext.TraceIdentifier
                }
                );
                // Try catch exception có log lỗi
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    ErrorCode = 1,
                    DevMsg = "Catched an exception.",
                    UserMsg = "Có lỗi xảy ra, vui lòng liên hệ MISA.",
                    MoreInfo = "https://openapi.misa.com.vn/errorcode/1",
                    TraceId = HttpContext.TraceIdentifier
                }
               );
            }
        }

        /// <summary>
        /// API Xóa một nhân viên theo ID
        /// </summary>
        /// <param name="employeeId"></param> ID của nhân viên muốn xóa
        /// <returns>ID của nhân viên muốn xóa</returns>
        /// Created by: LCDAT (06/11/2022)
        [HttpDelete("{employeeId}")]
        public IActionResult DeleteEmployee([FromRoute] Guid employeeId)
        {
            try
            {
                // Khởi tạo kết nối tới DB MySQL
                string connectionString = "Server=localhost;Port=3306;Database=misa.web09.gpbl.lcdat;Uid=root;Pwd=123456789;";
                var mySqlConnection = new MySqlConnection(connectionString);

                // Chuẩn bị câu lệnh SQL
                string storeProcedureName = "PROC_employee_Delete";

                // Chuẩn bị tham số  đầu vào
                var parameter = new DynamicParameters();
                parameter.Add("@keyId", employeeId);

                // Thực hiện gọi vào DB
                var numberOfAffectedRows = mySqlConnection.Execute(storeProcedureName, parameter, commandType: System.Data.CommandType.StoredProcedure);

                // Xử lý kết quả trả về
                if (numberOfAffectedRows > 0)
                {
                    // Thành công: Trả vè dữ liệu cho client
                    return StatusCode(StatusCodes.Status200OK, employeeId);
                }

                // Thất bại: Trả về lỗi
                return StatusCode(StatusCodes.Status500InternalServerError);

                // Try catch exception có log lỗi
            }
            catch (Exception ex)
            {
                // Try catch exception có log lỗi
                Console.WriteLine(ex.Message);
                // Trả về lỗi nếu thất bại
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    ErrorCode = 1,
                    DevMsg = "Catched an exception.",
                    UserMsg = "Có lỗi xảy ra, vui lòng liên hệ MISA.",
                    MoreInfo = "https://openapi.misa.com.vn/errorcode/1",
                    TraceId = HttpContext.TraceIdentifier
                });
            }
        }

        /// <summary>
        /// API Xóa nhiều nhân viên theo danh sách ID
        /// </summary>
        /// <param name="listEmployeeId">Danh sách ID cùa các nhân viên muốn xóa</param>
        /// <returns>Status code 200</returns>
        /// Created by: LCDAT(06/11/2022)
        [HttpPost("deleteBatch")]
        public IActionResult DeleteMultipleEmployee([FromBody] ListEmployeeId listEmployeeId)
        {
            return StatusCode(StatusCodes.Status200OK);
        }
    }
}
