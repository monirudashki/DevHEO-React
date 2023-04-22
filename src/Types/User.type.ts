import { IPost } from './Post.type';

export type IUser = {
    email: string;
    username: string;
    imageUrl: string;
    password: string;
    myPosts: IPost[];
    favorite: IPost[];
    skillsToLearn: string[];
    learnedSkills: string[];
    _id: string;
    roles: string;
    created_at: string;
    updatedAt: string;
    __v: number;
}