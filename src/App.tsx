import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('Title');
  const [upvotes, setUpvotes] = useState('12.5k');
  const [story, setStory] = useState('Story here');
  const [flair, setFlair] = useState('Flair');

  function getRandomPost() {
    console.log('This is not the console log you are looking for.');
  }

  useEffect(() => {
    getRandomPost();
  }, []);

  return (
    <div className='App flex justify-center items-center'>
      <div className='w-screen-lg max-h-screen h-screen mx-auto py-10'>
        <div id='header'>
          <div id='title' className='font-semibold text-2xl'>{title}</div>
          <div id='upvotes' className='opacity-50'>
            <span className='font-semibold'>${upvotes}</span> upvotes
          </div>
        </div>

        <div id='main'>
          {story}
        </div>

        <div id='buttons'>
          <div id='thread-buttons'>

          </div>

          <div id='site-buttons'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
