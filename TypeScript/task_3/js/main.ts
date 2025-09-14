/// <reference path="./crud.d.ts" />

// Task 8 — Ambient Namespaces

// Import types
import { RowID, RowElement } from './interface';

// Import all JS functions as CRUD
import * as CRUD from './crud';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert and capture new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Update row (add age)
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Finally, delete row
CRUD.deleteRow(newRowID);
