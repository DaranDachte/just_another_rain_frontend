import React from "react";
import styles from "./TestsNewsDonations.module.css";
import Navigation from "../components/Navigation";
import NewsList from "../components/NewsList";
import Footer from "../components/Footer";
import TestList from "../components/TestList";

const TestsNewsDonations = () => {
    return (
            <div className={styles.wrapper}>
                <Navigation/>
                <div className={styles.container}>
                    <div className={styles.tests}>
                        <TestList/>
                    </div>
                    <div className={styles.news}>
                        <NewsList/>
                    </div>
                </div>
                <Footer/>
            </div>
    );
};
export default TestsNewsDonations;
