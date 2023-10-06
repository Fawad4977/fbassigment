import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Gallery from './components/Gallery';
function App() {
 
  const details =  {

    title:"Today had lunch at Kolachi",
    date:Date.now(),
    images:['https://media.gettyimages.com/id/1242776968/photo/cricket-asia-uae-ind-pak.jpg?s=612x612&w=gi&k=20&c=i7TV8r_EQRW5f9guPyIjqhYIxUp42WknSjyUAHtUN6s=','https://media.gettyimages.com/id/1241180396/photo/cricket-pak-wis-odi.jpg?s=612x612&w=gi&k=20&c=5LlBNvZOqXwzI9_tpXcsaMgs5BkWKafSry4dioEUpmI=','https://media.gettyimages.com/id/1440911242/photo/icc-mens-t20-world-cup-final-previews.jpg?s=612x612&w=gi&k=20&c=DY2A8E_I4uuGWuxrLllVRJr3oAFke0-Bk-a7G_OpnaE=','https://media.gettyimages.com/id/1348632607/photo/india-v-pakistan-icc-mens-t20-world-cup-2021.jpg?s=612x612&w=gi&k=20&c=E0HYdvdAKpaIYVJhMOHYzSk-iLvN8JtdCjx7-ygXWYo='],
    profilePic:'https://media.gettyimages.com/id/1347896619/photo/pakistan-headshots-icc-mens-t20-world-cup-2021.jpg?s=612x612&w=gi&k=20&c=Wj847FBfKCzO9ZFKMu41MKLnSZd_ZB68HCD4ZkG49kA=',
    username:"Kashif"}
  
  
  
  
  
  return (
    <div className="App">
      <header className="App-header">

        <Header title={details.title} username={details.username} profilePic={details.profilePic} />
       <Gallery  images={details.images} />
        <Button text={'like'}  />
        <Button text={'share'}   />






      </header>
    </div>
  );
}

export default App;
