import {useParams} from "react-router-dom";
import {useEffect} from "react";
import ShowDetailUserComponent from "../show-detail-user/ShowDetailUserComponent.tsx";

import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {userActions} from "../../redux/user-slice/UserSlice.ts";



const ShowDetailsUsersComponent = () => {
   const{id} = useParams();

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userSlice.users)

    useEffect(() => {
        dispatch(userActions.loadUsers());

}, [id]);
    return (
        <div>
            {

                users &&
                users.map(user=><ShowDetailUserComponent key={user.id} user={user}/>)
            }

        </div>
    );
};

export default ShowDetailsUsersComponent;