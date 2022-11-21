import React, { useState } from "react";
import DividerLayout from "../../Layouts/DividerLayout";
import Input from "@mui/material/InputBase";
type Props = {};

const QRReadLayout = (props: Props) => {
  const [text, setText] = useState("");
  return (
    <DividerLayout>
      <div>
        <p>{text}</p>
        {/* < /> */}
      </div>
      <div>
        <Input type="file" placeholder="Upload Your file here?" />
      </div>
      {/* < /> */}
    </DividerLayout>
  );
};

export default QRReadLayout;
