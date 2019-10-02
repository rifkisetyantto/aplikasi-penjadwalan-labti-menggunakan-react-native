import {
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';


import Login from '../components/Login/Login';
import Beranda from '../components/Beranda/Beranda';
import Jadwalpraktikum from '../components/Beranda/Jadwalpraktikum';
import Petunjuk from '../components/Beranda/Petunjuk';
import About from '../components/Beranda/About';
import Beranda_asisten from '../components/Beranda/Beranda_asisten'
import Jadwalasisten from '../components/Beranda/Jadwalasisten';
import Carisesuainpm from '../components/Beranda/Carisesuainpm'

import Auth from '../components/Login/Auth';
import Pilihjadwalasisten from '../components/Beranda/Pilihjadwalasisten';

const Main = createStackNavigator({
    MainMenu: {
        screen: Beranda
    },
    Praktikum: {
        screen: Jadwalpraktikum
    },
    Petunjuk: {
        screen: Petunjuk
    },
    Tentang: {
        screen: About
    },
    FormAsisten: {
        screen: Beranda_asisten
    },
    Asisten: {
        screen: Jadwalasisten
    },
    Pilihanjadwal: {
        screen: Pilihjadwalasisten
    },
    Sesuainpm: {
        screen: Carisesuainpm
    }
},
{
    initialRouteName: 'FormAsisten',
    headerMode: 'none'
});

export default Navigasi = createSwitchNavigator({
    Auth: Auth,
    Login: Login,
    Main: Main
},{
    initialRouteName: "Auth"
})

