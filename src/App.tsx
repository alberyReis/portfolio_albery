import { Header } from "./components/Header"
import { About } from "./components/Sections/About"
import { Home } from "./components/Sections/Home"

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </div>
  )
}