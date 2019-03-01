import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.topBox}>
          <Text style={{textAlign: "center"}}>
            Check out the Supper Clubs and other events that are happening soon.
        </Text>       
          <Text style={{textAlign: "center", fontSize: 24,fontWeight: 'bold' }}>
      {"\n"} {"\n"} It's not summer yet...
      
      </Text>


    </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
