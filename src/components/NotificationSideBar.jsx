import React, { useState, useEffect } from 'react';
import { BellFilled } from '@ant-design/icons';
// import { getAllSurgeryBookings } from 'api/surgeryBookingApi';
import { state } from 'states/isPendingSurgery';

import { useHookstate } from '@hookstate/core';

const NotificationSideBar = () => {
    const [isPending, setIsPending] = useState(false);

    const isUpdated = useHookstate(state);
    useEffect(() => {
        console.log('useEffect');
        getAllSurgeryBookings({ limit: 1, surgeryStatus: 'pending' }).then((res) => {
            if (res.data.docs.length) {
                setIsPending(true);
            } else {
                setIsPending(false);
            }
        });
    }, [isUpdated.get()]);

    if (isPending) {
        return (
            <sup style={{ position: 'absolute', top: '5px', right: '10px', color: 'red' }}>
                <BellFilled />
            </sup>
        );
    } else {
        return <></>;
    }
};

export default NotificationSideBar;
