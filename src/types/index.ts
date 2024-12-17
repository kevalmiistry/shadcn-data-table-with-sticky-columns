export interface User {
  index: number;
  name: string;
  email: string;
  phone_number: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  date_of_birth: string;
  company: string;
  job_title: string;
  salary: string;
  last_login: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
