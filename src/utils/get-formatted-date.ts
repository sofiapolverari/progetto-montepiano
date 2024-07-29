import dayjs from "dayjs";
import 'dayjs/locale/it';

export const getFormattedDate = (date:string) => dayjs(date).locale('it').format('DD MMM YYYY')