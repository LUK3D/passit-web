import './App.css'
import Head from './components/Head'
import Home from './pages/Home'

function App() {

  return (
    <div className="w-screen h-screen flex flex-col overflow-y-auto text-gray-700 pt-14">
      <Head></Head>
      <Home></Home>
    </div>
  )
}

export default App
