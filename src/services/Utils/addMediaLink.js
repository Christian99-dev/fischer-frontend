export const addMediaLink = (src) => {
  if (process.env.GATSBY_USE_LOCAL_BACKEND === "true")
    return "http://localhost:8000/" + src;
  else return process.env.GATSBY_BACKEND_URL + src;
};
