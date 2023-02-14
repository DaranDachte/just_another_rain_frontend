import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer/Footer";

import Card from "../components/Card/Card";
import Barysh from "../assets/img/Barysh.jpg";
import Bohr from "../assets/img/bohr.jpg";
import Bunuel from "../assets/img/Bunuel.jpg";
import Einstein from "../assets/img/Einstein.jpg";
import Freud from "../assets/img/Freud.jpg";
import Hugo from "../assets/img/Hugo.jpg";
import Lang from "../assets/img/Lang.jpg";
import Marlene from "../assets/img/Marlene.jpg";
import Vangelis from "../assets/img/Vangelis.jpg";

import styles from "./Gallery.module.css";

const Gallery = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const onCardClick = (index) => {
        setActiveCardIndex(index);
    };

    return (
        <div className={styles.wrapper}>
                <div className={styles.background}>
                    <div
                        className={styles.list}
                        onClick={() => setActiveCardIndex(0)}
                    >
                        <Navigation/>
                        <Card
                            text={`Mikhail Baryshnikov
Born January 28, 1948, is a Soviet Latvian-born Russian-American dancer, choreographer, and actor. He was the preeminent male classical dancer of the 1970s and 1980s. He subsequently became a noted dance director.
On June 29, 1974, in Toronto while on tour with the Bolshoi, Baryshnikov defected, requesting political asylum in Canada. As recalled by John Frazer, a ballet critic from Toronto who helped Baryshnikov to escape, Frazer wrote down phone numbers of people on a small piece of paper and hid it under his wedding ring. At a banquet after one show he managed to distract the KGB officer who followed Baryshnikov as an interpreter and gave Baryshnikov the paper.Soon he joined the National Ballet of Canada for a brief time in a guest role. He also announced that he would not return to the USSR. He later said that Christina Berlin, an American friend, helped engineer his defection during his 1970 tour of London. His first televised performance after coming out of temporary seclusion in Canada was with the National Ballet of Canada in La Sylphide. He then went to the United States. In December 1975, he and his dance partner Natalia Makarova featured prominently in an episode of the BBC television series Arena.
In the first two years after his defection, he danced for no fewer than 13 different choreographers, including Jerome Robbins, Glen Tetley, Alvin Ailey, and Twyla Tharp. "It doesn't matter if every ballet is a success or not", he told New York Times dance critic Anna Kisselgoff in 1976. "The new experience gives me a lot." He cited his fascination with the ways Ailey mixed classical and modern technique and his initial discomfort when Tharp insisted he incorporate eccentric personal gestures in dance.`}
                            photo={Barysh}
                            index={1}
                            onClickHandler={onCardClick}
                            isActive={activeCardIndex === 1}
                        />
                        <Card
                            text={`Niels Bohr
7 October 1885  - 18 November 1962. Was a Danish physicist who made foundational contributions to understanding atomic structure and quantum theory, for which he received the Nobel Prize in Physics in 1922. Bohr was also a philosopher and a promoter of scientific research.

Bohr developed the Bohr model of the atom, in which he proposed that energy levels of electrons are discrete and that the electrons revolve in stable orbits around the atomic nucleus but can jump from one energy level (or orbit) to another. Although the Bohr model has been supplanted by other models, its underlying principles remain valid. He conceived the principle of complementarity: that items could be separately analysed in terms of contradictory properties, like behaving as a wave or a stream of particles. The notion of complementarity dominated Bohr's thinking in both science and philosophy.

Bohr founded the Institute of Theoretical Physics at the University of Copenhagen, now known as the Niels Bohr Institute, which opened in 1920. Bohr mentored and collaborated with physicists including Hans Kramers, Oskar Klein, George de Hevesy, and Werner Heisenberg. He predicted the existence of a new zirconium-like element, which was named hafnium, after the Latin name for Copenhagen, where it was discovered. Later, the element bohrium was named after him.

During the 1930s, Bohr helped refugees from Nazism. After Denmark was occupied by the Germans, he had a famous meeting with Heisenberg, who had become the head of the German nuclear weapon project. In September 1943 word reached Bohr that he was about to be arrested by the Germans, and he fled to Sweden. From there, he was flown to Britain, where he joined the British Tube Alloys nuclear weapons project, and was part of the British mission to the Manhattan Project. After the war, Bohr called for international cooperation on nuclear energy. He was involved with the establishment of CERN and the Research Establishment Risø of the Danish Atomic Energy Commission and became the first chairman of the Nordic Institute for Theoretical Physics in 1957. `}
                            photo={Bohr}
                            index={2}
                            onClickHandler={onCardClick}
                            isActive={activeCardIndex === 2}
                        />
                        <Card
                            text={`Luis Buñuel
 22 February 1900 - 29 July 1983. Was a Spanish-Mexican  filmmaker  who worked in France, Mexico, and Spain. He has been widely considered by many film critics, historians, and directors to be one of the greatest and most influential filmmakers of all time.
When Buñuel died at age 83, his obituary in The New York Times called him "an iconoclast, moralist, and revolutionary who was a leader of avant-garde surrealism in his youth and a dominant international movie director half a century later". His first picture, Un Chien Andalou—made in the silent era—is still viewed regularly throughout the world and retains its power to shock the viewer,  and his last film, That Obscure Object of Desire—made 48 years later—won him Best Director awards from the National Board of Review and the National Society of Film Critics. Writer Octavio Paz called Buñuel's work "the marriage of the film image to the poetic image, creating a new reality...scandalous and subversive".
Seven of Buñuel's films are included in Sight & Sound's 2012 critics' poll of the top 250 films of all time. Fifteen of his films are included in the They Shoot Pictures, Don't They? list of the 1,000 greatest films of all time, second only to Jean-Luc Godard, with sixteen, and he ranks number 13 on their list of the top 250 directors.

Buñuel stayed in Spain for the first few months after the outbreak of the Civil War, but in September 1936 he left for Geneva and then Paris on instructions from the Republican foreign minister. There his main occupation was the creation and cataloguing of propaganda films in support of the Republicans. In 1938, the director asked to be sent to Hollywood to advise American studios in preparing films about the Spanish war. However, after his arrival in the United States, it became clear that Republican support in Hollywood was far less than anticipated. Just before Buñuel's arrival, the previously released film Blockade outraged Catholic circles and work on Load for the Innocents, about the evacuation of children in the Bay of Biscay, which Buñuel had hoped for, was halted. The Association of Film Producers and Distributors soon banned the making of new films about the Civil War[43]. After Franco's victory and the outbreak of World War II, Buñuel remained in the States. `}
                            photo={Bunuel}
                            index={3}
                            onClickHandler={onCardClick}
                            isActive={activeCardIndex === 3}
                        />
                        <Card
                            text={`Albert Einstein
14 March 1879 - 18 April 1955. Was a German-born theoretical physicist, widely acknowledged to be one of the greatest and most influential physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics. Relativity and quantum mechanics are the two pillars of modern physics. His mass-energy equivalence formula E = mc2, which arises from relativity theory, has been dubbed "the world's most famous equation".  His work is also known for its influence on the philosophy of science. He received the 1921 Nobel Prize in Physics "for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect",a pivotal step in the development of quantum theory. His intellectual achievements and originality resulted in "Einstein" becoming synonymous with "genius".

Einstein was born in the German Empire, but moved to Switzerland in 1895, forsaking his German citizenship (as a subject of the Kingdom of Württemberg)  the following year.  In 1901, he acquired Swiss citizenship, which he kept for the rest of his life, and in 1903 he secured a permanent position at the Swiss Patent Office in Bern. In 1914, Einstein moved to Berlin in order to join the Prussian Academy of Sciences and the Humboldt University of Berlin. In 1917, Einstein became director of the Kaiser Wilhelm Institute for Physics; he also became a German citizen again, this time Prussian.

In 1933, while Einstein was visiting the United States, Adolf Hitler came to power in Germany. Einstein, as Jewish, objected to the policies of the newly elected Nazi government, he settled in the United States and became an American citizen in 1940. `}
                            photo={Einstein}
                            index={4}
                            onClickHandler={onCardClick}
                            isActive={activeCardIndex === 4}
                        />
                        <Card
                            text={`Sigmund Freud
6 May 1856 - 23 September 1939.
Was an Austrian neurologist and the founder of psychoanalysis, a clinical method for evaluating and treating pathologies explained as originating in conflicts in the psyche, through dialogue between a patient and a psychoanalyst.
Freud was born to Galician Jewish parents in the Moravian town of Freiberg, in the Austrian Empire. He qualified as a doctor of medicine in 1881 at the University of Vienna.  Upon completing his habilitation in 1885, he was appointed a docent in neuropathology and became an affiliated professor in 1902. Freud lived and worked in Vienna, having set up his clinical practice there in 1886. In 1938, Freud left Austria to escape Nazi persecution. He died in exile in the United Kingdom in 1939.
In founding psychoanalysis, Freud developed therapeutic techniques such as the use of free association and discovered transference, establishing its central role in the analytic process. Freud's redefinition of sexuality to include its infantile forms led him to formulate the Oedipus complex as the central tenet of psychoanalytical theory. His analysis of dreams as wish-fulfillments provided him with models for the clinical analysis of symptom formation and the underlying mechanisms of repression. On this basis, Freud elaborated his theory of the unconscious and went on to develop a model of psychic structure comprising id, ego and super-ego. Freud postulated the existence of libido, sexualised energy with which mental processes and structures are invested and which generates erotic attachments, and a death drive, the source of compulsive repetition, hate, aggression, and neurotic guilt.  In his later works, Freud developed a wide-ranging interpretation and critique of religion and culture.
Though in overall decline as a diagnostic and clinical practice, psychoanalysis remains influential within psychology, psychiatry, and psychotherapy, and across the humanities. It thus continues to generate extensive and highly contested debate concerning its therapeutic efficacy, its scientific status, and whether it advances or hinders the feminist cause. Nonetheless, Freud's work has suffused contemporary Western thought and popular culture. W. H. Auden's 1940 poetic tribute to Freud describes him as having created "a whole climate of opinion / under whom we conduct our different lives". `}
                            photo={Freud}
                            index={5}
                            onClickHandler={onCardClick}
                            isActive={activeCardIndex === 5}
                        />
                        <Card
                            text={`Victor Hugo
26 February 1802 - 22 May 1885.
Was a French Romantic writer and politician. During a literary career that spanned more than sixty years, he wrote in a variety of genres and forms. He is considered to be one of the greatest French writers of all time.
His most famous works are the novels The Hunchback of Notre-Dame (1831) and Les Misérables (1862). In France, Hugo is renowned for his poetry collections, such as Les Contemplations (The Contemplations) and La Légende des siècles (The Legend of the Ages). Hugo was at the forefront of the Romantic literary movement with his play Cromwell and drama Hernani. Many of his works have inspired music, both during his lifetime and after his death, including the opera Rigoletto and the musicals Les Misérables and Notre-Dame de Paris. He produced more than 4,000 drawings in his lifetime, and campaigned for social causes such as the abolition of capital punishment.
Though he was a committed royalist when young, Hugo's views changed as the decades passed, and he became a passionate supporter of republicanism serving in politics as both deputy and senator. His work touched upon most of the political and social issues and the artistic trends of his time. His opposition to absolutism and his literary stature established him as a national hero. He was honoured by interment in the Panthéon. `}
                            photo={Hugo}
                            index={6}
                            onClickHandler={onCardClick}
                            isActive={activeCardIndex === 6}
                        />
                        <Card
                            text={`Fritz Lang
December 5, 1890 - August 2, 1976.
Was an Austrian film director, screenwriter, and producer who worked in Germany and later the United States. One of the best-known émigrés from Germany's school of Expressionism, he was dubbed the "Master of Darkness" by the British Film Institute. He has been cited as one of the most influential filmmakers of all time.

Lang's most celebrated films include the groundbreaking futuristic Metropolis (1927) and the influential M (1931), a film noir precursor. His 1929 film Woman in the Moon showcased the use of a multi-stage rocket, and also pioneered the concept of a rocket launch pad (a rocket standing upright against a tall building before launch having been slowly rolled into place) and the rocket-launch countdown clock. His other major films include Dr. Mabuse the Gambler (1922), Die Nibelungen (1924), and after moving to Hollywood in 1934, Fury (1936), You Only Live Once (1937), Hangmen Also Die! (1943), The Woman in the Window (1944), Scarlet Street (1945) and The Big Heat (1953). He became a naturalized citizen of the United States in 1939. `}
                            photo={Lang}
                            index={7}
                            onClickHandler={onCardClick}
                            isActive={activeCardIndex === 7}
                        />
                        <Card
                            text={`Marlene Dietrich
27 December 1901 - 6 May 1992. Was a German-born American actress and singer whose career spanned from the 1910s to the 1980s.

In 1920s Berlin, Dietrich performed on the stage and in silent films. Her performance as Lola-Lola in Josef von Sternberg's The Blue Angel (1930) brought her international acclaim and a contract with Paramount Pictures. She starred in many Hollywood films, including six iconic roles directed by Sternberg: Morocco (1930) (her only Academy Award nomination), Dishonored (1931), Shanghai Express and Blonde Venus (both 1932), The Scarlet Empress (1934) and The Devil Is a Woman (1935), Desire (1936) and Destry Rides Again (1939). She successfully traded on her glamorous persona and exotic looks, and became one of the era's highest-paid actresses. Throughout World War II she was a high-profile entertainer in the United States. Although she delivered notable performances in several post-war films, including Billy Wilder's A Foreign Affair (1948), Alfred Hitchcock's Stage Fright (1950), Billy Wilder's Witness for the Prosecution (1957), Orson Welles's Touch of Evil (1958) and Stanley Kramer's Judgment at Nuremberg (1961), she spent most of the 1950s to the 1970s touring the world as a marquee live-show performer.

Dietrich was known for her humanitarian efforts during World War II, housing German and French exiles, providing financial support and even advocating their American citizenship. For her work on improving morale on the front lines during the war, she received several honors from the United States, France, Belgium and Israel. In 1999, the American Film Institute named Dietrich the ninth greatest female screen legend of classic Hollywood cinema.`}
                            photo={Marlene}
                            index={8}
                            onClickHandler={onCardClick}
                            isActive={activeCardIndex === 8}
                        />
                        <Card
                            text={`Vangelis
29 March 1943 - 17 May 2022.
Was a Greek composer and arranger of electronic, progressive, ambient, and classical orchestral music. He was best known for his Academy Award-winning score to Chariots of Fire (1981), as well as for composing scores to the films Blade Runner (1982), Missing (1982), Antarctica (1983), The Bounty (1984), 1492: Conquest of Paradise (1992), and Alexander (2004), and for the use of his music in the 1980 PBS documentary series Cosmos: A Personal Voyage by Carl Sagan.

In 1968, the 25-year-old Vangelis wished to further his career and, amidst the political turmoil surrounding the 1967 coup, left Greece for London. He was denied entry into the UK and settled in Paris for the next six years. `}
                            photo={Vangelis}
                            index={9}
                            onClickHandler={onCardClick}
                            isActive={activeCardIndex === 9}
                        />
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default Gallery;
