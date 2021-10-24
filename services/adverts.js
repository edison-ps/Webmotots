const joi = require('joi');
const advertsModels = require('../models/adverts');
const { messageError } = require('../middwares/errors');

const { 
  AD_NOT_CREATED,
  AD_NOT_EXIST,
  AD_NOT_UPDATED } = require('../middwares/errorMessages');

const {
  BAD_REQUEST_STATUS,
  INTERNAL_ERROR_STATUS,
  NOT_FOUND_STATUS } = require('../middwares/httpStatus');

const adSchema = joi.object({
  marca: joi.string().required(),
  modelo: joi.string().required(),
  versao: joi.string().required(),
  ano: joi.number().integer().required(),
  quilometragem: joi.number().integer().required(),
  observacao: joi.string().required(),
});

const validateAd = (ad) => {
  const result = adSchema.validate(ad);

  if (result.error) {
    throw messageError(BAD_REQUEST_STATUS, result.error.message);
  }
};

const getAll = async () => advertsModels.getAll();

const create = async (ad) => {

  validateAd(ad);

  const newAd = await advertsModels.create(ad);

  if (!newAd) {
    throw messageError(INTERNAL_ERROR_STATUS, AD_NOT_CREATED);
  }

  return newAd;
};

const getById = async (id) => {
  const ad = await advertsModels.getById(id);

  if (!ad) {
    throw messageError(NOT_FOUND_STATUS, AD_NOT_EXIST);
  }

  return ad;
};

const remove = async (id) => {

  const ad = await getById(id);

  removeAd = await advertsModels.remove(id);
    
};

const update = async (id, ad) => {


  const adById = await advertsModels.getById(id);

  validateAd(ad);

  const updateAd = await advertsModels.update(id, ad);

  if (!updateAd) {
    throw messageError(INTERNAL_ERROR_STATUS, AD_NOT_UPDATED);
  }

  return updateAd;

}

module.exports = {
  create,
  getAll,
  getById,
  remove,
  update,
};
