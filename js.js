const sectionEnd=document.querySelector(".section_end")

const API="./data/data.json";

fetch(API)
    .then((data)=>{
        const data1=data.json()
        return data1
    })
    .then((data2)=>{
        data2.forEach((item)=> {
            sectionEnd.innerHTML += `
            <div class="cards">
            <div class="cards_img">
                    <img src="${item.img}" alt="">
                    <button><p>Add To Cart</p></button>
                </div>
                <div class="cards_text">
                    <h1>${item.name}</h1>
                    <div class="summa">
                        <p>$${item.chegirma}</p>
                        <p>$${item.summa}</p>
                    </div>
                    <div class="reyting">
                        <img src="./svg/yulduz.svg" alt="">
                        <img src="./svg/yulduz.svg" alt="">
                        <img src="./svg/yulduz.svg" alt="">
                        <img src="./svg/yulduz.svg" alt="">
                        <img src="./svg/yulduz.svg" alt="">
                        <p>(100)</p>
                    </div>
                </div>
                </div>
            `
            
        });
    })
