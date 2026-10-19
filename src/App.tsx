import { Header } from "./components/Header"
import { Divider } from "./components/Primitives/Divider"
import { About } from "./components/Sections/About"
import { Home } from "./components/Sections/Home"

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Divider />
        <About />
        <Divider />
      </main>
    </div>
  )
}