const BASE_URL = "https://amis.manhnv.net/api/v1";
export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_PAGE_NUMBER = 1;
export const API = {
    GET_ALL_DEPARTMENT: `${BASE_URL}/Departments`,
    GET_ALL_EMPLOYEE: `${BASE_URL}/Employees`,
    FILTER_EMPLOYEE: `${BASE_URL}/Employees/filter?employeeFilter=`,
}