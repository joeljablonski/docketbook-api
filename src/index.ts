import express from "express";

import { fetchData } from "./actions/fetchData";

import { createDocketById } from "./actions/createDocketById";
import { createDockets } from "./actions/createDockets";

// create the express server
var app = express();

// get all dockets 
app.get("/dockets", async (_req: any, res: any) => {

  const dockets = createDockets(await fetchData());

  res.json(dockets) 
});

// get docket by id
app.get("/dockets/:id", async (req: any, res: any) => {
  
  const docket = createDocketById(await fetchData(req.params.id));

  res.json(docket)
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});