import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem";
import {ReactComponent as FlagFrance} from "../../assets/img/FlagFrance.svg";
import {ReactComponent as FlagGermany} from "../../assets/img/FlagGermany.svg";
import {ReactComponent as FlagNorway} from "../../assets/img/FlagNorway.svg";
import {ReactComponent as FlagRussia} from "../../assets/img/FlagRussia.svg";
import {ReactComponent as FlagUkraine} from "../../assets/img/FlagUkraine.svg";
import {ReactComponent as FlagUnitedKingdom} from "../../assets/img/FlagUnitedKingdom.svg";

const NewsList = () => {
    return (
        <div>
            <h2 className={styles.newsTitle}>News from the world</h2>
            <div className={styles.container}>
                <NewsItem
                    country="France"
                    CIcon={FlagFrance}
                    language="english"
                    LIcon={FlagUnitedKingdom}
                    description="'Spider-Man' of Paris to get French citizenship after child rescue."
                    link="http://https://www.theguardian.com/world/2018/may/28/spider-man-of-paris-to-get-french-citizenship-after-rescuing-child"
                />
                <NewsItem
                    country="Germany"
                    CIcon={FlagGermany}
                    language="german"
                    LIcon={FlagGermany}
                    description="Angolan refugee stopped a burning bus on the A2 motorway and saved the lives of 66 people."
                    link="https://dorsten-online.de/andre-tiago-manuel-ist-schutzengel-auf-der-a2/"
                />
                <NewsItem
                    country="Russia"
                    CIcon={FlagRussia}
                    language="russian"
                    LIcon={FlagRussia}
                    description="A migrant from Tajikistan saved a child from dying in the Moscow subway."
                    link="https://bomdodrus.com/2022/03/15/migrant-iz-tadzhikistana-spas-rebenka-ot-smerti-v-moskovskom-metro/"
                />
                <NewsItem
                    country="Norway"
                    CIcon={FlagNorway}
                    language="ukrainian"
                    LIcon={FlagUkraine}
                    description="A 17-year-old Ukrainian refugee learned the Norwegian language in record time."
                    link="https://life.pravda.com.ua/society/2023/02/1/252648/"
                />
                <NewsItem
                    country="France"
                    CIcon={FlagFrance}
                    language="german"
                    LIcon={FlagGermany}
                    description="Lassana Bathily saved several lives in the supermarket attack."
                    link="https://www.faz.net/aktuell/politik/ausland/europa/lassana-bathily-frankreichs-neuer-held-13364961.html"
                />
            </div>
        </div>
    );
};

export default NewsList;
