import React, { useRef } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
import QrCodeIcon from "@heroicons/react/24/solid/QrCodeIcon";
import Input from "./Input";
import IconButton from "../IconButton";

type Props = {};
const QrExportForm = (props: Props) => {
  const theme = useTheme();
  const iconRef = useRef<HTMLDivElement>(null);
  return (
    <Paper className="bg-secondary overflow-hidden rounded-3xl px-4 text-tertiary w-[75vw]  md:w-[100%] sm:min-w-[340px]">
      <Box
        component={"form"}
        className="box-border flex justify-center p-0 items-end pb-[5rem] "
      >
        <Stack
          justifyContent={"stretch"}
          alignItems={"stretch"}
          direction={"column"}
          className="flex-1 p-2"
          gap={5}
        >
          <Container
            ref={iconRef}
            className="flex p-0 items-center justify-center "
          >
            <QrCodeIcon className={"md:h-[22vh] sm:h-[14vh] h-[20vw]"} />
          </Container>
          <Container className="w-[100%]  p-0  flex justify-center items-center flex-col">
            <Stack gap={1.5} direction={"column"} className="w-[100%]">
              <Container className="w-[100%]  p-0 ">
                <Input title="Frame">Input</Input>
              </Container>
              <Container className="w-[100%]  p-0 ">
                <Input title="Shape & Color">Input</Input>
              </Container>
              <Container className="w-[100%]  p-0 ">
                <Input title="Logo">Input</Input>
              </Container>
            </Stack>
          </Container>
          <Container className="h-[100%]">
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
              gap={"1.5vw"}
            >
              <IconButton
                text="JPG"
                style={{ backgroundColor: theme.palette.action.active }}
              />
              <IconButton
                text="SVG"
                style={{ backgroundColor: theme.palette.action.selected }}
              />
            </Stack>
          </Container>
        </Stack>
      </Box>
    </Paper>
  );
};

export default QrExportForm;
