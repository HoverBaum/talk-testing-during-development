import {render} from './node_modules/lit-html/lit-html.js'
import scenarioOneData from './data/scenarioOne.js'
import scenarioTwoData from './data/scenarioTwo.js'
import perfectData from './data/perfectData.js'


import dataToHTML from './timeline-template.js'

render(dataToHTML(scenarioOneData), document.getElementById('visual1'))
render(dataToHTML(scenarioTwoData), document.getElementById('visual2'))
render(dataToHTML(perfectData), document.getElementById('visual3'))