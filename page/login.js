import React, { Component } from 'react'
import { Keyboard } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            userEmail: '',
            userPassword: '',
        }
    }

    Login = () => {
        const { userEmail, userPassword } = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(userEmail == '') {
            this.state({email: 'Entrez un mail valide'});
        }
        else if(reg.test(userEmail) === false) {
            this.state({email: 'Email incorrect'})
            return false;
        }
        else if(userPassword == '') {
            this.state({passwordError: 'Mot de passe incorrect'});
        }
        else{
            //adresse ou on va chercher le fichier php
            fetch('127.0.0.1/login.php', {
                method: 'post', 
                header: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: userEmail,
                    password: userPassword
                }),
                .then((reponse) => reponse.JSON())
                .then((reponse.JSON) => {
                    if(reponseJson == 'ok') {
                        this.props.navigation.navigate('profil')
                    }
                    else{
                        alert('les informations fournies sont fausses')
                    }
                })
                .catch((error) => {console.error(error)})
            })
        }
        Keyboard.dismiss()
    };

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.pageName}>
                    Page Login
                </Text>
                <TextInput></TextInput>
                <TouchableOpacity onPress={() => } style={styles.bnt1}>
                    <Text style={styles.bntText}>Envoyer</Text>
                </TouchableOpacity>
            </View>
        )
    }
};