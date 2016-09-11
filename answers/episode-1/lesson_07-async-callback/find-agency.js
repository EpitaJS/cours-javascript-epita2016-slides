
import _ from 'lodash';
import tryUntil from './try-until';


function findAgencyByField(field, DB, image, cb) {
  DB.findAgency({name: image[field]}, cb);
}

let findAgency1 = findAgencyByField.bind(undefined, 'agencyName');
let findAgency2 = findAgencyByField.bind(undefined, 'credit');

export default function findAgency (DB, image, cb) {
  tryUntil([
    findAgency1.bind(undefined, DB, image),
    findAgency2.bind(undefined, DB, image),
    DB.findAgency.bind(DB, {name: 'Unknown'})
  ], cb);
}
