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
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export interface AddEditTradeProps {
  trade?: TradeType;
  onClose: () => void;
}

export function AddEditTrade(props: AddEditTradeProps) {
  const { trade, onClose } = props;
  const createdDate = new Date(Number(trade?.date.created));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DialogTitle>{trade ? "Edit Trade" : "Add Trade"}</DialogTitle>
      <DialogContent>
        <form>
          <FormGroup>
            <TextField margin="dense" id="username" label="Username" />
            <TextField margin="dense" id="full-name" label="Full Name" />
            <TextField margin="dense" id="street" label="Street Address" />
            <TextField margin="dense" id="city" label="City" />
            <TextField margin="dense" id="state" label="State" />
            <TextField margin="dense" id="zip" label="ZIP Code" />
            <TextField margin="dense" id="source" label="Trade Source" />
          </FormGroup>
          <TextField
            multiline
            margin="dense"
            id="cards-in"
            label="Cards In"
            helperText="Cards you are receiving in the trade"
            minRows={4}
          />
          <TextField
            multiline
            margin="dense"
            id="cards-out"
            label="Cards Out"
            helperText="Cards you are sending in the trade"
            minRows={4}
          />
          <FormControl margin="dense">
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
          <TextField
            margin="dense"
            id="tracking-in"
            label="Tracking In"
            helperText="Tracking you sent"
          />
          <TextField
            margin="dense"
            id="tracking-out"
            label="Tracking Out"
            helperText="Tracking trade partner sent"
          />
          <FormControl margin="dense">
            <DatePicker label="Date Shipped" />
          </FormControl>
          <FormControl margin="dense">
            <DatePicker label="Date Received" />
          </FormControl>
          <Button onClick={onClose}>Close</Button>
        </form>
      </DialogContent>
    </LocalizationProvider>
  );
}
