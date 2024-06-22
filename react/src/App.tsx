import { useEffect, useState } from 'react';
import { OpenAPI, User, UsersService } from './services/openapi';
// import { OpenAPI, User, UserService } from './services/express_app';
// const { getApiUsers } = UserService;
const { usersControllerGetAllUsers } = UsersService;
OpenAPI.BASE = 'http://localhost:3000';
OpenAPI.HEADERS = {
    Authorization: `Bearer access_token`,
};

const App = () => {
    const [users, setUsers] = useState<User[]>([]);
    const fetchUsers = async () => {
        // const rs = await getApiUsers();
        const rs = await usersControllerGetAllUsers();
        console.log(rs);
        setUsers(rs);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    console.log(users);
    return <div>App</div>;
};

export default App;
