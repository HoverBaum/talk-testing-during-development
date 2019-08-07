import RealeasingImage from '../../images/releasing-rocket.png'
import MeetingImage from '../../images/meetings-calendar.png'
import WorkingImage from '../../images/working-2-construction.png'
import CodeFreezeImage from '../../images/codefreeze-snowflake.png'
import TestingImage from '../../images/testing-detective.png'
import PerfectDayImage from '../../images/perfect-day.png'

const typeMap = [
  {
    type: 'release',
    color: '#253F5A',
    emojiImg: RealeasingImage,
  },
  {
    type: 'meeting',
    color: '#d37883', //'#C48181',
    emojiImg: MeetingImage,
  },
  {
    type: 'development',
    color: '#FFE0B5', //'#F6D8AE', //'#F4DE78',
    emojiImg: WorkingImage,
  },
  {
    type: 'freeze',
    color: '#a8e4f7', //'#9dd7f2', //'#9FE0FA',
    emojiImg: CodeFreezeImage,
  },
  {
    type: 'testing',
    color: '#933636', // '#a8792a',
    emojiImg: TestingImage,
  },
  {
    type: 'perfect',
    color: '#FFD670', //'#F9DE47',
    emojiImg: PerfectDayImage,
  },
]

export default typeMap
