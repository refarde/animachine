import pick from 'lodash/object/pick'

const defaults = {
  ease: {
    easeType: 'bezier',
    pointAX: 0.3,
    pointAY: 0.3,
    pointBX: 0.7,
    pointBY: 0.7,
    roughEase: false,
    roughStrength: 1,
    roughPoints: 20,
    roughClamp: false,
    roughRandomise: true,
    roughTaper: 'none',
  },
  key: {
    time: 0,
    value: 0,
    selected: false,
    ease: {}
  },
  param: {
    name: '',
    openInTimeline: true,
    keys: []
  },
  track: {
    name: '',
    selectors: [],
    openInTimeline: true,
    showThreeDimensionalParams: false,
    params: []
  },
  timeline: {
    name: '',
    isPlaying: false,
    isSeeking: false,
    currentTime: 0,
    length: 60000,
    pxpms: 1,
    width: 2000,
    start: 0,
    startMargin: 6,
    //HACK (same as for currentTimelineId) currentTrackId: undefined,
    //HACK (same as for currentTimelineId) inlineEaseEditor: false,
    tracks: [],
  },
  project: {
    name: '',
    //currentTimelineId: undefined, //HACK this property should be only filled
    //runtime, i comment is so it dont gonna be red from the save but it
    //needs a good solution
    timelines: [],
  },
  selector: {
    selectorType: 'react-element',
    selectorCommands: []
  },
  selectorCommand: {
    commandType: 'find',
    selectorCommandParams: []
  },
  selectorCommandParam: {
    key: 'key',
    value: 'value',
  }
}

let lastId = 0

export default function createItem({type, data}) {
  //remove values that don't have defaults (junk)
  const defaultValues = defaults[type]
  const filteredData = pick(data, ...Object.keys(defaultValues))

  return {
    ...defaultValues,
    ...filteredData,
    id: (++lastId).toString(),
    type
  }
}
