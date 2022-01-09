import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogsList from './components/BlogsList';
import BlogDetails from './components/BlogDetails';
import Header from './components/Header';

function App() {
  
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BlogsList />} />
          <Route path="/posts/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
