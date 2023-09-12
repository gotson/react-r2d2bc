import './App.css';
import D2Reader from '@d-i-t-a/reader'

D2Reader.load({
  url: new URL("http://localhost:15080/QSBDbGFzaCBvZiBLaW5ncyAtIEdlb3JnZSBSLiBSLiBNYXJ0aW4uZXB1Yg/manifest.json"),
})

function App() {
  return (
    <div id="D2Reader-Container">
      <main style={{height: "100vh", tabindex: -1}} id="iframe-wrapper"/>

    </div>
  );
}

export default App;
