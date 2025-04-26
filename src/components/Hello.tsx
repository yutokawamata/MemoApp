import { View, Text, StyleSheet, type TextStyle} from 'react-native'

//Propsの型を定義
interface Props {
  children: string
  bang?: boolean //?はオプション 必須ではない
  style?: TextStyle //?はオプション　必須ではない
}

const Hello = (props: Props): JSX.Element => {
  const {children, bang, style} = props
  return (
    <View>
        {/* 後のスタイルが優先される */}
        <Text style={[styles.text, style]}>
          Hello {children}{bang === true ? '!' : ''}
          </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})
export default Hello