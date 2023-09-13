import 'tailwindcss/tailwind.css'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import Layout from '../components/Layout'
import ShopProvider from '../context/shopContext'
import { useRouter } from 'next/router'
import '../styles/global.css'
import '../styles/animate.css'
import Animate from '../components/Animate'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  )
}

export default MyApp
