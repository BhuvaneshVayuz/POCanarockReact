import { CloudUploadOutlined } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function BasicNoticeDetail() {
  const [template, setTemplate] = useState("");

  
  const handleChange = (event) => {
    setTemplate(event.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <FormControl fullWidth>
          <InputLabel id="select-template-label">Select Template</InputLabel>
          <Select
            labelId="select-template-label"
            id="select-template"
            value={template}
            label="Select Template"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            placeholder="Enter a subject name"
          />
        </FormControl>
      </div>
      <FormControl component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Flash Notice</FormLabel> */}
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Flash Notice"
        />
        <FormHelperText>
          Check this box if you want to flash this message to the members, when
          they login into their accounts.
        </FormHelperText>
      </FormControl>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <FormControl fullWidth>
          <InputLabel id="select-template-label">Expires By</InputLabel>
          <Select
            labelId="select-template-label"
            id="select-template"
            value={template}
            label="Select Template"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="!space-y-2">
          <Typography>Upload Attachment (if any)</Typography>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadOutlined />}
          >
            Upload files
          </Button>
          <FormHelperText className="!mx-0">
            (max of 10 MB in size, only pdf, ppt, word, excel, zip, png, jpg and
            gif type of files allowed)
          </FormHelperText>
        </FormControl>
      </div>
    </>
  );
}
