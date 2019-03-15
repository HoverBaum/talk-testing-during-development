import {html} from './node_modules/lit-html/lit-html.js'
import typeMap from './data/typeMap.js'

const fillDays = (days, types) => days.map(day => {
  const parts = day.types.map(dayType => types.find(type => type.type === dayType))
  return {
    ...day,
    parts
  }
})

// Find fridays based on the index. Assuming we start at a Monday.
const isFriday = day => day !== 0 && (day + 1) % 5 === 0

// No need to render weekends for the last day.
const shouldRenderWeekend = (currentDay, allDays) => isFriday(currentDay) && currentDay < allDays - 1

const dataToHTML = data => html`
<div class="timeline">
  ${fillDays(data, typeMap).map((day, index) => html`
  <div class="timeline__day ${isFriday(index) ? 'timeline__day_friday' : ''}">
    ${day.parts.map(part => html`
    <div class="timeline__part" style="background-color: ${part.color}">
      <img src="images/${part.emojiImg}" />
    </div>
    `)}
  </div>
  ${shouldRenderWeekend(index, data.length) ? html`
    <div class="timeline__weekend"></div>
  ` : ''}
  `)}
</div>
`

export default dataToHTML