import { Dispatch, SetStateAction } from "react"

type FormValuesLogin = {
    email: string,
    password: string
}

type LoginErrors = {
    email: boolean,
    password: boolean
}


export type inputTextProps = {
    labelName: string,
    name: string,
    errorMessage: string,
    formValues: FormValuesLogin,
    onChangeValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setErrors: Dispatch<SetStateAction<{ email: boolean; password: boolean; }>>,
    validator: (e: React.ChangeEvent<HTMLInputElement>, setter: any, formValues: any) => void,
    errors: LoginErrors
}