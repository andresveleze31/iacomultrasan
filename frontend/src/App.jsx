import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import Layout from './layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UploadFile from './pages/UploadFile'
import ListaEmbargos from './pages/ListaEmbargos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload-file" element={<UploadFile />} />
          <Route path="/listado-embargos" element={<ListaEmbargos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
