import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Blog from './components/Blog.jsx'
import Home from './components/home.jsx'
import Send from './components/send.jsx'
import Update from './components/update.jsx'
import Delete from './components/delete.jsx'

function App() {
  return (
    <BrowserRouter>
      <Blog />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<Send />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
