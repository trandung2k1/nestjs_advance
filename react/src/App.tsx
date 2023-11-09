import { useEffect, useState } from 'react';
import { OpenAPI, User, UsersService } from './services/openapi';
const { usersControllerGetAllUsers } = UsersService;
OpenAPI.BASE = 'http://localhost:3000';
const App = () => {
    const [users, setUsers] = useState<User[]>([]);
    const fetchUsers = async () => {
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
