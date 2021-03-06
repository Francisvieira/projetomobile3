import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, ScrollViewBase, SectionList, StyleSheet, Text, View, _ScrollView } from 'react-native';
import { estilo } from './css/Styles';
export default function App() {
  return (

    <View style={estilo.container}>


      <View style={estilo.header}>
        <View style={estilo.perfil}>
          <Image source={{ uri: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/08/peaky-blinders.jpg" }} style={estilo.imgperfil} />
        </View>

        <View style={estilo.titulo}>
          <Text style={estilo.nome}>Francisco</Text>
          <Text style={estilo.descricao}>lorem Ipsum  </Text>
        </View>

        <View style={estilo.pesquisa}>
          <Image source={{ uri: "data:image/png;base64,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" }} style={estilo.imgpesquisa} />
        </View>

      </View>
      {/*~~~~~~~~~~~~~~~~~~ Fim do header ~~~~~~~~~~~~~~*/}


      <ScrollView horizontal={false}>
        {/*inicio do stories*/}

        <View style={estilo.stories} >
          <Text style={estilo.titulostories}>
            Stories
          </Text>
          {/* fim do titulo stories */}
            <ScrollView horizontal={true} style={estilo.scrollstories}>
              <View>
                <Text style={estilo.blackbox}>
                  Live
                </Text>
                <Image source={{ uri: "https://image.freepik.com/fotos-gratis/foto-vertical-de-um-caminhante-na-trilha-de-hardergrat-nos-alpes-suicos_181624-39720.jpg" }} style={estilo.imgstories} />
                <View style={estilo.txticon}>
                  <Text style={estilo.txt}>Savana</Text>
                  <Image source={require("./assets/iconeverify.png")} style={estilo.icon} />
                </View>
              </View>


              <View>

                <Text style={estilo.redbox}>
                  Premiere
                </Text>
                <Image source={{ uri: "https://pbs.twimg.com/media/Eemw57vWoAArZGM.jpg" }} style={estilo.imgstories} />
                <View style={estilo.txticon}>
                  <Text style={estilo.txt}>Savana</Text>
                  <Image source={require("./assets/iconeverify.png")} style={estilo.icon} />
                </View>
              </View>

              <View>
                <Text style={estilo.blackbox}>
                  Live
                </Text>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhwmcGRmf8ml33xfXBLfoG-XXAQZdjfxPQQ&usqp=CAU" }} style={estilo.imgstories} />
                <View style={estilo.txticon}>
                  <Text style={estilo.txt}>casal</Text>
                  <Image source={require("./assets/iconeverify.png")} style={estilo.icon} />
                </View>
              </View>

              <View>
                <Text style={estilo.blackbox}>
                  Live
                </Text>
                <Image source={{ uri: "https://parquevilavelha.com.br/wp-content/uploads/2021/03/wallpaper-vertical-arenitos.jpg" }} style={estilo.imgstories} />
                <View style={estilo.txticon}>
                  <Text style={estilo.txt}>trilha</Text>
                  <Image source={require("./assets/iconeverify.png")} style={estilo.icon} />
                </View>
              </View>

              <View>
                <Text style={estilo.blackbox}>
                  Live
                </Text>
                <Image source={{ uri: "https://static.vecteezy.com/ti/fotos-gratis/p1/825013-mulher-mochileiro-em-trilha-ama-dablam-montanha-vertical-foto.jpg" }} style={estilo.imgstories} />
                <View style={estilo.txticon}>
                  <Text style={estilo.txt}>Savana</Text>
                  <Image source={require("./assets/iconeverify.png")} style={estilo.icon} />
                </View>
              </View>
            
            </ScrollView>
            </View>

          
   {/*inicio do trending */}

           <View style={estilo.treding}>
            <View style={estilo.cxtitulo}>
              <Text style={estilo.trendingtitulo}>
                Trending
              </Text>
              <Image source={require("./assets/more.png")} style={estilo.more}/>
              </View>

              <View style={estilo.cxtrendingdetalhe}>
                <View>
                  <Image source={{ uri: "https://static.vecteezy.com/ti/fotos-gratis/p2/784997-esquiador-pulando-de-um-penhasco-foto.jpg" }} style={estilo.detalheimg} />
                  <Text style={estilo.detalhelike}>Like</Text>
                </View>

                <View style={estilo.trendingusuario}>
                  <Image source={{ uri: "https://st4.depositphotos.com/1007995/i/600/depositphotos_247076982-stock-photo-face-laughing-young-casual-man.jpg" }} style={estilo.trendingusuarioimg} />
                </View>

                <View>
                  <Text style={estilo.trendingusuariotitulo}>Joao Miguel</Text>
                  <Text style={estilo.trendingusuariosub}>2 min atras</Text>

                </View>

                <Text style={estilo.trendingobs}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eius beatae asperiores quibusdam libero facilis ut, amet suscipit praesentium a autem consequuntur. Rerum voluptatem, eos odit maiores deleniti porro et!
                </Text>

              </View>
              { /*fim do treding */}
            </View>
              {/*todos elementos tem que ficar acima do header */}
        </ScrollView>
        </View>
        );
}

