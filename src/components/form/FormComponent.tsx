
import userValidator from "../../validators/user.validators.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {login, LoginData} from "../../services/api-login.service.ts";





const FormComponent = () => {


    const {handleSubmit, register, formState:{errors, isValid}}  =
        useForm<LoginData>({mode:'all', resolver:joiResolver(userValidator)});

    const customHandler = (data:LoginData
    ) => {

        console.log(data)
       const loginData:LoginData = {
            username:data.username,
            password:data.password,
            expiresInMins:1,
        };

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