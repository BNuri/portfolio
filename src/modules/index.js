const { combineReducers } = require("redux");
const { reducer: projects } = require("./projects");

// module.exports = combineReducers({ projects });

export default combineReducers({ projects });
