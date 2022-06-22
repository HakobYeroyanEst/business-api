import axios from 'axios';

// types
import IBusiness from '../types/business';

class BusinessService {
  private url = 'https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f';

  async getBusinesses(): Promise<IBusiness[]> {
    const response = await axios.get<IBusiness[]>(this.url);

    return response.data;
  }
}

export default new BusinessService();
