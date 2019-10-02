import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView,
    TouchableOpacity
} from 'react-native';
export default class Pilihjadwalasisten extends React.Component {
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
                    <TouchableOpacity 
                    style={styles.buttonAsisten}
                    onPress={() => this.props.navigation.navigate('Asisten')}
                    >
                        <Text style={styles.buttonText}>Cari Berdasarkan Shift</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={styles.buttonAsisten}
                    onPress={() => this.props.navigation.navigate('Sesuainpm')}
                    >
                        <Text style={styles.buttonText}>Cari Berdasarkan NPM</Text>
                    </TouchableOpacity>
                    

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
    
    batasatas: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        //justifyContent: 'center',
        padding: 5,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    buttonAsisten: {
        backgroundColor: 'red',
        paddingVertical: 20,
        marginLeft: 20,
        marginRight: 20 ,
        marginTop: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
});
