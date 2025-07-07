export interface RegisterUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface UserResponseDTO {
  userId: string;
  name: string;
  email: string;
  role: "admin" | "user";
}
