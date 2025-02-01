import FormComponent from "../components/form/FormComponent.tsx";
import {Outlet} from "react-router-dom";






const AuthenteficationPage = () => {

    return (
        <div>
            Authentication page
            <FormComponent/>
            <Outlet/>
        </div>
    );
};

export default AuthenteficationPage;