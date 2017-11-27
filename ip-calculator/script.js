function convertSubnetCIDR(subnetCIDR){
  var bin = "";
  for(var i = 0 ; i < 32 ; i++){
    if(i < subnetCIDR){
      bin += 1;
    }else{
      bin += 0;
    }
  }

  var result = [];
  for(var j=0;j<4;j++){
    var set = bin.slice(8*j,(j+1)*8);
    var dex = parseInt(set,2);
    result.push(dex);
  }
  return result.join('.');
}

for(var i = 1 ; i <= 32 ; i++){
  $('select#InputSubnet').append('<option value="' + i + '">' + convertSubnetCIDR(i) + '/' + i + '</option>');
}
