//descriptive names: Something like 'GET_COMMENTS', 'GET_COMMENT', 'ADD_USER'
//I think these should be all caps, the values. Because they are constants, and in JS world, we use CAPS_CAMEL_CASE to represent constants

type QueryKey = {
  FETCH_COMMENTS: string;
  FETCH_USERS: string;
  FETCH_NEWS: string;
};

const queryKeys: QueryKey = {
  FETCH_COMMENTS: "FETCH_COMMENTS",
  FETCH_USERS: "FETCH_USERS",
  FETCH_NEWS: "FETCH_NEWS",
};

export { queryKeys };
