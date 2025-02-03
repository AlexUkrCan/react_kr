import {useEffect, useState} from "react";
import UserComponent from "./UserComponent.tsx";
import {loadAuthUsers, refresh} from "../../services/login-service/api-login.service.ts";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {userActions} from "../../redux/user-slice/UserSlice.ts";


const UsersComponent = () => {


    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userSlice.users)

    useEffect(() => {

        dispatch(userActions.loadUsers());

        refresh()
        .then(() =>loadAuthUsers())
                .then(users =>console.log(users))


    },[]);

    const[searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <div>Search</div>
            <div>
                <input value={searchTerm} type="text" placeholder="Search users" onChange={(e)=>setSearchTerm(e.target.value)}/>

            </div>
            {
                users.map(user =><UserComponent key={user.id} user={user}/>)
            }

        </div>
    );
};

export default UsersComponent;