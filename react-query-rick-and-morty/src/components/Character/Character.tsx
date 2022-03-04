import { DetailCharacter } from "types/Character";

export type CharacterProps = {
  character: DetailCharacter;
};
const Character: React.VFC<CharacterProps> = ({ character }) => {
  return (
    <div className="character">
      <img className="character__image" src={character.image} alt="" />
      <div className="character__information">
        <h3 className="character__name">{character.name}</h3>
        <p className="character__status">
          {character.status} - {character.species}
        </p>
        <p className="title">Last seen on</p>
        <p className="character__location">{character.location.name}</p>
      </div>
    </div>
  );
};

export default Character;
