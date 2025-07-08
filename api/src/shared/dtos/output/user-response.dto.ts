export interface UserResponseDTO {
  userId: string;
  name: string;
  email: string;
  role: "admin" | "user";
}
