import { useState } from 'react'
import axios from 'axios'
import './index.css'
import Header from './components/Header'
import Main from './components/Main'
const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

function App() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(endpoint, formData).then((res) => {
      console.log(res.data)
      alert('Post creato!')
    })
      .catch((error) => {
        console.error('Oopsie, potrebbe esserci stato un errore!', error)
      })
  }

  return (
    <>
      <Header />
      <Main formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default App
