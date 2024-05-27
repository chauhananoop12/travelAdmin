
import { API_URL } from '../constant';
export default function ActivityLogger({ apiPath, body, type, query }) {
    const error = new Error('CALL STACK');
    const currentUrl = window.location.href;
    const previousUrl = document.referrer;
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    const currentDateTime = new Date();
    const apiDetails = {
        apiPath,
        body,
        type,
        query
    }
    const log = {
        currentUrl,
        previousUrl,
        currentUser,
        currentDateTime,
        apiDetails,
        stack: error.stack
    }

    fetch(API_URL + '/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ log }),
    })
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data);
        })
        .catch((error) => {
            // console.error('Error:', error);
        });
}