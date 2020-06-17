import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer -GCxMU8Y6zcGW05WcjGgp17sdcK5pgR1UZcfTpUjRUZbpd6rMw53-PRo6kn1pPF8UxHUL8UGggx06GyxJqzwV51NWR67yBRB_7wZn0lGz7zejWWG_mu4RqHkX1LoXnYx",
  },
});
