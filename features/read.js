'use strict';

module.exports.getTodo = async (event) => {
  const todo = 'make dinner'
  return {
    statusCode: 200,
    body: JSON.stringify({
      todo: todo
    }, null, 2)
  };
};
