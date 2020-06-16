/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect} from 'react'
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
    )

    useEffect(() => {
        dispatch(actions.clearAll());
        dispatch(actions.clearAllErrors());
    }, []);
    
    return (
        <div>
            <StyledButton type='primary' text="Log out" onClick={handleLogout}/>
        </div>
    )
}
