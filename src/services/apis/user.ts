import apiClient from "../configs/api";
import { User } from "../models/shared.model";

export function fetchUser() {
  return apiClient.get<User>(`/user`).then((response) => {
    return response.data;
  });
}
