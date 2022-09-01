type genderType = "Macho" | "Fêmea";

interface suitorsData {
  suitorAvatar: string;
  suitorName: string;
  suitorAge: number;
  suitorBreed: string;
  suitorGender: genderType;
  suitorLocale: string;
  suitorImages: string;
  ownerSuitorAvatar: string;
  ownerSuitorName: string;
  ownerSuitorAge: number;
  ownerSuitorCareer: string;
  ownerSuitorTelefone: number;
  ownerSuitorMessage: string;
}
export function Suitors(){
  return (
    <div>
    <div>
      <img src="" />
    </div>
    <div>
      <strong></strong>
      <strong>Idade: <span></span></strong>
      <strong>Raça: <span></span></strong>
      <strong>Sexo: <span></span></strong>
      <strong>Localização: <span></span></strong>
    </div>
    <div>
      <img src="" 
      />
    </div>
    <div>
      <div>
        <img src=""/>
      </div>
      <div>
        <strong></strong>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <strong>Mensagem</strong>
        <span></span>
      </div>
    </div>
  </div>
  )
}