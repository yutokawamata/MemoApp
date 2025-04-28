import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Button from '../../components/Button'
import { Link } from 'expo-router'
import { router } from 'expo-router'

const handlePress = (): void => {
    //login
    //router.push('/memo/list') // 履歴を残す
    router.replace('/memo/list') // 履歴を残さない
}

const LogIn = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput value='Email address' style={styles.input} />
                <TextInput value='Password' style={styles.input} />
                <Button label='Log In' onPress={handlePress}/>
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