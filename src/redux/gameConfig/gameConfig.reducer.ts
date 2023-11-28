/* eslint-disable indent */
import GameCofigActionTypes, { GameModeTypes } from "./gameConfig.types";
import { ActionsCreators } from "./gameConfig.actions";

interface InitialGameConfig {
  // initial cards of each pile
  gameMode: GameModeTypes;
}

const INITIAL_GAME_CONFIG: InitialGameConfig = {
  gameMode: "default"
};

const gameConfigReducer = (
  state = INITIAL_GAME_CONFIG,
  action: ActionsCreators
) => {
  switch (action.type) {

    case GameCofigActionTypes.SET_GAME_MODE:
      return {
        ...state,
        gameMode: action.gameMode
      };

    default:
      return state;
  }
};

export default gameConfigReducer;
