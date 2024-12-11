import React, { useState, useEffect, useRef, useMemo } from "react";
import clsx from "clsx";
import HandsOutline from "./assets/hands-outline.svg";
import Hands from "./assets/hands.svg";
import Spark from "./assets/spark.svg";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  increment,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "firebase/app-check";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import "./styles.css";

const BUBBLE_THRESHOLD = 1000;
const CLICK_THRESHOLD = 250;
const APPLAUSE_MAX = 100000;
const INITIAL_COUNT = 0;
const COLLECTION_ID = "_feedback_";

function ApplauseButton() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  console.log(customFields.recaptchaApiKey);

  const firebaseConfig = {
    apiKey: customFields.firebaseApiKey,
    projectId: "pan-dev-f1b58",
    appId: "1:899146127396:web:26d634304c08ea1d0860b1",
  };

  const currentRoute = useLocation();
  const docId = Buffer.from(currentRoute.pathname).toString("base64");

  // Only init firebase if recaptchaApiKey exists
  let app;
  let db;
  let docRef;
  let appCheck;

  if (customFields.recaptchaApiKey && ExecutionEnvironment.canUseDOM) {
    app = initializeApp(firebaseConfig);
    appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(customFields.recaptchaApiKey),
      isTokenAutoRefreshEnabled: true,
    });
    db = getFirestore(app);
    docRef = doc(db, COLLECTION_ID, docId);
  }

  let bubbleTimer = useRef(null);
  let clickTimer = useRef(null);
  const sparkTilt = Math.random() < 0.5 ? "left" : "right";

  const [applause, setTotalApplause] = useState(0);
  const [active, setIsActive] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const incrementClaps = () => {
    return setDoc(
      docRef,
      {
        claps: increment(1),
        path: currentRoute.pathname,
      },
      { merge: true }
    );
  };

  const handleClick = () => {
    setIsActive(true);
    setIsClicked(true);
    setHasInteracted(true);
    setTotalApplause((prevState) => prevState + 1);
    docRef && incrementClaps();
  };

  useEffect(() => {
    if (customFields.recaptchaApiKey)
      try {
        getDoc(docRef).then((doc) => {
          if (doc.exists()) {
            return setTotalApplause(doc.get("claps"));
          }
          return setTotalApplause(0);
        });
      } catch (err) {
        console.error(
          `Error while fetching feedback for doc at '${currentRoute.pathname}':`,
          err
        );
        return setTotalApplause(0);
      }
    return () => {
      return setTotalApplause(0);
    };
  }, []);

  useEffect(() => {
    if (active) {
      bubbleTimer.current = setTimeout(
        () => setIsActive(false),
        BUBBLE_THRESHOLD
      );
      clickTimer.current = setTimeout(
        () => setIsClicked(false),
        CLICK_THRESHOLD
      );
    }

    return () => {
      clearTimeout(bubbleTimer.current);
      clearTimeout(clickTimer.current);
    };
  }, [applause, active]);

  return (
    <button
      type="button"
      className={clsx("applause-button", {
        active,
        inactive: !active,
        clicked,
        interacted: hasInteracted,
      })}
      onClick={handleClick}
      disabled={applause >= APPLAUSE_MAX}
    >
      {hasInteracted ? (
        <Hands className="hands" />
      ) : (
        <HandsOutline className="hands" />
      )}
      <div className={clsx("spark-container", sparkTilt)}>
        <Spark className="spark" />
      </div>
      <span className="bubble">{`+${applause}`}</span>
      <span className="counter">{applause ? applause + INITIAL_COUNT : 0}</span>
    </button>
  );
}

export default ApplauseButton;
