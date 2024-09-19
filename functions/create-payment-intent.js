//domain/.netlify/functions/hello

const items = [{ it }];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello world",
  };
};
 