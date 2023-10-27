import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function onclick() {
    window.open('http://127.0.0.1:8001/pay');
  }

  return (
    <>
      <div className="index">
        <div className="content">
          <div>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={onclick}>去支付</button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
        <div className="action-wrap">
          <div className="custom-btn-item">
            <div>
              <div className="custom-button">
                <i className="icon">
                  <svg
                    t="1698159547195"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="17333"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M512 76.8c-236.8 0-435.2 192-435.2 435.2s192 435.2 435.2 435.2 435.2-192 435.2-435.2S748.8 76.8 512 76.8z m249.6 320L480 704c-12.8 12.8-38.4 12.8-51.2 0L288 556.8c-12.8-12.8-12.8-38.4 0-51.2 12.8-12.8 38.4-12.8 51.2 0l115.2 115.2L704 339.2c12.8-12.8 38.4-12.8 51.2 0 25.6 12.8 25.6 38.4 6.4 57.6z"
                      fill="#ffffff"
                      p-id="17334"
                      data-spm-anchor-id="a313x.search_index.0.i2.76c03a81l4yP81"
                      class=""
                    ></path>
                    <path
                      d="M710.4 339.2l-256 281.6-115.2-115.2c-12.8-12.8-38.4-12.8-51.2 0-12.8 12.8-12.8 38.4 0 51.2l147.2 140.8c12.8 12.8 38.4 12.8 51.2 0L768 390.4c12.8-12.8 12.8-38.4 0-51.2-19.2-12.8-44.8-12.8-57.6 0z"
                      fill="#00bd77"
                      p-id="17335"
                      data-spm-anchor-id="a313x.search_index.0.i3.76c03a81l4yP81"
                      class="selected"
                    ></path>
                  </svg>
                </i>
              </div>
              <p className="custom-text">已支付</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
