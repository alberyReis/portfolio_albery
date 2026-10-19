import { Header } from "./components/Header"
import { Divider } from "./components/Primitives/Divider"
import { About } from "./components/Sections/About"
import { Experience } from "./components/Sections/Experience"
import { Home } from "./components/Sections/Home"
import { Projects } from "./components/Sections/Projects"

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
      </main>
    </div>
  )
}