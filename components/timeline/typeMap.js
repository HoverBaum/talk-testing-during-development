import RealeasingImage from '../../images/releasing-rocket.png'
import MeetingImage from '../../images/meetings-calendar.png'
import WorkingImage from '../../images/working-2-construction.png'
import CodeFreezeImage from '../../images/codefreeze-snowflake.png'
import TestingImage from '../../images/testing-detective.png'
import PerfectDayImage from '../../images/perfect-day.png'

const typeMap = [
  {
    type: 'release',
    color: '#4281A4', //'#253F5A',
    emojiImg: RealeasingImage,
  },
  {
    type: 'meeting',
    color: '#C16E72', //'#d37883',
    emojiImg: MeetingImage,
  },
  {
    type: 'development',
    color: '#EFC2C4', //'#479e83', //'#FFE0B5',
    emojiImg: WorkingImage,
  },
  {
    type: 'freeze',
    color: '#CCD8E5', //'#a8e4f7',
    emojiImg: CodeFreezeImage,
  },
  {
    type: 'testing',
    color: '#CCD8E5', //'#933636',
    emojiImg: TestingImage,
  },
  {
    type: 'perfect',
    color: '#FFDD87', // '#FFD670',
    emojiImg: PerfectDayImage,
  },
]

export default typeMap
