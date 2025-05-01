import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Icon from './icon'
import { Link } from 'expo-router'
import { type Memo } from '../../types/memo'
import { deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../config'

interface Props {
    memo: Memo
}

const handlePress = (id: string): void => {
    if (auth.currentUser === null) {return}
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    Alert.alert('メモを削除します', 'よろしいですか？', [
        { text: 'キャンセル' },
        { text: '削除する', style: 'destructive', onPress: () => {
            deleteDoc(ref).catch(() => { Alert.alert('削除に失敗しました') })
        }}
    ])
}

const MemoListItem = (props: Props): JSX.Element => {
    const { memo } = props
    const dateString = memo.updatedAt.toDate().toLocaleString('ja-JP')

    return (
        <Link 
            href={{ pathname: '/memo/detail', params: { id: memo.id } }}
            asChild
        >
            <TouchableOpacity style={styles.memoListItem}>
                <View>
                    <Text style={styles.memoListItemTitle}>{memo.bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{dateString}</Text>
            </View>
            <TouchableOpacity onPress={() => { handlePress(memo.id)}}>
                <Icon name='delete' size={40} color='#B0B0B0' />
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row', // 横方向に配置
        justifyContent: 'space-between', // 左右に配置
        paddingVertical: 16, // 上下のパディング
        paddingHorizontal: 19, // 左右のパディング
        alignItems: 'center', // 縦方向に整列
        borderBottomWidth: 1, // 下線を表示
        borderBottomColor: 'rgba(0, 0, 0, 0.15)', // 下線の色
    },
        memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
        memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    },
})

export default MemoListItem