function ValidateIPaddress(ipaddress)
{
 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
  {
    return (true)
  }else{
    return (false)
  }
}

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

$('form').submit(function(e){
  e.preventDefault();
  $('.all-networks table tbody').empty();
  var rawdata = $(this).serializeArray();
  var data = {};
  for(var i=0;i<rawdata.length;i++){
    data[rawdata[i].name] = rawdata[i].value;
  }
  if(!ValidateIPaddress(data.ip)){
    alert("Please provide a valid IP address.")
    return;
  }
  $('.result-wrapper').removeClass('hide');
  var $resultWrapper = $('.result-wrapper');
  $resultWrapper.find('tbody tr:eq(0) td:eq(1)').text(data.ip);
  $resultWrapper.find('tbody tr:eq(1) td:eq(1)').text(getNetworkAddr(data.ip,data.subnet));
  $resultWrapper.find('tbody tr:eq(7) td:eq(1)').text(getWildcardDecSet(getWildcardBin(data.subnet)));
  $resultWrapper.find('tbody tr:eq(13) td:eq(1)').text(getIpBin(data.ip));
  $resultWrapper.find('tbody tr:eq(14) td:eq(1)').text(parseInt(getIpBin(data.ip),2));
  $resultWrapper.find('tbody tr:eq(6) td:eq(1)').text(getWildcardDecSet(getSubnetBin(data.subnet)));
  $resultWrapper.find('tbody tr:eq(15) td:eq(1)').text(parseInt(getIpBin(data.ip),2).toString(16));
  $resultWrapper.find('tbody tr:eq(4) td:eq(1)').text(parseInt(getWildcardBin(data.subnet),2)+1);
  $resultWrapper.find('tbody tr:eq(5) td:eq(1)').text((parseInt(getWildcardBin(data.subnet),2)+1) <= 2 ? '0' : (parseInt(getWildcardBin(data.subnet),2)+1)-2);
  $resultWrapper.find('tbody tr:eq(3) td:eq(1)').text(getBroadcastAddr(getNetworkAddr(data.ip,data.subnet),getWildcardBin(data.subnet)));
  $resultWrapper.find('tbody tr:eq(10) td:eq(1)').text('/' + data.subnet);
  $resultWrapper.find('tbody tr:eq(8) td:eq(1)').text(getSubnetBin(data.subnet));
  $resultWrapper.find('tbody tr:eq(12) td:eq(1)').text(data.ip + '/' + data.subnet);
  $resultWrapper.find('tbody tr:eq(2) td:eq(1)').text(usableHost(getBroadcastAddr(getNetworkAddr(data.ip,data.subnet),getWildcardBin(data.subnet)),getNetworkAddr(data.ip,data.subnet),(parseInt(getWildcardBin(data.subnet),2)+1) <= 2 ? '0' : (parseInt(getWildcardBin(data.subnet),2)+1)-2));
  $resultWrapper.find('tbody tr:eq(11) td:eq(1)').text(ipType(data.ip));
  $resultWrapper.find('tbody tr:eq(9) td:eq(1)').text(getClass(data.ip));

  var allNetworkGroup = getAllNetworkGroup(data.ip,data.subnet);
  if(allNetworkGroup === null){
    return;
  }
  $('.all-networks').removeClass('hide');

  $('#table-title').text('All Possible /' + data.subnet + ' Networks for ' + allNetworkGroup.ipStar)
  var result = allNetworkGroup.result;
  for(var i=0;i<result.length;i++){
    $('.all-networks table tbody').append(`
      <tr>
        <td>` + result[i].network + `</td>
        <td>` + result[i].range + `</td>
        <td>` + result[i].broadcast + `</td>
      </tr>
      `)
  }

  // console.log(data)
  // console.log(getNetworkAddr(data.ip,data.subnet));
});

function getNetworkAddr(ip,subnetCIDR){
  var ipBin = getIpBin(ip);
  var ipDec = parseInt(ipBin,2);
  subnetCIDR = parseInt(subnetCIDR);
  var subnetBin = getSubnetBin(subnetCIDR);
  var result = [];
  for(var i=0;i<4;i++){
    var ipTmp = parseInt(ipBin.slice(i*8,(i+1)*8),2);
    var subnetTmp = parseInt(subnetBin.slice(i*8,(i+1)*8),2);
    result.push(ipTmp & subnetTmp);
  }
  return result.join('.');
}

