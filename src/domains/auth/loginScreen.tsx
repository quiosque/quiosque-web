import CarouselComponent from "./components/Carousel";
import { AuthTabs } from "./components/Tabs";
import { Container, FormContainer} from "./styles";

function AuthScreen() {
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
