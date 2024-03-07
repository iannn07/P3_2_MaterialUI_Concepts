import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { useState } from "react";

const MUIButton = () => {
  const [formats, setFormats] = useState<string | null>(null);
  console.log(formats);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <div>
      {/* Button Basic Styles */}
      <Stack direction="row" spacing={2}>
        <Button variant="text">Button 1</Button>
        <Button variant="contained">Button 2</Button>
        <Button variant="outlined">Button 3</Button>
      </Stack>
      {/* Button Colors */}
      <Stack direction="row" spacing={2} mt={5}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      {/* Button + Icons */}
      <Stack direction="row" spacing={2} mt={5}>
        <Button variant="contained" color="success" startIcon={<SendIcon />}>
          Success
        </Button>
        <Button variant="contained" color="success" endIcon={<SendIcon />}>
          Success
        </Button>
        <IconButton aria-label="send">
          <SendIcon />
        </IconButton>
      </Stack>
      {/* Button Group */}
      <Stack direction="row" spacing={2} mt={5}>
        <ButtonGroup variant="contained" color="primary" orientation="vertical">
          <Button startIcon={<SendIcon />}>Success</Button>
          <Button endIcon={<SendIcon />}>Success</Button>
          <Button aria-label="send">
            <SendIcon />
          </Button>
        </ButtonGroup>
      </Stack>
      {/* Toggle Button */}
      <Stack direction="row" spacing={2} mt={5}>
        <ToggleButtonGroup
          aria-label="toggle button group"
          value={formats}
          onChange={handleFormatChange}
          color="primary"
          exclusive
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value={"underline"} aria-label="underline">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  );
};

export default MUIButton;
