import React from "react";
import { Stack, Box, Paper, Container, Button } from "@mui/material";
import { QrCodeIcon } from "@heroicons/react/24/solid";
import Input from "../Input";
type Props = {};

const QrExportForm = (props: Props) => {
  return (
    <Paper className="bg-secondary rounded-md text-tertiary w-[80vw] md:w-[100%] sm:min-w-[380px]">
      <Box
        component={"form"}
        className=" border-solid border-2  border-tertiary"
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Container>
            <QrCodeIcon className={"h-20 w-[70%]"} />
          </Container>
          <Container>
            <Stack direction={"column"}>
              <Container>gg</Container>
              <Container>gg</Container>
              <Container>gg</Container>
            </Stack>
          </Container>
          <Container>
            <Stack direction={"row"}>
              <Input>Input</Input>
            </Stack>
          </Container>
        </Stack>
      </Box>
    </Paper>
  );
};

export default QrExportForm;
