export interface IFormValues {
    email: string;
    password: string;
}

export interface IFormResponce {
    user: {
        id: string;
        email: string;
    },
    accessToken: string;
}

export interface IAuthInfo {
    accessToken: string;
}

export interface IAuthMethods {
    login: (authInfo: IAuthInfo) => void;
    logout: () => void;
}

export type TAuthContextModel = IAuthInfo & IAuthMethods;

export interface IUserResponce {
    id: string;
    email: string;
    name: string;
    avatarPath: string;
    about: string;
    phone: string;
    roles: string[] 
    likes: [],
    favoritesPost: []
}