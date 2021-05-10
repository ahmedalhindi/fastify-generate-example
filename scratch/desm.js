import { dirname, join } from 'desm'
 
console.log(dirname(import.meta.url))
console.log(join(import.meta.url, 'routes'))
console.log(join(import.meta.url, '..', 'other'))