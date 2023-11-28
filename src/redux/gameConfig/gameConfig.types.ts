// Game Board Actions
const GameModeActionTypes = {
  SET_GAME_MODE: "GAME/SET_GAME_MODE"
};

export type GameModeTypes = "default" | "turnThree";

export interface GameConfig {
  gameMode: GameModeTypes;
}

export default GameModeActionTypes;
