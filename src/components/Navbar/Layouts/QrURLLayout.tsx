import React from "react";
import DividerLayout from "../../Layouts/DividerLayout";
import QrExportForm from "../../QrExportForm";

type Props = {};

const QrURLLayout = (props: Props) => {
  return (
    <DividerLayout>
      <div>
        <p>QrURLLayout</p>
      </div>
      <QrExportForm />
    </DividerLayout>
  );
};

export default QrURLLayout;
