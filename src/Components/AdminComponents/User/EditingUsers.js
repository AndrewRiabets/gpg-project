import { React, useState, useEffect } from 'react';
import CreateUser from './CreateUser';


const EditingUser = () => {
    const [userCreateForm, setCreateForm] = useState(false); 

    const createUser = () => {
        userCreateForm ? setCreateForm(false)  : setCreateForm(true);
    }

    return (
    <div>
        <button onClick={createUser}>Создать пользователя </button>
        {userCreateForm && <div> <CreateUser /> </div>}
    </div>
    
)}

export default EditingUser