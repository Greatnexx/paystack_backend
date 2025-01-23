import PAYMENT from "../models/paymentModel.js";

export const getAllPayments = async (req, res) => {
  try {
    const pageNumber = Number(req.query.page) || 1;
    const limitNumber = Number(req.query.limit) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    const search = req.query.search;

    const filter = search
      ? { email: { $regex: search, $options: "i" } } 
      : {};

    const payments = await PAYMENT.find(filter)
      .skip(skip)
      .limit(limitNumber);

    const totalPayments = await PAYMENT.countDocuments(filter);

    res.status(200).json({
      data: payments,
      message: "Payments retrieved successfully",
      pagination: {
        page: pageNumber,
        limit: limitNumber,
        total: totalPayments,
        totalPages: Math.ceil(totalPayments / limitNumber),
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving payments",
      error: error.message,
    });
  }
};

