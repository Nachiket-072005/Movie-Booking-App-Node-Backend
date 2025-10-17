const errorResponseBody = {
  data: {},
  err: {},
  message: "Unable to fetch the movie",
  success: false,
};

const successResponseBody = {
  data: {},
  err: {},
  message: "Successfully processed the request",
  success: true,
};

module.exports = { errorResponseBody, successResponseBody };
