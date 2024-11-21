import Link from "next/link";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl">Ambrose Arts</p>
      <div className="flex cursor-pointer">
        <Link className="mx-5" href={"#gallery-section"} scroll={true}>Gallery</Link>
        <Link href={"#contact-section"} scroll={true}>Contact Us</Link>
      </div>
      <p>Welcome to Ambrose Arts. Feel free to browse our gallery.</p>
      <GalleryCarousel/>
      <p className="text-4xl" id='gallery-section'>Gallery</p>         
      <p className="text-4xl" id='contact-section'>Contact Us</p>
      <div className="flex flex-col">
        <p>For more information on any of our pieces, please contact us at ambrosearts@gmail.com</p>
        <input type="text"/>
        <input type="text"/>
        <textarea/> 
      </div>
    </div>
  );
}
