import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function NotificationsAndPermissions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <FormControl component="fieldset" variant="standard">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Send Email Notification"
        />
        <FormHelperText>
          If this is checked, email will be sent to all members
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="communityLevel"
            control={<Radio defaultChecked />}
            label="Community Level"
          />
          <FormControlLabel
            value="blockLevel"
            control={<Radio />}
            label="Block Level"
          />
          <FormControlLabel
            value="unitLevel"
            control={<Radio />}
            label="Unit Level"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
