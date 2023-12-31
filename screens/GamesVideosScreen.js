import { Text, StyleSheet, View, ActivityIndicator, ScrollView,Button } from 'react-native'
import React, { Component } from 'react'
import Video from 'react-native-video';
import Icon from "react-native-vector-icons/Ionicons"

import { connect } from 'react-redux';
import { autoSignIn } from '../app/store/actions/user_actions';
import { getTokens, setTokens } from '../utils/misc'

class GamesVideosScreen extends Component {

    state = {
        loading: true,
        isAuth: true
    }

    manageState(loading,isAuth) {
        this.setState({
            loading,
            isAuth
        })
    }

    componentDidMount() {
        const User = this.props.User
        getTokens((value) => {
            if(value[0][1]===null){
                this.manageState(false,false)
            } else {
                this.props.dispatch(autoSignIn(value[1][1])).then(() => {
                    if(!User.auth.token) {
                        this.manageState(false,false)
                    } else {
                        setTokens(User.auth, () => {
                            this.manageState(false,true)
                        })
                    }
                })
            }
        })
    }

  render() {
    const params = this.props.navigation.state.params

    if (this.state.loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        )
    } else {
        return (
            <ScrollView style={{ backgroundColor: "#F0F0F0"}}>
                {
                    this.state.isAuth ? 
                        <Video 
                            source={{ uri: params.play }}
                            style={{ width: "100%", height: 250 }}
                            paused={true}
                            muted={true}
                            controls={true}
                        />
                    :
                        <View style={styles.notAuth}>
                            <Icon name="sad-outline" size={80} color="#d5d5d5" />
                            <Text style={styles.notAuthText}>We are sorry you need to be registered/logged in to see this game</Text>
                            <Button 
                                title="Login/Register"
                                onPress={() => this.props.navigation.navigate("Auth")}
                            />
                        </View>
                }
            </ScrollView>
        )
    }
  }
}

function mapStateToProps(state) {
    return {
        User: state.User
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    notAuth: {
        flex: 1,
        margin: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    notAuthText: {
        fontFamily: "Roboto-Bold"
    }
})

export default connect(mapStateToProps)(GamesVideosScreen)