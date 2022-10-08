export default function Grid() {
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="stat flex flex-col flex-center_all">
          <h3 className="text_sub">63M+</h3>
          <p className="text_paragraph text-center">
            Total followers, all platforms combined.
          </p>
        </div>
        <div className="stat flex flex-col flex-center_all">
          <h3 className="text_sub">2B+</h3>
          <p className="text_paragraph text-center">Views per month</p>
        </div>
        <div className="stat flex flex-col flex-center_all">
          <h3 className="text_sub">14.4%</h3>
          <p className="text_paragraph text-center">Engagement rate on reach</p>
        </div>{" "}
        <div className="stat flex flex-col flex-center_all">
          <h3 className="text_sub">5B+</h3>
          <p className="text_paragraph text-center">Impressions a month</p>
        </div>
      </div>
    </>
  );
}
