import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');


export const dateFormat = (value: string | number | Date | null | undefined, format: string) => {
    return dayjs(value).format(format);
}