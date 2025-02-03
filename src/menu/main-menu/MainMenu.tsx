import {Link} from "react-router-dom";


const MainMenu = () => {
    return (
        <div>
            <ul>
                <li className={'text-emerald-700'}><Link to={'login'}>Authentefication Page</Link></li>
                {/*<li className={'text-indigo-950'}><Link to={'auth/users'}>Users Page</Link></li>*/}
                {/*<li className={'text-red-900'}><Link to={'auth/recipes'}>Recipes Page</Link></li>*/}

            </ul>

        </div>
    );
};

export default MainMenu;