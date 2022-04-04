// import React from 'react';
// class DocCard extends React.Component {
//     constructor(src, docName, qualification) {
//         super(props)
//         this.src = src;
//         this.docName = docName;
//         this.qualification = qualification;
//         parent = document.querySelector(".hosp__docs");
//     }

//     render() {
//         const card = document.createElement('div');
//         this.parent.append(card);
//         return(
//             card.innerHTML = `
//                 <div class="hosp__doc">
//                     <img  src = ${this.src}  class = "hosp__docs_img" alt="photo" />
//                     <div class = "hosp__doc-container">
//                         <h3 class = "hosp__docs_name">${this.docName}</h3>
//                         ${this.qualification}
//                     </div>
//                 </div>
//             `
//         );
        
//     }
// };

// const docs = [
//     [
//         './pics/doctors/heart.jpg',
//         'Новикова И.В.',
//         'Кардиолог-анестизиолог',
//     ],
//     [
//         './pics/doctors/ekzo.jpg',
//         'Исаичев М.А.',
//         'Экзотолог',
//     ],
//     [
//         './pics/doctors/uzi.jpg',
//         'Кривова Ю.В.',
//         'Визуальная диагностика (УЗИ)',
//     ],
//     [
//         './pics/doctors/nurse.jpg',
//         'Гречиха А.Ю.',
//         'Офтальмолог/Невролог',
//     ],
//     [
//         './pics/doctors/Stomac.jpg',
//         'Саричев В.Ю.',
//         'Стоматолог',
//     ],
//     [
//         './pics/doctors/onko.jpg',
//         'Ульянова М.В.',
//         'Онколог',
//     ],
//     [
//         './pics/doctors/surgeon2.jpg',
//         'Бисекенова Ж.К.',
//         'Хирург/Терапевт',
//     ],
//     [
//         './pics/doctors/anest.jpg',
//         'Мазманян Д.А.',
//         'Анестезиолог/Реаниматолог',
//     ],
    
// ]

// docs.forEach((item) => {
//     new DocCard(...item).render();
// })


// const Specialists = () => {

//     return(
//         <div hidden>
//             <h2 class="hosp__docs_header">Врачи нашей клиники</h2> 
//             <div class="hosp__docs_wrapper">
//                 <div class="hosp__docs">
//                 </div>
    
//                 <div class="hosp__manag">
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Specialists;
