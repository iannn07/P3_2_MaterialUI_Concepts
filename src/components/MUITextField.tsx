import { Stack, TextField } from "@mui/material";
import { useState } from "react";

const MUITextField = () => {
  const [values, setValues] = useState("");
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField label="Fill Here" variant="outlined" />
        <TextField label="Fill Here" variant="filled" />
        <TextField label="Fill Here" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Required"
          required
          error={values.length <= 4 && values.length !== 0}
          helperText={values.length <= 4 && values.length !== 0 ? "Minimum 5 Characters" : " "}
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <TextField label="Password" type="password" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Amount" InputProps={{ startAdornment: "$" }} />
        <TextField label="Weight" InputProps={{ endAdornment: "kg" }} />
      </Stack>
    </Stack>
  );
};

export default MUITextField;
