import { IUser } from './User.type'

export type IPost = {
    title: string;
    tags: string[];
    likes: string[];
    description: string;
    owner: IUser;
    _id: string;
    created_at: string;
    updatedAt: string;
    __v: number;
}