import { View, Text, StyleSheet,ScrollView } from 'react-native'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
//import { Feather } from '@expo/vector-icons'
import Icon from '../../components/icon'

const Detail = (): JSX.Element => {
    return (

        <View>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoHeaderTitle}>買い物リスト</Text>
                <Text style={styles.memoHeaderDate}>2020年1月24日</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文ようなので使い方を間違えると不自然に見えることもありますので要注意です。
                </Text>
            </ScrollView>
            <CircleButton style={{ top: 160, bottom: 'auto' }}>
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
        paddingVertical: 32, // 上下の余白
        paddingHorizontal: 27, // 左右の余白
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detail