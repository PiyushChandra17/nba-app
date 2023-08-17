import { Text, StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import AuthLogo from '../components/AuthLogo'
import AuthForm from '../components/AuthForm'

import { connect } from 'react-redux'
import { autoSignIn } from '../app/store/actions/user_actions'
import { bindActionCreators } from 'redux'

import { getTokens, setTokens } from '../utils/misc'

class AuthScreen extends Component {
    state = {
        loading: false
    }

    goNext = () => {
        this.props.navigation.navigate('News')
    }

    componentDidMount() {
        getTokens((value) => {
            if(value[0][1]===null){
                this.setState({ loading: false })
            } else {
                this.props.autoSignIn(value[1][1]).then(() => {
                    if(!this.props.User.auth.token) {
                        this.setState({ loading: false })
                    } else {
                        setTokens(this.props.User.auth, () => {
                            this.goNext()
                        })
                    }
                })
            }
        })
    }

  render() {
    if (this.state.loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        )
    } else {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                  <AuthLogo />
                  <AuthForm goNext={this.goNext}/>
                </View>
            </ScrollView>
        )
    }
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d428a",
        padding: 50
    },
    loading: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})

function mapStateToProps(state) {
    return {
        User: state.User
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ autoSignIn }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthScreen)