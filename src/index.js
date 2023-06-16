import "./styles.css";

const copyrightFooter = `
 <p>
  Copyright &copy; ${new Date().getFullYear()}, 22One. All Rights Reserved
 </p>
`;

document.getElementById("copyrightYear").innerHTML = copyrightFooter;
