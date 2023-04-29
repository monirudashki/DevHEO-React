import axios from "axios";
import { IUser } from "Types/User.type";
import { UserDTO } from "Types/UserDTO.type";
import { baseUrl } from "./constants";

export const getCurrentUser = async () => {
    try {
        return await axios.get<IUser>(`${baseUrl}/users/profile`, { withCredentials: true });
    } catch (error) {
        throw error
    }
}

export const login = async (userData: UserDTO): Promise<IUser> => {
    try {
        const response = await axios.post(`${baseUrl}/login`, userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        throw error
    }
}

export const register = async (formData: FormData): Promise<IUser> => {
    try {
        const { data } = await axios.post(`${baseUrl}/register`, formData, { withCredentials: true });
        return data;
    } catch (error) {
        throw error
    }
}
