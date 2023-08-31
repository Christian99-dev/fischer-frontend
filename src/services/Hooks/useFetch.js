import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};


export const useFetchTimeSimulation = (url, time) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Setze den Ladezustand auf true

    // Simuliere eine Verzögerung von 2 Sekunden
    const delay = setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false)); // Setze den Ladezustand auf false, wenn der Abruf abgeschlossen ist
    }, time); // 2000 Millisekunden = 2 Sekunden

    return () => clearTimeout(delay); // Aufräumen, um Verzögerung zu stoppen, wenn die Komponente entladen wird
  }, [url, time]);

  return { data, error, loading };
};






