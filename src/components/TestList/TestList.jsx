import TestItem from "../TestItem";
import styles from "./TestList.module.css";
import { AiFillCopy } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useClipboard } from "use-clipboard-copy";
import { useState } from "react";
import {ReactComponent as FlagGermany} from "../../assets/img/FlagGermany.svg";
import {ReactComponent as FlagRussia} from "../../assets/img/FlagRussia.svg";
import {ReactComponent as FlagSpain} from "../../assets/img/FlagSpain.svg";
import {ReactComponent as FlagUkraine} from "../../assets/img/FlagUkraine.svg";
import {ReactComponent as FlagUnitedKingdom} from "../../assets/img/FlagUnitedKingdom.svg";

const TestList = () => {
  const [copied, setCopied] = useState(false);
  const { target, copy } = useClipboard();

  const onClickHandler = () => {
    setCopied(true);
    copy();
  };

  return (
    <>
      <div className={styles.title}>
        <h2>Depression Tests</h2>
        <span className={styles.flicker}>
          Warning! If you find any signs of depression after taking these tests,
          copy and Google this phrase. It means finding psychological help near
          where you live.
        </span>
        <div className={styles.copy}>
          <input
            className={styles.input}
            ref={target}
            value=" Hilfe von einem Psychologen in meiner Nähe"
            disabled
          />
          <AiFillCopy className={styles.pointer} onClick={onClickHandler} />
          {copied && (
            <div className={styles.copied}>
              <TiTick />
              <p>Copied</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.container}>
        <TestItem
          title="Шкала Занга для самооценки депрессии"
          description="Тест, выявляющий соматические, психологические, поведенческие и аффективные симптомы депрессии.Предназначен для самостоятельного прохождения. Следует проходить 1-2 раза в неделю. Вы сами можете сравнить как изменяется интенсивность депрессии с течением времени."
          link="http://test-deprese.hys.cz/ru-index.php"
          Icon={FlagRussia}
        />
        <TestItem
          title="Zung Self-Rating Depression Scale (SDS)"
          description="The Zung Self-Rating Depression Scale is a short self-administered survey to quantify the depressed status of a patient. There are 20 items on the scale that rate the four common characteristics of depression: the pervasive effect, the physiological equivalents, other disturbances, and psychomotor activities."
          link="http://test-deprese.hys.cz/en-index.php"
          Icon={FlagUnitedKingdom}
        />
        <TestItem
          title="Test zur Selbst-Diagnose einer Depression von Zung"
          description="Die Zung-Selbstbewertungsskala für Depressionen ist eine kurze, selbstverwaltete Umfrage zur Quantifizierung des depressiven Zustands eines Patienten. Die Skala umfasst 20 Items, mit denen die vier allgemeinen Merkmale der Depression bewertet werden: die durchdringende Wirkung, die physiologischen Äquivalente, andere Störungen und psychomotorische Aktivitäten."
          link="http://test-deprese.hys.cz/de-index.php"
          Icon={FlagGermany}
        />
        <TestItem
          title="Тест на депресію"
          description="Онлайн тест на депресію, який допоможе допомогти вам зрозуміти ваш стан, і за потреби одразу звернутися по допомогу професіоналів. "
          link="https://mozok.ua/depressiya/testy/item/2713-test-na-depressiyu"
          Icon={FlagUkraine}
        />
        <TestItem
          title="Beck Depression BDI-II"
          description="The Beck Depression Inventory (BDI) is a 21-item, self-report rating inventory that measures characteristic attitudes and symptoms of depression). Individual questions of the BDI assess mood, pessimism, sense of failure, self-dissatisfaction, guilt, punishment, self-dislike, self-accusation, suicidal ideas, crying, irritability, social withdrawal, body image, work difficulties, insomnia , fatigue , appetite, weight loss, bodily preoccupation, and loss of libido."
          link="https://deprese.euzona.cz/en-index.php"
          Icon={FlagUnitedKingdom}
        />
        <TestItem
          title="Depressionstest nach Beck"
          description="Dieser Fragebogen enthält 21 Gruppen von Aussagen. Bitte lesen Sie jede Gruppe sorgfältig durch.Suchen Sie dann die eine Aussage in jeder Gruppe heraus, die am besten beschreibt, wie Sie sich in dieser Woche einschliesslich heute gefühlt haben und markieren Sie die dazugehörige Aussage."
          link="https://osz-zuerich.ch/service/tests/depressionstest/#undefined"
          Icon={FlagGermany}
        />
        <TestItem
          title="Inventario de Depresión de Beck BDI-II"
          description="El Inventario de Depresión de Beck (BDI, BDI-II), creado por el psiquiatra, investigador y fundador de la Terapia Cognitiva, Aaron T. Beck, es un cuestionario autoadministrado que consta de 21 preguntas de respuesta múltiple. Es uno de los instrumentos más comúnmente utilizados para medir la severidad de una depresión. "
          link="https://deprese.euzona.cz/es-index.php"
          Icon={FlagSpain}
        />
        <TestItem
          title="Шкала депресії Бека"
          description="Шкала депресії Бека використовується для самодіагностики важкості депресії і складається з 21 питання. Вони відображують окремі симптоми і негативні думки, які тією чи іншою мірою проявляються у людей з депресією — настрій, песимізм, почуття неспроможності, незадоволеність, почуття провини, почуття, що буду покараний, відраза до самого себе, ідеї самозвинувачення, суїцидальні думки..."
          link="https://deprese.euzona.cz/uk-index.php"
          Icon={FlagUkraine}
        />
      </div>
    </>
  );
};

export default TestList;
