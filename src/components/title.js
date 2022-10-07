import vid from "../static/media/bgvid.mp4";
export default function Title(props) {
  return (
    <div className="relative title">
      <h1 className="text text_title relative">{props.title}</h1>
      <video src={vid} className="absolute auto" autoPlay loop muted playsInline />
    </div>
  );
}
