import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './components/intro/Intro';
import NavigationBar from './components/navbar/NavigationBar';
import Skills from './components/skills/Skills';
import Employments from './components/employments/Employments';
import Learnings from './components/learnings/Learnings';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<Intro/>} />
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/learnings' element={<Learnings/>}/>
        <Route path='/employments' element={<Employments/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
