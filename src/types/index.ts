export interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  date_of_birth: number;
  company: string;
  job_title: string;
  salary: string;
  last_login: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
