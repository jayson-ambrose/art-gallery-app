import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel"

export default function GalleryCarousel () {

    const carouselData: {id: number, src: string}[]= [
        {id: 1, src: "https://cdn.imgchest.com/files/my2pclnb8b7.png"},
        {id: 2, src: "https://cdn.imgchest.com/files/my2pclnb8b7.png"},
        {id: 3, src: "https://cdn.imgchest.com/files/my2pclnb8b7.png"},
        {id: 4, src: "https://cdn.imgchest.com/files/my2pclnb8b7.png"},
        {id: 5, src: "https://cdn.imgchest.com/files/my2pclnb8b7.png"},
        {id: 6, src: "https://cdn.imgchest.com/files/my2pclnb8b7.png"},
        {id: 7, src: "https://cdn.imgchest.com/files/my2pclnb8b7.png"},
        {id: 8, src: "https://cdn.imgchest.com/files/my2pclnb8b7.png"},
        {id: 9, src: "https://cdn.imgchest.com/files/my2pclnb8b7.png"},
        {id: 10, src: "https://cdn.imgchest.com/files/my2pclnb8b7.png"},
    ]

  return (
    <>
    <Carousel className="w-full max-w-3xl">
      <CarouselContent className="w-full">
        {carouselData.map((item) => {
            return(
            <CarouselItem key={item.id} className='basis-1/3'>
                <p>{item.id}</p>
                <img src={item.src}/>
            </CarouselItem>)
            })}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
     </Carousel>
    </>
  )
}