function getSubnetBin(subnetCIDR){
  var res = '';
  for(var i=0;i<32;i++){
    if(i<subnetCIDR){
      res += '1';
    }else{
      res += '0';
    }
  }
  return res;
}

function getIpBin(ip){
  ip = ip.split('.')
  var ipBin = '';
  for(var i=0;i<ip.length;i++){
    var tmp = Number(ip[i]).toString(2);
    while(tmp.length < 8){
      tmp = '0' + tmp;
    }
    ipBin += tmp;
  }
  return ipBin;
}

function getWildcardBin(subnetCIDR) {
  var result = '';
  for(var i=0;i<32;i++){
    if(i<subnetCIDR){
      result += '0';
    }else{
      result += '1';
    }
  }
  return result;
}

function getWildcardDecSet(wildcardBin){
  var result = [];
  for(var i=0;i<4;i++){
    var tmp  = parseInt(wildcardBin.slice(i*8,(i+1)*8),2);
    result.push(tmp);
  }
  return result.join('.');
}

function getBroadcastAddr(network,wildcardBin){
  var result = [];
  network = network.split('.');
  // console.log(network);
  // console.log(wildcardBin);
  for(var i=0;i<4;i++){
    var tmp = parseInt(wildcardBin.slice(i*8,(i+1)*8),2);
    result.push(parseInt(network[i])|tmp);
  }
  return result.join('.');
}

function usableHost(broadcast,network,usable){
  if(usable>0){
    broadcast = broadcast.split('.');
    broadcast[3] = parseInt(broadcast[3])-1;
    network = network.split('.');
    network[3] = parseInt(network[3])+1;
  }
  return network.join('.')+'-'+broadcast.join('.');
}

function ipType(ip){
  ip = ip.split('.');
  for(var i=0;i<4;i++){
    ip[i] = parseInt(ip[i]);
  }
  if(ip[0] === 10 || (ip[0] === 172 && ip[1] >=16 && ip[1] <= 31) || (ip[0] == 192 && ip[1] === 168)){
    return 'private';
  }else{
    return 'public';
  }
}

function getClass(addr) {
    addr = addr.split('.');
    var Class;
    for (i in addr) {
        addr[i] = parseInt(addr[i]);
    }
    if (parseInt(addr[0]) < 128) {
        Class = 'A'
    }
    else if (parseInt(addr[0]) < 192) {
        Class = 'B'
    }
    else if (parseInt(addr[0]) < 224) {
        Class = 'C'
    }
    else {
        Class = 'C'
    }
    return Class;
}

function getAllNetworkGroup(ip,subnetCIDR){
  var ipStar = ip;
  ipStar = ipStar.split('.');
  var subnetBin = getSubnetBin(subnetCIDR);
  var notFullIndex = -1;
  for(var i=0;i<4;i++){
    var tmp = parseInt(subnetBin.slice(i*8,(i+1)*8),2);
    if(tmp !== 255 && tmp !== 0){
      notFullIndex = i;
      break;
    }
  }
  if(notFullIndex === -1){
    return null;
  }
  var result = [];
  ip = ip.split('.');
  for(var i=0;i<4;i++){
    ip[i] = parseInt(ip[i]);
    if(i >= notFullIndex){
      ip[i] = 0;
      ipStar[i] = '*';
    }
  }
  var wildcardBin = getWildcardBin(subnetCIDR);
  var increment = parseInt(wildcardBin.slice(notFullIndex*8,(notFullIndex+1)*8),2)+1;
  for(var i=0;i<(Math.pow(2,(subnetBin.slice(notFullIndex*8,(notFullIndex+1)*8).match(/1/g) || []).length));i++){
    var thisIp = ip.join('.');
    var broadcast = getBroadcastAddr(thisIp,wildcardBin);
    result.push({network: thisIp, range: usableHost(broadcast,thisIp,((parseInt(getWildcardBin(subnetCIDR),2)+1) <= 2 ? '0' : (parseInt(getWildcardBin(subnetCIDR),2)+1)-2)), broadcast: broadcast})

    ip[notFullIndex] += increment;
  }
  return {result: result, ipStar: ipStar.join('.')};
  // console.log(ip);
  // console.log(result);
}
