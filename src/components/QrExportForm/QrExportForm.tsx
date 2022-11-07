import React from "react";
import { Stack, Box, Paper, Container, Button, useTheme } from "@mui/material";
import { QrCodeIcon } from "@heroicons/react/24/solid";
import Input from "../Input";
type Props = {};

const QrExportForm = (props: Props) => {
  const theme = useTheme();

  return (
    <Paper className="bg-secondary pb-20 pt-8 rounded-3xl  text-tertiary w-[80vw] md:w-[100%] sm:min-w-[380px]">
      <Box component={"form"}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          gap={5}
        >
          <Container className="flex items-center justify-center">
            <QrCodeIcon className={"md:h-[11vw] sm:h-[12vw] h-[20vw]"} />
          </Container>
          <Container>
            <Stack direction={"column"}>
              <Container>
                <Input>Input</Input>
              </Container>
              <Container>
                <Input>Input</Input>
              </Container>
              <Container>
                <Input>Input</Input>
              </Container>
            </Stack>
          </Container>
          <Container>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
              gap={"1.5vw"}
            >
              <Button
                className="rounded-full py-5 px-8 text-xs font-bold"
                style={{ backgroundColor: theme.palette.action.active }}
              >
                JPG
              </Button>
              <Button
                className="rounded-full py-5 px-8 text-xs font-bold"
                style={{ backgroundColor: theme.palette.action.selected }}
              >
                SVG
              </Button>
            </Stack>
          </Container>
        </Stack>
      </Box>
    </Paper>
  );
};

export default QrExportForm;
