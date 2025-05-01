import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Button from '../../components/Button'
import { Link } from 'expo-router' // リンクをインポート
import { router } from 'expo-router' // ルーターをインポート
import { useState } from 'react' // 状態を管理するためのReactのフック
import { auth } from '../../config' // firebaseの認証をインポート
import { createUserWithEmailAndPassword } from 'firebase/auth' // firebaseの認証をインポート

const handlePress = (email: string, password: string): void => {
    //会員登録
    //submitボタン押下すると入力したemailとpasswordをfirebaseに保存
    createUserWithEmailAndPassword(auth, email, password) // firebaseの認証をインポート
    .then((userCredential) => { // 成功した場合
        console.log(userCredential.user.uid)
        router.replace('/memo/list') // 履歴を残さない List画面に遷移
    })
    .catch((error) => { // 失敗した場合
        const { code, message } = error
        console.log(code, message)
        Alert.alert(message)
    })
}

const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState('') // メールアドレスを保存するための状態
    const [password, setPassword] = useState('') // パスワードを保存するための状態
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign</Text>
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
                <Button label='Submit' onPress={() => handlePress(email, password)} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Link href='/auth/log_in' asChild replace>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log In</Text>
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

export default SignUp