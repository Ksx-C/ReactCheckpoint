import React from 'react';
import './App.css';
import CollapsibleExample from './components/NavBar';
import { ProfilePicture } from './components/ProfilePicture';
import BgColorExample from './components/Skills';


function App() {
  return (
    <div>
    <div class="bg_image">
    <CollapsibleExample/>
    <ProfilePicture/>
    <BgColorExample/>
    </div>
    </div>
  );
}

export default App;
