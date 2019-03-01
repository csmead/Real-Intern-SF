import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Information',
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.topBox}>
        	<Text style={styles.getStartedText} style={{textAlign: "center"}}>
        		We are a group of ordinary people who aim to make San Francisco a place of 
        		<Text style={{fontWeight: 'bold'}}> home </Text>
				and belonging to summer interns.        
    		</Text>
    		<Text style={styles.getStartedText} style={{textAlign: "center"}}>
    			{"\n"} We invite you to join our authentic community during your time here. Who you meet will surprise you!
			</Text>
			<Text style={{textAlign: "center", fontSize: 24,fontWeight: 'bold' }}>
			{"\n"} {"\n"} It's not summer yet...
			</Text>
			<Text style={styles.getStartedText} style={{textAlign: "center"}}>
			We’re currently getting our team ready for the summer. Sign up to receive an update when events are ready. Expect an email from us in May!
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
