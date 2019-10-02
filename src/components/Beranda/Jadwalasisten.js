import React from 'react';
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
    Button,
    Grid,
    Col,
    Row,
} from 'native-base';
import Modal from 'react-native-modal';

export default class Jadwalasisten extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            visibleModal:false,
            hr : "",
            lok: "",
            sht: "",
            jdwl : [],
            pj: "",
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    isMod = (a,i) => (
        <Row>
            <Col style={{marginBottom: 10}} size={1}>
                <Text>
                    {i+1}.
                </Text>
            </Col>
            <Col size={9}>
                <Text>
                    {a.NAMA_ASISTEN}
                </Text>
            </Col>
        </Row>
    );

//render modalnya
_renderModalContent = () => (
    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <View style={{height:'70%',width:'95%',backgroundColor: "white", padding: 22, borderRadius: 25, borderColor: "rgba(0, 0, 0, 0.1)"}}>
            <View style={{flexDirection:'column',justifyContent: "center", alignItems: "center", margin:10, marginBottom: 10}}>
                <Text style={{textAlign:'center', fontSize:20, textDecorationLine: 'underline', fontWeight: 'bold'}}>Jadwal Asisten</Text>
            </View>
            <View style={{flexDirection:'column',justifyContent: "center", alignItems: "center", margin:10, marginBottom: 10}}>
                <Text style={{textAlign:'center', fontSize:15,}}>PJ : {this.state.pj}</Text>
            </View >
            <View style={{flexDirection:'column', margin:10, marginBottom: 10}}>
                <Text style={{textAlign:'center', fontSize:15, textDecorationLine: 'underline', fontWeight: 'bold'}}>Asisten</Text>
            </View>
            <ScrollView >
                <Grid style={{flex:1, marginRight:3}}>
                    {this.state.jdwl.map((a,i) => this.isMod(a,i))}
                </Grid>
            </ScrollView>
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
    x = this.state.hr;// pindahin ke variabel temporer
    let y = "";
    y = this.state.lok;
    let z = "";
    z = this.state.sht;
    if(x==""){
        alert("Data Kosong!");
    }if(y==""){
        alert("Data Kosong!");
    }if(z==""){
        alert("Data Kosong!");
    }else{
        console.log("masuk");
        fetch('https://labticare.000webhostapp.com/jadwalAsisten.php', {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {
            hari : x,
            lokasi: y,
            shift: z, //ini bikin buat di post ke PHP
            })
        }).then((response) => response.json())
                .then((responseJson) => {
                    //harusnya masuk sini kalo responnya ada
                    console.log("respon diterima");
                    if(responseJson == "Data Tidak Ditemukan" || responseJson==null){
                        alert("Data Tidak Ditemukan")
                    }else{
                        this.setState({jdwl:responseJson});
                        this.setState({pj : this.state.jdwl[0].PJ});
                        console.log(this.state.jdwl);
                        this.toggleModal();//buat munculin modal
                        console.log(JSON.stringify(responseJson));
                        console.log(this.state.pj);
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
                        <Text style={styles.header}>Jadwal Asisten</Text>
                    </View>

                    
                    <View style={styles.menu}>
                    <View style={styles.batasatas}>
                    <Text style={styles.keterangan}>
                    Masukan Lokasi :
                    </Text>
                    <TextInput 
                        placeholder="Lokasi (contoh: J1)"
                        autoCapitalize= 'words'
                        style={styles.input}
                        onChangeText={(lok) => this.setState({lok})}/>
                    <Text style={styles.keterangan}>
                    Masukan Hari :
                    </Text>
                    <TextInput 
                        placeholder="Hari (contoh: Senin)"
                        autoCapitalize= 'words'
                        style={styles.input}
                        onChangeText={(hr) => this.setState({hr})}
                    />
                    <Text style={styles.keterangan}>
                    Masukan Shift :
                    </Text>
                    <TextInput 
                        placeholder="Shift"
                        keyboardType="numeric"
                        style={styles.input}
                        onChangeText={(sht) => this.setState({sht})}
                    />

                    <TouchableOpacity style={styles.tombolsearch} onPress={() => this.getJadwal()}>
                        <Text style={styles.textnya}>Cari</Text>
                    </TouchableOpacity>

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
        backgroundColor: '#27ae60'
    },
    menu: {
        flex: 1,
        flexDirection: 'column',
        margin: 20,

    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: '#fff',
        color: 'black',
        paddingHorizontal: 10,
    },
    tombolsearch: {
        width: '40%',
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'pink',
        marginTop : 5,
        justifyContent: 'center',
        alignItems: 'center'
        //paddingVertical: 20
    },
    keterangan: {
        textAlign: 'left',
        fontSize: 20,
        marginTop: 5,
        color: 'white'
    },
    batasatas: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        //justifyContent: 'center',
        padding: 5,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
});
