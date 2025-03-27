import CarouselComponent from "./components/Carousel";
import { CreateAccountForm } from "./components/CreateAccountForm";
import { Container, FormContainer} from "./styles";

function CreateAccountScreen() {
  return (
    <Container>
      <CarouselComponent />
      <FormContainer>
        <CreateAccountForm />
      </FormContainer>
    </Container>
  )
}

export default CreateAccountScreen