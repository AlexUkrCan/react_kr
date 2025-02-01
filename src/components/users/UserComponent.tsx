import {FC} from "react";
import {IUsers} from "../../models/users/IUsers.ts";


type UserTypeProps={
    item:IUsers
}

const UserComponent:FC<UserTypeProps> = ({item}) => {
    
    return (
        <div>
            {item.firstName} {item.lastName}
        </div>
    );
};

export default UserComponent;