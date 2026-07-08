function totalQuantity(arg){
  let total=0;
  for (let i=0; i<arg.length; ++i) {
    total+=arg[i].quantity; 
  }
  return total;
}
export default totalQuantity; 