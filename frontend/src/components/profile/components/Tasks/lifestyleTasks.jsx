import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "../CustomCheckbox/CustomCheckbox.jsx";
import Button from "../CustomButton/CustomButton.jsx";

export class LifestyleTasks extends Component {
  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  render() {
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    const mockD = [
      // Industry Avg
      [{"Post_Information": "Average hashtag per publication", "Result": 2}, {"Post_Information": "Average external link per publication", "Result": 2}, {"Post_Information": "Maximum likes per publication", "Result": 268755}, {"Post_Information": "Maximun comments per publication", "Result": 6291}, {"Post_Information": "Average text length-Characters per post", "Result": 301}],
      // Hourly
      [{"Day_Time_Post": "Noon (12-4PM)", "%_Post_Day": 33.0, "Likes_Rate_Daytime%": 42.0, "Engagement_Rate_day": 1.3179442625}, {"Day_Time_Post": "Eve (4PM-8PM)", "%_Post_Day": 31.0, "Likes_Rate_Daytime%": 32.0, "Engagement_Rate_day": 1.2845833728}, {"Day_Time_Post": "Night (8PM-12AM)", "%_Post_Day": 14.0, "Likes_Rate_Daytime%": 11.0, "Engagement_Rate_day": 1.0495019914}, {"Day_Time_Post": "Morning (8Am-12PM)", "%_Post_Day": 8.0, "Likes_Rate_Daytime%": 6.0, "Engagement_Rate_day": 1.1640482567}, {"Day_Time_Post": "Late Night (12Am-4AM)", "%_Post_Day": 7.0, "Likes_Rate_Daytime%": 8.0, "Engagement_Rate_day": 2.0947618999}, {"Day_Time_Post": "Early Morning (4AM-8Am)", "%_Post_Day": 6.0, "Likes_Rate_Daytime%": 2.0, "Engagement_Rate_day": 1.9817713018}],
      // Insights
      [{"Action": "Followers Vs Likes", "Recommendation": "0 and 2,500,000 Followers"}, {"Action": "Followers Vs Comments", "Recommendation": "Between 0 and 3,000,000 Followers"}, {"Action": "Followers Vs Video Views", "Recommendation": "0 and 2,000,000 Followers"}, {"Action": "Text Lenght and Hashtags", "Recommendation": "500 charaters and 5 hashtags"}, {"Action": "Post Text Lenght", "Recommendation": "Up to 500 Charaters"}, {"Action": "Post External Links", "Recommendation": " Up to 2 external links"}, {"Action": "Account type", "Recommendation": "60 % Higher with verified accounts "}],
      // Weekly
      [{"Week_Day_Post": "Sunday", "Week/Day_post%": 20.0, "Likes_Rate_Week/Day": 20.0, "Engagement_rate_Week/Day": 1.4684324526}, {"Week_Day_Post": "Tuesday", "Week/Day_post%": 19.0, "Likes_Rate_Week/Day": 24.0, "Engagement_rate_Week/Day": 1.6100502846}, {"Week_Day_Post": "Saturday", "Week/Day_post%": 16.0, "Likes_Rate_Week/Day": 16.0, "Engagement_rate_Week/Day": 1.7096174728}, {"Week_Day_Post": "Monday", "Week/Day_post%": 12.0, "Likes_Rate_Week/Day": 9.0, "Engagement_rate_Week/Day": 0.6688666395}, {"Week_Day_Post": "Wednesday", "Week/Day_post%": 12.0, "Likes_Rate_Week/Day": 9.0, "Engagement_rate_Week/Day": 0.8576519111}, {"Week_Day_Post": "Friday", "Week/Day_post%": 10.0, "Likes_Rate_Week/Day": 7.0, "Engagement_rate_Week/Day": 1.2637645284}, {"Week_Day_Post": "Thursday", "Week/Day_post%": 10.0, "Likes_Rate_Week/Day": 16.0, "Engagement_rate_Week/Day": 1.6984963638}]
    ]

    const tasks_title = 
    mockD.map(eachArrObj => {
      console.log(eachArrObj)

      // Avg Industry
      if (eachArrObj[0].Post_Information){
        return `The max likes we've discovered in your industry is ${eachArrObj[2].Result}`
      // Avg Industry
      } else if (eachArrObj[0].Day_Time_Post) {

        eachArrObj.sort(function(x, y){
          return y.Engagement_Rate_day - x.Engagement_Rate_day;
        })
        console.log("HEreeeeeeeeeee",eachArrObj)
          return ` Your top post time is: ${ eachArrObj[0].Day_Time_Post} with an eML ${eachArrObj[0].Engagement_Rate_day.toLocaleString(navigator.language, { minimumFractionDigits: 1 })}` 
      // Insights
      } else if (eachArrObj[0].Action) {
          return `You should use up to ${eachArrObj[3].Recommendation} in your captions.`
      // Week 
      } else {

        eachArrObj.sort(function(x, y){
          return y[`Engagement_rate_Week/Day`] - x[`Engagement_rate_Week/Day`];
        })
        console.log(eachArrObj)
        return ` Your top post day is: ${ eachArrObj[0].Week_Day_Post} with an eML ${eachArrObj[0][`Engagement_rate_Week/Day`].toLocaleString(navigator.language, { minimumFractionDigits: 1 })}` 
        }

    })

    var tasks = [];
    var number;
    for (var i = 0; i < tasks_title.length; i++) {
      number = "checkbox" + i;
      tasks.push(
        <tr key={i}>
          <td>
            {/* <Checkbox
              number={number}
              isChecked={i === 1 || i === 2 ? true : false}
            /> */}
          </td>
          <td>{tasks_title[i]}</td>
          <td className="td-actions text-right">
            <OverlayTrigger placement="top" overlay={edit}>
              <Button bsstyle="info" simple type="button" bssize="xs">
                <i className="pe-7s-tools" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={remove}>
              <Button bsstyle="danger" simple type="button" bssize="xs">
                <i className="pe-7s-trash" />
              </Button>
            </OverlayTrigger>
          </td>
        </tr>
      );
    }
    return <tbody>{tasks}</tbody>;
  }
}

export default LifestyleTasks;
