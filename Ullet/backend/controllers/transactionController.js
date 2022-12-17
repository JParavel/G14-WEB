import transactionModel from "../models/transactionModel.js";

export async function getTransactions(req, res) {
  try {
    const { name } = req.value;

    const documents = await transactionModel.find({
      $or: [{ to: name }, { from: name }],
    });

    res.status(200).json(documents);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function createTransaction(req, res) {
  try {
    const { transaction } = req.body;

    const document = await transactionModel.create(transaction);

    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
