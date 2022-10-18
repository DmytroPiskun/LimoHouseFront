import React, { useState } from "react";
import useClasses from "../../utils/useClasses";
import AboutUsTitle from "./AboutUsTitle/AboutUsTitle";
import { styles, MUISTYLES } from "./styles";
import { mobileStyles, mobileMUISTYLES } from "./mobileStyles";
import { Typography, useMediaQuery } from "@mui/material";
import arrow1 from "../../images/arrow1.svg";
import arrow2 from "../../images/arrow2.svg";
import arrow3 from "../../images/arrow3.svg";
import limo from "../../images/limo.svg";
import { theme } from "../../theme/theme";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";

export default function AboutUs() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMedium = useMediaQuery(theme.breakpoints.up("sm"));
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useClasses(styles);
  const mobileClasses = useClasses(mobileStyles);
  return (
    <div className={classes.root}>
      <AboutUsTitle />
      {isDesktop ? (
        <>
          {" "}
          <div className={classes.aboutUs}>
            <div className={classes.group}>
              <div className={classes.textWrapper}>
                <Typography sx={MUISTYLES.text}>
                  <span style={{ color: "red" }}> NJ LIMO HOUSE </span> is a
                  transport service that covers all your conveyance concerns. If
                  you have a special occasion which you would like to remember,
                  we can help you in doing so by providing the best luxury car
                  rental service that you will remember for the rest of your
                  life. That is because we are the best at what we do and it is
                  not even a possibility that you will be sold short of your
                  expectations.
                </Typography>
              </div>
              <div>
                <img src={arrow1} alt="" />
              </div>
            </div>
            <div className={classes.group}>
              <div>
                <img src={arrow2} alt="" />
              </div>
              <div className={classes.textWrapper}>
                <Typography sx={MUISTYLES.text}>
                  We are the best company and we do not make that claim on our
                  own. Every single customer who has hired us has highly
                  complimented us on the services we have offered, may it be a
                  ride to and from prom or a simple pick-up and drop from and to
                  the airport.{" "}
                  <span style={{ color: "red" }}> NJ LIMO HOUSE </span> has an
                  established reputation and we have customers who are loyal to
                  us. They have played a huge role in making us a success and it
                  has been solely through their referrals and recommendations to
                  other individuals that we have come so far as a transport
                  service.
                </Typography>
              </div>
            </div>
            <div className={classes.group}>
              <div className={classes.textWrapper}>
                <Typography sx={MUISTYLES.text}>
                  <span style={{ color: "red" }}> NJ LIMO HOUSE </span>has been
                  in this industry for a very long time and so we can safely say
                  that we know all the tricks of the trade. We have learned a
                  lot on our journey here and our professionals are extremely
                  experienced and knowledgeable, which makes them an
                  indispensable asset for the company. Without the loyalty of
                  our customers and without the hard work and effort by our
                  professionals, we would never have gotten this far.
                </Typography>
              </div>
              <div>
                <img src={arrow3} alt="" />
              </div>
            </div>
            <div className={classes.group}>
              <div>
                <img src={limo} alt="" />
              </div>
              <div className={classes.textWrapper}>
                <Typography sx={MUISTYLES.text}>
                  As a company, and as a luxury transport service,{" "}
                  <span styles={{ color: "red" }}> NJ LIMO HOUSE </span>
                  is very proud of what it has accomplished and because of the
                  success in NJ, NY we have been able to make major improvements
                  to our service. We have a wide variety of models and you can
                  choose the one that you like best. We have worked long and
                  hard and our accomplishments have paid it all off. We are a
                  well-established, reputable, credible, reliable service based
                  in Brooklyn and we can say easily that we are the best service
                  you will get in the entire area. Therefore, if you want the
                  best for yourself and if you want value for money, you should
                  definitely hire us!
                </Typography>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={mobileClasses.wrapper}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            disableGutters
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownRoundedIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={[mobileMUISTYLES.textSummary, { color: "text.secondary" }]}
              >
                We cover all your concerns
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={mobileMUISTYLES.text}>
                <span style={{ color: "red" }}> NJ LIMO HOUSE </span> is a
                transport service that covers all your conveyance concerns. If
                you have a special occasion which you would like to remember, we
                can help you in doing so by providing the best luxury car rental
                service that you will remember for the rest of your life. That
                is because we are the best at what we do and it is not even a
                possibility that you will be sold short of your expectations.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            disableGutters
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownRoundedIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={[mobileMUISTYLES.textSummary, { color: "text.secondary" }]}
              >
                We have great reviews
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={mobileMUISTYLES.text}>
                We are the best company and we do not make that claim on our
                own. Every single customer who has hired us has highly
                complimented us on the services we have offered, may it be a
                ride to and from prom or a simple pick-up and drop from and to
                the airport.{" "}
                <span style={{ color: "red" }}> NJ LIMO HOUSE </span> has an
                established reputation and we have customers who are loyal to
                us. They have played a huge role in making us a success and it
                has been solely through their referrals and recommendations to
                other individuals that we have come so far as a transport
                service.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            disableGutters
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownRoundedIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={[mobileMUISTYLES.textSummary, { color: "text.secondary" }]}
              >
                We have experience
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={mobileMUISTYLES.text}>
                <span style={{ color: "red" }}> NJ LIMO HOUSE </span>has been in
                this industry for a very long time and so we can safely say that
                we know all the tricks of the trade. We have learned a lot on
                our journey here and our professionals are extremely experienced
                and knowledgeable, which makes them an indispensable asset for
                the company. Without the loyalty of our customers and without
                the hard work and effort by our professionals, we would never
                have gotten this far.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            disableGutters
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownRoundedIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={[mobileMUISTYLES.textSummary, { color: "text.secondary" }]}
              >
                We have everything you need
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={mobileMUISTYLES.text}>
                As a company, and as a luxury transport service,
                <span style={{ color: "red" }}> NJ LIMO HOUSE </span>
                is very proud of what it has accomplished and because of the
                success in NJ, NY we have been able to make major improvements
                to our service. We have a wide variety of models and you can
                choose the one that you like best. We have worked long and hard
                and our accomplishments have paid it all off. We are a
                well-established, reputable, credible, reliable service based in
                Brooklyn and we can say easily that we are the best service you
                will get in the entire area. Therefore, if you want the best for
                yourself and if you want value for money, you should definitely
                hire us!
              </Typography>
            </AccordionDetails>
          </Accordion>
          {!isMedium && (
            <div className={mobileClasses.imageWrapper}>
              <img className={mobileClasses.pic} src={limo} alt="limo sign" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
