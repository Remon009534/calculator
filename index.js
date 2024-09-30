const screen = document.querySelector('.screen');

function appendToDisplay(input)
{
    screen.value += input;
}
function clearDisplay()
{
    screen.value = '';
}
function calculate()
{
    try
    {
        screen.value = eval(screen.value);
    }
    catch(error)
    {
        screen.value = "Error";
    }
}
const btn = document.querySelector('i');

btn.addEventListener('click', function() {

    document.body.classList.toggle('dark-theme')
})
