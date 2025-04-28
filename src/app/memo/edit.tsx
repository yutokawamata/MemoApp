import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { router } from 'expo-router'

const handlePress = (): void => {
    router.back() // 前の画面に戻る
}

const Edit = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container} >
            <View style={styles.inputContainer}>
                <TextInput multiline={true} style={styles.input} value='買い物スト' />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='check' size={40} color='#FFFFFF' />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
    }
})

export default Edit