import { MdArrowDownward } from "react-icons/md";
export default function Grid() {
  return (
    <>
      <div className="flex">
        <div className="screen text">
          <ul className="flex">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>TikTok</li>
          </ul>
        </div>
        <div className="screen screen-sm">
          <h3 className="text">Our commitment</h3>
          <p className="text_paragraph" style={{ marginTop: "0.25rem" }}>
            Born out of a passion for the beautiful game, 433 is the embodiment of
            football culture. By positioning ourselves inside the locker room, we’ve
            become part of the team and equal to the players. This gives us access to
            the best moments football has to offer, moments that – before 433 – have
            never been available to the fans.
          </p>
        </div>
      </div>
    </>
  );
}
