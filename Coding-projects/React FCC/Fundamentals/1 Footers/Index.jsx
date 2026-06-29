{/* Comments works similarly to JS but with brackets around it */}
{/* React uses "compnents":
  Functional - works similarly as JS functions 
  Class-Based - works similarly as JS Classes
  */}
{/* Import and export also works similarly to JS */}



{/* This is a functional component:
    - Has to start with an uppercase letter
  */}
export const Footer = () => {
  return (
    <footer>
      <ul className="link">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Discord</a></li>
        <li><a href="#">Email</a></li>
      </ul>
      <ul className="link">
        <li><a href="#">Service</a></li>
        <li><a href="#">Watch Videos</a></li>
        <li><a href="#">Terms & Conditions</a></li>
      </ul>
      <p>© 2024 Fitness Dashboard. All Rights Reserved</p>
      <ul className="link">
        <li><a href="#">🎮</a></li>
        <li><a href="#">🐦</a></li>
        <li><a href="#">🏀</a></li>
      </ul>
    </footer>
  )
}

{/* containing large blocks of code utilizes parenthesis instead of curly braces*/}
{/* You can use expressions by using curly braces */}
