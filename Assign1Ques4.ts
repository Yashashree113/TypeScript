const names=[{Name:'Tom'}, {Name:'Ivan'},{Name:'Jerry'}];
var Name: string, length: number;
const obj={Name, length};
const output = names.map(value => {
    
    obj[value.Name]=value.Name;
    length= value.Name.length;
    return obj;
  });
console.log(output);