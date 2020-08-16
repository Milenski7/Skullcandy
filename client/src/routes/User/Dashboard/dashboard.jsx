import React, { useEffect } from 'react';
import http from '../../../services/http';
import * as config from '../../../config/config.json';
import './dashboard.css';
import { toast } from 'react-toastify';

const Dashboard = ({ history, curUser }) => {
    const deleteProfile = async () => {
        try {
            await http.delete(`${config.apiEndpoint}/user/remove/${curUser._id}`);
            history.push('/logout');
        } catch (ex) {
            console.error(ex);
            toast.error('Something failed while deleting account...');
        }
    };
    return (
        <div className="dashboard-container">
            <div className="dashboard">
                {curUser && <h1 className="dashboard-header">{curUser.name}'s Dashboard</h1>}
                <button onClick={() => history.push('/logout')} className="dashboard-logout">LOGOUT</button>
                {curUser && <button onClick={deleteProfile} className="dashboard-delete-profile">DELETE ACCOUNT</button>}
            </div>
        </div>
    );
};

export default Dashboard;