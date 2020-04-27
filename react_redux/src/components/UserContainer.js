import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userRedux/userAction'

function UserContainer(props) {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userReducer.users)
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])
    return (
        <div>
            <br />************************* User List **************************<br />
            {userData.map(function (d, idx) {
                return (<li key={idx}>{d}</li>)
            })}
        </div>
    )
}

export default UserContainer
