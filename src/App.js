// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { SnackbarProvider } from 'notistack';
import { getMyProfile } from 'api/getMyProfile';
import { useEffect } from 'react';
import { update } from './states/permissions';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

Object.byString = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, ''); // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};
const token = localStorage.getItem('token')

const App = () => {
    const getProfile = async () => {
        const resp = await getMyProfile()
        console.log(resp.data[0])
        localStorage.setItem('userInfo', JSON.stringify(resp.data[0]))

    }
    useEffect(() => {
        if (token) {
            getProfile()
        }

    }, [])
    return (
        <SnackbarProvider
            autoHideDuration={2500}
            maxSnack={3}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <ThemeCustomization>
                <ScrollTop>
                    <Routes />
                </ScrollTop>
            </ThemeCustomization>
        </SnackbarProvider>)
};

export default App;
