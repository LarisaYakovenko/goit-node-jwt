import express from "express";
// import {ctrl} from "../../controllers/contactsControllers.js"
import {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
  updateFavorit
} from "../../controllers/contactsControllers.js";

import  validateBody  from "../../middlevares/validateBody.js";
import  isValidId  from "../../middlevares/isValidId.js"
import { createContactSchema, updateContactSchema, updateFavoriteSchema }from "../../schemas/contactsSchemas.js"

const contactsRouter= express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:contactId", isValidId,getContactById);

contactsRouter.delete("/:contactId", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put("/:contactId", isValidId, validateBody(updateContactSchema), updateContact);

contactsRouter.patch("/:contactId/favorite", isValidId, validateBody(updateFavoriteSchema), updateFavorit);

export default {contactsRouter};
