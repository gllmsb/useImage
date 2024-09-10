import { useImage } from './components/useImage/useImage';
import './App.css'

function App() {
  const { images, error } = useImage();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((path, index) => (
          <img key={index} src={path} alt={`Image ${index}`} style={{ width: '150px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
}

export default App
 