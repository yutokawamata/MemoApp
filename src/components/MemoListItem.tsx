import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './icon'
import { Link } from 'expo-router'

const MemoListItem = (): JSX.Element => {
    return (
        <Link href='/memo/detail' asChild>
            <TouchableOpacity style={styles.memoListItem}>
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2020年12月24日</Text>
            </View>
            <TouchableOpacity>
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