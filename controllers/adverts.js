const advertsServices = require('../services/adverts');

const { CREATED_STATUS, OK_STATUS } = require('../middwares/httpStatus');

const create = async (req, res, next) => {
  try {
    const ad = req.body;

    const newAd = await advertsServices.create(ad);

    return res.status(CREATED_STATUS).json(newUser);
  } catch (err) {
    next(err);
  }
};


const getAll = async (_req, res, next) => {
  try {
    const adverts = await advertsServices.getAll();

    return res.status(OK_STATUS).json(adverts);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const ad = await advertsServices.getById(req.params.id);

    return res.status(OK_STATUS).json(ad);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {

    const ad = await userServices.remove(req.params.id);

    return res.status(OK_STATUS).send();
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {

    const ad = req.body;

    const updateAd = await advertsServices.create(req.params.id, ad);

    return res.status(OK_STATUS).json(updateAd);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
  update,
};