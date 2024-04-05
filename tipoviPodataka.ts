//Primitivni tipovi

let godine:number=25;
let ime:string="Lori";
let studira:boolean=false;

//Nizovi

let predmeti:string[]=["Epos", "Klijentske", "Cloud"];
let ocene:number[]=[10, 8, 9];

//Tuples-uredjena ntorka npr. geografske koordinate

let tuple:[string, number]=["Lori", 4];

//Enum

enum Modul{
    TehnologijeEPOS, 
    SI, 
    IS
}
let modul:Modul=Modul.SI;

//Objekat

let srudent:{ime:string, godine:number, studira:boolean}={
    ime:"Tina",
    godine:20,
    studira:true
};

//Unija tipova

let brojIliString:number|string=19;

//Any tip-bilo koja vrednost

let biloSta:any="Moze bilo koji tip";

//void

function cao():void{
    console.log("caos");
}