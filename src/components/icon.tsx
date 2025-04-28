import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

// フォントデータを読み込む
import fontData from '../../assets/fonts/icomoon.ttf'
import fontSelection from '../../assets/fonts/selection.json'

// アイコンを作成
const CustomIcon = createIconSetFromIcoMoon(
    fontSelection,
    'IcoMoon',
    'icomoon.ttf'
)

interface Props {
    name: string
    size: number
    color: string
}

// アイコンを表示するコンポーネント
const Icon = (props: Props): JSX.Element | null => {
    // プロパティを取得
    const { name, size, color } = props
    // フォントを読み込む
    const [fontsLoaded] = useFonts({
        IcoMoon: fontData
    })
    // フォントが読み込まれるまではローディング画面を表示
    if (!fontsLoaded) {
        return null
    }
    // フォントが読み込まれたらアイコンを表示
    return (
        <CustomIcon name={name} size={size} color={color} />
    )
}

export default Icon