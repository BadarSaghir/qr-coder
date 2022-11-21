import IconButton from "../../IconButton";
import React, { useRef, useState } from "react";
import DividerLayout from "../../Layouts/DividerLayout";
import qr from "qr-scanner";

type Props = {};
const QRReadLayout = (props: Props) => {
  const [text, setText] = useState("Your Qr Output Will be here....");
  const ref = useRef<HTMLInputElement>(null);
  const generateText = () => {
    if (ref.current?.files)
      qr.scanImage(ref.current?.files[0]).then((e) => {
        setText(e);
      });
  };
  return (
    <DividerLayout>
      <div>
        <p className="pb-5">{text}</p>
        <input
          ref={ref}
          className="bg-primary text-secondary rounded-2xl"
          type={"file"}
          placeholder="Upload your qr code here"
          onChange={generateText}
        />
        {/* <IconButton
          style={{ backgroundColor: "blue" }}
          text="Click here To read "
          onclick={}
        /> */}
        {/* < /> */}
      </div>

      {/* < /> */}
    </DividerLayout>
  );
};

export default QRReadLayout;
