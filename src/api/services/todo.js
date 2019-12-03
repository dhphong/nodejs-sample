const ServerError = require('../../lib/error');

const Todo = require('../model/todo.js');

/**
 * @param {Object} options
 * @param {Integer} options.limit Maximum number of customers
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getTodo = async (options) => {
  try {
    let response = await Todo.getAll(options.limit);
    console.log(response);
    if (response) {
      return {
        status: 200,
        data: response
      }
    }

  } catch (error) {
    throw new ServerError({
      status: 500,
      error: 'fasdf'
    })
  }
};

/**
 * @param {Object} options
 * @param {Object} options.todo The TODO JSON you want to post
 * @throws {Error}
 * @return {Promise}
 */
module.exports.postTodo = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'postTodo ok!'
  };
};

/**
 * @param {Object} options
 * @param {Integer} options.id 
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getTodoById = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'getTodoById ok!'
  };
};

/**
 * @param {Object} options
 * @param {Integer} options.id 
 * @throws {Error}
 * @return {Promise}
 */
module.exports.deleteTodoById = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'deleteTodoById ok!'
  };
};

