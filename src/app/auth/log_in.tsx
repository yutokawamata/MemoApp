import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Button from '../../components/Button'
import { Link } from 'expo-router' // リンクをインポート    
import { router } from 'expo-router' // ルーターをインポート
import { useState } from 'react' // 状態を管理するためのReactのフック
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config'

const handlePress = (email: string, password: string): void => {
    //login
    //router.push('/memo/list') // 履歴を残す
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential.user.uid)
        router.replace('/memo/list') // 履歴を残さない List画面に遷移
    })
    .catch((error) => {
        const { code, message } = error
        console.log(code, message)
        Alert.alert(message)
    })
}

const LogIn = (): JSX.Element => {
    const [email, setEmail] = useState('') // メールアドレスを保存するための状態
    const [password, setPassword] = useState('') // パスワードを保存するための状態
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput 
                    style={styles.input} 
                    value={email} 
                    onChangeText={(text) => setEmail(text)} // 入力したテキストを保存
                    placeholder='Email address' // プレースホルダー
                    autoCapitalize='none' // 大文字を自動で入力しない
                    keyboardType='email-address' // キーボードをメールアドレス用にする
                    textContentType='emailAddress' // テキストのタイプを指定
                />
                <TextInput 
                    style={styles.input} 
                    value={password} // 入力したテキストを保存
                    onChangeText={(text) => setPassword(text)} // 入力したテキストを保存
                    placeholder='Password' // プレースホルダー
                    autoCapitalize='none' // 大文字を自動で入力しない
                    secureTextEntry={true} // パスワードを非表示にする
                    textContentType='password' // テキストのタイプを指定
                />
                <Button label='Submit' onPress={() => handlePress(email, password)}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Link href='/auth/sign_up' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign Up here!</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#FFFFFF',
        height: 48,
        padding: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000',
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
    },
})

export default LogIn