export const DogFactService = {
  get1Random: async ():Promise<string> => {
    try{
      const res = await fetch(
        'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all',
      ).then(res => res.json())

      const facts:string[] = res.map((x:any) => x.fact)
      
      return facts[Math.floor(Math.random() * facts.length)];
    } catch(e){return 'The dogs and their facts are facts are away barking at squirrels'}
  }
}