import React from "react";
import { AuthTabs } from "./components/Tabs";
import DashboardImg from "@/assets/auth/dash-1.svg";
import EstoqueImg from "@/assets/auth/estoque-1.svg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Container, CarouselContainer, FormContainer, ItemWrapper } from "./styles";

const CAROUSEL_ITEMS = [
  {
    image: DashboardImg,
    title: "Dashboard",
    description: "Acompanhe integralmente como seu negócio está funcionando.",
  },
  {
    image: EstoqueImg,
    title: "Gestão de estoque",
    description: "Faça o gerenciamento do seu estoque na palma da sua mão.",
  },
];

function AuthScreen() {
  const autoPlayPlugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <Container>
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

      <FormContainer>
        <AuthTabs />
      </FormContainer>
    </Container>
  );
}

export default AuthScreen;
