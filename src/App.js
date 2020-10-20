import React from 'react';
import Profile from './profile/profile'
​
​
function App() {
  const alertMyInput = name => alert(name);
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
     <Profile name='jawher hajri' bio='...' profession='etudiant' alertMyInput={alertMyInput} >
       <img src='/jawher.jpg' alt='myImage' width="200px" />
       </Profile>
    </div>
  );
}
​
export default App;