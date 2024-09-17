import { Text, View, SafeAreaView, StyleSheet, Image, StatusBar, TouchableOpacity, Vibration, ScrollView, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { posts } from './posts'

export default function App() {
  return (

    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#F56040" />
      <View style={styles.header}>
        <Image source={require('./assets/instagram.png')} style={styles.logo} />
        <View style={styles.searchContainer}>
          <MaterialCommunityIcons name='magnify' size={20} color='#000000C' style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar"
          />
        </View>
        <MaterialCommunityIcons name='chat-outline' size={40} color='#000000' />
      </View>

      <ScrollView>

        {
          posts.map((post) => (
            <View key={post.id}>

              <View style={styles.headerPost}>
                <Text style={styles.colorName}>{post.user}</Text>
                <MaterialCommunityIcons name='dots-horizontal' size={30} color='#000000' />
              </View>

              <Image style={styles.imagePost} source={{ uri: post.image }} />

              <View style={styles.footerPost}>

                <View style={styles.leftIcons}>
                  <TouchableOpacity onPress={() => Vibration.vibrate(30)}>
                    <MaterialCommunityIcons name='heart-outline' size={30} color='#000000' />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Vibration.vibrate(30)}>
                    <MaterialCommunityIcons name='chat-outline' size={30} color='#000000' />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Vibration.vibrate(30)}>
                    <MaterialCommunityIcons name='share-outline' size={30} color='#000000' />
                  </TouchableOpacity>
                </View>

                <View style={styles.bookMark}>
                  <TouchableOpacity onPress={() => Vibration.vibrate(30)}>
                    <MaterialCommunityIcons name='bookmark-outline' size={30} color='#000000' />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.likeCount}>{post.likes} likes</Text>
              <Text style={styles.comment}>{post.caption}</Text>

            </View>
          ))
        }

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  logo: {
    width: 40,
    height: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  colorName: {
    color: '#E6675E',
    fontWeight: 'bold',
  },
  imagePost: {
    width: '100%',
    height: 300
  },
  footerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
  },
  leftIcons: {
    flexDirection: 'row',
  },
  bookMark: {
    marginLeft: 'auto',
  },
  likeCount: {
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5
  },
  comment: {
    textAlign: 'justify',
    marginLeft: 5,
    marginRight: 5
  },
})
