import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {
    Button
} from 'native-base';
import Modal from 'react-native-modal';

export class Ismod extends Component{
    constructor(props) {
        super(props);          
        
    }

    jadiWaktu(x){
        console.log(x)
        let a ="";
        switch(x){
            case '1': a = "07.30 - 09.30";break;
            case '2': a = "09.30 - 11.30";break;
            case '3': a = "11.30 - 13.30";break;
            case '4': a = "13.30 - 15.30";break;
            case '5': a = "15.30 - 17.30";break;
            case '6': a = "17.30 - 19.30";break;
        }
        console.log(a);
        return a;
    }

    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:70, justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>{this.props.dataa.KELAS}</Text>
                </View>
                <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:70, justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>{this.props.dataa.HARI}</Text>
                </View>
                <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:200, justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>{this.props.dataa.Nama_Praktikum}</Text>
                </View>
                <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:80, justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>{this.props.dataa.PJ}</Text>
                </View>
                <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:50, justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>{this.props.dataa.LOKASI}</Text>
                </View>
                <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:100, justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>{this.jadiWaktu(this.props.dataa.SHIFT)}</Text>
                </View>
            </View>
        );
    }
}
export default class JadwalPraktikum extends React.Component {
    constructor(props){
        super(props);
        this.toggleModal = this.toggleModal.bind(this)
        this.state = {
            visibleModal:false,
            idM : "", //ni deklarasinya, istilahnya kalo di java, variabel global, jadi bisa dipanggil dari mana aja
            jdwl : [],

        }
    }



    _renderText = (text) => (
        <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:'30%', justifyContent:'center'}}>
            <Text style={{textAlign:'center'}}> {text} </Text>
        </View>
      );

    //render modalnya
  _renderModalContent = () => (
    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
      <View style={{height:'60%',width:'95%',backgroundColor: "white", padding: 22, justifyContent: "center", alignItems: "center", borderRadius: 25, borderColor: "rgba(0, 0, 0, 0.1)"}}>
        <Text style={{fontSize:25, textDecorationLine: 'underline', fontWeight: 'bold'}}>
            Jadwal Praktikum
        </Text>
        <ScrollView>
            <ScrollView horizontal contentContainerStyle={{width: 575}}>           
                <View style={{flexDirection:'column', marginTop: 15}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:70, justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}>Kelas</Text>
                        </View>
                        <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:70, justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}>Hari</Text>
                        </View>
                        <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:200, justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}>Praktikum</Text>
                        </View>
                        <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:80, justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}>PJ</Text>
                        </View>
                        <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:50, justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}>Lokasi</Text>
                        </View>
                        <View style={{flexWrap:'wrap', borderWidth:1, height: 50, width:100, justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}>Waktu</Text>
                        </View>
                    </View>
                    {this.state.jdwl.map((x, i) => <Ismod dataa={x} key={i} />)}
                </View>
            </ScrollView>
        </ScrollView>
        <View style={{justifyContent: "center", alignItems: "center", marginTop: 10}}>
        <Text style={{fontSize:15, fontWeight: 'bold'}}>
            Geser Tabel Untuk Melihat lebih lengkap Lagi.
        </Text>
        </View>
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <Button style={{padding:20, justifyContent: "center", alignItems: "center", backgroundColor: '#89c3eb'}} onPress={this.toggleModal}>
                <Text style={{color:'black'}}>OK</Text>
            </Button>
        </View>
      </View>
    </View>
  );

    getJadwal(){
        //disini bagian buat narik data di php
        //sebelum nari karna data lu uppercase semua lu harus ganti jadi uppercase
        //state, gabisa langsung lu utak atik, harus pake variabel temporary
        let x = ""; //ternyata uppercasenya gamau kalo belom di deklarasi sebagai string
        x = this.state.idM;// pindahin ke variabel temporer
        if(x==""){
            alert("Data Kosong!");
        }else{
            x = x.toUpperCase();//ubah jadi uppercase
            console.log("masuk");
            fetch('https://labticare.000webhostapp.com/getJadwal.php', {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                id : x, //ini bikin buat di post ke PHP
                })
            }).then((response) => response.json())
                    .then((responseJson) => {
                        if(responseJson == "Data Tidak Ditemukan"){
                            alert("Data Tidak Ditemukan")
                        }else{
                            this.setState({jdwl:responseJson});
                            this.toggleModal();//buat munculin modal
                            console.log(JSON.stringify(responseJson));
                        }
            // Showing response message coming from server after inserting records.
                //alert(JSON.stringify(responseJson));
            }).catch((error) => {
                alert("Error : "+error);
            }
            );
        }
        
    }

    toggleModal(){
        this.setState({visibleModal:!this.state.visibleModal})
    }

    render() {
        return (
            <ImageBackground
                source={require('../gambar/BG.jpg')}
                style={styles.container}
            >
            <Modal
                isVisible={this.state.visibleModal}
                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
                animationInTiming={500}
                animationOutTiming={500}
                backdropTransitionInTiming={500}
                backdropTransitionOutTiming={500}
                onBackdropPress={this.toggleModal}
                onBackButtonPress={this.toggleModal}
                >
                {this._renderModalContent()}
            </Modal>
                <View style={styles.overlayContainer}>
                    <View style={styles.top}>
                        <Text style={styles.header}>JADWAL PRAKTIKUM</Text>
                    </View>

                    <View style={styles.menu}>
                    <TextInput 
                        placeholder="Masukkan kelas anda"
                        autoCapitalize="none"
                        style={styles.input}
                        onChangeText={(idM) => this.setState({idM})}
                    />

                    <TouchableOpacity style={styles.tombolsearch} onPress={() => this.getJadwal()}>
                        <Text style={styles.textnya}>Cari</Text>
                    </TouchableOpacity>

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
    input: {
        width: '80%',
        height: 40,
        backgroundColor: '#fff',
        color: 'black',
        paddingHorizontal: 10,
        marginRight: 5
    },
    tombolsearch: {
        width: '20%',
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'pink',
        //paddingVertical: 20
    },
    textnya: {
        color: '#FFFFFF',
        fontWeight: '500'
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,

    }
});
