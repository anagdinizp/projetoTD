import styled from "styled-components";
import { point } from "../../components/Breakpoints";

export const EditProfileTittle = styled.strong`
  display: grid;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 0.5rem;
  margin-top: 1.25rem;
  text-align: center;
  @media only screen and (${point.tablet}) { 
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const ContainerEditProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 164px;
  height: 162px;
  border-radius: 100%;
  margin: auto;
  margin-top: 1rem;
  overflow: hidden;
`;

export const ButtonEditImage = styled.button`
  margin-top: 0.5rem;
`;

export const ButtonEditImageIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const ContainerEditProfileForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const EditProfileForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const EditFormTittle = styled.strong`
  color: black;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
  @media only screen and (${point.tablet}) { 
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const DeleteContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
`;

export const DeleteText = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  @media only screen and (${point.tablet}) { 
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export const DeleteIcon = styled.button`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.75rem;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const EditGalleryTittle = styled.strong`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 0.5rem;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  @media only screen and (${point.tablet}) { 
    font-size: 1.5rem;
    line-height: 2rem;
  }
`; 

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Gallery = styled.div`
  width: 326px;
  height: 340px;
  border-radius: 1.5rem;
  margin-right: 0.25rem;
  margin-top: 0.75rem;
  padding: 1rem;
`;

export const ButtonTrashIcon = styled.button`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.75rem;
  font-size: 1.rem;
  line-height: 2rem;
`;

export const ContainerButtonAddImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
`;

export const ButtonAddImage = styled.button`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.75rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
`;