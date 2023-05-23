import { TradeType } from "../data/data.interface";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export interface AddEditTradeProps {
  trade?: TradeType;
  onClose: () => void;
}

export function AddEditTrade(props: AddEditTradeProps) {
  const { trade, onClose } = props;
  const createdDate = new Date(Number(trade?.date.created));

  return (
    <>
      <DialogTitle>{trade ? "Edit Trade" : "Add Trade"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Subscribe</Button>
      </DialogActions>
    </>
  );
}
