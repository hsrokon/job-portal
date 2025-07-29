import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Context = () => {
    const authContext = useContext(AuthContext);
    return authContext;
}

export default Context;