import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../../Components/Container';
import EditingUser from '../../Components/AdminComponents/User/EditingUsers';


 const AdminPage = () => {
    const [userListRender, setUserListRender] = useState(false);
    const [companyListRender, setCompanyListRender] = useState(false);

    const btnUserHandler = () => {
        if (userListRender) {
            setUserListRender(false)
        } else {
            setUserListRender(true);
            setCompanyListRender(false)} 
    }; 

    const btnCompanyHandler = () => {
        if (companyListRender) {
            setCompanyListRender(false) 
        } else {
            setCompanyListRender(true); 
            setUserListRender(false);
            
        }
    }

    return (
    <>
        <Container>
            <NavLink to="/main">Назад</NavLink>
            <div>
            <button onClick={btnUserHandler}>Пользователи</button>
            <button onClick={btnCompanyHandler}>Компании</button>
            </div>
            {userListRender && <EditingUser /> }
            {companyListRender && <h5>Hello it's company</h5>}
        </Container>
    </>
    )}




export default AdminPage