/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react'
import StyledButton from '../../components/styledButton'
import { useDispatch } from 'react-redux';
import * as actions from '../../modules/signIn/signInActions'
import { useHistory } from 'react-router-dom';

export default function MainComponent() {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = useCallback(
        () => {
       dispatch(actions.pushLogout());
        history.push('/login')
        },
        [],
    );

    const [user, setUser] = useState({})

    useEffect(() => {
        dispatch(actions.clearAll());
        dispatch(actions.clearAllErrors());
        const user = localStorage.getItem('user');
        setUser(JSON.parse(user));
    }, []);
    
    return (
        <div className="text-center user-container">
            Welcome, <b> {user.First_Name + ' ' + user.Last_Name}! <br/> </b>
            <span>{user.email}</span> <br/>
            <StyledButton type='primary' text="Log out" onClick={handleLogout}/>
        </div>
    )
}
