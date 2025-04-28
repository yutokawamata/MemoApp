import {
    Text,
    StyleSheet,
    type ViewStyle,
    TouchableOpacity,
 } from 'react-native'

interface Props {
    children: JSX.Element
    style?: ViewStyle
}

const CircleButton = (props: Props): JSX.Element => {
    const { children, style } = props
    return (
        <TouchableOpacity style={[styles.circleButton, style]}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({  
    circleButton: {
        width: 64, // 幅
        height: 64, // 高さ
        borderRadius: 32, // 角の丸さ
        backgroundColor: '#467FD3', // 背景色
        justifyContent: 'center', // 横方向に整列
        alignItems: 'center', // 縦方向に整列
        position: 'absolute', // 絶対配置
        right: 40, // 右に配置
        bottom: 40, // 下に配置
        shadowColor: '#000000', // 影の色
        shadowOffset: { width: 0, height: 8 }, // 影の位置
        shadowOpacity: 0.25, // 影の透明度
        shadowRadius: 8, // 影の半径
        elevation: 8, // 影の透明度 Android 影反映
    },
    circleButtonLabel: {
        color: '#FFFFFF',
        fontSize: 40,
        lineHeight: 40,
    },
})
export default CircleButton