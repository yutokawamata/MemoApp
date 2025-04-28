import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/Button'

const SignUp = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput value='Email address' style={styles.input} />
                <TextInput value='Password' style={styles.input} />
                <Button label='Sign Up' onPress={() => {Alert.alert('Sign Up')}} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Log In</Text>
                    </TouchableOpacity>
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