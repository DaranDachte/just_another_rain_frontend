import React from "react";
import Navigation from "../components/Navigation";
import styles from "./About.module.css";
import ToggleVisibility from "./ToggleVisibility";
import { useState } from "react";
import hardSnow from "../assets/videos/hard_snow.mp4";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  const [version, setActiveVersion] = useState(0);

  return (
      <div className={styles.wrapper}>
        <Navigation />

        <div className={styles.videoWrapper}>
          <video className={styles.video} src={hardSnow} autoPlay muted loop />
        </div>

        <p className={styles.aboutProject}>
          Here you can get an idea of what this project is all about. What
          prompted me to create it. What is the purpose of the project. How I am
          trying to achieve this goal. For ease of explanation I created two
          versions.
        </p>
        <div className={styles.container}>
          <ToggleVisibility
            index={1}
            isActive={version === 1}
            setActiveVersion={setActiveVersion}
            title="Short explanation"
            text={
              <>
                <p className={styles.pIndent}>
                  The purpose of this project is to create a website to help
                  refugees and immigrants in Germany to adapt. A special feature
                  of the project is that the site should not only contain useful
                  information, but also help people visually to overcome
                  depression. For this purpose it has to be designed and built
                  accordingly.
                </p>
                <p className={styles.pIndent}>
                  The main theme is 'German rain'. It is the one that, as
                  experience shows, makes it very difficult for the mental
                  health of those coming to Germany. And it is the symbol of
                  depression, a depressed state and as a consequence - failure.
                  One of the aims of the project is to show people that it is
                  just rain and nothing more. And in this weather, you can be
                  successful and enjoy life. The site is divided into several
                  pages, each of which has a specific purpose.
                </p>
                <p className={styles.pIndent}>
                  The following pages have been created so far:{" "}
                  <NavLink to="/about">About</NavLink> - On this page you are
                  now, there are two (short and full) descriptions of the
                  project.
                </p>
                <p className={styles.pIndent}>
                  <NavLink to="/diary">Diary</NavLink> - The point of this page
                  is this. It is a video diary. Initially (in the first video)
                  it tells the story of a man who is depressed because of the
                  German rain. And he wants to talk to people who have already
                  overcome this problem. They give their opinion and advice.
                  That is, every video contains positive experiences that can be
                  helpful to those who are in difficulty. I would like to
                  specify that at this stage this page is a prototype of a
                  future project. That is, in the future I hope to use more
                  professional tools to create editing and application of visual
                  effects. Simply speaking the videos will look more 'expensive
                  and of high quality'. Furthermore, if funding can be secured,
                  psychologists will be involved in the creation of each video.
                </p>
                <p className={styles.pIndent}>
                  The <NavLink to="/gallery">Gallery</NavLink> page shows short
                  stories of people who were forced to become refugees at an
                  advanced age.And in their new country, they have achieved
                  success and gained the respect of those around them. It is
                  common for refugees to be depressed because they are 30 or 50
                  years old, because their lives have 'passed them by', and
                  because they have no chance of success in Germany. The point
                  of this page is to show refugees that they are not the first
                  people to face this problem. And it is possible to become a
                  successful and respected person by starting from a clean
                  slate.
                </p>
                <p className={styles.pIndent}>
                  The{" "}
                  <NavLink to="/questions_and_answers">
                    Questions and Answers
                  </NavLink>{" "}
                  page is meant to help people with answers to frequently asked
                  questions - how to learn German, how to find a job, where to
                  turn if you are depressed. Also on this page there is a form
                  that everyone can fill in to ask a question and send it to the
                  site and get an answer later.
                </p>
                <p className={styles.pIndent}>
                  The{" "}
                  <NavLink to="/tests_and_donations">Tests and News</NavLink>{" "}
                  page was designed to provide positive news about refugees. It
                  will help refugees themselves to be on a positive note and it
                  will also help others to see refugees in a positive light.
                  Also on this page, anyone can find links to various online
                  tests to determine depression. This is necessary because many
                  refugees suffer from various forms of depression without even
                  realising it. There is also a form for donations if anyone
                  would like to help this project develop. Other pages may be
                  added to in the future. For example, creating various
                  databases or education pages. But this will require a serious
                  investment and may be possible once additional funding is
                  found.
                </p>
              </>
            }
          />

          <ToggleVisibility
            index={2}
            isActive={version === 2}
            setActiveVersion={setActiveVersion}
            title="Long Explanation"
            text={
              <>
                <p className={styles.pIndent}>
                  {" "}
                  Hello, my name is Daran Daсhte. It so happens that I have
                  been a refugee twice in my life. The first time was when I was
                  still a teenager. My family fled the war from the outskirts of
                  my homeland, where we were living at the time, to the capital.
                  It was then that I learned for the first time what refugee
                  life was like. You are uprooted from your familiar
                  surroundings and placed in a new environment where everything
                  is foreign to you. Everything makes you sick - different
                  climate, different food, different emotions. You have to
                  understand the world around you all over again and learn to
                  live.
                </p>
                <p className={styles.pIndent}>
                  {" "}
                  The second time I became a refugee was when I was almost
                  forty. It was because of my involvement in a protest against
                  my government's policies. I was detained by the police many
                  times, then I ended up behind bars twice, fortunately for a
                  short time. Then the moment came when I had to leave my
                  homeland and become a refugee again.{" "}
                </p>
                <p className={styles.pIndent}>
                  The second time was somewhat easy for me. I was an adult, and
                  I knew that I would have to fight a lot, and no one would
                  guarantee me victory. It strips you of unnecessary illusions.
                  I knew that this condition - being a refugee - requires you to
                  do extraordinary things, it requires you to concentrate all
                  your will, all your feelings, in an attempt to survive and
                  preserve yourself, or better yet, to create a comfortable
                  environment around you, where you will be surrounded by decent
                  people, where you will feel needed and useful to society,
                  where you can breathe peacefully during the day and sleep
                  soundly at night.
                </p>
                <p className={styles.pIndent}>
                  {" "}
                  Being a refugee is always difficult. You find yourself in a
                  new place where, frankly, you are not welcome. Even if it is
                  your homeland. And if it is a new country where you do not
                  know anyone, where they speak a foreign language... it becomes
                  the test of your life where your every ability will be tested.
                </p>{" "}
                <p className={styles.pIndent}>
                  {" "}
                  Yes, in the beginning you feel good because you find yourself
                  in a safe place. But then there is a period when every day you
                  have to find the strength to be stronger than the
                  circumstances. You have to learn the language, customs, very
                  often you have to learn a new profession. It is always hard,
                  it is always demanding. I have not seen a single refugee who
                  has not gone through depression and despair. I don't know a
                  single one who has started his life with nothing but joy and
                  happiness.
                </p>{" "}
                <p className={styles.pIndent}>
                  {" "}
                  In this daily struggle, you make mistakes that can be fatal.
                  Sometimes these mistakes can even lead to your deportation
                  from this country, and very often it means the end of all your
                  hopes for a better life.
                </p>{" "}
                <p className={styles.pIndent}>
                  {" "}
                  I have been in contact with hundreds of people who have moved
                  to Germany. I helped them as a translator, as an advisor -
                  where to go, who to talk to. I tried to give them the
                  confidence that they could win the struggle. Some of them
                  succeeded and are now living a happy life. Some broke down,
                  achieved nothing and were deported.
                </p>{" "}
                <p className={styles.pIndent}>
                  {" "}
                  After a while I realized that many refugees make the same
                  mistakes. There are not many of them, they can be reduced to a
                  few main ones. And the most important one, which is very
                  common, looks like this: 'Many refugees have plans to reach
                  Germany(Italy, France....). But they have no plans for what
                  they will do in that Germany'.{" "}
                </p>{" "}
                <p className={styles.pIndent}>
                  {" "}
                  This may sound ridiculous to some, but it's true. I knew a man
                  who took 4(!) years to get from Eritrea to Westphalia. He
                  managed to go to prison, he was robbed, he almost died several
                  times... But when he got there, where he had been going for so
                  long, he found out that that was the end of it. He had no idea
                  what to do next.That is, he had been programmed to stop
                  fighting at the very moment when the fight was due to begin.
                </p>{" "}
                <p className={styles.pIndent}>
                  {" "}
                  Reaching another country was the end - that was it, I wanted
                  to come, I arrived, the programme was over. And when
                  everything is just beginning, when there are chances to go to
                  school, to learn the language and then to get an education and
                  a job - many of these people have no idea what they want, in
                  which direction they want to go. Although many of them are
                  talented, many have decent potential to discover themselves.
                </p>{" "}
                <p className={styles.pIndent}>
                  For Germany, this represents a loss of billions. The country
                  is full of hostels for refugees who, after a short period,
                  become disillusioned with everything. They lose their old
                  illusions and gain nothing in return. They have no purpose,
                  they don't know where they could be useful. And even if they
                  later get a chance to study and work, a state of depression
                  (that is, they are functioning at twenty percent of their
                  capacity) stays with them for the rest of their lives. And
                  later it is inherited by their children, for whom it becomes
                  the norm of behaviour.{" "}
                </p>
                <p className={styles.pIndent}>
                  {" "}
                  There is such an expression - the American Dream. It means
                  that people are sure that they can come to America, be poor
                  and strangers and after a while become rich and belong to
                  them, in this country-the USA.It is clear that in many
                  respects this is an imposed myth. There are enough problems in
                  the USA, expensive education and medicine. In Germany I did
                  not pay my dentist a single euro in the first seven years of
                  my life. An education that cost 30,000 euros, I got for free.
                  So Germany has everything you need to get the title of 'German
                  Dream' or 'Germany is a country of success'. But you have to
                  work at it, like they did in America, the myth of the American
                  Dream did not arise by itself.{" "}
                </p>
                <p className={styles.pIndent}>
                  Germany is a country where your dreams for a decent life can
                  be fulfilled, and it has everything for that. You just have to
                  allocate your energy properly and be honest with yourself and
                  those around you. To discover yourself, to understand what you
                  really have, what hidden talents you have in you, the ones you
                  did not know about in your homeland, because your homeland at
                  this moment in time is at another level of social development.
                </p>
                <p className={styles.pIndent}>
                  {" "}
                  Modern Germany has developed as a country of newcomers -
                  refugees, guest workers, migrants... Immediately after the
                  war, the newcomers were Germans themselves - from the Sudetes,
                  Prussia, Oberschlesia..... Then there were Turks, Arabs,
                  Albanians, Germans again, but from the post-Soviet space,
                  Jews, Africans and Ukrainians This is likely to continue.
                  Unless something extraordinary happens.{" "}
                </p>
                <p className={styles.pIndent}>
                  All of the above explains why I decided to do this project. It
                  is something in between a social and cultural project. On the
                  one hand it should help those who come to Germany. On the one
                  hand, it should help people who came to Germany to adapt,
                  discover their potential and use it to their benefit and their
                  new country of residence. On the other hand, it is a cultural
                  project. I would like to start helping first of all with
                  visual methods. That is, the website should not be a dry set
                  of information and advice. 'Do this, go there, call this
                  number...' A website should be, first and foremost, a place
                  where people know at a glance what it is all about, that they
                  can be helped here. It is trustworthy and welcoming.
                </p>{" "}
                <p className={styles.pIndent}>
                  {" "}
                  The site should contain positive examples from refugees'
                  lives. These examples can be a landmark, a beacon in the
                  direction of which one should move to overcome problems. There
                  are a lot of negative moments in places of compact residence
                  of refugees - someone sells drugs, someone uses them, someone
                  steals... All this creates a huge negative field, which
                  absorbs new people and from which it can be very difficult to
                  get out. 
                </p>
              </>
            }
          />
        </div>
        <Footer />
      </div>
  );
};

export default About;
