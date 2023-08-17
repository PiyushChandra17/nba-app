import React from 'react'
import { View,Image } from 'react-native'

const AuthLogo = () => {
    return (
        <View style={{ alignItems: "center" }}>
            <Image 
                source={require("../assets/images/nba_login_logo.png")}
                resizeMode={'contain'}
                style={{
                    width: 170,
                    height: 150
                }}
            />
        </View>
    )  
}

export default AuthLogo

