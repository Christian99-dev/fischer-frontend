const messageFormarter = (
  vorname,
  nachname,
  strasseHausnummer,
  plzOrt,
  email,
  anliegen,
  messageFormat
) => {
  return messageFormat
    .replaceAll("[vorname]", vorname)
    .replaceAll("[nachname]", nachname)
    .replaceAll("[strasseHausnummer]", strasseHausnummer)
    .replaceAll("[plzOrt]", plzOrt)
    .replaceAll("[email]", email)
    .replaceAll("[anliegen]", anliegen);
};

export default messageFormarter;
