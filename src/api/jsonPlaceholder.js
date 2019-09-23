import axios from "axios";

//we are alternatively making axios instance (has some preset options defined => code reuse)
export default axios.create({
  // this baseURL is always tagged on (request to yelp.get('/search'))
  baseURL: "https://jsonplaceholder.typicode.com"
});
