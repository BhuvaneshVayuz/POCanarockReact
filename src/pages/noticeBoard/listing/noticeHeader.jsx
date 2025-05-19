import { useState } from "react";
import {
  IconButton,
  TextField,
  InputAdornment,
  Button,
  Popover,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Tune as TuneIcon, Search as SearchIcon, ViewModule as ViewModuleIcon, ViewList as ViewListIcon } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import {
  DatePicker,
  LocalizationProvider
} from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const stats = [
  { label: "Current Notices", count: 20, link: "/current-notices" },
  { label: "Pending Approvals", count: 12, link: "/pending-approvals" },
  { label: "Draft Notices", count: 20, link: "/draft-notices" },
  { label: "Expiring Today", count: 20, link: "/expiring-today" },
  { label: "Expired Notices", count: 4, link: "/expired-notices" },
];

export const NoticeHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [view, setView] = useState("card");
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="pb-4 flex items-center justify-between flex-wrap gap-4">
      {/* Analytics Cards */}
      <div className="flex gap-4 flex-wrap">
        {stats.map((item) => (
          <div
            key={item.label}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-lg hover:shadow transition-all"
            onClick={() => navigate(item.link)}
          >
            <div className="text-sm text-gray-500">{item.label}</div>
            <div className="text-2xl font-bold">
              {item.count.toString().padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      {/* Controls: View Toggle, Filter, Search */}
      <div className="flex items-center gap-2">
        <IconButton onClick={() => setView("list")}>
          <ViewListIcon />
        </IconButton>
        <IconButton onClick={() => setView("card")}>
          <ViewModuleIcon />
        </IconButton>
        <Button
          variant="outlined"
          startIcon={<TuneIcon />}
          onClick={handleClick}
        >
          Filters
        </Button>
        <TextField
          placeholder="Search Notice"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {/* Backdrop popover */}
      {anchorEl && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-[1200]"
          onClick={handleClose}
        />
      )}

      {/* Popover */}
      <Popover
        open={anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ className: "p-4 w-96 z-[1300]" }}
      >
        <PopoverComponent />
      </Popover>
    </div>
  );
};

const PopoverComponent = () => {
  const [fromDate, setFromDate] = useState(new Date("2025-04-02"));
  const [toDate, setToDate] = useState(new Date("2025-04-15"));
  const [level, setLevel] = useState("");
  const [property, setProperty] = useState("");

  const handleQuickDate = (type) => {
    const today = new Date();
    if (type === "today") {
      setFromDate(today);
      setToDate(today);
    } else if (type === "week") {
      const end = new Date();
      end.setDate(today.getDate() + 7);
      setFromDate(today);
      setToDate(end);
    } else if (type === "month") {
      const end = new Date();
      end.setMonth(today.getMonth() + 1);
      setFromDate(today);
      setToDate(end);
    }
  };

  const resetAll = () => {
    setFromDate(null);
    setToDate(null);
    setLevel("");
    setProperty("");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center text-sm font-medium text-gray-600">
          <span>Filter by:</span>
        </div>

        {/* Date Range */}
        <div className="flex justify-between items-center text-sm font-medium text-gray-800">
          <span>Date Range</span>
          <button
            className="text-sm text-gray-500 hover:underline"
            onClick={() => {
              setFromDate(null);
              setToDate(null);
            }}
          >
            Reset
          </button>
        </div>
        <div className="flex gap-2">
          <DatePicker
            label="From"
            value={fromDate}
            onChange={setFromDate}
            slotProps={{
              textField: {
                size: "small",
                fullWidth: true,
              },
            }}
          />
          <DatePicker
            label="To"
            value={toDate}
            onChange={setToDate}
            slotProps={{
              textField: {
                size: "small",
                fullWidth: true,
              },
            }}
          />
        </div>
        <div className="flex gap-2">
          <Button
            className="whitespace-nowrap"
            variant="outlined"
            fullWidth
            onClick={() => handleQuickDate("today")}
          >
            Today
          </Button>
          <Button
            className="whitespace-nowrap"
            variant="outlined"
            fullWidth
            onClick={() => handleQuickDate("week")}
          >
            This Week
          </Button>
          <Button
            className="whitespace-nowrap"
            variant="outlined"
            fullWidth
            onClick={() => handleQuickDate("month")}
          >
            This Month
          </Button>
        </div>

        {/* Level */}
        <div className="flex justify-between items-center text-sm font-medium text-gray-800">
          <span>Choose Level</span>
          <button
            className="text-sm text-gray-500 hover:underline"
            onClick={() => setLevel("")}
          >
            Reset
          </button>
        </div>
        <FormControl fullWidth size="small">
          <InputLabel>Select Level</InputLabel>
          <Select
            value={level}
            label="Select Level"
            onChange={(e) => setLevel(e.target.value)}
          >
            <MenuItem value="Level 1">Level 1</MenuItem>
            <MenuItem value="Level 2">Level 2</MenuItem>
          </Select>
        </FormControl>

        {/* Property */}
        <div className="flex justify-between items-center text-sm font-medium text-gray-800">
          <span>Choose Property</span>
          <button
            className="text-sm text-gray-500 hover:underline"
            onClick={() => setProperty("")}
          >
            Reset
          </button>
        </div>
        <FormControl fullWidth size="small">
          <InputLabel>Select Property</InputLabel>
          <Select
            value={property}
            label="Select Property"
            onChange={(e) => setProperty(e.target.value)}
          >
            <MenuItem value="Property A">Property A</MenuItem>
            <MenuItem value="Property B">Property B</MenuItem>
          </Select>
        </FormControl>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            fullWidth
            variant="outlined"

            onClick={resetAll}
          >
            Reset All
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              handleClose();

            }}
          >
            Apply
          </Button>
        </div>
      </div>
    </LocalizationProvider>
  );
};
