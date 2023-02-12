import styles from "./QuestionList.module.css";
import Question from "../Question";
import { useState } from "react";

const QuestionList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={styles.container}>
        <Question
          index={1}
          isActive={activeIndex === 1}
          setActiveIndex={setActiveIndex}
          name="Carolina"
          topic="Work in Germany"
          text="After completing my professional education in IT administration, I have been looking for
        jobs, but haven't got any interviews until now.
        My German level is on B1. However, I wonder if I will be able to secure a decent job on this level or if
        I need to further improve my language skills first."
          answer="Thank you for reaching out and sharing your experience with the
        community! First of all, I would like to say that it is hard to tell why you have been rejected in the
        past. Therefore, I would suggest asking yourself the following questions:
         Do you apply for the right job positions where you meet at least 50-60% of the
        requirements?
         Do you submit professional application files (including a 1-2 pages CV and a cover letter
        which is customized to both the company and the job requirements)?
        Generally, chances are good to land a job that does not need fluent German. Especially in the field of
        IT, there are attractive job offers that require English and basic German skills - and that is not only
        the case for large international corporations.
        Anyway, with a B1 level in German, you can certainly communicate and interact well with colleagues
        and stakeholders. And don't forget that your current German skills are a great foundation and will
        allow you to catch up quickly and thus move up to a more advanced level like B2 or C1 in a short
        period of time. So don't let your current German level stop you from landing your dream job! (Helena, Job Coach)"
        />
        <Question
          index={2}
          isActive={activeIndex === 2}
          setActiveIndex={setActiveIndex}
          name="Sabrine"
          topic="Work in Germany"
          text="Currently, I am looking for my very first job in Germany. However, I am afraid to make
        any mistakes when signing a contract. How can I check if the salary a company offers is fair and if the
        contract includes any clauses that would put me in a less favorable position?"
          answer="Thank you very much for this great question! To check whether a
        company offers you a fair salary you can compare it to salary ranges in your industry which are
        shared publicly on websites like: glassdoor.de, kununu.com or gehalt.de.
        While a written employment contract is the standard in Germany, there are many more
        requirements and regulations you need to be aware of. A great resource that can help you here is the
        information provided by the German government itself. On the website 'Make it in Germany' you
        will find detailed information on employment contracts. All information is made available to you in
        German, English, Spanish and in French language. (Helena, Job Coach)"
        />
        <Question
          index={3}
          isActive={activeIndex === 3}
          setActiveIndex={setActiveIndex}
          name="Bastillio"
          topic="Education"
          text="Good afternoon! I recently arrived in Germany and don't know where I can start learning German. Am I entitled to a subsidy from the state to pay for German language courses? To what level do I need to learn German in order to get a job here?"
          answer="Hello, thank you for your question. In Germany, the laws of each state (Bundesland) are very different. Therefore it is difficult to say how things are in all of Germany. In order to find out the laws of your Bundesland, you need to contact your city office(Bürgerbüro), the Socialalamt(Sozialamt), or a refugee placement center. 
        It also matters whether you live in a big industrial city where you can find a lot of schools or in a small town where you might have trouble finding a school. 
       Ask your colleagues who have been living in Germany for several years and know the peculiarities of your part of the country. They can tell you how to find a school more easily. 
       As for the level of language learning. If you want to apply for a good job, your level should be C1, with a proven certificate. In this case, you are guaranteed to feel confident in communication with your German colleagues, and they will feel comfortable talking to you. This level will greatly increase your chances of finding a good job in Germany."
        />
      </div>
      <div className={styles.attention}>
        <p>
          Warning! We do not store your data, nor do we pass it on to
          individuals or organizations. Your name is only needed so that we know
          how to contact you correctly.
        </p>
      </div>
    </>
  );
};

export default QuestionList;
