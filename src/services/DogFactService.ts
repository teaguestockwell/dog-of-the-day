import axios, { AxiosRequestConfig } from 'axios'
const config: AxiosRequestConfig = {
  headers: {'Access-Control-Allow-Origin':'*'},
}

export const DogFactService = {
  get1Random: async (): Promise<string> => {
    try {
      const json = (
        await axios.get(
          'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all',
          config
        )
      ).data

      const facts: string[] = json.map((x: any) => x.fact)

      return facts[Math.floor(Math.random() * facts.length)]
    } catch (e) {
      return 'The dogs and their facts are away barking at squirrels'
    }
  },
}
