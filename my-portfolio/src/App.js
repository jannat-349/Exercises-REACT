import "./App.css";
import profile from "./images/IMG20230113184736.jpg";

function Header({ name, designation, dept, institute, email, number }) {
  return (
    <div className="header">
      <div className="my-photo">
        <img src={profile}></img>
      </div>
      <div className="my-info">
        <h1>{`${name}`}</h1>
        <h4>{`${designation}`}</h4>
        <h4>{`BSc in ${dept}, ${institute}`}</h4>
      </div>
      <div className="my-contact">
        <div>{`Mail: ${email}`}</div>
        <div>{`Mobile: ${number}`}</div>
      </div>
    </div>
  );
}
function Education() {
  return (
    <div className="my-education">
      <ul>
        <li>
          University: Jahangirnagar University <br />
          2019 - now
        </li>
        <li>
          College: Holy Cross College <br />
          Year: 2018
        </li>
        <li>
          School: Bangladesh Bank Adarsha High School <br />
          Year: 2016
        </li>
      </ul>
    </div>
  );
}
function About() {
  return (
    <div className="about-me">
      <h4>About Me</h4>
      <p>
        I'm passoinate about my career. I want to build a perfect future as a
        software engineer. Also I love to do co-curricular activities as these
        enhance my capabilities.
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header
        name={"Jannatul Ferdoush"}
        designation={"Student"}
        dept={"Computer Science and Engineering"}
        institute={"Jahangirnagar University"}
        number={"01730850444"}
        email={"jucse28.349@gmail.com"}
      />
      <About />
      <Education />
    </div>
  );
}

export default App;
