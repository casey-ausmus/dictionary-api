const express = require("express");
const Joi = require("@hapi/joi");

const wordCache = require("../lib/wordCache");

const router = express.Router();

const requestSchema = Joi.object().keys({
  wordPart: Joi.string().min(3).required()
});

router.get("/:wordPart", (req, res) => {
  const validationResult = requestSchema.validate(req.params);

  if (validationResult.error) {
    return res.status(400).send({ error: validationResult.error });
  }

  const { wordPart } = validationResult.value;
  const matches = wordCache.filter((s) => s.toLowerCase().startsWith(wordPart.toLowerCase()));

  return res.status(200).send({ matches });
});

module.exports = router;
