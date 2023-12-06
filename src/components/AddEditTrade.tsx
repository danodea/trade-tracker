import { ITrade } from "../data/data.interface";
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
import React, { useState } from "react";
import * as dayjs from "dayjs";
import { set } from "firebase/database";
import { SelectChangeEvent } from "@mui/material";

export interface AddEditTradeProps {
  trade?: ITrade;
  onClose: () => void;
  db: any;
}

export function AddEditTrade(props: AddEditTradeProps) {
  const { trade, onClose, db } = props;
  const [tradeFormData, setTradeFormData] = useState({});

  const tradeFields = [
    "cardsIn",
    "cardsOut",
    "city",
    "name",
    "shipDate",
    "shippingMethod",
    "source",
    "state",
    "street",
    "trackingIn",
    "trackingOut",
    "username",
    "zip",
  ];

  function handleCancel() {
    onClose();
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log(tradeFormData);
    // set(db, tradeFormData);
  }

  function handleDelete() {
    onClose();
  }

  function updateState(field: string, value: string) {
    if (tradeFields.includes(field)) {
      setTradeFormData({
        ...tradeFormData,
        [field]: value,
      });
    }
    console.log(tradeFormData);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DialogTitle>{trade ? "Edit Trade" : "Add Trade"}</DialogTitle>
      <DialogContent
        onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
          updateState(e.target.id, e.target.value)
        }
      >
        <form id="add-edit">
          <TextField
            className="w-full"
            margin="dense"
            id="source"
            label="Trade Source"
            defaultValue={trade?.source}
          />
          <hr className="my-4" />
          <FormGroup>
            <div className="flex gap-4">
              <TextField
                className="w-1/3"
                margin="dense"
                id="username"
                label="Username"
                defaultValue={trade?.username}
              />
              <TextField
                className="grow"
                margin="dense"
                id="name"
                label="Full Name"
                defaultValue={trade?.address.name}
              />
            </div>
            <TextField
              margin="dense"
              id="street"
              label="Street Address"
              defaultValue={trade?.address.street}
            />
            <div className="flex gap-4">
              <TextField
                className="grow"
                margin="dense"
                id="city"
                label="City"
                defaultValue={trade?.address.city}
              />
              <TextField
                margin="dense"
                id="state"
                label="State"
                defaultValue={trade?.address.state}
              />
              <TextField
                margin="dense"
                id="zip"
                label="ZIP Code"
                defaultValue={trade?.address.zip}
              />
            </div>
          </FormGroup>
          <hr className="my-4" />
          <TextField
            className="w-full"
            multiline
            margin="dense"
            id="cardsIn"
            label="Cards In"
            helperText="Cards you are receiving in the trade"
            minRows={4}
            defaultValue={trade?.cards.in}
          />
          <TextField
            className="w-full"
            multiline
            margin="dense"
            id="cardsOut"
            label="Cards Out"
            helperText="Cards you are sending in the trade"
            minRows={4}
            defaultValue={trade?.cards.out}
          />
          <hr className="mb-4 mt-2" />
          <div className="mt-4 flex flex-col flex-wrap">
            <div className="flex gap-4">
              <FormControl margin="dense" className="w-1/2">
                <InputLabel id="shipping-method-label">
                  Shipping Method
                </InputLabel>
                <Select
                  labelId="shipping-method-label"
                  label="Shipping Method"
                  defaultValue={trade?.shipping.method || ""}
                  onChange={(e: SelectChangeEvent<string>) =>
                    updateState("shippingMethod", e.target.value)
                  }
                >
                  <MenuItem value="PWE">PWE</MenuItem>
                  <MenuItem value="BMWT">BMWT</MenuItem>
                </Select>
              </FormControl>
              <FormControl margin="dense">
                <DatePicker
                  onChange={(value) =>
                    updateState("shipDate", value?.format("MM/DD/YYYY") || "")
                  }
                  label="Date Shipped"
                  {...(trade?.date.shipped
                    ? {
                        defaultValue: dayjs(Number(trade?.date.shipped)),
                      }
                    : {})}
                />
              </FormControl>
            </div>
            <div className="flex gap-4">
              <TextField
                className="grow"
                margin="dense"
                id="trackingOut"
                label="Tracking Out"
                helperText="Tracking you sent"
                defaultValue={trade?.shipping.tracking.in}
              />
              <TextField
                className="grow"
                margin="dense"
                id="trackingIn"
                label="Tracking In"
                helperText="Tracking trade partner sent"
                defaultValue={trade?.shipping.tracking.out}
              />
            </div>
          </div>
        </form>
      </DialogContent>
      <DialogActions className="mb-2 mr-6">
        <Button onClick={handleCancel}>Cancel</Button>
        {trade && (
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        )}
        <Button
          type="submit"
          form="add-edit"
          className="w-28"
          variant="contained"
          onClick={(e) => handleSubmit(e)}
        >
          Save
        </Button>
      </DialogActions>
    </LocalizationProvider>
  );
}
