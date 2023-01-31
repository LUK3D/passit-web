import './App.css'
import Footer from './components/Footer'
import Head from './components/Head'
import SignUpDialog from './components/signup/SignUpDialog'
import Home from './pages/Home'

function App() {

  return (
    <div className="w-screen h-screen flex flex-col overflow-y-auto text-gray-700 pt-14">
      <Head></Head>
      <Home></Home>
      <Footer></Footer>
      <SignUpDialog></SignUpDialog>
    </div>
  )
}

export default App
