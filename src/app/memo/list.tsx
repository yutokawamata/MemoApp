//import { Feather } from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native'
import MemoListItem from '../../components/MemoListItem' // メモリスト
import CircleButton from '../../components/CircleButton' // ボタン
import Icon from '../../components/icon'
import { router, useNavigation } from 'expo-router' //特定画面のみログアウトボタン表示
import { useEffect } from 'react'
import LogOutButton from '../../components/LogOutButton'

const handlePress = (): void => {
    router.push('/memo/create')
}

const Index = (): JSX.Element => {
  const navigation = useNavigation() //特定画面のみログアウトボタン表示
{/*リスト画面のみにログアウトボタン表示 */}
{/*一度だけ読み込まれるフック useEffect　を使用する。*/}
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  },[])
  return (
    <View style={styles.container}>
{/* MemoList */}
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
{/* Button */}
      <CircleButton onPress={handlePress}>
        {/*<Feather name="plus" size={40} />*/}
        <Icon name='plus' size={40} color='white' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面全体を覆うようにする
    backgroundColor: '#FFFFFF' // 背景色を白にする
  },
})

export default Index