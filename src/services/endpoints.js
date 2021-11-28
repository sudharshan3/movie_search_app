import { API_BASE_URL } from "./hostSetting";

const baseUrl = API_BASE_URL;


export const endpoints = {
  hostUrl: baseUrl,
  loginUrl: `${baseUrl}/api/user/login`,
  AdminloginUrl: `${baseUrl}/api/admin/login`,
  forgetPassword: `${baseUrl}/auth/forgot-pasword`,
  resetPassword: `${baseUrl}/auth/reset-password`,

  //Department
  searchList : `${baseUrl}`,



  };