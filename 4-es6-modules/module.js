class Country {
  constructor(name, area){
    this.name = name;
    this.area = area;
  }

  showName(){
    console.log(this.name);
  }
  showArea(){
    console.log(this.area);
  }

}

export default Country;