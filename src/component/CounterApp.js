import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import CounterDuplicate from '../component/CounterDuplicate';

 class CounterApp extends React.Component {
  
    render() {
        return(
            <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: 400,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.increaseCounter()}>
            <Text style={styles.text}>Increase</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 30}}>{this.props.counter}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.decreaseCounter()}>
            <Text style={styles.text}>Decrease</Text>
          </TouchableOpacity>
        </View>
        <CounterDuplicate />
      </View>
        )
    }
}

function mapStateToProps(state){
    return {
        counter: state.counter
    }
}
function mapDispatchToProps(dispatch){
    return {
        increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    }
} 



export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
      borderWidth: 1,
      width: '40%',
      alignItems: 'center',
      borderRadius: 10,
      padding: 10,
    },
    text: {
      fontSize: 20,
    },
  });
  