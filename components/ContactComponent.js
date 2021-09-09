import React, { Component } from 'react';
import { ScrollView, Text, View  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card } from 'react-native-elements';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    }

  render() {
    return (
       <ScrollView>
          <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
            <Card wrapperStyle={{margin: 20}} title="Contact Information">
              <View wrapperStyle={{marginBottom: 10}}>
                <Text>1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text>U.S.A.</Text>
              </View>
              <Text>Phone: 1-206-555-1234</Text>
              <Text>Email: campsites@nucamp.co</Text>
            </Card>
          </Animatable.View>
        </ScrollView>
    );
  }
}

export default Contact;