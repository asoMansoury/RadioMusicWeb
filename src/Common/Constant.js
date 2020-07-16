// export const BaseApiUrl = 'http://185.83.114.167:8016/api';
// export const BaseApiUrl = 'http://192.168.106.2:53094/api';
export const BaseApiUrl = 'http://localhost:53094/api';


export const PlatformType = "Web";
export const TLanguageID = {
    English: "ENG",
    Persian: "PER"
}

export const UIPageKey = {
    Authentication:'Authentication',
    AdminPanel:'AdminPanel'
}

export const RoutesKey ={
    Root:"/",
    Home:"/Home",
    Authentication:"/Authentication",
    AdminPanel:"/AdminPanel"

}

export const UIErrorMessageCode = {
    EmailIncorrect : "EMINC",
    MobileFormat : "MBINC",
    InputConfirmationCode:"INCAG",
    PasswordMustInputted:"PMINP",
    PasswordAndConfirmPasswordIsNotSame:"PACIN",
    PasswordAndConfirmPasswordIsCorrect:"PACIV"
}

export const apiForms ={
    UserApiController:"UserApiController",
    RolesApiController:"RolesApiController"
}