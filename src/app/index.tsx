import { View, StyleSheet } from 'react-native'
import Header from '../components/Header' // ヘッダー
import MemoListItem from '../components/MemoListItem' // メモリスト
import CircleButton from '../components/CircleButton' // ボタン

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
      <CircleButton>+</CircleButton>
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