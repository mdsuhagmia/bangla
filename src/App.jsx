import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/root/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Blog from "./pages/Blog"
import Faq from "./pages/Faq"
import Support from "./pages/Support"
import Contact from "./pages/Contact"

let routering = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/service" element={<Service/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/faq" element={<Faq/>}></Route>
    <Route path="/support" element={<Support/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Route>
))

function App() {
  
  return (
    <>
      <RouterProvider router={routering}></RouterProvider>
    </>
  )
}

export default App
