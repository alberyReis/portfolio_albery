import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Divider } from "./components/Primitives/Divider"
import { About } from "./components/Sections/About"
import { Contact } from "./components/Sections/Contact"
import { Experience } from "./components/Sections/Experience"
import { Home } from "./components/Sections/Home"
import { Projects } from "./components/Sections/Projects"
import { Skills } from "./components/Sections/Skills"

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
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}