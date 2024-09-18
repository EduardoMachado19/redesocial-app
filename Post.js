import { Text, View, Image, TouchableOpacity, Vibration, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Post({post}) {

    return (
        <View>
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
    )
}

const styles = StyleSheet.create({
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