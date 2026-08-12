import { Background } from './components/Background'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { LinkList } from './components/LinkList'
import { Profile } from './components/Profile'

export default function App() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden text-white">
      <Background />
      <CustomCursor />

      <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-10 sm:max-w-lg sm:px-6 sm:py-14">
        <Profile />
        <LinkList />
        <Footer />
      </main>
    </div>
  )
}
