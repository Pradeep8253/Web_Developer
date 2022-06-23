//  Inserting data in the mongodb 
//  use vmart 
db.items.insertOne({name : "samsung 21s " , price : 22000 , rating : 4.5 , qty: 233 ,  sold : 98})

db.items.insertMany([{name : "samsung 21s " , price : 22000 , rating : 4.5 , qty: 233 ,  sold : 98} , {name : 
"nokia " , price : 30000 , rating : 4.0 , qty: 500 , sold : 93 } , { name : " vivo 11s " , price : 55000 , rating : 3.5 
, qty : 455 , sold : 255  } , { name : " oppo 14" , price : 80000 , rating : 3.5 , qty : 670 , sold : 355 }])