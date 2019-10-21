import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import typeMap from './typeMap'

import './timeline.css'
import useColors from '../../lib/useColors'
import useHDC from '../../lib/useHDC'

const fillDays = (days, types) =>
  days.map(day => {
    const parts = day.types.map(dayType =>
      types.find(type => type.type === dayType)
    )
    return {
      ...day,
      parts,
    }
  })

// Find fridays based on the index. Assuming we start at a Monday.
const isFriday = day => day !== 0 && (day + 1) % 5 === 0

const isLastDay = (day, total) => day === total - 1

// No need to render weekends for the last day.
const shouldRenderWeekend = (currentDay, allDays) =>
  isFriday(currentDay) && currentDay < allDays - 1

const Timeline = ({ data = [] }) => {
  const colors = useColors()

  return (
    <div
      className='timeline'
      css={css`
        width: 100%;
        min-height: 20rem;
        border: 2px solid ${colors.text};
        display: flex;
        flex-direction: row;
        margin: 2rem auto;
        background-color: ${colors.text};
      `}
    >
      {fillDays(data, typeMap).map((day, index) => (
        <React.Fragment key={index}>
          <div
            className={`timeline__day ${
              isFriday(index) ? 'timeline__day_friday' : ''
            } ${isLastDay(index, data.length) ? 'timeline__day_last' : ''}`}
            css={css`
              flex-basis: 100%;
              margin-right: ${isFriday(index) || isLastDay(index, data.length)
                ? 0
                : 2}px;
              display: flex;
              flex-direction: column;
            `}
          >
            {day.parts.map((part, key) => (
              <div
                key={key}
                className='timeline__part'
                style={{ backgroundColor: part.color }}
              >
                <img
                  src={
                    part.emojiImg.length.length
                      ? `images/${part.emojiImg}`
                      : part.emojiImg
                  }
                  alt={part.type}
                />
              </div>
            ))}
          </div>
          {shouldRenderWeekend(index, data.length) ? (
            <div className='timeline__weekend' />
          ) : (
            ''
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Timeline
