import React, { useEffect } from 'react';
import { RootReducerState } from '@/global';
import { Row } from 'antd';
import { useSelector } from 'react-redux';
import ColumnPile from '../Piles/ColumnPile.component';
import styles from './BoardFileds.module.css';
import useWindowSize from '@/hooks/useWindowSize';
/**
 * Component that unites all the column piles
 */
function GameColumnWrapper() {
  // get piles from redux
  const { columns } = useSelector(({ Columns }: RootReducerState) => ({
    columns: Columns.columns,
  }));

  const { width, height } = useWindowSize();

  useEffect(() => {
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      updateParentHeight();
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [width, height]);

  useEffect(() => {
    updateParentHeight();
  }, [columns]);

  const getLastElemInRow = () => {
    let maxArrayLength = 0;
    let maxArrayColumn;
    let lastElementOfLongestArray;
    // Iterate through object properties
    for (const column in columns) {
      if (columns.hasOwnProperty(column)) {
        const array = columns[column];
        const arrayLength = array.length;
        // Check if the current array is longer than the previous maximum
        if (arrayLength > maxArrayLength) {
          maxArrayLength = arrayLength;
          maxArrayColumn = column;
          // Retrieve the last element of the longest array
          lastElementOfLongestArray = array[array.length - 1];
        }
      }
    }
    return lastElementOfLongestArray ? lastElementOfLongestArray.id : undefined;
  };

  const updateParentHeight = () => {
    const parentElem = document.getElementById('game-column-wrapper');
    if (!parentElem) {
      return;
    }
    const cardId = getLastElemInRow();
    if (!cardId) {
      return;
    }
    const lastCard = parentElem.querySelector(`#card-${cardId}`);
    if (!lastCard) {
      return;
    }
    const aspectRatioChild = lastCard.firstChild as HTMLElement;
    const parentRect = parentElem.getBoundingClientRect();
    const cardRect = aspectRatioChild.getBoundingClientRect();
    const lastCardPosition = {
      top: cardRect.top - parentRect.top,
      height: cardRect.height,
    };
    const newParentHeight = lastCardPosition.top + lastCardPosition.height;
    parentElem.style.height = `${newParentHeight}px`;
  };

  return (
    <Row
      className={styles.gameColumnsRow}
      align="top"
      justify={'space-between'}
    >
      <ColumnPile columnId='column1Pile' columnCards={columns.column1Pile} />
      <ColumnPile columnId='column2Pile' columnCards={columns.column2Pile} />
      <ColumnPile columnId='column3Pile' columnCards={columns.column3Pile} />
      <ColumnPile columnId='column4Pile' columnCards={columns.column4Pile} />
      <ColumnPile columnId='column5Pile' columnCards={columns.column5Pile} />
      <ColumnPile columnId='column6Pile' columnCards={columns.column6Pile} />
      <ColumnPile columnId='column7Pile' columnCards={columns.column7Pile} />
    </Row>
  );
}

export default GameColumnWrapper;
