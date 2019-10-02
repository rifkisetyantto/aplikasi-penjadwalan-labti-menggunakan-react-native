import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    ImageBackground, 
} from 'react-native';
export default class About extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../gambar/BG.jpg')}
                style={styles.container}
            >
                <View style={styles.overlayContainer}>
                <ScrollView>
                    <View style={styles.top}>
                        <Text style={styles.header}>T E N T A N G</Text>
                    </View>
                    <View style={styles.menuitem}>
                        <View style={styles.batasatas}>
                            <View style={styles.fotoprofil}>
                                <Image 
                                source={require('../gambar/Profile.jpg')}
                                style={styles.profilepic}
                                />
                            </View>

                            <Text style={styles.name}>
                            RIFKI DWI SETYANTO
                            </Text>
                            <Text style={styles.jabatan}>
                             - APP DEVELOPER -
                            </Text>
                            <Text style={styles.keterangan}>
                            Aplikasi ini dibuat khusus untuk mahasiswa Fakultas Teknologi Industri
                            yang mempunyai kegiatan praktikum di 
                            Laboratorium Teknik Informatika Universitas Gunadarma Bekasi.
                            Guna mempermudah dalam pengecekkan jadwal praktikum dan Jadwal Asisten.
                            </Text> 
                            <Text style={styles.keterangan1}>
                            dirancang dan dibuat oleh:
                            </Text> 
                            <Text style={styles.keterangannm}>
                            Rifki Dwi Setyanto
                            </Text>
                            <Text style={styles.keterangannm}>
                            3IA18
                            </Text>
                            <Text style={styles.keterangannm}>
                            55415962
                            </Text>
                            <Text style={styles.keterangan2}>
                            Universitas Gunadarma
                            </Text> 
                        </View>
                    </View>
                    </ScrollView>
                </View>
            
            </ImageBackground>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%',
        // height: '100%'
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(160,160,160, .4)'
    },
    top: {
        height: '25%',
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
    menuitem: {
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    batasatas: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        //justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    fotoprofil: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0, 0.4)',
        borderWidth: 16
    },
    profilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4
    },
    name: {
        marginTop: 20,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    jabatan: {
        fontSize: 16,
        color: '#0394c0',
        fontWeight: '300',
        fontStyle: 'italic'
    },
    keterangan: {
        color: 'white',
        marginTop: 10,
        textAlign: 'left',
        fontSize: 14,
    },
    keterangan1: {
        color: 'white',
        marginTop: 20,
        textAlign: 'left',
        fontSize: 16,
    },
    keterangan2: {
        fontSize: 20,
        color: 'pink',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    keterangannm: {
        color: 'white',
        textAlign: 'left',
        fontSize: 16,
    }
});
