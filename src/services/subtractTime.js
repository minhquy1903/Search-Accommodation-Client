import moment from "moment";
import "moment/locale/vi";
function subtractTime(time) {
  moment().format("LST");
  let diff = moment(time).fromNow();
  return diff;
}

export default subtractTime;
