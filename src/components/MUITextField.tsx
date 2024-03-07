import { Stack, TextField } from "@mui/material";

const MUITextField = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField label="Fill Here" variant="outlined" />
        <TextField label="Fill Here" variant="filled" />
        <TextField label="Fill Here" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Required" required />
        <TextField label="Password" type="password" />
      </Stack>
    </Stack>
  );
};

export default MUITextField;
