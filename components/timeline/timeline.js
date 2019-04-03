import React from 'react'
import typeMap from './typeMap'

import './timeline.css'

const fillDays = (days, types) => days.map(day => {
  const parts = day.types.map(dayType => types.find(type => type.type === dayType))
  return {
    ...day,
    parts
  }
})

// Find fridays based on the index. Assuming we start at a Monday.
const isFriday = day => day !== 0 && (day + 1) % 5 === 0

const isLastDay = (day, total) => day === (total - 1)

// No need to render weekends for the last day.
const shouldRenderWeekend = (currentDay, allDays) => isFriday(currentDay) && currentDay < allDays - 1

const Timeline = ({data = []}) => (
  <div className="timeline">
    {fillDays(data, typeMap).map((day, index) => (
      <React.Fragment key={index}>
        <div className={`timeline__day ${isFriday(index) ? 'timeline__day_friday' : ''} ${isLastDay(index, data.length) ? 'timeline__day_last' : ''}`}>
          {day.parts.map((part, key) => (
            <div key={key} className="timeline__part" style={{backgroundColor: part.color}}>
              <img src={`images/${part.emojiImg}`} alt={part.emojiImg.replace(/\..*$/, '')} />
            </div>
          ))}
        </div>
        {shouldRenderWeekend(index, data.length) ? (
          <div className="timeline__weekend"></div>
        ) : ''}
      </React.Fragment>
    ))}
  </div>
)

export default Timeline
