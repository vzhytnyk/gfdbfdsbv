import { Button, Row } from 'antd';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardSpot from '@/components/Cards/CardSpot';
import { RedoOutlined } from '@ant-design/icons';
import { RootReducerState } from '@/global';
import _debounce from 'lodash.debounce';
import deckActions from '@/redux/deck/deck.actions';
import gameBoardActions from '@/redux/gameBoard/gameBoard.actions';
import styles from './BoardFileds.module.css';
import GameColumnWrapper from './GameColumnWrapper.component';
import GameTopRow from './GameTopRow.component';
import { FLIP_ANIMATION_TIME_MS } from '@/utils/contants';

/**
 * Base Layout with all the empty card spots
 */
function BaseEmptySpots() {
  const dispatch = useDispatch();
  // get refs from redux
  const { deckRef, flippedRef, lastHint, gameMode } = useSelector(
    ({ Deck, GameBoard, GameConfig }: RootReducerState) => {
      const gameHints = GameBoard.gameHints;
      const lastIndex = gameHints.length - 1;
      return {
        deckRef:
          typeof Deck.deckRef === 'function' ? Deck.deckRef() : undefined,
        flippedRef:
          typeof Deck.flippedRef === 'function' ? Deck.flippedRef() : undefined,
        lastHint: lastIndex >= 0 ? gameHints[lastIndex] : undefined,
        gameMode: GameConfig.gameMode,
      };
    }
  );

  /**
   * Sets a new translation value for the deck cards to the flipped pile
   */
  const setTranslation = () => {
    // if the refs are not null
    if (deckRef && deckRef.current && flippedRef.current) {
      // get the x position of the deck pile
      const deckX = deckRef.current.getBoundingClientRect().x;
      // get the x position of the flipped pile
      const flippedX = flippedRef.current.getBoundingClientRect().x;
      // save the distance at the redux
      dispatch(deckActions.setTranslation(flippedX - deckX));
    }
  };

  // Only called when the component is mounted and when the deckRef is set
  useEffect(setTranslation, [deckRef]);

  useEffect(() => {
    // debounce assures that the function is only called once every 100 ms
    const handleResize = _debounce(() => {
      setTranslation();
    }, 100);

    // add event listener for the window
    window.addEventListener('resize', handleResize);

    return () => {
      // remove event listener when the component is unmounted
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleResetDeck = () => {
    // resets the deck
    dispatch(deckActions.startUndoAnimation());
    setTimeout(() => dispatch(deckActions.resetDeck(gameMode)), FLIP_ANIMATION_TIME_MS);
    // adds one movement to the game
    dispatch(
      gameBoardActions.addGameMove({
        source: 'flippedPile',
        target: 'deckPile',
        cards: [],
      })
    );
  };

  // if the last hint as deckPile as source and no target, then the hint is to reset the deck
  const shake =
    lastHint && lastHint.source === 'deckPile' && lastHint.target === undefined;

  return (
    <div className={styles.baseEmptySpots} id='baseEmptySpots'>
      <Row
        className={styles.boardDeckRowWrapper}
        align='middle'
        justify={'space-between'}
      >
        {/* Deck and Flipped piles */}
        <CardSpot ref={deckRef} className={styles.deckCardSpot}>
          {/* Button to reset deck */}
          <Button
            className={`${styles.redoDeckButton} ${
              shake ? styles.shakeAnimationButton : ''
            }`}
            onClick={handleResetDeck}
          >
            <RedoOutlined className={styles.redoDeckIcon}/>
          </Button>
        </CardSpot>
        <CardSpot ref={flippedRef} />
        {/* Goal Spots */}
        <CardSpot offset={3} />
        <CardSpot />
        <CardSpot />
        <CardSpot />
        {/* top row of the game, includes the deck and the 4 goal spots */}
        <GameTopRow />
      </Row>
      <Row
        align='middle'
        className={styles.gameColumnsWrapper}
        justify={'space-between'}
      >
        {/* Game Columns */}
        <CardSpot />
        <CardSpot />
        <CardSpot />
        <CardSpot />
        <CardSpot />
        <CardSpot />
        <CardSpot />
        {/* bottom row of the game, includes all the 7 columns */}
        <GameColumnWrapper />
      </Row>
    </div>
  );
}

export default memo(BaseEmptySpots);
