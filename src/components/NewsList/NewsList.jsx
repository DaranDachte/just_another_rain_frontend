import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem";

const NewsList = () => {
  return (
    <>
      <div className={styles.newsTitle}>
        {" "}
        <h2>News from the world</h2>
      </div>

      <div className={styles.container}>
        <NewsItem
          country="France 🇫🇷️"
          language="english 🏴󠁧󠁢󠁥󠁮󠁧󠁿️"
          description="'Spider-Man' of Paris to get French citizenship after child rescue."
          link="http://https://www.theguardian.com/world/2018/may/28/spider-man-of-paris-to-get-french-citizenship-after-rescuing-child"
        />
        <NewsItem
          country="Germany🇩🇪️"
          language="german 🇩🇪"
          description="Angolan refugee stopped a burning bus on the A2 motorway and saved the lives of 66 people."
          link="https://dorsten-online.de/andre-tiago-manuel-ist-schutzengel-auf-der-a2/"
        />
        <NewsItem
          country="Russia 🇷🇺️"
          language="russian 🇷🇺️"
          description="A migrant from Tajikistan saved a child from dying in the Moscow subway."
          link="https://bomdodrus.com/2022/03/15/migrant-iz-tadzhikistana-spas-rebenka-ot-smerti-v-moskovskom-metro/"
        />
        <NewsItem
          country="Norway 🇳🇴️"
          language="ukrainian 🇺🇦️"
          description="A 17-year-old Ukrainian refugee learned the Norwegian language in record time."
          link="https://life.pravda.com.ua/society/2023/02/1/252648/"
        />
        <NewsItem
          country="France 🇫🇷️"
          language="german 🇩🇪"
          description="Lassana Bathily saved several lives in the supermarket attack."
          link="https://www.faz.net/aktuell/politik/ausland/europa/lassana-bathily-frankreichs-neuer-held-13364961.html"
        />
      </div>
    </>
  );
};

export default NewsList;
