import "./App.css";
import image from "./humain.jpg";
import "./style.css";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title"> Checkpoint JSX</h1>
      <br />
      <img src="/hahahhaa.jpg" alt="hahaha image" width="500px" />
      <br />
      <img src={image} alt="humain img " width="500px" />
      <br />
      <iframe
        className="Video"
        width={560}
        height={315}
        src="https://www.youtube.com/embed/WxFPjtYVGO8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
