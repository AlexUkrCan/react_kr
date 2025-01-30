import {Outlet} from "react-router-dom";
import MainMenu from "../menu/MainMenu.tsx";


const MainLayout = () => {
    return (
        <div className={'bg-yellow-300'}>
            <div className={'font-bold' }>You are not authorized. Please sign in using Autentefication Page!</div>
            <br/>
            <MainMenu/>
            <br/>
            <Outlet />

        </div>
    );
};

export default MainLayout;