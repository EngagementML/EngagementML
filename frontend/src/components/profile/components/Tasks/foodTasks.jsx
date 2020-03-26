import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "../CustomCheckbox/CustomCheckbox.jsx";
import Button from "../CustomButton/CustomButton.jsx";
import axios from "axios";

export class Tasks extends Component {

  // state = {
    
  // };

  // To do this whole thing below we need schema & route in app.js


  // async componentDidMount() {
  // let user = await actions.isLoggedIn();
  // this.setState({ ...user.data });
  // // console.log("Current User >> ", user);

  //   await axios
  //   // .get("http://localhost:5000/profile/" + this.state.igUsername)
  //   .get("https://engagementml.herokuapp.com/profile/" + this.state.igUsername)
  //   .then(res => {
  //     // console.log(res, res.data);
  //     this.setState({
  //       profile: res.data
  //     });
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   }); 
  // }


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
      
      // Industry Average
      [{"Post_Information": "Average hashtag per publication", "Result": 4}, {"Post_Information": "Average external link per publication", "Result": 1}, {"Post_Information": "Maximum likes per publication", "Result": 141359}, {"Post_Information": "Maximun comments per publication", "Result": 3816}, {"Post_Information": "Average text length-Characters per post", "Result": 366}],
      // Hourly
      [{"Day_Time_Post": "Morning (8Am-12PM)", "%_Post_Day": 29.0, "Likes_Rate_Daytime%": 20.0, "Engagement_Rate_day": 1.6389896946}, {"Day_Time_Post": "Noon (12-4PM)", "%_Post_Day": 28.0, "Likes_Rate_Daytime%": 29.0, "Engagement_Rate_day": 1.1262506761}, {"Day_Time_Post": "Eve (4PM-8PM)", "%_Post_Day": 20.0, "Likes_Rate_Daytime%": 17.0, "Engagement_Rate_day": 1.0588422823}, {"Day_Time_Post": "Late Night (12Am-4AM)", "%_Post_Day": 8.0, "Likes_Rate_Daytime%": 13.0, "Engagement_Rate_day": 0.6771226769}, {"Day_Time_Post": "Early Morning (4AM-8Am)", "%_Post_Day": 8.0, "Likes_Rate_Daytime%": 17.0, "Engagement_Rate_day": 0.9028508387}, {"Day_Time_Post": "Night (8PM-12AM)", "%_Post_Day": 7.0, "Likes_Rate_Daytime%": 4.0, "Engagement_Rate_day": 1.8364929642}],
      // Insights
      [{"Action": "Followers Vs Likes", "Recommendation": "0 and 2,500,000 Followers"}, {"Action": "Followers Vs Comments", "Recommendation": "Between 0 and 3,000,000 Followers"}, {"Action": "Followers Vs Video Views", "Recommendation": "0 and 2,000,000 Followers"}, {"Action": "Text Lenght and Hashtags", "Recommendation": "500 charaters and 5 hashtags"}, {"Action": "Post Text Lenght", "Recommendation": "Up to 500 Charaters"}, {"Action": "Post External Links", "Recommendation": " Up to 2 external links"}, {"Action": "Account type", "Recommendation": "60 % Higher with verified accounts "}],
      // Weekly
      [{"Week_Day_Post": "Sunday", "Week/Day_post%": 17.0, "Likes_Rate_Week/Day": 25.0, "Engagement_rate_Week/Day": 1.3751923219}, {"Week_Day_Post": "Monday", "Week/Day_post%": 16.0, "Likes_Rate_Week/Day": 12.0, "Engagement_rate_Week/Day": 0.759275869}, {"Week_Day_Post": "Saturday", "Week/Day_post%": 15.0, "Likes_Rate_Week/Day": 21.0, "Engagement_rate_Week/Day": 1.0637611501}, {"Week_Day_Post": "Tuesday", "Week/Day_post%": 15.0, "Likes_Rate_Week/Day": 10.0, "Engagement_rate_Week/Day": 1.0446179718}, {"Week_Day_Post": "Friday", "Week/Day_post%": 14.0, "Likes_Rate_Week/Day": 8.0, "Engagement_rate_Week/Day": 0.8635165118}, {"Week_Day_Post": "Thursday", "Week/Day_post%": 12.0, "Likes_Rate_Week/Day": 16.0, "Engagement_rate_Week/Day": 1.2179420881}, {"Week_Day_Post": "Wednesday", "Week/Day_post%": 11.0, "Likes_Rate_Week/Day": 9.0, "Engagement_rate_Week/Day": 0.9500955362}]

    ]

    const tasks_title = [
      "Posts eML - Keep your post to 500 charaters and max of 5 hashtags ",
      "Links eML - Up to 2 external links per post ",
      "Accounts eML - 60 % Higher engagement with verified accounts ",
    ];


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

export default Tasks;
