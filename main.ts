import { mkdtempSync } from "fs";

//object 
let myname = "Rizwana Awan";
let Roll_No = 286898;
let myage = 26;
let mygender = "female";
let Distance = "no";
let center = "Governer House Karachi";
let campus = "Main Campus";
let Datetime = "10-11-2023";
let Batch = 1;

let mydata = {
    name: myname, Roll_No: Roll_No,
    age: myage,
    gender: mygender, Distance: Distance,
    center: center,
    Campus: campus, Datetime: Datetime,
    Batch: Batch

}
console.log(mydata.Batch);
console.log([mydata.Batch,mydata.Datetime,mydata.center, mydata.Campus, mydata.Distance, mydata.gender, mydata.age, mydata.Roll_No,mydata.name]);



