import styled, { css } from "styled-components";
import { colorType } from ".";

export interface StyledCardProps {
  color: colorType;
}

export const CardContainer = styled.div`
  display: block;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  width: 350px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: center;
`;
export const DogImageContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  img {
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 2rem;
    overflow: hidden;
    width: 300px;
    height: 300px;
  }
`;

export const InfoContainer = styled.div`
  display: block;
  color: black;
  margin-bottom: 1rem;
`;

export const DogName = styled.strong`
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  text-align: center;
  justify-items: center;
`;

export const InfoTittle = styled.strong`
  display: block;
  padding-left: 0.75rem;
  color: black;
  margin-left: 0.75rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: start;
`;
export const InfoSubtittle = styled.span`
  display: inline;
  font-weight: 200;
  color: black;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: start;
`;

export const CardButton = styled.button`
  display: block;
  background-color: #ac8975;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  width: 100%;
  height: 3rem;
`;
export const ButtonIcon = styled.span<StyledCardProps>`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.125rem;
  line-height: 1.75rem;
  ${({ color }: StyledCardProps) =>
    color === "black"
      ? css`
          color: black;
          :hover {
            color: #f44336;
          }
        `
      : css`
          color: #f44336;
          :hover {
            color: black;
          }
        `}
`;
