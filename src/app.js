export class App {

  constructor(){
    //Get length of trailer.
    this.trailerLength = 0;

    //Get prices of all the stuff.
    this.PriceOf2x4x8 = 3.78;
    this.PriceOf2x6x8 = 6.00;
    this.PriceOf10x3SheetMetalRoofing = 55.43; 
    this.WeightLbsOf10x3SheetMetalRoofing = 20.98;
    this.PriceOfSheathing = 23.65;

  //calculate prices needed. 
    this.pricePerFoot2x4 = this.PriceOf2x4x8 / 8.00;
    this.pricePerFoot2x6 = this.PriceOf2x6x8 / 8.00;

  }

  calculate2x4StudsNeeded(trailerLength){
    //ends
    let endStuds = 16 / 2 + 2;
    //sides
    let sideStuds = trailerLength / 2 + 2;
    //total
    let totalStuds = endStuds + sideStuds;
    return totalStuds;
  }

  calculate2x6JoistsNeeded(trailerLength){
    //ends
    let ceilingJoists = trailerLength * 12 / 16 + 1;
    //sides
    let floorJoists = trailerLength * 12 / 16 + 1;
    //total
    let totalStuds = endStuds + sideStuds;
    return totalStuds;
  }

  calculate2x4BoardFeetNeeded(totalStuds, trailerLength){
    let headersAndSillsFeet = 8 * 4 + trailerLength * 4;
    return totalStuds * 8 + headersAndSillsFeet;
  }

  






}
