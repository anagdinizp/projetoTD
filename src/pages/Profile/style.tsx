import styled from "styled-components";
import { point } from "../../components/Breakpoints";

export const OwnerContainer = styled.div`
  background-color: white;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  display: block;
  @media ${point.tablet} {
    display: flex;
  }
`;

export const OwnerAvatarContainer = styled.div`
  @media ${point.tablet} {
    margin-left: 2.5rem;
    padding: 2.5rem;
  }
`;

export const OwnerAvatar = styled.img`
  width: 165px;
  height: 162px;
  border-radius: 100%;
  margin: auto;
  margin-top: 1rem;
  overflow: hidden;
  @media ${point.tablet} {
    width: 274px;
    height: 274px;
  }
`;

export const InfoContainer = styled.div`
  display: block;
  color: black;
  font-weight: 200;
  padding: 2.5rem;
  margin-left: 0.25rem;
  @media ${point.tablet} {
    padding: 5rem;
    margin-left: -4rem;
  }
`;

export const NameIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.strong`
  display: block;
  color: black;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-right: 0.25rem;
  margin-bottom: 1rem;
  @media ${point.tablet} {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-right: 2rem;
    margin-bottom: 2.5rem;
  }
`;

export const EditIconAnchor = styled.a`
  justify-items: center;
`;

export const EditIcon = styled.a`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const InfoTittle = styled.strong`
  display: block;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-top: 0.25rem;
  @media ${point.tablet} {
    text-align: start;
  }
`;

export const InfoSubtittle = styled.span`
  display: inline;
  text-align: start;
  font-weight: 200;
  color: black;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const DogProfileContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  @media ${point.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

export const DogImageContainer = styled.div`
  @media ${point.tablet} {
    margin-left: 2.5rem;
    padding: 2.5rem;
  }
`;

export const DogImage = styled.img`
  width: 164px;
  height: 162px;
  border-radius: 100%;
  margin: auto;
  margin-top: 1rem;
  overflow: hidden;
  @media ${point.tablet} {
    width: 274px;
    height: 274px;
  }
`;