import React from "react";
import { axiosInstance, shortenUrl } from "./utils/axiosHelper";

function App() {
  const [url, setUrl] = React.useState("");
  const [errorText, setErrorText] = React.useState("");
  const [result,setResult] = React.useState("");
  async function shortUrl(e) {
    e.preventDefault();
    if (!isValidUrl(url)) {
      setErrorText("Not a vaid url");
      return false;
    }
    setErrorText(null);
    let res = await shortenUrl(url);
    console.log(res)
    setResult(res);
  }
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };
  return (
    <div className="App">
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={url}
            onChange={(value) => setUrl(value.target.value)}
          />
        </label>
        <button type="button" onClick={shortUrl} >
          Submit
        </button>
        {errorText == null ? <></> :<> {errorText}</>}
      </form>
      {result}
    </div>
  );
}

export default App;
