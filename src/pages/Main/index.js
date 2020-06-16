/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react'
import StyledButton from '../../components/styledButton'
import { useHistory } from 'react-router-dom';

export default function MainComponent() {
    const history = useHistory();
    const handleLogout = useCallback(
        () => {
            localStorage.removeItem('token');
            history.push('/')
        },
        [],
    )
    return (
        <div>
            <StyledButton type='primary' text="Log out" onClick={handleLogout}/>
        </div>
    )
}
