import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/id/874/200/200";

ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img src={img} />
      {/* <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hand-held-bbq-favorites-royalty-free-image-694189032-1564779029.jpg?resize=480:*"
        alt="food"
      />
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hand-held-bbq-favorites-royalty-free-image-694189032-1564779029.jpg?resize=480:*"
        alt="food"
      />
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hand-held-bbq-favorites-royalty-free-image-694189032-1564779029.jpg?resize=480:*"
        alt="food"
      /> */}
    </div>
  </div>,
  document.getElementById("root")
);
