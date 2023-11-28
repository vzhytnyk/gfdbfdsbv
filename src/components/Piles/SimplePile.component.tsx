import React, { ReactElement, memo } from 'react';
import { Col } from 'antd';
import styles from './Piles.module.css';

interface SimplePileProps {
  pileCards: Array<ReactElement>;
  pileId: string;
  offset?: number;
  pileClassName?: string;
  insideClassName?: string;
  cardsListClassName?: string;
}

/**
 * Component that simply distributes the cards as a column, depending on the classnames provided, the result could be either a deck or a column
 */
function SimplePile({
  pileCards,
  pileId,
  offset,
  pileClassName = '',
  insideClassName = '',
  cardsListClassName,
}: SimplePileProps) {
  return (
    <Col id={pileId} span={3} offset={offset} className={pileClassName}>
      <div className={insideClassName}>
        <div className={`${styles.cardPileContainer} ${cardsListClassName}`}>
          {pileCards}
        </div>
      </div>
    </Col>
  );
}

export default memo(SimplePile);
