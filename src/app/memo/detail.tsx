import { View, Text, StyleSheet,ScrollView } from 'react-native'
import CircleButton from '../../components/CircleButton'
//import { Feather } from '@expo/vector-icons'
import Icon from '../../components/icon' // アイコン
import { router, useLocalSearchParams } from 'expo-router' // パラメーター
import { onSnapshot, doc } from 'firebase/firestore' // データベース
import { db, auth } from '../../config' // データベース
import { useState, useEffect } from 'react' // 状態管理
import { type Memo } from '../../../types/memo' // メモの型

const handlePress = (id: string): void => {
    router.push({ pathname: '/memo/edit', params: { id } })
}

const Detail = (): JSX.Element => {
    // パラメーターを取得
    const id  = String(useLocalSearchParams().id)
    console.log(id)

    // メモを取得
    const [memo, setMemo] = useState<Memo | null>(null)
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        const unsub = onSnapshot(ref, (memoDoc) => { // メモのデータの監視
            const { bodyText, updatedAt } = memoDoc.data() as Memo
            setMemo({
                id: memoDoc.id,
                bodyText,
                updatedAt
            })
        })
        return unsub // 監視を解除
    }, [])

    return (
        <View>
            <View style={styles.memoHeader}>
                <Text style={styles.memoHeaderTitle} numberOfLines={1}>{memo?.bodyText.split('\n')[0]}</Text>
                <Text style={styles.memoHeaderDate}>{memo?.updatedAt.toDate().toLocaleString('ja-JP')}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    {memo?.bodyText}
                </Text>
            </ScrollView>
            <CircleButton onPress={() => handlePress(id)} style={{ top: 60, bottom: 'auto' }}>
                {/*<Feather name="plus" size={40} color="white" />*/}
                <Icon name='pencil' size={40} color='white' />
            </CircleButton>
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // 画面全体を覆うようにする
        backgroundColor: 'blue'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center', // 縦方向に整列
        paddingHorizontal: 24, // 左右の余白
        paddingVertical: 19, // 上下の余白
    },
    memoHeaderTitle: {
        fontSize: 20,
        lineHeight: 32,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    memoHeaderDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#FFFFFF'
    },
    memoBody: {
        paddingHorizontal: 27, // 左右の余白
    },
    memoBodyText: {
        paddingVertical: 32, // 上下の余白
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detail