import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { Component, useEffect } from 'react'

import { connect } from 'react-redux'
import { getNews } from '../app/store/actions/news_actions'

import { useDispatch,useSelector } from 'react-redux'

import Moment from 'moment'

const NewsScreen = ({ navigation,getNews }) => {
    const dispatch = useDispatch()
    const { articles } = useSelector((state) => state.News)

    useEffect(() => {
        dispatch(getNews())
    },[])

    console.log(articles)

    return (
        <ScrollView style={{ backgroundColor: "#F0F0F0" }}>
          {articles ? articles.map((item,i) => (
            <TouchableOpacity 
                onPress={() => navigation.navigate("ArticleScreen", {
                ...item
            })} 
                key={i}
            >
                <View style={styles.cardContainer}>
                    <View>
                        <Image 
                            style={{ height: 150, justifyContent: 'space-around'}}
                            source={{ uri:`${item.image}`}}
                            resizeMode='cover'
                        />
                    </View>
                </View>
                <View style={styles.contentCard}>
                    <Text style={styles.titleCard}>{item.title}</Text>
                    <View style={styles.bottomCard}>
                        <Text style={styles.bottomCardTeam}>{item.team} - </Text>
                        <Text style={styles.bottomCardText}>Posted at {Moment(item.date).format('d MMMM')}</Text>
                    </View>
                </View>
                
            </TouchableOpacity>
        )) : null}
          
        </ScrollView>
      )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        News: state.News
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        margin: 10,
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 2
    },
    contentCard: {
        borderWidth: 1,
        borderColor: "#dddddd"
    },
    titleCard: {
        fontFamily: "Roboto-Bold",
        color: "#232323",
        fontSize: 16,
        padding: 10
    },
    bottomCard: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: "#e6e6e6",
        padding: 10
    },
    bottomCardTeam: {
        fontFamily: "Roboto-Bold",
        color: "#828282",
        fontSize: 12
    },
    bottomCardText: {
        fontFamily: "Roboto-Light",
        color: "#828282",
        fontSize: 12
    }

})

export default connect(mapStateToProps, { getNews })(NewsScreen)