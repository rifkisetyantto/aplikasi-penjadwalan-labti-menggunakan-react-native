import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableHighlight,
} from 'react-native';

export default class Beranda extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../gambar/BG.jpg')}
                style={styles.container}
            >
                
                <View style={styles.overlayContainer}>

                    <View style={styles.top}>
                        <Text style={styles.header}>B E R A N D A</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <View style={styles.menuItem}>
                            <TouchableHighlight
                                onPress={() => this.props.navigation.navigate('Praktikum')}
                            underlayColor='red'
                            >
                                <Image 
                                source={require('../gambar/JadwalJaga.png')}
                                style={styles.image}
                                />
                            </TouchableHighlight>
                            <Text style={styles.ket}>
                                Jadwal Praktikum
                            </Text>
                        </View>

                        <View style={styles.menuItem} />

                        <View style={styles.menuItem}>
                            <TouchableHighlight
                                onPress={() => alert('Anda Harus Login terlebih dahulu !!!!')}
                            underlayColor='red'
                            >
                                <Image 
                                source={require('../gambar/Absensi.png')}
                                style={styles.image}
                                />
                            </TouchableHighlight>
                            <Text style={styles.ket}>
                                Jadwal Asisten
                            </Text>
                        </View>
                        
                        <View style={styles.menuItem}>
                            <TouchableHighlight
                                onPress={() => this.props.navigation.navigate('Petunjuk')}
                                underlayColor='red'
                            >
                                <Image 
                                source={require('../gambar/Petunjuk.png')}
                                style={styles.image}
                                />
                            </TouchableHighlight>
                            <Text style={styles.ket}>
                                Petunjuk
                            </Text>
                        </View>

                        <View style={styles.menuItem}>
                            <TouchableHighlight
                                onPress={() => this.props.navigation.navigate('Tentang')}
                            underlayColor='red'
                            >
                                <Image 
                                source={require('../gambar/Tentang.png')}
                                style={styles.image}
                                />
                            </TouchableHighlight>
                            <Text style={styles.ket}>
                                Tentang
                            </Text>
                        </View>

                        <View style={styles.menuItem}>
                            <TouchableHighlight
                                onPress={() => this.props.navigation.navigate('Login')}
                            underlayColor='red'
                            >
                                <Image 
                                source={require('../gambar/Keluar.png')}
                                style={styles.image}
                                />
                            </TouchableHighlight>
                            <Text style={styles.ket}>
                                Log Out
                            </Text>
                        </View>

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
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: '#fff',
        fontSize: 40,
        borderColor: '#fff',
        borderWidth: 4,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255, .1)'
    },
    menuContainer: {
        height: '35%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //backgroundColor: '#ccc'
    },
    judul: {
        color: 'white',
        marginBottom: 20,
        width: 300,
        textAlign: 'center',
        opacity: 1,
        fontSize: 30
    },
    menuItem: {
        width: '33.333333%',
        height: '50%',
        padding: 20,

        //backgroundColor: 'white'
    },
    ket: {
        color: 'white',
        marginTop: 10,
        width: 300,
//        textAlign: 'left',
        opacity: 3,
        fontSize: 14
    },
        image: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        borderColor: '#fff',
        //borderWidth: 3
    }
});
