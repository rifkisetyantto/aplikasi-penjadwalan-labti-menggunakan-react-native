import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView
} from 'react-native';
export default class Petunjuk extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../gambar/BG.jpg')}
                style={styles.container}
            >
                <View style={styles.overlayContainer}>
                    <View style={styles.top}>
                        <Text style={styles.header}>P E T U N J U K</Text>
                    </View>

                <View style={styles.batasatas}>
                <ScrollView>
                    <View style={styles.baganpetunjuk}>
                        <Text style={styles.headerpetunjuk}>
                        Aplikasi ini terdiri dari 5 tombol, yaitu:
                        </Text>
                        <Text style={styles.petunjuknya}>
                        1. Jadwal Praktikum, yang digunakan untuk melihat jadwal praktikum menggunakan pencarian sesuai dengan kelas yang dicari.
                        </Text>
                        <Text style={styles.petunjuknya}>
                        2. Jadwal Asisten, dikhususkan untuk Asisten Laboratorium Teknik Informatika yang digunakan untuk melihat jadwal asisten menggunakan pencarian sesuai dengan npm maupun lokasi, shift dan hari yang dicari.
                        </Text>
                        <Text style={styles.petunjuknya}>
                        3. Petunjuk, yang digunakan untuk melihat informasi penggunaan aplikasi.
                        </Text>
                        <Text style={styles.petunjuknya}>
                        4. Tentang, yang digunakan untuk melihat data diri pembuat aplikasi.
                        </Text>
                        <Text style={styles.petunjuknya}>
                        5. Keluar Aplikasi, tombol ini digunakan untuk keluar dari Beranda dan menuju ke halaman login.
                        </Text>
                    </View>
                </ScrollView>
                </View>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(160,160,160, .4)'
    },
    top: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#fff',
        fontSize: 30,
        borderColor: '#fff',
        borderWidth: 4,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255, .1)',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    baganpetunjuk: {
        flex: 1,
        margin: 20,
    },
    headerpetunjuk: {
        color: 'white',
        fontSize: 24,

    },
    petunjuknya: {
        color: 'white',
        marginTop: 10,
        textAlign: 'left',
        fontSize: 16,
        backgroundColor: '#34495e'
    },
    batasatas: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        //justifyContent: 'center',
        padding: 5,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    }
});
