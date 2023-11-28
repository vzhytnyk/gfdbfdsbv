import { ValueOf } from "../../global";
import GameModeActionTypes, { GameModeTypes } from "./gameConfig.types";

// ********************************************************
// INITIAL SETTINGS ACTIONS

/**
 * Creates an initial distribution of the cards
 */
const setGameMode = (gameMode: GameModeTypes) => ({
  type: GameModeActionTypes.SET_GAME_MODE,
  gameMode
});

const actionsCreators = Object.freeze({
  setGameMode
});

export type ActionsCreators = ReturnType<ValueOf<typeof actionsCreators>>;
export default actionsCreators;
