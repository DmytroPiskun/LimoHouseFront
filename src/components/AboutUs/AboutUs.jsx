import React from "react";
import useClasses from "../../utils/useClasses";
import AboutUsTitle from "./AboutUsTitle/AboutUsTitle";
import { styles, MUISTYLES } from "./styles";
import { Typography, useMediaQuery } from "@mui/material";
import arrow1 from "../../images/arrow1.svg";
import arrow2 from "../../images/arrow2.svg";
import arrow3 from "../../images/arrow3.svg";
import limo from "../../images/limo.svg";
import { theme } from "../../theme/theme";

export default function AboutUs() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useClasses(styles);
  return (
    <div className={classes.root}>
      <AboutUsTitle />
      <div className={classes.aboutUs}>
        <div className={classes.group}>
          <div className={classes.textWrapper}>
            <Typography sx={MUISTYLES.text}>
              <span style={{ color: "red" }}> NJ LIMO HOUSE </span> is a
              transport service that covers all your conveyance concerns. If you
              have a special occasion which you would like to remember, we can
              help you in doing so by providing the best luxury car rental
              service that you will remember for the rest of your life. That is
              because we are the best at what we do and it is not even a
              possibility that you will be sold short of your expectations. We
              are the best company and we do not make that claim on our own.
            </Typography>
          </div>
          {isDesktop ? (
            <div>
              <img src={arrow1} alt="" />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={classes.group}>
          {isDesktop ? (
            <div>
              <img src={arrow2} alt="" />
            </div>
          ) : (
            <></>
          )}
          <div className={classes.textWrapper}>
            <Typography sx={MUISTYLES.text}>
              We are the best company and we do not make that claim on our own.
              Every single customer who has hired us has highly complimented us
              on the services we have offered, may it be a ride to and from prom
              or a simple pick-up and drop from and to the airport.{" "}
              <span style={{ color: "red" }}> NJ LIMO HOUSE </span> has an
              established reputation and we have customers who are loyal to us.
              They have played a huge role in making us a success and it has
              been solely through their referrals and recommendations to other
              individuals that we have come so far as a transport service.
            </Typography>
          </div>
        </div>
        <div className={classes.group}>
          <div className={classes.textWrapper}>
            <Typography sx={MUISTYLES.text}>
              <span style={{ color: "red" }}> NJ LIMO HOUSE </span>has been in
              this industry for a very long time and so we can safely say that
              we know all the tricks of the trade. We have learned a lot on our
              journey here and our professionals are extremely experienced and
              knowledgeable, which makes them an indispensable asset for the
              company. Without the loyalty of our customers and without the hard
              work and effort by our professionals, we would never have gotten
              this far.
            </Typography>
          </div>
          {isDesktop ? (
            <div>
              <img src={arrow3} alt="" />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={classes.group}>
          {isDesktop ? (
            <div>
              <img src={limo} alt="" />
            </div>
          ) : (
            <></>
          )}
          <div className={classes.textWrapper}>
            <Typography sx={MUISTYLES.text}>
              As a company, and as a luxury transport service,{" "}
              <span styles={{ color: "red" }}> NJ LIMO HOUSE </span>
              is very proud of what it has accomplished and because of the
              success in NJ, NY we have been able to make major improvements to
              our service. We have a wide variety of models and you can choose
              the one that you like best. We have worked long and hard and our
              accomplishments have paid it all off. We are a well-established,
              reputable, credible, reliable service based in Brooklyn and we can
              say easily that we are the best service you will get in the entire
              area. Therefore, if you want the best for yourself and if you want
              value for money, you should definitely hire us!
            </Typography>
          </div>
        </div>
        {isDesktop ? (
          <></>
        ) : (
          <div className={classes.mobileSign}>
            <img className={classes.pic} src={limo} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
