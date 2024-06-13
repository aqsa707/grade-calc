// // Grade Calculator

// // Button Click Listener
// document.getElementById("btn").addEventListener("click", btnClicked);

// function btnClicked() {
//   // Input
//   let ClientSideScripting1 = +prompt.getElementById("CS-1").value;
//   let StructuredProgramming1 = +prompt.getElementById("SP-1").value;
//   let StructureProgramming2 = +prompt.getElementById("SP-2").value;
//   let ClientSideScripting2 = +prompt.getElementById("CS-2").value;
//   let ProgectA = +prompt.getElementById("P-A").value;

//   // Process
//   let FinalCS10Grade = Math.sqrt(
//     ClientSideScripting1 +
//       StructuredProgramming1 +
//       StructureProgramming2 +
//       ClientSideScripting2 +
//       ProgectA / 5
//   );
//   // OutPut
//   document.getElementById("span").innerHTML = Math.round(FinalCS10Grade);
// }

// let CSS1 = +prompt("enter grade for css1");
// let SP1 = +prompt("enter grade for sp1");
// let SP2 = +prompt("enter grade for sp2");
// let CSS2 = +prompt("enter grade for css2");
// let projectA = +prompt("enter grade for project A");

// let answer = (CSS1 + SP1 + SP2 + CSS2 + projectA) / 5;
// +alert("your final grade is " + Math.round(answer) + " %");

let btn = document.getElementById("btn", btnClicked);

function btnClicked() {
  let CSS1 = +prompt.getElementById("CS-1").value;
  let SP1 = +prompt.getElementById("SP-1").value;
  let SP2 = +prompt.getElementById("SP-2").value;
  let CSS2 = +prompt.getElementById("CS-2").value;
  let projectA = +prompt.getElementById("P-A").value;

  let process = (CSS1 + SP1 + SP2 + CSS2 + projectA) / 5;
  let answer = (document.getElementById("span").innerHTML =
    Math.round(process));
}
