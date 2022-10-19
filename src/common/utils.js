function dateFormat(value){
    let today = new Date();
    let date = new Date();

    switch(value){
        case "0":
            date.setDate(today.getDate() + 3); // 3일 후 
            break;
        case "1":
            date.setDate(today.getDate() + 3); // 3일 후 
            break;
        case "2":
            date.setDate(today.getDate() + 7); // 일주일 후 
            break;
        case "3":
            date.setDate(today.getDate() + 14); // 이주일 후 
            break;
        case "4":
            date.setMonth(today.getMonth() + 1); // 한 달 후
            break;
        case "5":
            date.setMonth(today.getMonth() + 2); // 두 달 후
            break;
        case "6":
            date.setMonth(today.getMonth() + 3); // 세 달 후 
            break;
        default:
            return value
    }

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // DB로 데이터 전달 시 오류 발생하지 않도록 날짜 포맷 맞추기 
    month = month >=10 ? month : `0${month}`;
    day = day >=10 ? day : `0${day}`;

    return `${year}-${month}-${day}T00:00:00.000Z`;
}

export { dateFormat }