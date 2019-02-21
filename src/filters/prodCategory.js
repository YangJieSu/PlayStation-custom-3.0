export default function (catagory) {
  let classname = '';
  switch (catagory) {
    case 'Switch':
      classname = 'badge-danger';
      break;
    case 'N3DS':
      classname = 'badge-primary';
      break;
    case 'PS4':
      classname = 'badge-dark';
      break;
    default:
      classname = 'badge';
  }
  return classname;
}
