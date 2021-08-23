import {getRequest} from './axiosClient';
export async function getOrganizationDetails() {
  try {
    const response = await getRequest(
      'https://sprout-tech-assets.s3.amazonaws.com/village-paths-test-data/data.json',
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}


