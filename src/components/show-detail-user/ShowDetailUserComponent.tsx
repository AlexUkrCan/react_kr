

import {FC} from "react";
import {IUsers} from "../../models/users/IUsers.ts";


type UserTypeProps={
    user:IUsers;
}
const ShowDetailUserComponent:FC<UserTypeProps> = ({user}) => {


    return (
        <div>
            {user.firstName} {user.lastName}   {user.phone}   {user.maidenName}   {user.weight}    {user.height}  {user.macAddress}

        </div>
    );
};

export default ShowDetailUserComponent;