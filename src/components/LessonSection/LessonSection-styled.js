import styled from 'styled-components';

const StyledLessonSectionContainer = styled.div`
  display: flex;
  background: ${props => props.theme.palette.white};
  margin: -9rem -8rem -8rem;

  @media (max-width: ${props => props.theme.small}) {
    flex-direction: column;
    margin: -9rem -2rem -8rem;
  }
`;

const StyledLessonSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 200px;
  text-align: left;
  background: ${props => props.backgroundColor};
  color: ${props => props.color};
  padding: 7rem 8rem 10rem 8rem;
  box-sizing: border-box;

  &:last-of-type {
    clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
    margin-left: -5rem;
  }

  @media (max-width: ${props => props.theme.small}) {
    flex: auto;
    padding: 4rem 2rem;

    &:last-of-type {
      clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 100%);
      margin-left: 0;
      padding-bottom: 7rem;

      h2 {
        display: none;
      }
    }
  }
`;

const StyledLessonTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 50px;
  margin: 0;
`;

const StyledLessonDescription = styled.p`
  font-weight: 300;
  margin: 0;
`;

export {
  StyledLessonSectionContainer,
  StyledLessonSection,
  StyledLessonTitle,
  StyledLessonDescription
};
