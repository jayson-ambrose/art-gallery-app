import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-4xl">Ambrose Arts</p>
      <p>Welcome to Ambrose Arts. Feel free to browse our gallery.</p>
      <p className="text-4xl">Gallery</p>
      <div>
        <img className="w-96 h-auto" src="https://cdn.imgchest.com/files/my2pclnb8b7.png"/>
      </div>
      <p className="text-4xl">Contact Us</p>
      <p>For more information on any of our pieces, please contact us at ambrosearts@gmail.com</p>
    </div>
  );
}
