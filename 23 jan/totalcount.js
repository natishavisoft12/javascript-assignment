const buttonConfig = {
    totalButtons: 5
  };
const maincontent =   document.createElement("div")
document.body.appendChild(maincontent)
function createElement(type,content){
    const element = document.createElement(type)
    element.textContent = content;
    maincontent.appendChild(element)
    return element
}
const buttonTotals = [];
for (let i = 0; i < buttonConfig.totalButtons; i++) {
  const button = createElement('button', `Button ${i + 1}: 0`);
  button.classList.add('btn');
  buttonTotals.push(0); // Initial total is 0

  button.addEventListener('click', function() {
    buttonTotals[i]++;
    button.textContent = `Button ${i + 1}: ${buttonTotals[i]}`;
  });
}
const tallyButton = createElement('button', 'Show Totals count');
tallyButton.classList.add('btn');
tallyButton.addEventListener('click', function() {
  const ul = document.createElement('ul');
  maincontent.appendChild(ul);

  for (let i = 0; i < buttonConfig.totalButtons; i++) {
    const li = document.createElement('li');
    li.textContent = `Button ${i + 1}: ${buttonTotals[i]}`;
    ul.appendChild(li);
  }
});
///////////////////