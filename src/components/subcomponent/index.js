import React from 'react'
import Home from '../../view/home'
import moment from 'moment';


const MainComponent=function(){

    const allData={

        name: "Muhammad Areeb Shakeel",
        description: "Software Engineer/ Front End Developer/ UI/UX Developer. Co-founder of factualCode",
        dp: "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/81213805_2022589077887485_8780544252754001920_o.jpg?_nc_cat=111&_nc_sid=e3f864&_nc_eui2=AeE-PRc3VMfaPXelTJiox1rDuRjRtIbvuIy5GNG0hu-4jKvfSyOJW574JShu38xs5PFnNjhZPyfG4E_Y5hENNon6&_nc_ohc=v3g9SPNEp-wAX8NHifF&_nc_ht=scontent.fkhi2-1.fna&oh=ce769a2f2731c507b2c4d418eabe8423&oe=5F60B025",
        created: moment().startOf('hour').fromNow(),
        images:["https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/70959517_1912331798913214_2708947980823560192_o.jpg?_nc_cat=111&_nc_sid=174925&_nc_eui2=AeEFJe1dXLkpO0wXE5udWV6AcZPUj9NfWQ9xk9SP019ZD3sBFvja5fSxbdJ1LgEssBG1DuHLk44-VcsrW7qMWrfv&_nc_ohc=ythaN8m1c6AAX-NsU6R&_nc_ht=scontent.fkhi2-1.fna&oh=a0a12f7eb07e33b71fe249e9ea815868&oe=5F65C455",
    "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/56556963_1746414672171595_8824098661404246016_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_eui2=AeGF07u6mGfrXWHaq2PXyp1YkpQuNTWxNZ2SlC41NbE1nQfHUepr3kxFqF3ssg1jQrqkqfV7Fd-a6SY2lhxewC7Z&_nc_ohc=fRmjzDAUXKYAX_n5ae5&_nc_ht=scontent.fkhi2-1.fna&oh=af81a0c18b8cbc9fd6bf2150f6cd52d8&oe=5F6319DE",
"https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/50467882_1680271748785888_6482046264681693184_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_eui2=AeHtHZwRebKWbdhJ7cEoNBI11p7KE2O0Y2HWnsoTY7RjYXD-4YekgsISEhlAl13lyhpd2ewsxKeez-5VDwP5vw13&_nc_ohc=75kVqxoZVHMAX-vYu6U&_nc_ht=scontent.fkhi2-1.fna&oh=2d83fa794434c0960205311928164b19&oe=5F626C0A",
"https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/20770022_1245508168928917_1033803550475472429_n.jpg?_nc_cat=105&_nc_sid=174925&_nc_eui2=AeGcPrZQdLlXn9T9YLRQqaLBMTX8yYimIIUxNfzJiKYghfKUU2ccxU4gA0d2HGHIPXGrcQV5xNbxvb3qznaPo6KT&_nc_ohc=hWBg3S_J1fkAX_fLhnx&_nc_ht=scontent.fkhi2-1.fna&oh=69dc3ee5561cca34e17ee54916b31270&oe=5F638743"],
        size:"40px"
    }

    
    return(
        <div style={{height:"120vh"}}>
            <Home allDetails={allData}/>
            </div>
    )
}

export default MainComponent