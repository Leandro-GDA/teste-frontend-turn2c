export type Dog = {
  url: string,
  width: number,
  height: number,
  
  breeds: Array<{
    id: string,name: string,
    life_span: string,
    wikipedia_url: string,
  }>
  
}