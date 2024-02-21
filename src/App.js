import './App.css';
import QRCodeGenerator from './components/qrCodeGenerator';
// import TreeView from './components/treeView';
// import LoadMore from './components/loadMore';
// import AccordionBlock from './components/accordion';
// import RandomColorGenerator from './components/colorGenerator';
// import StarRating from './components/starRating';
// import ImageSlider from './components/imageSlider';

function App() {
  return (
    <div className="App">
      {/* <AccordionBlock /> */}
      
      {/* <RandomColorGenerator /> */}
      
      {/* <StarRating /> */}
      
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      
      {/* Fetch doesn't work because React is fucking shit!!!!!!!!!!!!
      <LoadMore /> */}

      {/* <TreeView /> */}
      
      <QRCodeGenerator />
    </div>
  );
}

export default App;
