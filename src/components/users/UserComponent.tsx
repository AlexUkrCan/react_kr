import {FC} from "react";
import {IUsers} from "../../models/users/IUsers.ts";
import {useNavigate} from "react-router-dom";



type UserTypeProps={
    user:IUsers;
}

const UserComponent:FC<UserTypeProps> = ({user}) => {
      const navigation = useNavigate();

      const onButtonClickNavigate = ()  =>{
          navigation('/users/' + user.id + '/recipes')
      }

    return (
        <div>
            {user.firstName} {user.lastName}{user.phone}   <button className={'border-2 bg-green-700'} onClick={onButtonClickNavigate}>Show details</button>

        </div>
    );
};

export default UserComponent;