import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="text-4xl">Ambrose Arts</p>
      <div className="flex cursor-pointer">
        <Link className="mx-5" href={"#gallery-section"} scroll={true}>Gallery</Link>
        <Link href={"#contact-section"} scroll={true}>Contact Us</Link>
      </div>
      <p>Welcome to Ambrose Arts. Feel free to browse our gallery.</p>
      <p className="text-4xl" id='gallery-section'>Gallery</p>
      <div>
        <img className="w-96 h-auto" src="https://cdn.imgchest.com/files/my2pclnb8b7.png"/>
        <img className="w-96 h-auto" src="https://cdn.imgchest.com/files/my2pclnb8b7.png"/>
        <img className="w-96 h-auto" src="https://cdn.imgchest.com/files/my2pclnb8b7.png"/>
        <img className="w-96 h-auto" src="https://cdn.imgchest.com/files/my2pclnb8b7.png"/>
        <img className="w-96 h-auto" src="https://cdn.imgchest.com/files/my2pclnb8b7.png"/>
        <img className="w-96 h-auto" src="https://cdn.imgchest.com/files/my2pclnb8b7.png"/>
        <img className="w-96 h-auto" src="https://cdn.imgchest.com/files/my2pclnb8b7.png"/>
      </div>
      <p className="text-4xl" id='contact-section'>Contact Us</p>
      <div className="flex flex-col w-1/2">
        <p>For more information on any of our pieces, please contact us at ambrosearts@gmail.com</p>
        <input type="text"/>
        <input type="text"/>
        <textarea className='mb-96'/>
      </div>
    </div>
  );
}
