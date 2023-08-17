import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

import { connect } from  'react-redux'
import { getGames } from '../app/store/actions/games_actions'
import { useSelector,useDispatch } from 'react-redux'
import Moment from 'moment'


const GamesScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const { games } = useSelector((state) => state.Games)


    useEffect(() => {
        dispatch(getGames())
    },[])

    const showGames = () => (
        games ?
            games.map((item,i) => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate("GamesVideos", {
                        ...item
                    })}
                    key={i}
                >
                   <View style={styles.gameContainer}>
                        <View style={styles.gamebox}>
                            <Image 
                                source={{uri: `${item.awayData.logo}`}}
                                style={{ height: 80, width: 80 }}
                                resizeMode='contain'
                            />
                            <Text style={styles.teamRecord}>{item.awayData.wins} - {item.awayData.loss}</Text>
                        </View>
                        <View style={styles.gamebox}>
                            <Text style={styles.gameTime}>{item.time}</Text>
                            <Text>{Moment(item.date).format('d MMMM')}</Text>
                        </View>
                        <View style={styles.gamebox}>
                            <Image 
                                source={{uri: `${item.localData.logo}`}}
                                style={{ height: 80, width: 80 }}
                                resizeMode='contain'
                            />
                            <Text style={styles.teamRecord}>{item.localData.wins} - {item.localData.loss}</Text>
                        </View>
                   </View>
                </TouchableOpacity>
            ))
        :null
    )

    return (
      <ScrollView style={{ backgroundColor: "#F0F0F0" }}>
        <View style={{ flex: 1, flexDirection: "column", flexWrap: "nowrap"}}>
            {showGames()}
        </View>
      </ScrollView>
    )
  
}

function mapStateToProps(state) {
    console.log(state)
    return {
        Games: state.Games
    }
}

const styles = StyleSheet.create({
    gameContainer: {
        flexDirection: "row",
        marginBottom: 10,
        backgroundColor: "#fff",
        shadowColor: "#dddddd",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 2
    },
    gamebox: {
        width: "33.3%",
        height: 100,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    teamRecord: {
        fontFamily: "Roboto-Light",
        fontSize: 12
    },
    gameTime: {
        fontFamily: "Roboto-Bold",
        fontSize: 15
    }
})

export default connect(mapStateToProps)(GamesScreen)