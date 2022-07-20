// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS



import ReactAudioPlayer from 'react-audio-player';
//...
export const Player = () => {
  return (
<ReactAudioPlayer
//  ref={(element) => { this.rap = element; }}
  src="./_gruppa_krovi_.mp3"
  controls
  // onPlay
/>)
}
//  export const Player = () => (
//   <AudioPlayer
//     autoPlay
//     src="../../music/_gruppa_krovi_.mp3"
//     onPlay={e => console.log("onPlay")}
//     // other props here
//   />
// );
