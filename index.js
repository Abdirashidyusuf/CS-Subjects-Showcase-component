const data =[
    {
        "img-src": "img/java.jpg",
         title: 'JAVA',
         content: `Java is a high-level, object-oriented programming language known for its platform independence,
                   robustness, and security. It features automatic memory management,multithreading, and a rich API, making  
                   it suitable for various applications, from web and mobile apps to enterprise systems.`

        },

    {   "img-src": "img/cshap.png",
         title: 'C#',
         content: `C# is a modern, object-oriented programming language developed by Microsoft. It runs on the.
                   NET framework and is known for its simplicity, efficiency, and versatility. C# is used for developing
                   a wide range of applications, including web, mobile, and desktop apps, as well as games.`

        }, 
        
    {   "img-src": "img/oracle.jpg",
        title: 'ORACLE',
        content: `Oracle is a multinational technology company known for its advanced database management systems.
                 Oracle Database, its flagship product, is renowned for its high performance, scalability, and reliability,
                 widely used in enterprise environments for managing and analyzing large volumes of data.`
   
           }, 
    {   "img-src": "img/accounting.png",
        title: 'ACCOUNTING',
        content: `Accounting is the systematic process of recording, summarizing, and reporting financial transactions of a business.
                 It involves maintaining financial records, preparing financial statements, and ensuring compliance with regulations,providing 
                 insights into a company's financial health for decision-making and strategic planning.`
   
           }, 
           
    {   "img-src": "img/managmt.png",
        title: 'MANAGEMENT',
        content: `Management is the process of planning, organizing, leading, and controlling resources, including people, 
                 finances, and information,to achieve organizational goals efficiently and effectively. It involves decision-making,
                 strategy development, and coordination of activities to ensure the success and growth of an organization.`
   
           }, 
           
    {   "img-src": "img/DLD.jpg",
        title: 'DIGITAL LOGIC DESIGN',
        content: `Digital logic design is the foundation of digital circuits, involving the use of binary systems to create logic gates, 
                  combinational and sequential circuits. It is essential in designing computer hardware, microprocessors, and digital systems, 
                 enabling the implementation of complex computational tasks through logical operations and binary decision-making.`
   
           }       

]



/*
            <div class="subject">
                <img src="#" alt="Java" class="img-subject">
                <div class="content">
                    <div class="sub-title-icon">
                        <h3 class="subject-title"></h3>
                        <div class="icons">
                            <ion-icon name="caret-down-outline" class="close-icon"></ion-icon>
                            <ion-icon name="caret-up-outline"   class="open-icon"></ion-icon>
                        </div>
                    </div>
                    <p class="description">
                       
                    </p>
                </div>
            </div>  
*/

const createSubject=(subject)=>{
    const subjectDiv=document.createElement("div");
    subjectDiv.classList.add("subject");

    const img=document.createElement("img");
    img.src=subject["img-src"];
    img.alt=subject.title;
    img.classList.add("img-subject");
    subjectDiv.appendChild(img);

    const contentDiv=document.createElement("div");
    contentDiv.classList.add("content");
    subjectDiv.appendChild(contentDiv);

    const subTitleIconDiv= document.createElement("div");
    subTitleIconDiv.classList.add("sub-title-icon");
    contentDiv.appendChild(subTitleIconDiv);

    const subjectTitle=document.createElement("h3");
    subjectTitle.textContent=subject.title;
    subjectTitle.classList.add("subject-title")
    subTitleIconDiv.appendChild(subjectTitle);

    const iconsDiv=document.createElement("div");
    iconsDiv.classList.add("icons");
    subTitleIconDiv.appendChild(iconsDiv);

    const caretDownIcon = document.createElement('ion-icon');
    caretDownIcon.name = 'caret-down-outline';
    caretDownIcon.classList.add('close-icon');
    iconsDiv.appendChild(caretDownIcon);

    const caretUpIcon = document.createElement('ion-icon');
    caretUpIcon.name = 'caret-up-outline';
    caretUpIcon.classList.add('open-icon');
    caretUpIcon.style.display = 'none'; 
    iconsDiv.appendChild(caretUpIcon);

    const description=document.createElement("p");
    description.textContent=subject.content;
    description.classList.add("description");
    contentDiv.appendChild(description);

    caretDownIcon.addEventListener('click', () => {
        description.style.display = 'block';
        img.style.display = 'block';
        caretDownIcon.style.display = 'none';
        caretUpIcon.style.display = 'block';
    });

    caretUpIcon.addEventListener('click', () => {
        description.style.display = 'none';
        img.style.display = 'none';
        caretDownIcon.style.display = 'block';
        caretUpIcon.style.display = 'none';
    });


    return subjectDiv;

}

const subjectsContainer=document.querySelector(".subjects");

data.map(subject =>{
    const subjectElement=createSubject(subject);
    subjectsContainer.appendChild(subjectElement);
})


