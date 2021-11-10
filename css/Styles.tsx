import { StyleSheet } from "react-native";


export const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#090909'
    },header:{
        flexDirection:'row',
        paddingTop:60,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:30,

        

    },
    nome:{
        color:'#989cac',
        fontWeight:'bold',
        fontSize:15,
        padding:10
    },
    perfil:{
    },
    imgperfil:{
        width:80,
        height:80,
        resizeMode:'contain',
        borderRadius:100
    },
    titulo:{

    },
    descricao:{
        color:'#989cac',
        paddingLeft:20
    },
    pesquisa:{

    },
    imgpesquisa:{
        flex:1,
        width:30,
        height:30,
        resizeMode:'contain',
        marginLeft:120,
        borderRadius:100
    },


    stories:{
        
        

    },
    titulostories:{
        color:"white",
        fontSize:20,
        margin:20
    },
     
    imgstories:{
        width:200,
        height:300,
        resizeMode:'contain',
        borderRadius:40,
        margin:10
    },

    scrollstories:{

    },

    blackbox:{
        backgroundColor:"#090909",
        fontSize:15,
        padding:10,
        borderRadius:10,
        width:50,
        color:'#fff',
        borderColor:'#fff',
        zIndex:1000,
        top:10,
        borderWidth:1,
        position:"absolute",
        left:30,
        textAlign:"center"

        
    },
    redbox:{
        backgroundColor:"#600",
        fontSize:15,
        padding:10,
        borderRadius:20,
        width:100,
        color:'#fff',
        borderColor:'#fff',
        zIndex:1000,
        top:10,
        borderWidth:1,
        position:"absolute",
        left:30,
        textAlign:"center"

        
    },
    icon:{
        width:10,
        height:10,
        resizeMode:'contain'


    },

    txt:{
        color:"white"

    },
    txticon:{
       
        flexDirection:"row",
        
    }
    
   


    
})



 


