import React,{useState} from 'react'

import {Text,StyleSheet,View,TouchableOpacity,StatusBar} from 'react-native'

const App = () => {

  const [randomColor,setRandomColor] = useState("#FFFFFF");
  const [count,setCount] = useState(0);


  const changeColor = () => {
    let color = 'rgb('+
      Math.floor(Math.random() * 256) + 
      ',' + 
      Math.floor(Math.random() * 256) + 
      ',' + 
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
    let temporaryCount = count;
    ++temporaryCount;
    setCount(temporaryCount);
  }

  return(
    <>
      <StatusBar backgroundColor={randomColor} />
        <View style={[{backgroundColor:randomColor},styles.container]}>
          <TouchableOpacity onPress={changeColor}>
            <Text style={styles.text}>Click Me!</Text>            
          </TouchableOpacity>
          <Text style={[styles.text,{marginTop:10}]}>Count: {count}</Text>
        </View>
    </>
  );
};

export default App 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: "#000000",
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    textTransform: 'uppercase'
  }
});