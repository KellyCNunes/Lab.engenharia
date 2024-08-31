function getDayName(dayIndex) {
    const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return days[dayIndex];
}
function getMonthName(monthIndex) {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return months[monthIndex];
}

function formatDate(date) {
    const dayName = getDayName(date.getDay());
    const day = date.getDate();
    const monthName = getMonthName(date.getMonth());
    const year = date.getFullYear();

    return `${dayName}, ${day} de ${monthName} de ${year}`;
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

console.log(formattedDate);