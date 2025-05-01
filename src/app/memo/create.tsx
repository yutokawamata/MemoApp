import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../config'
import { auth } from '../../config'
import { useState } from 'react'

const handlePress = (bodyText: string): void => {
    // ユーザーがログインしていない場合は、ログイン画面にリダイレクト
    if (auth.currentUser === null) { return router.replace('/auth/log_in') }
    // ユーザーのメモを追加
    const ref = collection(db, `users/${auth.currentUser?.uid}/memos`)
    addDoc(ref, {
        bodyText: bodyText,
        updatedAt: Timestamp.fromDate(new Date()),
    })
        .then((docRef) => {
            console.log('メモを追加しました', docRef.id)
            //router.back() // 前の画面に戻る
        })
        .catch((error) => {
            console.log(error)
        })
    router.back() // 前の画面に戻る
}

const Create = (): JSX.Element => {
    const [bodyText, setBodyText] = useState('')
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container} >
            <View style={styles.inputContainer}>
                <TextInput 
                    multiline={true}
                    style={styles.input}
                    value={bodyText}
                    onChangeText={(text) => setBodyText(text)} 
                />
            </View>
            <CircleButton onPress={() => handlePress(bodyText)}>
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

export default Create