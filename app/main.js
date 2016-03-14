import Loader from './loader';

let test = new Loader({
  src:'assets/intro/',
  no: 73,
  loaded: 0
},
{
  src:'assets/one/',
  no: 134,
  loaded: 0
},
{
  src:'assets/two/',
  no: 88,
  loaded: 0
},
{
  src:'assets/three/',
  no: 81,
  loaded: 0
});

test.load(1);
