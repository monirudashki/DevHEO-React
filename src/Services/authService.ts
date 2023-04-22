import axios from "axios";
import { baseUrl } from "./constants";

export const getCurrentUser = async () => {
    try {
        return await axios.get(`${baseUrl}/users/profile`);
    } catch (error) {
        throw error
    }
}