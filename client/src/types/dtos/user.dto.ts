export interface UserDTO {
  userId: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

export interface RegisterUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

