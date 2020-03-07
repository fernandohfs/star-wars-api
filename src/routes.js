const axios = require("axios");

const { getFilmId, getCharacterImageUrl, getFilmImageUrl } = require("./utils");

module.exports = app => {
  const baseURL = "https://swapi.co/api/";

  app.get("/films", async (req, res, next) => {
    try {
      const {
        data: { results }
      } = await axios.request({ baseURL, url: "films" });
      results.forEach(x => (x.id = getFilmId(x.url)));
      return res.send(results).status(200);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  app.get("/films/:id", async (req, res, next) => {
    try {
      const filmId = req.params.id;
      const { data } = await axios.request({ baseURL, url: `films/${filmId}` });

      const charactersRequests = await Promise.all(
        data.characters.map(characterUrl => {
          return axios.get(characterUrl);
        })
      );

      const characters = charactersRequests
        .map(y => y.data)
        .map(x => {
          return {
            name: x.name,
            gender: x.gender,
            birthYear: x.birth_year,
            eyeColor: x.eye_color,
            height: x.height,
            mass: x.mass,
            photo: getCharacterImageUrl(x.url)
          };
        });

      data.id = getFilmId(data.url);
      data.photo = getFilmImageUrl(data.id);
      data.characters = characters;

      return res.send(data).status(200);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
};
