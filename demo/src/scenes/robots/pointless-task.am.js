var animachineEnhancer = require('react-animachine-enhancer')
var createAnimationSource = animachineEnhancer.createAnimationSource

var projectSource = {"name":"pointless task","timelines":[{"name":"main","isPlaying":false,"currentTime":541,"length":2000,"pxpms":0.28,"width":2000,"start":21.428571428571427,"startMargin":6,"tracks":[{"name":"shoulder","selectors":[[{"type":"find","selector":{"name":"shoulder"}}]],"openInTimeline":true,"showThreeDimensionalParams":false,"params":[{"name":"rotationZ","openInTimeline":true,"keys":[{"time":528.5714285714284,"value":-90.77977750346983,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"1","type":"ease"},"id":"2","type":"key"},{"time":1182,"value":-117.51309470647487,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"3","type":"ease"},"id":"4","type":"key"},{"time":1892,"value":-85.69795037422239,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"5","type":"ease"},"id":"6","type":"key"},{"time":0,"value":-85.69795037422239,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"137","type":"ease"},"id":"136","type":"key"}],"id":"7","type":"param"},{"name":"transformOriginX","openInTimeline":true,"keys":[{"time":528.5714285714284,"value":0.15,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"8","type":"ease"},"id":"9","type":"key"}],"id":"10","type":"param"},{"name":"transformOriginY","openInTimeline":true,"keys":[{"time":528.5714285714284,"value":0.5,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"11","type":"ease"},"id":"12","type":"key"}],"id":"13","type":"param"}],"id":"17","type":"track"},{"name":"arm","selectors":[[{"type":"find","selector":{"name":"armGroup"}}]],"openInTimeline":true,"showThreeDimensionalParams":false,"params":[{"name":"rotationZ","openInTimeline":true,"keys":[{"time":517.8571428571428,"value":57.246177575802704,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"18","type":"ease"},"id":"19","type":"key"},{"time":1182,"value":95.38514050423898,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"20","type":"ease"},"id":"21","type":"key"},{"time":1892,"value":67.61091920037654,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"22","type":"ease"},"id":"23","type":"key"},{"time":0,"value":67.61091920037654,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"139","type":"ease"},"id":"138","type":"key"}],"id":"24","type":"param"},{"name":"transformOriginX","openInTimeline":true,"keys":[{"time":517.8571428571428,"value":0.075,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"25","type":"ease"},"id":"26","type":"key"}],"id":"27","type":"param"},{"name":"transformOriginY","openInTimeline":true,"keys":[{"time":517.8571428571428,"value":0.5,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"28","type":"ease"},"id":"29","type":"key"}],"id":"30","type":"param"}],"id":"34","type":"track"},{"name":"forearm","selectors":[[{"type":"find","selector":{"name":"forearmGroup"}}]],"openInTimeline":true,"showThreeDimensionalParams":false,"params":[{"name":"rotationZ","openInTimeline":true,"keys":[{"time":514.2857142857142,"value":102.4617546429081,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"35","type":"ease"},"id":"36","type":"key"},{"time":1182,"value":98.26827192784685,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"37","type":"ease"},"id":"38","type":"key"},{"time":1892,"value":84.3026530061767,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"39","type":"ease"},"id":"40","type":"key"},{"time":0,"value":84.3026530061767,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"141","type":"ease"},"id":"140","type":"key"}],"id":"41","type":"param"},{"name":"transformOriginX","openInTimeline":true,"keys":[{"time":514.2857142857142,"value":0.0749535714285714,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"42","type":"ease"},"id":"43","type":"key"}],"id":"44","type":"param"},{"name":"transformOriginY","openInTimeline":true,"keys":[{"time":514.2857142857142,"value":0.5,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"45","type":"ease"},"id":"46","type":"key"}],"id":"47","type":"param"},{"name":"x","openInTimeline":true,"keys":[{"time":514.2857142857142,"value":-0.48617851207487206,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"48","type":"ease"},"id":"49","type":"key"}],"id":"50","type":"param"},{"name":"y","openInTimeline":true,"keys":[{"time":514.2857142857142,"value":1.3908152989632612,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"51","type":"ease"},"id":"52","type":"key"}],"id":"53","type":"param"}],"id":"57","type":"track"},{"name":"pincer","selectors":[[{"type":"find","selector":{"name":"pincerGroup"}}]],"openInTimeline":true,"showThreeDimensionalParams":false,"params":[{"name":"x","openInTimeline":true,"keys":[{"time":499.9999999999999,"value":465.21885523744453,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"58","type":"ease"},"id":"59","type":"key"}],"id":"60","type":"param"},{"name":"y","openInTimeline":true,"keys":[{"time":499.9999999999999,"value":278.3038994885827,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"61","type":"ease"},"id":"62","type":"key"}],"id":"63","type":"param"},{"name":"rotationZ","openInTimeline":true,"keys":[{"time":499.9999999999999,"value":-68.03479693940392,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"64","type":"ease"},"id":"65","type":"key"},{"time":1182,"value":-72.88130081093084,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"66","type":"ease"},"id":"67","type":"key"},{"time":1892,"value":-63.29947032751107,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"68","type":"ease"},"id":"69","type":"key"},{"time":0,"value":-63.29947032751107,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"143","type":"ease"},"id":"142","type":"key"}],"id":"70","type":"param"},{"name":"transformOriginX","openInTimeline":true,"keys":[{"time":499.9999999999999,"value":0.49406666666666665,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"71","type":"ease"},"id":"72","type":"key"}],"id":"73","type":"param"},{"name":"transformOriginY","openInTimeline":true,"keys":[{"time":499.9999999999999,"value":-0.01814571428571428,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"74","type":"ease"},"id":"75","type":"key"}],"id":"76","type":"param"}],"id":"80","type":"track"},{"name":"pincer left","selectors":[[{"type":"find","selector":{"name":"pincerL"}}]],"openInTimeline":true,"showThreeDimensionalParams":false,"params":[{"name":"transformOriginX","openInTimeline":true,"keys":[{"time":496.4285714285714,"value":0.9223240725787091,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"81","type":"ease"},"id":"82","type":"key"}],"id":"83","type":"param"},{"name":"transformOriginY","openInTimeline":true,"keys":[{"time":496.4285714285714,"value":0.07092093822414244,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"84","type":"ease"},"id":"85","type":"key"}],"id":"86","type":"param"},{"name":"x","openInTimeline":true,"keys":[{"time":496.4285714285714,"value":0.0015987931041863135,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"87","type":"ease"},"id":"88","type":"key"}],"id":"89","type":"param"},{"name":"y","openInTimeline":true,"keys":[{"time":496.4285714285714,"value":-0.0013477389843710164,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"90","type":"ease"},"id":"91","type":"key"}],"id":"92","type":"param"},{"name":"rotationZ","openInTimeline":true,"keys":[{"time":496.4285714285714,"value":1.624702959137986,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"93","type":"ease"},"id":"94","type":"key"},{"time":1182,"value":-2.229408157446707,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"95","type":"ease"},"id":"96","type":"key"}],"id":"97","type":"param"}],"id":"101","type":"track"},{"name":"pincer right","selectors":[[{"type":"find","selector":{"name":"pincerR"}}]],"openInTimeline":true,"showThreeDimensionalParams":false,"params":[{"name":"transformOriginX","openInTimeline":true,"keys":[{"time":485.71428571428567,"value":0.09466042784249878,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"102","type":"ease"},"id":"103","type":"key"}],"id":"104","type":"param"},{"name":"transformOriginY","openInTimeline":true,"keys":[{"time":485.71428571428567,"value":0.024641023195352052,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"105","type":"ease"},"id":"106","type":"key"}],"id":"107","type":"param"},{"name":"x","openInTimeline":true,"keys":[{"time":485.71428571428567,"value":-0.0009212430494685009,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"108","type":"ease"},"id":"109","type":"key"}],"id":"110","type":"param"},{"name":"y","openInTimeline":true,"keys":[{"time":485.71428571428567,"value":-0.0005419029110100837,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"111","type":"ease"},"id":"112","type":"key"}],"id":"113","type":"param"},{"name":"rotationZ","openInTimeline":true,"keys":[{"time":485.71428571428567,"value":-0.7134133419484472,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"114","type":"ease"},"id":"115","type":"key"},{"time":1182,"value":1.505496588183486,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"116","type":"ease"},"id":"117","type":"key"}],"id":"118","type":"param"}],"id":"122","type":"track"},{"name":"minirobot","selectors":[[{"type":"find","selector":{"name":"minirobot"}}]],"openInTimeline":true,"showThreeDimensionalParams":false,"params":[{"name":"x","openInTimeline":true,"keys":[{"time":0,"value":186,"selected":true,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"123","type":"ease"},"id":"124","type":"key"},{"time":1182,"value":-1,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"125","type":"ease"},"id":"126","type":"key"},{"time":1892,"value":186,"selected":false,"ease":{"easeType":"bezier","pointAX":0.3,"pointAY":0.3,"pointBX":0.7,"pointBY":0.7,"roughEase":false,"roughStrength":1,"roughPoints":20,"roughClamp":false,"roughRandomise":true,"roughTaper":"none","id":"127","type":"ease"},"id":"128","type":"key"}],"id":"129","type":"param"}],"id":"133","type":"track"}],"id":"134","type":"timeline","currentTrackId":"122","inlineEaseEditor":{"top":105,"height":21,"targetKeyId":"19","controlledEaseIds":["18"]}}],"id":"135","type":"project","currentTimelineId":"134"}
var animations = {}

projectSource.timelines.forEach(function (timeline) {
  var gsapSource = createAnimationSource({projectSource, timeline})
  animations[timeline.name] = gsapSource
})

module.exports = animations
