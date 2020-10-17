const React = require("react-native");
import { Dimensions } from 'react-native'

export default {

containerView: {
    flex: 1, 
    justifyContent:'center',
    alignItems:'center'
},

welcomeText: {
    marginBottom: 20
},

imageView: {
    width: Dimensions.get('window').width, 
    height: 350,
    marginBottom:40
},

accountText: {
    flexDirection:'row', 
    margin:10,  
},

getStartedButton: {
    borderRadius:20
},

signInText: {
    marginHorizontal:10, 
    color:'blue', 
    fontSize:15, 
    fontWeight: 'bold'
}


};
