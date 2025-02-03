import {Link} from "react-router-dom";


const MainMenu = () => {
    return (
        <div>
            <ul>
                <li className={'text-emerald-700'}><Link to={'login'}>Authentefication Page</Link></li>


            </ul>

        </div>
    );
};

export default MainMenu;