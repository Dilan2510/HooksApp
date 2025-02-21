import { useEffect, useState } from "react";

const baseCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    messageError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      messageError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (baseCache[url]) {
      setState({
        data: baseCache[url],
        isLoading: false,
        messageError: false,
        error: null,
      });
      return;
    }

    setLoadingState();
    const resp = await fetch(url);
    await new Promise((response) => setTimeout(response, 1500));
    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        messageError: true,
        error: {
          errorText: resp.statusText,
          errorStatus: resp.status,
        },
      });
      return;
    }
    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      messageError: false,
      error: null,
    });
    baseCache[url] = data;
    console.log(data);
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    messageError: state.messageError,
  };
};
