import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import Moment from 'moment'


const ArticleScreen = ({ navigation,route }) => {

  const formatText = (content) => {
    const text = content.replace(/<p>/g,"").replace(/<\/p>/g,"")
    return text
  }

    return (
      <ScrollView style={{ backgroundColor: "#F0F0F0" }}>
        <Image 
          style={{ height: 250 }}
          source={{ uri: route.params.image }}
          resizeMode='cover'
        />
        <View style={styles.articleContainer}>
          <View>
            <Text style={styles.articleTitle}>
              {route.params.title}
            </Text>
            <Text style={styles.articleData}>
              {route.params.team} - Posted at {Moment(route.params.date).format('d MMMM')}
            </Text>
          </View>
          <View style={styles.articleContent}>
            <Text style={styles.articleText}>
              {this.formatText(route.params.content)}
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  
}

const styles = StyleSheet.create({
  articleContainer: {
    padding: 10
  },
  articleTitle: {
    fontSize: 23,
    color: "#323232",
    fontFamily: "Roboto-Bold"
  },
  articleData: {
    fontSize: 12,
    color: "#828282",
    fontFamily: "Roboto-Light"
  },
  articleContent: {
    marginTop: 30
  },
  articleText: {
    fontSize: 12,
    lineHeight:20,
    fontFamily: 'Roboto-Light'
  }

})

export default ArticleScreen