export default function (catagory) {
  let classname = '';
  switch (catagory) {
    case 'Switch':
      return classname = 'badge-danger';
      break;
    case 'N3DS': 
      return classname = 'badge-primary';
      break;
    case 'PS4': 
      return classname = 'badge-dark';
      break;
  }
}