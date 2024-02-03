import express from "express";
import ctrl from "../../controllers/contactsControllers.js"
// import {
//   getAllContacts,
//   getContactById,
//   deleteContact,
//   createContact,
//   updateContact,
//   updateFavorit
// } from "../../controllers/contactsControllers.js";

import  validateBody  from "../../middlevares/validateBody.js";
import  isValidId  from "../../middlevares/isValidId.js"
import { createContactSchema, updateContactSchema, updateFavoriteSchema }from "../../schemas/contactsSchemas.js"

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.post("/", validateBody(createContactSchema), ctrl.createContact);

router.put("/:contactId", isValidId, validateBody(updateContactSchema), ctrl.updateContact);

router.patch("/:contactId/favorite", isValidId, validateBody(updateFavoriteSchema), ctrl.updateFavorit);

export default router;
