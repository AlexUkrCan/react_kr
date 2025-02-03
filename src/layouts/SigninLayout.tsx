
import {Outlet} from "react-router-dom";
import AuthenteficationMenu from "../menu/authentefication-menu/AuthenteficationMenu.tsx";


const SigninLayout = () => {
    return (
        <div >

            <div className={'font-bold' }>You are success sign in!</div>

            <div className={'bg-yellow-300'}>
                <AuthenteficationMenu/>
                <hr/>
                <Outlet />
                <hr/>
            </div>

        </div>
    );
};

export default SigninLayout;