import './App.css';

function App() {
  function changeColor(event) {
    const color = event.target.dataset.color; 
    document.body.style.background = color;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1
        style={{
          color: 'white',
          textDecoration: 'underline',
          margin: '20px 0',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Background Color Changer
      </h1>

      <h1
        style={{
          color: 'white',
          margin: '10px 0',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Choose color:
      </h1>
      <div>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {['Red', 'Yellow', 'Blue', 'Green', 'Purple'].map((color) => (
            <li
              key={color}
              data-color={color.toLowerCase()} 
              onClick={changeColor}
              style={{
                color: color.toLowerCase(),
                fontSize: '18px',
                cursor: 'pointer',
                padding: '10px 20px',
                borderRadius: '8px',
                transition: 'transform 0.3s, background 0.3s',
                backgroundColor: '#f0f0f0',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={(e) =>
                (e.target.style.transform = 'scale(1.1)')
              }
              onMouseLeave={(e) =>
                (e.target.style.transform = 'scale(1)')
              }
            >
              {color}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;