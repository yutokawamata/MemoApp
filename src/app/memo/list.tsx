//import { Feather } from '@expo/vector-icons'
import { View, StyleSheet, FlatList } from 'react-native'
import MemoListItem from '../../components/MemoListItem' // メモリスト
import CircleButton from '../../components/CircleButton' // ボタン
import Icon from '../../components/icon'
import { router, useNavigation } from 'expo-router' //特定画面のみログアウトボタン表示
import { useEffect } from 'react'
import LogOutButton from '../../components/LogOutButton'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../config'
import { auth } from '../../config'
import { useState } from 'react'
import { type Memo } from '../../../types/memo'
const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])
//特定画面のみログアウトボタン表示
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  },[])

// メモを取得
  useEffect(() => {
    console.log('Current user:', auth.currentUser?.uid) // ユーザーIDを確認

    if (auth.currentUser === null) { 
      console.log('No user logged in')
      return 
    }
      const ref = collection(db, `users/${auth.currentUser?.uid}/memos`)
      console.log('Collection path:', ref.path) // コレクションパスを確認
      const q = query(ref, orderBy('updatedAt', 'desc'))
      const unsub = onSnapshot(q, (snapshot) => {
        console.log('Snapshot size:', snapshot.size) // 取得したドキュメント数を確認
        const remoteMemos: Memo[] =[]
        snapshot.forEach((doc) => {

          console.log('memo', doc.id, doc.data())
          const { bodyText, updatedAt } = doc.data()
          remoteMemos.push({
            id: doc.id,
            bodyText,
            updatedAt,
          })
        })
        setMemos(remoteMemos) // メモをセット
    })
    return unsub
  },[])

  return (
    <View style={styles.container}>
{/* MemoList */}
      <FlatList
        data={memos} // メモのデータ
        renderItem={({ item }) => <MemoListItem memo={item} />} // メモの表示
      />
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

export default List