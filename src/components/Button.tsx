import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
    label: string
    onPress: () => void // 関数 何も返さない
}

const Button = (props: Props): JSX.Element => {
    const { label, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#467FD3',
        height: 48,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel:{
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
})

export default Button