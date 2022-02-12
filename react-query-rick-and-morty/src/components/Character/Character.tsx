import { DetailCharacter } from "types/Character";

export type CharacterProps = {
  character: DetailCharacter;
};
const Character: React.VFC<CharacterProps> = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} alt="" />
      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">
          {character.status} - {character.species}
        </p>
        <p className="title">Last seen on</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
};

export default Character;
