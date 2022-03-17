import { ITheme, IUser } from ".";

export interface IPost {
        likes: string[];
        _id: string;
        text: string;
        userId: IUser;
        themeId: ITheme;
        created_at: string;
        updatedAt: string;
        __v: number;
}