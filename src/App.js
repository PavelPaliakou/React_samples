import './App.css';
// import AccordionBlock from './components/accordion';
// import RandomColorGenerator from './components/colorGenerator';
// import StarRating from './components/starRating';
import ImageSlider from './components/imageSlider';

function App() {
  return (
    <div className="App">
      {/* <AccordionBlock /> */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    </div>
  );
}

export default App;
