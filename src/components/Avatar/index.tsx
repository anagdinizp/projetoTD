import { AnchorAvatar } from "./style";

interface avatarProps{
  width: string;
  height: string;
  image: string;
}

export function UserAvatar({width, height, image}: avatarProps) {
  return (
    <AnchorAvatar>
      <img src={image} alt="Avatar do usuário" width={width} height={height}/>
   </AnchorAvatar>
  )
}

export function UserAvatarAnchor({width, height, image}: avatarProps) {
  return (
    <AnchorAvatar href="/perfil">
      <img src={image} alt="Avatar do usuário" width={width} height={height}/>
    </AnchorAvatar>
  )
}