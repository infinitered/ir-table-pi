import React from "react";
import screenfull from "screenfull";
import YouTube from "react-youtube";
import DeviceDetector from "device-detector-js";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const VIDEO_ID = "2o4QgRiuvjw";
export default function YTPlayer(props) {
  const dd = new DeviceDetector();
  const mobile = dd.usesMobileBrowser();
  const fullScreen = (event) => {
    var iframe = event.target.getIframe();
    if (screenfull.isEnabled) {
      screenfull.request(iframe);
    }
  };
  const opts = {
    height: "100%",
    width: "100%",
    autoplay: "1",
  };
  const useStyles = makeStyles({
    videoDiv: {
      width: "100%",
      height: "100%",
    },
  });
  const classes = useStyles();
  return (
    <YouTube
      style={{ height: "100vh" }}
      containerClassName={classes.videoDiv}
      videoId={VIDEO_ID}
      opts={opts}
      onPlay={() => (mobile ? fullScreen : {})}
      replay={true}
    />
  );
}
YTPlayer.propTypes = {
  id: PropTypes.string,
};
