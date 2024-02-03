import HttpError from '../helpers/HttpError.js';
import  Contact  from '../models/contact.js';

export const getAllContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.json(result);   
  }
  catch (error) {
    next(error);
  }
};

export const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  }
  catch (error) {
    next(error);   
  }  
};

export const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status({
      message: "Delete success"
    })
  }
  catch (error) {
    next(error);   
  }
  res.json({ message: 'template message' })
  
};

export const createContact = async (req, res, next) => {
  try {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  }
  catch (error) {
    next(error);
  }
  res.json({ message: 'template message' })
};

export const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
    }
    catch (error) {
        next(error);
    }
};

export const updateFavorit = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
    }
    catch (error) {
        next(error);
    }
};