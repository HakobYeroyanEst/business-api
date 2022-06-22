import IAddress from './address';

interface IBusiness {
  id: string;
  name: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: IAddress;
}

export default IBusiness;
