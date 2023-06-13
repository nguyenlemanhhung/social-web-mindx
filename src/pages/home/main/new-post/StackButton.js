import React, { useState } from "react";

import ButtonActionPost from "../../../../components/ButtonActionPost";
import { Stack } from "@mui/material";

const StackButton = () => {
  const [imageUpload, setImageUpload] = useState();

  const handleUploadFile = () => {};
  return (
    <Stack direction="row" spacing={2}>
      <ButtonActionPost
        urlIcon={require("../../../../assets/icons/picture.png")}
        name={"Photo"}
      />
      <ButtonActionPost
        urlIcon={require("../../../../assets/icons/video.png")}
        name={"Video"}
      />
      <ButtonActionPost
        urlIcon={require("../../../../assets/icons/polling.png")}
        name={"Polling"}
      />
    </Stack>
  );
};
export default StackButton;
