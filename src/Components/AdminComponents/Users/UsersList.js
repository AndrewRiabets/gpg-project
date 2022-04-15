import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllUsers } from '../../../redux/users/user-selector';
// import { useFetchAllUsersMutation } from '../../../redux/services/usersAPI';
// import { getToken } from '../../../redux/auth/auth-selectors';

const UsersList = () => {
  //   const [fetchAllUsers, { data }] = useFetchAllUsersMutation();
  const allUsers = useSelector(getAllUsers);
  //   const token = useSelector(getToken);
  const dispatch = useDispatch();

  //   const getAllusers = useCallback(async () => {
  //     try {
  //       const response = await fetchAllUsers(token);
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, [token, fetchAllUsers]);

  //   useEffect(() => {
  //     getAllusers();
  //   }, [getAllusers]);
  //   console.log(data);

  return (
    <div>
      <ul>
        {allUsers.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
