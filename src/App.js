import './App.css';
import Itemcontainer from './ItemContainer';

let imageSources = {'maui': 'https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg',
    'polaroid': 'https://www.haus.de/sites/default/files/styles/textbreite_2_spalten_tablet_klein/public/gutewahl/2020-03/Sofortbildkamera_Polaroid%20OneStep%2B-3.jpg?itok=QA7wdMps',
    'cocooil': 'http://shopping.wavatmospheric.com/wp-content/uploads/2020/05/bamboo-fibers-shampoo.jpg'}

function App() {
  return (
    <div className="App">
      <h1>SUPERSHOP</h1>
      <div className="itemsAll">
      <Itemcontainer imgSrc = {imageSources.maui} title='Maui Moisture' price = '20$' /> 
      <Itemcontainer imgSrc = {imageSources.polaroid} title='Polaroid' price = '60$' /> 
      <Itemcontainer imgSrc = {imageSources.cocooil} title='Cocooil' price = '30$' /> 
      </div>

    </div>
  );
}


export default App;
