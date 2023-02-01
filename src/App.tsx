import './App.css'
import Footer from './components/Footer'
import Head from './components/Head'
import SignUpDialog from './components/signup/SignUpDialog'
import Home from './pages/Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Passageiro from './pages/Passageiro'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/passageiro",
    element: <Passageiro></Passageiro>,
  },
]);

function App() {

  return (
    <div className="w-screen h-screen flex flex-col overflow-y-auto text-gray-700 pt-14">
      <Head></Head>
      <RouterProvider router={router} />
      <SignUpDialog></SignUpDialog>
      <Footer></Footer>
    </div>
  )
}

export default App
