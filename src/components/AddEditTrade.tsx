import { TradeType } from "../data/data.interface";
import {
  FormControl,
  Button,
  TextField,
  DialogContent,
  DialogTitle,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  DialogActions,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export interface AddEditTradeProps {
  trade?: TradeType;
  onClose: () => void;
}

export function AddEditTrade(props: AddEditTradeProps) {
  const { trade, onClose } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DialogTitle>{trade ? "Edit Trade" : "Add Trade"}</DialogTitle>
      <DialogContent>
        <form id="add-edit">
          <TextField
            className="w-full"
            margin="dense"
            id="source"
            label="Trade Source"
          />
          <hr className="my-4" />
          <FormGroup>
            <div className="flex gap-4">
              <TextField
                className="w-1/3"
                margin="dense"
                id="username"
                label="Username"
              />
              <TextField
                className="grow"
                margin="dense"
                id="full-name"
                label="Full Name"
              />
            </div>
            <TextField margin="dense" id="street" label="Street Address" />
            <div className="flex gap-4">
              <TextField
                className="grow"
                margin="dense"
                id="city"
                label="City"
              />
              <TextField margin="dense" id="state" label="State" />
              <TextField margin="dense" id="zip" label="ZIP Code" />
            </div>
          </FormGroup>
          <hr className="my-4" />
          <TextField
            className="w-full"
            multiline
            margin="dense"
            id="cards-in"
            label="Cards In"
            helperText="Cards you are receiving in the trade"
            minRows={4}
          />
          <TextField
            className="w-full"
            multiline
            margin="dense"
            id="cards-out"
            label="Cards Out"
            helperText="Cards you are sending in the trade"
            minRows={4}
          />
          <hr className="mb-4 mt-2" />
          <div className="mt-4 flex flex-col flex-wrap">
            <div className="flex gap-4">
              <FormControl margin="dense" className="w-1/2">
                <InputLabel id="demo-simple-select-label">
                  Shipping Method
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Shipping Method"
                >
                  <MenuItem value="PWE">PWE</MenuItem>
                  <MenuItem value="BMWT">BMWT</MenuItem>
                </Select>
              </FormControl>
              <FormControl margin="dense">
                <DatePicker label="Date Shipped" />
              </FormControl>
            </div>
            <div className="flex gap-4">
              <TextField
                className="grow"
                margin="dense"
                id="tracking-in"
                label="Tracking In"
                helperText="Tracking you sent"
              />
              <TextField
                className="grow"
                margin="dense"
                id="tracking-out"
                label="Tracking Out"
                helperText="Tracking trade partner sent"
              />
            </div>
          </div>
        </form>
      </DialogContent>
      <DialogActions className="mb-2 mr-6">
        <Button onClick={onClose}>Cancel</Button>
        {trade && (
          <Button variant="contained" color="error" onClick={onClose}>
            Delete
          </Button>
        )}
        <Button
          type="submit"
          form="add-edit"
          className="w-28"
          variant="contained"
          onClick={onClose}
        >
          Save
        </Button>
      </DialogActions>
    </LocalizationProvider>
  );
}
