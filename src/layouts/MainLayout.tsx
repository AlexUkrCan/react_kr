import {Outlet} from "react-router-dom";
import MainMenu from "../menu/MainMenu.tsx";


const MainLayout = () => {
    return (
        <div >
            <div className={'font-bold' }>You are not authorized. Please sign in using Autentefication Page!</div>

            <div className={'bg-yellow-300'}>
                <MainMenu/>

                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;