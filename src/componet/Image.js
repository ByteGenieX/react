import './Image.css';


let bg="syle"
let name="Deepak"
function Image() {
  return (
    <>
      <div>
        <img src="https://placebear.com/240/160" alt="Katherine Johnson" />
      </div>
      <div>
        <h1> Image Description</h1>
        <p className={bg}> Hello,{name}</p>
      </div>
    </>
  );
}

export default function Gallery() {
  return (
    <section className="gallery">
      <h1>This is Gallery Component call</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}
