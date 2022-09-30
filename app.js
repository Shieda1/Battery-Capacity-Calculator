// https://www.omnicalculator.com/other/battery-capacity

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const batterycapacityRadio = document.getElementById('batterycapacityRadio');
const voltageRadio = document.getElementById('voltageRadio');
const watthoursorjoulesRadio = document.getElementById('watthoursorjoulesRadio');

let batterycapacity;
let voltage = v1;
let watthoursorjoules = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

batterycapacityRadio.addEventListener('click', function() {
  variable1.textContent = 'Voltage';
  variable2.textContent = 'Watt-hours or joules';
  voltage = v1;
  watthoursorjoules = v2;
  result.textContent = '';
});

voltageRadio.addEventListener('click', function() {
  variable1.textContent = 'Battery capacity';
  variable2.textContent = 'Watt-hours or joules';
  batterycapacity = v1;
  watthoursorjoules = v2;
  result.textContent = '';
});

watthoursorjoulesRadio.addEventListener('click', function() {
  variable1.textContent = 'Battery capacity';
  variable2.textContent = 'Voltage';
  batterycapacity = v1;
  voltage = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(batterycapacityRadio.checked)
    result.textContent = `Battery capacity = ${computebatterycapacity().toFixed(2)}`;

  else if(voltageRadio.checked)
    result.textContent = `Voltage = ${computevoltage().toFixed(2)}`;

  else if(watthoursorjoulesRadio.checked)
    result.textContent = `Watt-hours or joules = ${computewatthoursorjoules().toFixed(2)}`;
})

// calculation

function computebatterycapacity() {
  return Number(watthoursorjoules.value) / Number(voltage.value);
}

function computevoltage() {
  return Number(watthoursorjoules.value) / Number(batterycapacity.value);
}

function computewatthoursorjoules() {
  return Number(voltage.value) * Number(batterycapacity.value);
}