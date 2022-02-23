import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

class CounterDuplicate extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>{this.props.counter} Times Hello</Text>
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
const styles = StyleSheet.create ({
    container: {
marginTop: 60,
      },
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterDuplicate)