
import userValidator from "../../validators/user.validators.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {login} from "../../services/api-login.service.ts";



interface IFormComponentProps {
    username: string;
    password: string;
    expiresInMins: number;


}

const FormComponent = () => {


    const {handleSubmit, register, formState:{errors, isValid}}  =
        useForm<IFormComponentProps>({mode:'all', resolver:joiResolver(userValidator)});

    const customHandler = (data:IFormComponentProps
    ) => {

        console.log(data)
        const loginData:IFormComponentProps = {
            username:data.username,
            password:data.password,
            expiresInMins:1
        }

        login(loginData);
    }




    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label className={'block'}>
                    <input className={'border-2 border-black'}   type="text" {...register('username')} placeholder="username"/>

                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label>
                    <input  className={'border-2 border-black'} type="text" {...register('password')} placeholder="password"/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                    <br/>
                <button className={'border-2 bg-green-300 '} disabled={!isValid}>Log in</button>
            </form>

        </div>
    );
};

export default FormComponent;