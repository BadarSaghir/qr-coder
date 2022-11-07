import React from "react";
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

  return (
    <Paper className="bg-secondary pb-10 pt-10 rounded-3xl px-2 text-tertiary w-[80vw] md:w-[100%] sm:min-w-[380px]">
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
            <Stack gap={1.5} direction={"column"}>
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
