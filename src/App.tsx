import { Header } from "./components/Header/Header"
import { Home } from "./components/Sections/Home"

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
    </div>
  )
}