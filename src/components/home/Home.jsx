import { useState, useEffect } from "react";
import TagCard from "../cards/TagCard";
import axios from "axios";
import "./home.css";
import vinyl from "../../assets/vinyl.png";

const Home = () => {
  const apiKey = "api_key=edabdc8efa6ff44658d08a93a343cf21";
  const [tags, setTags] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(
      () =>
        axios
          .get(
            `https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&${apiKey}&format=json`
          )
          .then((res) => res.data.toptags.tag)
          .then((data) => {
            setTags(data);
            setLoading(false);
          }),
      1000
    );
  }, []);

  return (
    <>
      {loading ? <img class="vinyl" src={vinyl} /> : null}
      <div className="cardsContainer">
        {loading ? <img class="vinyl" src={vinyl} /> : null}
        {tags &&
          tags.map((tag, index) => <TagCard key={index} name={tag.name} />)}
      </div>
    </>
  );
};

export default Home;
