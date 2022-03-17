import { IUser } from "./user";

export interface ITheme {
    subscribers: string [];
    _id: string;
    posts: string [];
    userId: IUser;
    themeName: string;
    updatedAt: string;
    created_at: string;
    __v: number;
}
