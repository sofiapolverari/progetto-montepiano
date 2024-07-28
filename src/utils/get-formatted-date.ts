import dayjs from "dayjs";

export const getFormattedDate = (date:string) => dayjs(date).locale('it-it').format('DD MMM YYYY')