import { View, SafeAreaView, StyleSheet, Image, StatusBar, ScrollView, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { posts } from './posts'
import { Post } from './Post'

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
            <Post post={post}></Post>
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
  }
})
