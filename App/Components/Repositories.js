import React, { Component } from 'react'
import Badge from './Badge'
import Seperator from './Helpers/Seperator'

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
})

class Repositories extends Component {
  openPage(url) {
    console.log('the url is ', url)
  }

  render () {
    const { repos } = this.props
    const list = repos.map((repo, index) => {
      const desc = repo.description ? <Text style={styles.description}> {repo.description} </Text> : <View />
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repo.html_url)}
              underlayColor='transparent'
            >
              <Text style={styles.name}>{repo.name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repo.stargazers_count} </Text>
            {desc}
          </View>
          <Seperator />
        </View>
      )
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repositories