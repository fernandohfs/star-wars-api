const axios = require("axios");

const {
  getFilmId,
  getCharacterImageUrl,
  getFilmImageUrl
} = require("../utils");

const baseURL = "https://swapi.co/api/";

class FilmsController {
  async list(req, res, next) {
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
  }

  async find(req, res, next) {
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
      const { response } = error;

      if (response.status === 404) {
        return res.json({ message: "Film not found" }).status(404);
      }
      console.error(error);
      next(error);
    }
  }
}

module.exports = new FilmsController();
