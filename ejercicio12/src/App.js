import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import InputForm from './components/InputForm';
import {images} from './helpers/images';
import { useState } from 'react';

function App() {

  const [imagesData,setImagesData] = useState([]);

  const addImage = () => {
    const newImage = images(1);
    setImagesData([...imagesData,newImage]);
  }

  const deleteImage = () => {
    if (imagesData.length > 0) {
      setImagesData(imagesData.slice(0,-1));
    }
  }


  return (
    
    <div className="App">
      <InputForm
    addImage={addImage}
    deleteImage={deleteImage}
    />

      {imagesData.map(img => <Image src={img.source} />)}
    </div>

  );
}

export default App;
