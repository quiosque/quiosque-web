import { useQuiosqueStore } from "@/store";
import CarouselComponent from "./components/Carousel";
import { AuthTabs } from "./components/Tabs";
import { Container, FormContainer} from "./styles";
import { useEffect } from "react";

function AuthScreen() {
  const clearUser = useQuiosqueStore((state) => state.clearUser);

  useEffect(() => {
    clearUser();
  }, [clearUser])

  return (
    <Container>
      <CarouselComponent />
      <FormContainer>
        <AuthTabs />
      </FormContainer>
    </Container>
  );
}

export default AuthScreen;
