import { IUser } from "../Types/User.type"

export type AuthContextValue = {
    currentUser: null | IUser,
    currentUserLoginHandler: (userData: IUser) => void;
}