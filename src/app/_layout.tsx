//import { Slot } from 'expo-router'
import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
  //return <Slot /> // ログイン画面をそのまま表示
  return <Stack　screenOptions={{
    headerStyle: { backgroundColor: '#467FD3' }, // ヘッダーの背景色
    headerTintColor: '#FFFFFF', // ヘッダーのタイトルの色
    headerTitle: 'Memo App', // ヘッダーのタイトル
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    },
    headerBackTitle: 'Back', // 戻るボタンのタイトル

  }} />
}

export default Layout