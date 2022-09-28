import { BrowserRouter } from "react-router-dom"
import AnimatedRoutes from "./components/animatedroutes"
import Footer from "./components/footer"
import { Video } from "./components/video"

import { CTA } from "./components/CTA"
import Action from "./components/actions"

const App = () => (
      <BrowserRouter>
        <CTA />
        <Video />
        <AnimatedRoutes />
        <Footer />
    </BrowserRouter>
)

export default App
