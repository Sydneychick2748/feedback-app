// little cool note go to dev tools and go to componets you can see your componets on the console nad what data they have 

// fun fact in the extension es7 has differnet sinippits of code to set up each component and more this component was made using the code rfce
// u4 generates new ids 
// import {motion } from 'framer-motion';
// import {u4 as uuidv4} from 'uuid';

import { BrowserRouter as Router, Route , Routes, NavLink} from "react-router-dom";
import { useState} from 'react';
import Card from './shared/Card';
import './App.css';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage"
import AboutIconLink from './components/AboutIconLink';
import Posts from './components/Posts';
// import PostsexampleRedirect from './components/PostsexampleRedirect';
// import FeedbackItem from "./components/FeedbackItem";



function App() {
 // this is the usestate for the data in the folder FeedbackData it is passed in here so you dont have all that array of data  in one area 
  const [feedback,setFeedback]=useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    // this is how to use the uuid generates a unique id 
    // newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])

  }

const deleteFeedback = (id) => {
  if (window.confirm('Are you sure you want to delete?')) {
    setFeedback(feedback.filter((item)=> item.id !== id))
  }
  }
 

  return (
  <div className="container">
    <>
    <Router>
      <Header />
      <Routes>
        <Route 
        path="/"
        element={<div>
        <FeedbackForm  handleAdd ={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}
          handleDelete ={deleteFeedback}/>
          <AboutIconLink />
        </div>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path ='/post/:id/:name' element ={<Posts/>}/> 
      </Routes>
      <Card>
    <NavLink to='/' acitveClassName ='acitve'>
    Home
    </NavLink>
     <NavLink to='/about' acitveClassName ='acitve'>
    About
    </NavLink>
    </Card> 
{/* <PostsexampleRedirect/>
       */}
    </Router>
    </>
  </div>
  
  );

  }
export default App;


