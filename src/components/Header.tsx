import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>Memo App</Text>
                <Text style={styles.headerLogout}>ログアウト</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#467FD3', // 背景色を青にする
        height: 104, // 高さを104にする
        justifyContent: 'flex-end' // 縦配列に整列　下に配置
    },
    headerInner: {
        alignItems: 'center' // 横方向整列　中央に配置
    },
    headerTitle: {
        marginBottom: 8, // 下に配置
        fontSize: 22, // フォントサイズ
        lineHeight: 32, // 行高
        fontWeight: 'bold', // フォントの太さ
        color: '#FFFFFF' // 色
    },
    headerLogout: {
        position: 'absolute', // 絶対配置
        right: 16, // 右に配置
        bottom: 16, // 下に配置
        fontSize: 16, // フォントサイズ
        lineHeight: 22, // 行高
        color: 'rgba(255, 255, 255, 0.7)' // 色
    },
})

export default Header;