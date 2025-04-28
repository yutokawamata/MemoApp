import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header' // ヘッダー
import MemoListItem from '../../components/MemoListItem' // メモリスト
import CircleButton from '../../components/CircleButton' // ボタン
//import { Feather } from '@expo/vector-icons'
import Icon from '../../components/icon'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
{/* Header*/}
      <Header />
{/* MemoList */}
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
{/* Button */}
      <CircleButton>
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