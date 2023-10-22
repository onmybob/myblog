"use client";

import {
  adminSearchSubmission,
  getPhotosParamsServer,
} from "@/service/photoService";
import { BorderAll } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useStore } from "_store/admin";
import React from "react";
import { useRouter } from "next/navigation";

const Toolbar = ({ setList }: { setList: any }) => {
  const router = useRouter();
  const [city, setCity] = React.useState("10");
  const [key, setKey] = React.useState("");

  const search = () => {
    router.push(`/admin/photo?key=${key}&city=${city}`);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={7} className=" flex">
        <Button variant="outlined" startIcon={<BorderAll />}>
          全部删除
        </Button>
      </Grid>
      <Grid item xs={5} className=" flex justify-end  ">
        <Stack spacing={2} direction="row">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">城市</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={city}
              label="城市"
              onChange={(e) => setCity(e.target.value)}
            >
              <MenuItem value={10}>全部</MenuItem>
              <MenuItem value={20}>深圳</MenuItem>
              <MenuItem value={30}>梵蒂冈</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className=" w-72"
            id="outlined-basic"
            onChange={(e) => setKey(e.target.value)}
            label="关键字"
            variant="outlined"
            size="small"
          />
          <Button variant="contained" onClick={search}>
            查询
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Toolbar;
