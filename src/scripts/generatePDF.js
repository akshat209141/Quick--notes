/*global chrome*/

import { currFile } from "./popup";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake  from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const generatePDF = (pointsData, currentFile) =>{


  const div = document.createElement('div')
  const body = document.createElement('body');
  const title = document.createElement('h2');
  const ol = document.createElement('ol')
  const style = document.createElement('style')
  

  for(let i=0; i< pointsData.length; i++){
    const li = document.createElement('li');
    li.innerHTML = pointsData[i];
    ol.appendChild(li)
  }  

  title.innerText = currentFile
  body.appendChild(title)
  body.appendChild(ol);
  div.appendChild(style)
  div.appendChild(body)

  const val = htmlToPdfmake(`
    ${div.innerHTML}
  `)


  let docDefinition = {
    content: [val],
    styles:{
      'html-h2': {
        alignment:'center',
        marginBottom: 8
      },
      'html-li':{
        fontSize: 12,
        marginTop: 9
      }
    }
  }
  
  pdfMake.createPdf(docDefinition).download(currentFile)
}




























// import jsPDF from "jspdf";

// export const generatePDF = (pointsData) => {
//   const body = document.createElement('div');
//   const title = document.createElement('h2');
//   const ol = document.createElement('ol')
//   body.style.cssText = `
//     font-size: 5px;
//     width: 100vw:

//   `


//   for(let i=0; i< pointsData.length; i++){
//     const li = document.createElement('li');
//     li.innerHTML = pointsData[i];
//     ol.appendChild(li)
//   }  

//   body.appendChild(title)
//   body.appendChild(ol)

//   // const element = document.getElementById('editor');
//   // element.appendChild(body)

//   const doc = new jsPDF();
//   var specialElementHandlers = {
//     '#editor': function (element, renderer) {
//         return true;
//     }
// };


// doc.html(body,{
//   callback:function(doc){
//   doc.save("notes.pdf")
//   },
//   width:700
// })

// //   doc.fromHTML(body.html(),15, 15, {
// //     'width': 700,
// //     'elementHandlers': specialElementHandlers
// // })

// // doc.html(body,{
// //   callback:function(doc){
// //   doc.save("notes.pdf")
// //   },
// //   x:3,
// //   y:3,
// //   size: 1
// // })
  



// }









