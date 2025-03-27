import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { CAROUSEL_ITEMS } from "../carouselItems";

import { CarouselContainer, ItemWrapper } from "../styles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function CarouselComponent() {
  const autoPlayPlugin = useRef(
      Autoplay({ delay: 3500, stopOnInteraction: true })
    );

  return (
    <CarouselContainer>
        <Carousel
          plugins={[autoPlayPlugin.current]}
          className="w-full max-w-xs"
        >
          <CarouselContent>
            {CAROUSEL_ITEMS.map((item, index) => (
              <CarouselItem key={index}>
                <ItemWrapper>
                  <img
                    src={item.image}
                    alt="carousel"
                    className="w-full max-w-xs"
                  />
                  <h1 className="text-2xl font-bold text-center text-violet-500">
                    {item.title}
                  </h1>
                  <p className="text-center text-muted-foreground">{item.description}</p>
                </ItemWrapper>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CarouselContainer>

  )
}

export default CarouselComponent