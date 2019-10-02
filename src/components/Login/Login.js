import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet, 
    Text,
    TextInput, 
    View, 
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    AsyncStorage
 } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    }
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', this.state.username);
        this.props.navigation.navigate('FormAsisten');
    };

    login = () => {
        fetch('https://labticare.000webhostapp.com/login.php', {
            method: 'POST',
            header: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                if (responseJson === 'Data Cocok') {
                    alert("Login Berhasil");
                    this._signInAsync();
                    // var username = res.message;

                    // AsyncStorage.setItem('username', username);

                    //  this.props.navigator.push({
                    //     id: 'FormAsisten'
                    // });

                } else {
                    Alert.alert(responseJson);
                }
            }).catch((error) => {
                console.error(error);
            });
            
    }
    render() {            
        return (
            <KeyboardAvoidingView style={styles.container}>
               
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={
                            require('../gambar/Labti.png')
                        } 
                    />
                        <Text style={styles.title}>Laboratorium Teknik Informatika Gunadarma</Text>
                </View>


                <View style={styles.formContainer}>
                    <TextInput 
                        onChangeText={username => this.setState({username})}
                        value={this.state.username}
                        placeholder="username"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                        placeholder="password"
                        autoCorrect={false}
                        style={styles.input}
                    />

                    <TouchableOpacity 
                    style={styles.buttonAT}
                    onPress={this.login} >
                        <Text style={styles.buttonText}>LOGIN ASISTEN</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.GuestMode}>
                    <Text style={styles.keterangan}>
                    Jika anda tidak memiliki akun, 
                    silahkan masuk dengan cara menekan tombol dibawah ini
                    </Text>
                    <TouchableOpacity 
                    style={styles.buttonAsisten}
                    onPress={() => this.props.navigation.navigate('MainMenu')}
                    >
                        <Text style={styles.buttonText}>LANGSUNG MASUK</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200
    },
    title: {
        color: 'white',
        marginTop: 20,
        width: 300,
        textAlign: 'center',
        fontWeight: '800',
        opacity: 3
    },
    keterangan: {
        color: 'white',
        marginTop: 20,
        width: 300,
        textAlign: 'center',
        opacity: 3
    },
    formContainer: {
        padding: 10
    },
    input: {
        height: 40,
        backgroundColor: 'grey',
        marginBottom: 10,
        color: 'white',
        paddingHorizontal: 10
    },
    GuestMode: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    buttonAT: {
        backgroundColor: '#34495e',
        paddingVertical: 20
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    buttonAsisten: {
        backgroundColor: 'red',
        paddingVertical: 20
    }
});
