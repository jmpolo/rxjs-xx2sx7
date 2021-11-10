import './style.css';

import { of, map, Observable } from 'rxjs';

const device = (d) => of(d);

device(1).subscribe((a) => console.log(a));
