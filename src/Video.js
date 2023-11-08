import './componet/Image.css'
// function Video(props,) {
function Video({Title,Bg}) {
    
  return (
    <>
      <div>Hello Video</div>
      <img src="https://picsum.photos/id/1/200/300" alt="Katherine Johnson" />
      {/* <img src="https://placebear.com/240/160" alt="Katherine Johnson" /> */}
      <h1 className="syle">{Title}</h1>
      <h1 style={{backgroundColor:Bg}}>{Title}</h1>
    </>
  );
}

function Thumbs() {
  return <>Thumbs</>;
}

export { Video, Thumbs }; // object short
// export default Video;
