import React from "react"
// import './courses.css';
import { get5courses} from '../utils/calls';
import CardSet from "../utils/cardset";



export default function Courses() {
  // const [width, setWidth] = React.useState(window.innerWidth);
  // const [height, setHeight] = React.useState(window.innerHeight);
  var rows = [];
  function createData(id,title, online, price, dates, actions,imagePath,duration,description) {
    return { id,title, online, price, dates, actions,imagePath,duration,description };
  }

  

  // -----Get ----
  const data = get5courses();

  data.map((d) =>
          rows.push(
            createData(d.id,d.title, d.online, d.price, d.dates, "http://localhost:3000/courses/" + d.id, d.imagePath,d.duration,d.description)
          )
        );
        return (
          <div>
            <CardSet data={rows} />
          </div>
        );
      }

