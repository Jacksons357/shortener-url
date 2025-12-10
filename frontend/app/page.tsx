import Header from './components/Header'
import UrlForm from './components/UrlForm'
import UrlList from './components/UrlList'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-around bg-foreground flex-col">
      <Header />

      <UrlForm />

      <UrlList />
    </div>
  )
}
