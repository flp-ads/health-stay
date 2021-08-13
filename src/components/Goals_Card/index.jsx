import { Container, ContentContainer, ImageContainer } from './card.style';
import { RiCheckDoubleFill } from "react-icons/ri";
import { AiOutlineCheckCircle, AiOutlineDelete } from 'react-icons/ai';

const GoalsCard = () => {
    
    return (
        <Container>
            <ImageContainer />

            <ContentContainer>
                <header>
                    <button
                        className='completed'>
                        <RiCheckDoubleFill />
                    </button>
                    <button
                        className='delete'>
                        <AiOutlineDelete />
                    </button>
                    <button
                        className='achieved'>
                        <AiOutlineCheckCircle />
                    </button>
                </header>

                <h4>Goal name</h4>
                <p>difficulty</p>

            </ContentContainer>
        </Container>
    )
}

export default GoalsCard
