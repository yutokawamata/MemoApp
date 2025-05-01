import { Redirect, router } from 'expo-router' // リダイレクト
import { onAuthStateChanged } from 'firebase/auth' // 認証状態を監視
import { auth } from '../config' // 認証をインポート
import { useEffect } from 'react' // 副作用を管理

const Index = (): JSX.Element => {
    useEffect(() => { // 認証状態を監視 一度だけ実行されるフック
        onAuthStateChanged(auth, (user) => {
          if (user !== null) {
            router.replace('/memo/list')
          }
        })
    }, [])

    return <Redirect href="/auth/log_up" />
}

export default Index