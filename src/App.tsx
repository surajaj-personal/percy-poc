import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: '#282c34', padding: '10px', color: 'white', textAlign: 'center' }}>
        <h1>Test Page for Percy</h1>
      </header>
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Welcome to the Percy Integration Test</h2>
        <p>
          This page is designed to test visual changes using Percy. Make some modifications and see how Percy detects them.
        </p>
        <button
          style={{
            backgroundColor: 'purple',
            color: 'orange',
            padding: '15px 25px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Click Me
        </button>
      </main>
      <footer style={{ backgroundColor: '#f1f1f1', padding: '10px', textAlign: 'center', marginTop: '20px' }}>
        <small>&copy; 2024 Test Company</small>
      </footer>
    </div>
  );
};

export default App;