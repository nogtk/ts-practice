namespace Generics {
  function repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for(let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }
  
  const repeat2 = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for(let i = 0; i < length; i++) {
      result.push(element)
    }
    return result;
  }
  const repeatName = <T extends {
    name: string;
  }>(element: T, length: number): string[] => {
    const result: string[] = [];
    for(let i = 0; i < length; i++) {
      result.push(element.name)
    }
    return result;
  }

  console.log(repeat(1, 3));
  console.log(repeat("a", 10));
  console.log(repeat2(false, 3));
  console.log(repeatName({ name: 'test' }, 3))
}
