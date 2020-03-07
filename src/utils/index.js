const getFilmId = url => {
  const id = url.split("/")[5];
  return Number(id);
};

const getCharacterImageUrl = url => {
  const getCharacterId = url.split("/")[5];
  return `https://starwars-visualguide.com/assets/img/characters/${getCharacterId}.jpg`;
};

const getFilmImageUrl = id => {
  return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;
};

module.exports = {
  getFilmId,
  getCharacterImageUrl,
  getFilmImageUrl
};
