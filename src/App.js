import "./App.css";
import { Video, Thumbs } from "./Video"; //object distuchuring
import Image from "./componet/Image"

let obj = {
Title:"Java",
Bg:'Yellow'
}
function App() {
  // component
  return (
    <>
      {/* <div className="App-header">Hello</div> */}
      <Video Bg="Orange" Title="Hello,React me my help"/>
      <Video Bg="Blue" Title="Hello,node me my help"/>
      <Video {...obj}/>
      <Thumbs /> {/*Multi componets uesd */}
      {/*  {component call} */}
      <Image/>
    </>
  );
}

export default App;
