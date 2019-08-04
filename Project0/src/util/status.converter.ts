import { Status } from '../models/status';


export function statusConverter(row) {
    return new Status(row.reimbstatus);
}