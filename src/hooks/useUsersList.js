import { useContext } from "react";
import UsersListContext from "../contexts/UsersListContexts";

function useUserList() {
    return useContext(UsersListContext);
}

export default useUserList;